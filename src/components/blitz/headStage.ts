import * as THREE from "three";

export type HeadStage = {
  frame: (now: number, step: number, local: number, cw: number, ch: number) => void;
  dispose: () => void;
};

/*
 * Port of the design's kvHeadStage (built against three r150). Two things keep the look identical on
 * current three: colour management off (r150 treated hex colours as linear), and the key light scaled
 * by PI (r150 used legacy light units).
 */
export function createHeadStage(canvas: HTMLCanvasElement, reduce: boolean): HeadStage {
  const T = THREE;
  T.ColorManagement.enabled = false;

  const renderer = new T.WebGLRenderer({ canvas, alpha: true, antialias: true, preserveDrawingBuffer: true });
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = T.SRGBColorSpace;
  renderer.toneMapping = T.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  const scene = new T.Scene();
  const cam = new T.PerspectiveCamera(28, 1, 0.1, 60);

  /* studio light, baked into an environment map */
  const env = new T.Scene();
  env.add(new T.Mesh(new T.BoxGeometry(14, 9, 14), new T.MeshBasicMaterial({ color: 0x242322, side: T.BackSide })));
  function lamp(w: number, h: number, x: number, y: number, z: number, v: number) {
    const m = new T.Mesh(new T.PlaneGeometry(w, h), new T.MeshBasicMaterial({ color: new T.Color(v, v, v * 0.96), side: T.DoubleSide }));
    m.position.set(x, y, z);
    m.lookAt(0, 0, 0);
    env.add(m);
  }
  lamp(5, 2.4, -3, 4.2, 3, 10);
  lamp(2.4, 5, 6.4, 1, 1.5, 6);
  lamp(6, 2.5, 0, -3.6, 5, 1.2);
  lamp(4, 4, -6.6, 0.5, -1.5, 3);
  lamp(5, 2.5, 2, 4.2, -5, 4);
  const pm = new T.PMREMGenerator(renderer);
  const envRT = pm.fromScene(env, 0.04);
  scene.environment = envRT.texture;
  pm.dispose();
  env.traverse((o) => {
    if (o instanceof T.Mesh) {
      o.geometry.dispose();
      (o.material as THREE.Material).dispose();
    }
  });

  /* a sphere pushed out to a rounded square: the helmet, bezel and glass */
  function pillow(a: number, b: number, c: number, n: number) {
    const W = 72;
    const H = 48;
    const g = new T.SphereGeometry(1, W, H);
    g.rotateY(-Math.PI / 2);
    const p = g.attributes.position;
    const uv = g.attributes.uv;
    for (let i = 0; i < p.count; i++) {
      let x = p.getX(i);
      let y = p.getY(i);
      const z = p.getZ(i);
      const r = Math.sqrt(x * x + y * y);
      if (r > 1e-5) {
        const s = Math.pow(Math.pow(Math.abs(x), n) + Math.pow(Math.abs(y), n), 1 / n);
        const k = r / s;
        x *= k;
        y *= k;
      }
      p.setXYZ(i, x * a, y * b, z * c);
      uv.setXY(i, x / 2 + 0.5, y / 2 + 0.5);
    }
    g.computeVertexNormals();
    const nm = g.attributes.normal;
    for (let row = 0; row <= H; row++) {
      const i0 = row * (W + 1);
      const i1 = i0 + W;
      const nx = nm.getX(i0) + nm.getX(i1);
      const ny = nm.getY(i0) + nm.getY(i1);
      const nz = nm.getZ(i0) + nm.getZ(i1);
      const l = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1;
      nm.setXYZ(i0, nx / l, ny / l, nz / l);
      nm.setXYZ(i1, nx / l, ny / l, nz / l);
    }
    for (let i = 0; i <= W; i++) {
      nm.setXYZ(i, 0, 1, 0);
      nm.setXYZ(H * (W + 1) + i, 0, -1, 0);
    }
    return g;
  }

  /* the LED face: shapes drawn on a 44 x 44 grid, then lit dot by dot */
  const ledCv = document.createElement("canvas");
  ledCv.width = 512;
  ledCv.height = 512;
  const lg = ledCv.getContext("2d")!;
  const gridCv = document.createElement("canvas");
  gridCv.width = 44;
  gridCv.height = 44;
  const q = gridCv.getContext("2d", { willReadFrequently: true })!;
  const ledTex = new T.CanvasTexture(ledCv);
  ledTex.colorSpace = T.SRGBColorSpace;
  ledTex.anisotropy = 4;
  let ledKey = "";
  const FONT: Record<string, string[]> = {
    H: ["10001", "10001", "10001", "11111", "10001", "10001", "10001"],
    E: ["11111", "10000", "10000", "11110", "10000", "10000", "11111"],
    L: ["10000", "10000", "10000", "10000", "10000", "10000", "11111"],
    O: ["01110", "10001", "10001", "10001", "10001", "10001", "01110"],
    K: ["10001", "10010", "10100", "11000", "10100", "10010", "10001"],
    V: ["10001", "10001", "10001", "10001", "10001", "01010", "00100"],
    I: ["11111", "00100", "00100", "00100", "00100", "00100", "11111"],
    S: ["01111", "10000", "10000", "01110", "00001", "00001", "11110"],
  };
  const WIFI = ["0111110", "1000001", "0011100", "0100010", "0001000"];
  function rr(x: number, y: number, w: number, h: number, r: number) {
    q.beginPath();
    q.moveTo(x + r, y);
    q.arcTo(x + w, y, x + w, y + h, r);
    q.arcTo(x + w, y + h, x, y + h, r);
    q.arcTo(x, y + h, x, y, r);
    q.arcTo(x, y, x + w, y, r);
    q.closePath();
    q.fill();
  }
  function smile() {
    q.beginPath();
    q.arc(22, 24.5, 5, Math.PI * 0.12, Math.PI * 0.88);
    q.lineWidth = 2.4;
    q.lineCap = "round";
    q.stroke();
  }
  function disc(x: number, y: number, r: number) {
    q.beginPath();
    q.arc(x, y, r, 0, 7);
    q.fill();
  }
  function heart(cx: number, cy: number) {
    disc(cx - 1.9, cy - 1.5, 2.3);
    disc(cx + 1.9, cy - 1.5, 2.3);
    q.beginPath();
    q.moveTo(cx - 4.1, cy - 0.6);
    q.lineTo(cx + 4.1, cy - 0.6);
    q.lineTo(cx, cy + 4.6);
    q.closePath();
    q.fill();
  }
  function text(str: string, x0: number, y0: number) {
    for (let n = 0; n < str.length; n++) {
      const row = FONT[str.charAt(n)];
      for (let y = 0; y < 7; y++) {
        for (let x = 0; x < 5; x++) {
          if (row[y].charAt(x) === "1") q.fillRect(x0 + n * 6 + x, y0 + y, 1, 1);
        }
      }
    }
  }
  function drawFace(kind: number, dx: number) {
    const key = kind + ":" + dx;
    const P = 512 / 44;
    let col = "#FF6A3A";
    if (key === ledKey) return;
    ledKey = key;
    q.clearRect(0, 0, 44, 44);
    q.fillStyle = "#fff";
    q.strokeStyle = "#fff";
    if (kind === 4) {
      col = "#FFC24D";
      text("HELLO", 8, 15);
    } else if (kind === 6) {
      /* Kovio OS home screen: signal, WiFi, name, and a bar that fills as you scroll (dx = cells filled, 0 to 27) */
      col = "#FFC24D";
      for (let n = 0; n < 4; n++) q.fillRect(9 + n * 2, 9 - n, 1, n + 2);
      for (let y = 0; y < 5; y++) {
        for (let x = 0; x < 7; x++) {
          if (WIFI[y].charAt(x) === "1") q.fillRect(29 + x, 6 + y, 1, 1);
        }
      }
      text("KOVIO", 8, 13);
      text("OS", 17, 22);
      for (let x = 0; x < 27; x++) {
        if (x < dx || x % 2 === 0) q.fillRect(9 + x, 31, 1, x < dx ? 2 : 1);
      }
    } else if (kind === 2) {
      disc(15.5, 16, 3.7);
      disc(28.5, 16, 3.7);
      disc(22, 27, 2.8);
    } else if (kind === 3) {
      heart(15.5, 16);
      heart(28.5, 16);
      smile();
    } else {
      rr(12 + dx, 10, 6, 12, 2.6);
      if (kind === 1) rr(25.5, 15, 7, 2.4, 1.2);
      else rr(26 + dx, 10, 6, 12, 2.6);
      smile();
    }
    const d = q.getImageData(0, 0, 44, 44).data;
    lg.shadowBlur = 0;
    lg.fillStyle = "#000";
    lg.fillRect(0, 0, 512, 512);
    lg.fillStyle = col;
    lg.shadowColor = col;
    lg.shadowBlur = 9;
    for (let y = 0; y < 44; y++) {
      for (let x = 0; x < 44; x++) {
        if (d[(y * 44 + x) * 4 + 3] > 110) {
          lg.beginPath();
          lg.arc((x + 0.5) * P, (y + 0.5) * P, P * 0.36, 0, 7);
          lg.fill();
        }
      }
    }
    ledTex.needsUpdate = true;
  }
  drawFace(0, 0);

  const shellM = new T.MeshPhysicalMaterial({ color: 0x060607, roughness: 0.3, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.1 });
  const goldM = new T.MeshStandardMaterial({ color: 0xe2a93a, metalness: 1, roughness: 0.36 });
  const glassM = new T.MeshPhysicalMaterial({
    color: 0x020203,
    roughness: 0.08,
    metalness: 0,
    clearcoat: 1,
    clearcoatRoughness: 0.04,
    emissive: 0xffffff,
    emissiveMap: ledTex,
    emissiveIntensity: 1.6,
  });
  const key = new T.DirectionalLight(0xffffff, 1.1 * Math.PI);
  key.position.set(-3, 5, 4);
  scene.add(key);

  const head = new T.Group();
  scene.add(head);
  head.add(new T.Mesh(pillow(1, 0.94, 0.97, 2.3), shellM));
  const socket = new T.Mesh(pillow(0.86, 0.8, 0.5, 3.4), shellM);
  socket.position.z = 0.5;
  head.add(socket);
  const plate = new T.Group();
  head.add(plate);
  const bezel = new T.Mesh(pillow(0.845, 0.785, 0.3, 3.4), goldM);
  bezel.position.z = 0.66;
  plate.add(bezel);
  const glass = new T.Mesh(pillow(0.79, 0.73, 0.42, 3.4), glassM);
  glass.position.z = 0.66;
  plate.add(glass);

  /* each pointed ear grows out of its speaker cup: the base sits inside the gold ring and it pivots on the ring's centre */
  const fin = new T.Shape();
  fin.moveTo(-0.27, 0.12);
  fin.quadraticCurveTo(-0.13, 0.56, 0.02, 1.1);
  fin.quadraticCurveTo(0.15, 0.56, 0.27, 0.12);
  fin.closePath();
  const finG = new T.ExtrudeGeometry(fin, { depth: 0.05, bevelEnabled: true, bevelThickness: 0.018, bevelSize: 0.018, bevelSegments: 3, curveSegments: 16 });
  finG.translate(0, 0, -0.025);
  finG.rotateY(Math.PI / 2);
  const ears: THREE.Mesh[] = [];
  const waves: THREE.Mesh<THREE.TorusGeometry, THREE.MeshBasicMaterial>[] = [];
  function side(sx: number) {
    const grp = new T.Group();
    head.add(grp);
    const cup = new T.Mesh(new T.CylinderGeometry(0.4, 0.44, 0.16, 64), goldM);
    cup.rotation.z = Math.PI / 2;
    cup.position.set(sx * 0.9, -0.02, 0);
    grp.add(cup);
    const ring = new T.Mesh(new T.TorusGeometry(0.3, 0.1, 24, 72), goldM);
    ring.scale.z = 0.5;
    ring.rotation.y = Math.PI / 2;
    ring.position.set(sx * 0.98, -0.02, 0);
    grp.add(ring);
    const hub = new T.Mesh(new T.CylinderGeometry(0.215, 0.215, 0.06, 48), shellM);
    hub.rotation.z = Math.PI / 2;
    hub.position.set(sx * 0.99, -0.02, 0);
    grp.add(hub);
    const ear = new T.Mesh(finG, goldM);
    ear.position.set(sx * 0.92, -0.02, 0);
    ear.rotation.set(-0.6, 0, -sx * 0.16);
    grp.add(ear);
    ears.push(ear);
    for (let i = 0; i < 3; i++) {
      const w = new T.Mesh(
        new T.TorusGeometry(0.34, 0.014, 8, 72),
        new T.MeshBasicMaterial({ color: 0xb8862a, transparent: true, opacity: 0, depthWrite: false }),
      );
      w.rotation.y = Math.PI / 2;
      w.userData = { sx, ph: i / 3 };
      head.add(w);
      waves.push(w);
    }
  }
  side(1);
  side(-1);

  /* soft shadow under the floating head */
  const shCv = document.createElement("canvas");
  shCv.width = 128;
  shCv.height = 128;
  const shG = shCv.getContext("2d")!;
  const grad = shG.createRadialGradient(64, 64, 4, 64, 64, 64);
  grad.addColorStop(0, "rgba(17,17,16,0.42)");
  grad.addColorStop(1, "rgba(17,17,16,0)");
  shG.fillStyle = grad;
  shG.fillRect(0, 0, 128, 128);
  const shadowTex = new T.CanvasTexture(shCv);
  const shadow = new T.Mesh(new T.PlaneGeometry(2.3, 2.3), new T.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false, toneMapped: false }));
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = -1.15;
  scene.add(shadow);

  const cur = { ry: -0.5, rx: 0.05, cz: 5.5, w1: 0 };
  let last = 0;
  function frame(now: number, step: number, local: number, cw: number, ch: number) {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W = Math.max(2, Math.round(cw * dpr));
    const H = Math.max(2, Math.round(ch * dpr));
    if (canvas.width !== W || canvas.height !== H) {
      renderer.setSize(W, H, false);
      cam.aspect = W / H;
      cam.updateProjectionMatrix();
    }
    const t = now / 1000;
    const dt = last ? Math.min(0.1, t - last) : 0.016;
    last = t;
    let ry: number;
    let rx = 0.05;
    let cz = 5.7;
    let w1 = 0;
    let kind = 0;
    let dx = 0;
    if (step <= 0) {
      ry = -0.5 + 0.6 * local;
      cz = 5.5;
      kind = reduce ? 0 : Math.floor(t / 1.4) % 5;
    } else if (step === 1) {
      ry = 0.8 + 0.5 * local;
      rx = 0.1;
      cz = 6.3;
      w1 = 1;
    } else if (step === 2) {
      const sw = reduce ? 0 : Math.sin(t * 1.3);
      ry = sw * 0.5 + (local - 0.5) * 0.3;
      dx = Math.round(sw * 2);
    } else if (local < 0.78) {
      ry = -0.22 + 0.12 * local;
      cz = 5.6;
      kind = 6;
      dx = Math.round(Math.min(1, local / 0.7) * 27);
    } else {
      ry = -0.5;
      cz = 5.5;
    }
    const k = reduce ? 1 : 1 - Math.exp(-dt * 5);
    cur.ry += (ry - cur.ry) * k;
    cur.rx += (rx - cur.rx) * k;
    cur.cz += (cz - cur.cz) * k;
    cur.w1 += (w1 - cur.w1) * k;
    drawFace(kind, dx);
    head.rotation.set(cur.rx, cur.ry, 0);
    head.position.y = 0.05 + (reduce ? 0 : Math.sin(t * 1.3) * 0.03);
    shadow.scale.setScalar(1 - head.position.y * 0.6);
    const wig = reduce ? 0 : cur.w1 * Math.sin(t * 9) * 0.16 * Math.max(0, Math.sin(t * 1.7));
    ears[0].rotation.x = -0.6 + wig;
    ears[1].rotation.x = -0.6 - wig;
    for (const w of waves) {
      const ph = reduce ? w.userData.ph : (t * 0.6 + w.userData.ph) % 1;
      w.position.set(w.userData.sx * (1.12 + ph * 0.55), -0.02, 0);
      w.scale.setScalar(1 + ph * 1.3);
      w.material.opacity = cur.w1 * (1 - ph) * 0.85;
      w.visible = w.material.opacity > 0.01;
    }
    cam.position.set(0, 0.22, cur.cz);
    cam.lookAt(0, -0.08, 0);
    renderer.render(scene, cam);
  }

  function dispose() {
    scene.traverse((o) => {
      if (o instanceof T.Mesh) {
        o.geometry.dispose();
        (o.material as THREE.Material).dispose();
      }
    });
    envRT.dispose();
    ledTex.dispose();
    shadowTex.dispose();
    renderer.dispose();
  }

  return { frame, dispose };
}
