'use client'

import { useEffect, useState } from 'react'
import { palette as p, fonts } from './palette'
import { LiveDot, Tag } from './primitives'

type SceneId = 'retail' | 'delivery' | 'home'
type Status = 'live' | 'pilot' | 'soon'

const SIM_TABS: { id: SceneId; label: string; status: Status; units: string; desc: string }[] = [
  {
    id: 'retail',
    label: 'Retail aisle',
    status: 'live',
    units: '1,212 units',
    desc: 'Shopper-assist robots running offer drops at shelf-edge.',
  },
  {
    id: 'delivery',
    label: 'Sidewalk delivery',
    status: 'pilot',
    units: '120 units',
    desc:
      "Last-mile bots routing around dense pedestrian queues, Stanford campus pilot, computing the optimal path past the coffee-shop line while surfacing brand offers on the bot's display.",
  },
  {
    id: 'home',
    label: 'Home robots',
    status: 'pilot',
    units: '240 households',
    desc: 'Household robots making natural recommendations while doing chores.',
  },
]

type Event = { t: string; brand: string; msg: string; zone: string; amt: number }
const SIM_EVENTS: Record<SceneId, Event[]> = {
  retail: [
    { t: '00:00:01', brand: 'Coca-Cola', msg: '20% off · 12 oz can', zone: 'Aisle 3 · cap end', amt: 0.55 },
    { t: '00:00:04', brand: "Lay's", msg: 'BOGO chips', zone: 'Aisle 7 · mid', amt: 0.32 },
    { t: '00:00:08', brand: 'Red Bull', msg: 'Free can w/ entrée', zone: 'Aisle 3 · cooler', amt: 0.48 },
    { t: '00:00:11', brand: 'Oreo', msg: 'New flavour drop', zone: 'Aisle 6 · shelf 2', amt: 0.28 },
    { t: '00:00:15', brand: 'Coca-Cola', msg: 'Resupplied · ack', zone: 'Aisle 3 · cap end', amt: 0.18 },
  ],
  delivery: [
    { t: '00:00:01', brand: 'Kovio', msg: 'Queue detected · 6 persons', zone: 'Palm Café · entrance', amt: 0 },
    { t: '00:00:03', brand: 'Kovio', msg: 'A* path · 18.4m re-route', zone: 'Stanford · main quad', amt: 0 },
    { t: '00:00:06', brand: 'DoorDash', msg: 'Free drink w/ first order', zone: 'Bot screen · LIVE', amt: 0.4 },
    { t: '00:00:10', brand: 'Starbucks', msg: 'Coffee · 2 min ahead', zone: 'Palm Drive · 0.3mi', amt: 0.35 },
    { t: '00:00:14', brand: 'Uber', msg: 'Ride · curb pickup', zone: 'Tresidder · zone 12', amt: 0.42 },
    { t: '00:00:18', brand: 'Chipotle', msg: 'Hungry? 10% off bowl', zone: 'Palm Drive · 0.6mi', amt: 0.45 },
    { t: '00:00:22', brand: 'DoorDash', msg: 'Drop-off confirmed', zone: 'Recipient · #214', amt: 0.22 },
  ],
  home: [
    { t: '00:00:02', brand: 'Bounty', msg: 'Paper towels low → reorder?', zone: 'Kitchen · pantry', amt: 0.62 },
    { t: '00:00:06', brand: 'Tide', msg: 'Detergent almost out', zone: 'Laundry · shelf 1', amt: 0.55 },
    { t: '00:00:10', brand: 'Whole Foods', msg: 'Add milk to weekly order', zone: 'Kitchen · fridge', amt: 0.48 },
    { t: '00:00:14', brand: 'Dawn', msg: 'Dish soap, auto-reorder', zone: 'Kitchen · sink', amt: 0.35 },
    { t: '00:00:18', brand: 'Amazon', msg: 'Coffee pods, same brand?', zone: 'Kitchen · counter', amt: 0.42 },
  ],
}

export default function SimFocus() {
  const [tick, setTick] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="kovio-section kovio-section-tight" style={{ maxWidth: 1320, margin: '0 auto', padding: '120px 32px 40px' }}>
      <div
        className="kovio-header-2col"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 56,
          marginBottom: 48,
          alignItems: 'end',
        }}
      >
        <div>
          <Tag>SECTION 01 / Focus</Tag>
          <h2
            style={{
              fontFamily: fonts.display,
              fontSize: 'clamp(40px, 5vw, 72px)',
              lineHeight: 0.98,
              letterSpacing: '-0.03em',
              margin: '16px 0 0',
              color: p.fg,
              fontWeight: 500,
              textWrap: 'balance',
            }}
          >
            Live in retail.
            <br />
            <span style={{ fontFamily: fonts.serif, fontStyle: 'italic', fontWeight: 400 }}>
              Rolling
            </span>{' '}
            into delivery & home.
          </h2>
        </div>
        <p
          style={{
            color: p.fgDim,
            fontSize: 17,
            lineHeight: 1.5,
            maxWidth: 460,
            marginBottom: 8,
          }}
        >
          We&apos;re running closed pilots across three robot environments today, simulated and
          stress-tested against real fleet telemetry before they ever hit production.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
        {SIM_TABS.map((t, i) => (
          <SimRow key={t.id} tab={t} index={i} tick={tick} />
        ))}
      </div>
    </section>
  )
}

function SimRow({
  tab,
  index,
  tick,
}: {
  tab: (typeof SIM_TABS)[number]
  index: number
  tick: number
}) {
  const events = SIM_EVENTS[tab.id] || []
  const offset = index * 4
  const cursor = (tick + offset) % events.length
  const start = Math.max(0, cursor - 2)
  const visibleEvents = events.slice(start, cursor + 1)
  const dotColor = tab.status === 'live' ? p.accent : tab.status === 'pilot' ? p.warm : p.fgMute
  return (
    <div>
      <div
        className="kovio-sim-meta"
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: 18,
          padding: '14px 0 16px',
          borderTop: `1px solid ${p.line}`,
          borderBottom: `1px solid ${p.line}`,
          marginBottom: 24,
        }}
      >
        <span
          style={{
            fontFamily: fonts.mono,
            fontSize: 11,
            color: p.fgMute,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            width: 60,
            flexShrink: 0,
          }}
        >
          0{index + 1} /
        </span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: 999,
              background: dotColor,
              boxShadow: tab.status === 'live' ? `0 0 10px ${dotColor}` : 'none',
            }}
          />
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 10.5,
              color: p.fgMute,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            {tab.status === 'live' ? 'LIVE' : tab.status === 'pilot' ? 'IN PILOT' : 'SOON'}
          </span>
        </span>
        <span
          style={{
            fontFamily: fonts.display,
            fontSize: 28,
            color: p.fg,
            fontWeight: 500,
            letterSpacing: '-0.015em',
          }}
        >
          {tab.label}
        </span>
        <span style={{ flex: 1 }} />
        <span style={{ fontFamily: fonts.mono, fontSize: 11, color: p.fgDim }}>{tab.units}</span>
      </div>
      <p
        style={{
          color: p.fgDim,
          fontSize: 15,
          lineHeight: 1.55,
          margin: '0 0 22px',
          maxWidth: 720,
        }}
      >
        {tab.desc}
      </p>
      <div className="kovio-sim-row" style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 16 }}>
        <WebotsFrame scene={tab.id} tick={tick + offset} />
        <SimSidePanel scene={tab.id} events={visibleEvents} />
      </div>
    </div>
  )
}

function WebotsFrame({ scene, tick }: { scene: SceneId; tick: number }) {
  const sceneTitle =
    scene === 'retail'
      ? 'fresh-mart-aisle3.wbt'
      : scene === 'delivery'
        ? 'stanford-palm-cafe.wbt'
        : 'kitchen-evening.wbt'
  const fps = 58 + (tick % 6) - 3
  const stepN = tick * 32 + 12048
  return (
    <div
      style={{
        background: '#1F2126',
        border: `1px solid ${p.line}`,
        borderRadius: 14,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '10px 14px',
          background: '#16181C',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          fontFamily: fonts.mono,
          fontSize: 11,
          color: 'rgba(255,255,255,0.55)',
        }}
      >
        <span style={{ display: 'inline-flex', gap: 5 }}>
          <span style={{ width: 9, height: 9, borderRadius: 999, background: '#ff5f57' }} />
          <span style={{ width: 9, height: 9, borderRadius: 999, background: '#febc2e' }} />
          <span style={{ width: 9, height: 9, borderRadius: 999, background: '#28c840' }} />
        </span>
        <span style={{ marginLeft: 4 }}>Webots · {sceneTitle}</span>
        <span style={{ flex: 1 }} />
        <span>SIM TIME 00:00:{String(tick % 60).padStart(2, '0')}</span>
        <span style={{ opacity: 0.5 }}>·</span>
        <span>STEP {stepN.toLocaleString()}</span>
        <span style={{ opacity: 0.5 }}>·</span>
        <span style={{ color: p.accent }}>{fps} fps</span>
      </div>
      <div
        style={{
          position: 'relative',
          aspectRatio: '16/9',
          background: '#3D4046',
          overflow: 'hidden',
        }}
      >
        {scene === 'retail' ? (
          <RetailScene tick={tick} />
        ) : scene === 'home' ? (
          <HomeScene tick={tick} />
        ) : (
          <DeliveryScene tick={tick} />
        )}
        <div
          style={{
            position: 'absolute',
            right: 14,
            top: 14,
            fontFamily: fonts.mono,
            fontSize: 10,
            color: 'rgba(255,255,255,0.55)',
            textAlign: 'right',
          }}
        >
          <div>cam: free</div>
          <div>fov: 60°</div>
        </div>
        <div
          style={{
            position: 'absolute',
            left: 14,
            bottom: 14,
            fontFamily: fonts.mono,
            fontSize: 10,
            color: 'rgba(255,255,255,0.55)',
          }}
        >
          <span style={{ color: p.accent }}>●</span> recording · 2.4 MB
        </div>
      </div>
    </div>
  )
}

/* ─── RETAIL SCENE ──────────────────────────────────────────── */
function RetailScene({ tick }: { tick: number }) {
  const robotX = Math.sin(tick * 0.5) * 6
  return (
    <svg
      viewBox="0 0 800 450"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    >
      <defs>
        <radialGradient id="rv" cx="50%" cy="40%" r="75%">
          <stop offset="0%" stopOpacity="0" />
          <stop offset="100%" stopOpacity="0.4" />
        </radialGradient>
        <linearGradient id="floorGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#7E848C" />
          <stop offset="100%" stopColor="#B6BCC4" />
        </linearGradient>
      </defs>

      <polygon points="0,0 800,0 560,140 240,140" fill="#5A5D63" />
      <polygon points="290,80 510,80 500,90 300,90" fill="#3D3F44" />
      <polygon points="320,40 480,40 472,48 328,48" fill="#3D3F44" />

      <rect x="240" y="140" width="320" height="150" fill="#A0A4AA" />
      <line x1="240" y1="200" x2="560" y2="200" stroke="rgba(0,0,0,0.08)" />
      <line x1="240" y1="245" x2="560" y2="245" stroke="rgba(0,0,0,0.08)" />
      <line x1="380" y1="100" x2="380" y2="118" stroke="#3D3F44" strokeWidth="1.5" />
      <line x1="420" y1="100" x2="420" y2="118" stroke="#3D3F44" strokeWidth="1.5" />
      <rect x="335" y="118" width="130" height="34" rx="3" fill="#1A1D22" stroke="#2A2D32" />
      <text
        x="400"
        y="131"
        textAnchor="middle"
        fontFamily={fonts.mono}
        fontSize="7"
        fill="rgba(255,255,255,0.5)"
        letterSpacing="0.1em"
      >
        AISLE
      </text>
      <text
        x="400"
        y="146"
        textAnchor="middle"
        fontFamily={fonts.display}
        fontSize="11"
        fill={p.accent}
        fontWeight="700"
        letterSpacing="0.04em"
      >
        03 · BEVERAGES
      </text>

      <polygon points="0,0 240,140 240,290 0,450" fill="#6F7378" />
      <polygon points="0,40 240,135 240,290 0,360" fill="#3E4147" />
      <ShelfRow side="left" y1Near={120} y2Near={130} y1Far={155} y2Far={158} kind="bottles" />
      <ShelfRow side="left" y1Near={200} y2Near={210} y1Far={195} y2Far={198} kind="cans" />
      <ShelfRow side="left" y1Near={280} y2Near={290} y1Far={232} y2Far={235} kind="boxes" />
      <ShelfRow side="left" y1Near={355} y2Near={365} y1Far={268} y2Far={271} kind="cans" />

      <polygon points="800,0 560,140 560,290 800,450" fill="#6F7378" />
      <polygon points="800,40 560,135 560,290 800,360" fill="#3E4147" />
      <ShelfRow side="right" y1Near={120} y2Near={130} y1Far={155} y2Far={158} kind="cans" />
      <ShelfRow side="right" y1Near={200} y2Near={210} y1Far={195} y2Far={198} kind="bottles" />
      <ShelfRow side="right" y1Near={280} y2Near={290} y1Far={232} y2Far={235} kind="boxes" />
      <ShelfRow side="right" y1Near={355} y2Near={365} y1Far={268} y2Far={271} kind="bottles" />

      <rect x="350" y="220" width="100" height="68" fill="#C8334A" />
      <rect x="354" y="224" width="92" height="14" fill="#FFFFFF" />
      <text
        x="400"
        y="234"
        textAnchor="middle"
        fontFamily={fonts.display}
        fontSize="9"
        fill="#C8334A"
        fontWeight="700"
      >
        COCA-COLA
      </text>
      {Array.from({ length: 12 }).map((_, i) => {
        const cx = 360 + (i % 6) * 14
        const cy = 248 + Math.floor(i / 6) * 18
        return (
          <g key={i}>
            <rect
              x={cx - 4}
              y={cy}
              width="8"
              height="14"
              rx="1"
              fill="#C8334A"
              stroke="#7A1A26"
              strokeWidth="0.4"
            />
            <rect x={cx - 4} y={cy + 4} width="8" height="2" fill="#FFFFFF" />
          </g>
        )
      })}

      <polygon points="0,450 240,290 560,290 800,450" fill="url(#floorGrad)" />
      {Array.from({ length: 6 }).map((_, i) => {
        const t = (i + 1) / 7
        const y = 290 + (450 - 290) * t
        const lx = 240 - 240 * t
        const rx = 560 + 240 * t
        return (
          <line
            key={`tl-${i}`}
            x1={lx}
            y1={y}
            x2={rx}
            y2={y}
            stroke="rgba(0,0,0,0.13)"
            strokeWidth="1"
          />
        )
      })}
      <line x1="400" y1="290" x2="400" y2="450" stroke="rgba(0,0,0,0.13)" />
      <line x1="320" y1="290" x2="160" y2="450" stroke="rgba(0,0,0,0.13)" />
      <line x1="480" y1="290" x2="640" y2="450" stroke="rgba(0,0,0,0.13)" />

      <Person x={355} y={260} scale={0.4} shirt="#D4A742" />
      <Person x={460} y={262} scale={0.42} shirt="#3A6BD9" />
      <Person x={150} y={400} scale={1.1} shirt="#C8334A" />
      <Person x={650} y={420} scale={1.25} shirt="#2E8B4A" />

      <ShoppingCart x={695} y={425} />

      <RetailRobot x={400 + robotX * 4} y={310} />
      <BannerOverhead
        x={400 + robotX * 4}
        y={215}
        accent={p.accent}
        fg={p.accentInk}
        brand="COCA-COLA"
        msg="20% OFF · AISLE 3"
      />

      <rect x="0" y="0" width="800" height="450" fill="url(#rv)" />
    </svg>
  )
}

function ShelfRow({
  side,
  y1Near,
  y2Near,
  y1Far,
  y2Far,
  kind,
}: {
  side: 'left' | 'right'
  y1Near: number
  y2Near: number
  y1Far: number
  y2Far: number
  kind: 'bottles' | 'cans' | 'boxes'
}) {
  const isLeft = side === 'left'
  const xNear = isLeft ? 0 : 800
  const xFar = isLeft ? 240 : 560
  const boardPoints = `${xNear},${y1Near} ${xFar},${y1Far} ${xFar},${y2Far} ${xNear},${y2Near}`
  return (
    <g>
      {Array.from({ length: 11 }).map((_, i) => {
        const t = i / 10
        const xC = xNear + (xFar - xNear) * t
        const yTop = y1Near + (y1Far - y1Near) * t
        const scale = 1 - t * 0.7
        return (
          <ShelfProduct
            key={i}
            x={xC + (isLeft ? -10 * scale : 10 * scale)}
            y={yTop}
            scale={scale}
            kind={kind}
            colorIdx={i}
          />
        )
      })}
      <polygon points={boardPoints} fill="#D9C68E" stroke="#8A7942" strokeWidth="0.6" />
      <polygon points={boardPoints} fill="rgba(0,0,0,0.15)" />
      <polygon
        points={`${xNear},${y2Near + 2} ${xFar},${y2Far + 1} ${xFar},${y2Far + 5} ${xNear},${y2Near + 10}`}
        fill="#FFFFFF"
        stroke="#999"
        strokeWidth="0.3"
      />
    </g>
  )
}

const PRODUCT_PALETTES: [string, string][] = [
  ['#C8334A', '#FFFFFF'],
  ['#1E4FA8', '#FFFFFF'],
  ['#22A551', '#FFFFFF'],
  ['#E89B1A', '#FFFFFF'],
  ['#3A3A3A', '#C8FF3D'],
  ['#7E3FB8', '#FFFFFF'],
  ['#0E8A7E', '#FFFFFF'],
]

function ShelfProduct({
  x,
  y,
  scale,
  kind,
  colorIdx,
}: {
  x: number
  y: number
  scale: number
  kind: 'bottles' | 'cans' | 'boxes'
  colorIdx: number
}) {
  const [c, c2] = PRODUCT_PALETTES[colorIdx % PRODUCT_PALETTES.length]
  if (scale < 0.18) {
    return <rect x={x - 3 * scale} y={y - 12 * scale} width={6 * scale} height={12 * scale} fill={c} />
  }
  const w = (kind === 'boxes' ? 14 : kind === 'bottles' ? 9 : 10) * scale
  const h = (kind === 'boxes' ? 18 : kind === 'bottles' ? 26 : 18) * scale
  return (
    <g>
      {kind === 'bottles' ? (
        <g>
          <rect x={x - w / 4} y={y - h} width={w / 2} height={h * 0.18} fill="#2A2A2A" />
          <rect
            x={x - w / 2}
            y={y - h * 0.82}
            width={w}
            height={h * 0.82}
            rx={w * 0.2}
            fill={c}
            stroke="rgba(0,0,0,0.3)"
            strokeWidth="0.4"
          />
          <rect x={x - w / 2} y={y - h * 0.5} width={w} height={h * 0.18} fill={c2} />
        </g>
      ) : kind === 'boxes' ? (
        <g>
          <rect
            x={x - w / 2}
            y={y - h}
            width={w}
            height={h}
            fill={c}
            stroke="rgba(0,0,0,0.3)"
            strokeWidth="0.4"
          />
          <rect x={x - w / 2} y={y - h * 0.7} width={w} height={h * 0.25} fill={c2} />
        </g>
      ) : (
        <g>
          <rect
            x={x - w / 2}
            y={y - h}
            width={w}
            height={h}
            rx={w * 0.18}
            fill={c}
            stroke="rgba(0,0,0,0.3)"
            strokeWidth="0.4"
          />
          <rect x={x - w / 2} y={y - h * 0.55} width={w} height={h * 0.2} fill={c2} />
          <ellipse cx={x} cy={y - h + 0.5} rx={w / 2} ry={1.2} fill="#9C9C9C" />
        </g>
      )}
    </g>
  )
}

function ShoppingCart({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <ellipse cx="0" cy="4" rx="26" ry="3" fill="rgba(0,0,0,0.25)" />
      <polygon points="-22,-30 22,-30 28,-10 -28,-10" fill="none" stroke="#8E8E8E" strokeWidth="1.5" />
      <polygon
        points="-22,-30 22,-30 18,-25 -18,-25"
        fill="rgba(255,255,255,0.2)"
        stroke="#8E8E8E"
        strokeWidth="1"
      />
      {Array.from({ length: 5 }).map((_, i) => (
        <line
          key={i}
          x1={-20 + i * 10}
          y1="-30"
          x2={-25 + i * 12}
          y2="-10"
          stroke="#8E8E8E"
          strokeWidth="0.8"
        />
      ))}
      <line x1="-28" y1="-22" x2="28" y2="-22" stroke="#8E8E8E" strokeWidth="0.8" />
      <line x1="-28" y1="-14" x2="28" y2="-14" stroke="#8E8E8E" strokeWidth="0.8" />
      <line x1="22" y1="-30" x2="34" y2="-50" stroke="#8E8E8E" strokeWidth="1.6" />
      <line x1="34" y1="-50" x2="40" y2="-50" stroke="#8E8E8E" strokeWidth="1.6" />
      <circle cx="-20" cy="-6" r="4" fill="#1F1F1F" />
      <circle cx="20" cy="-6" r="4" fill="#1F1F1F" />
    </g>
  )
}

/* ─── DELIVERY SCENE ──────────────────────────────────────────── */
function DeliveryScene({ tick }: { tick: number }) {
  const pathProgress = (tick * 0.04) % 1
  const pathPoints = [
    { x: 90, y: 410 },
    { x: 260, y: 425 },
    { x: 410, y: 432 },
    { x: 560, y: 428 },
    { x: 730, y: 412 },
  ]
  const seg = Math.min(Math.floor(pathProgress * (pathPoints.length - 1)), pathPoints.length - 2)
  const local = pathProgress * (pathPoints.length - 1) - seg
  const a = pathPoints[seg]
  const b = pathPoints[seg + 1]
  const botX = a.x + (b.x - a.x) * local
  const botY = a.y + (b.y - a.y) * local
  return (
    <svg
      viewBox="0 0 800 450"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    >
      <defs>
        <linearGradient id="skyG" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#E6CBA8" />
          <stop offset="100%" stopColor="#F5E2C6" />
        </linearGradient>
        <linearGradient id="tileRoof" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#B85A36" />
          <stop offset="100%" stopColor="#8E3F22" />
        </linearGradient>
        <linearGradient id="sandstone" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#E6CFA8" />
          <stop offset="100%" stopColor="#C9AC7F" />
        </linearGradient>
        <radialGradient id="dv" cx="50%" cy="50%" r="75%">
          <stop offset="0%" stopOpacity="0" />
          <stop offset="100%" stopOpacity="0.30" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="800" height="220" fill="url(#skyG)" />
      <circle cx="640" cy="68" r="34" fill="#FFE8B8" opacity="0.85" />

      <g opacity="0.85">
        <rect x="610" y="78" width="46" height="130" fill="#A88958" />
        <rect x="604" y="74" width="58" height="6" fill="#8E3F22" />
        <rect x="618" y="100" width="30" height="28" fill="#7A6342" opacity="0.5" />
        <rect x="618" y="138" width="30" height="28" fill="#7A6342" opacity="0.4" />
        <polygon points="610,78 656,78 633,38" fill="#8E3F22" />
        <line x1="633" y1="38" x2="633" y2="22" stroke="#5A2C18" strokeWidth="1.2" />
        <circle cx="633" cy="22" r="2.5" fill="#5A2C18" />
      </g>

      <path
        d="M0 200 Q 80 168 160 178 T 320 175 T 480 182 T 640 172 T 800 188 L 800 220 L 0 220 Z"
        fill="#9CA37A"
        opacity="0.85"
      />
      <path
        d="M0 215 Q 100 198 220 208 T 440 205 T 660 210 T 800 205 L 800 230 L 0 230 Z"
        fill="#7E8559"
        opacity="0.85"
      />

      <g>
        <polygon points="0,150 350,150 360,182 -10,182" fill="url(#tileRoof)" />
        {Array.from({ length: 14 }).map((_, i) => (
          <line
            key={`tile-${i}`}
            x1={i * 26}
            y1="150"
            x2={i * 26 + 6}
            y2="182"
            stroke="rgba(0,0,0,0.18)"
            strokeWidth="0.8"
          />
        ))}
        <rect x="-10" y="180" width="370" height="3" fill="rgba(0,0,0,0.30)" />
        <rect x="-10" y="183" width="370" height="92" fill="url(#sandstone)" />
        {[10, 78, 146, 214, 282].map((ax, i) => (
          <g key={`arch-${i}`}>
            <path
              d={`M${ax} 275 L${ax} 220 A26 26 0 0 1 ${ax + 52} 220 L${ax + 52} 275 Z`}
              fill="#5A4734"
            />
            <path
              d={`M${ax + 4} 275 L${ax + 4} 222 A22 22 0 0 1 ${ax + 48} 222 L${ax + 48} 275 Z`}
              fill="#2E251B"
            />
            <rect x={ax + 22} y="194" width="8" height="6" fill="#A88958" />
          </g>
        ))}
        {[40, 110, 180, 250].map((wx, i) => (
          <g key={`uw-${i}`}>
            <rect x={wx} y="195" width="20" height="14" fill="#3E2A1A" />
            <line x1={wx + 10} y1="195" x2={wx + 10} y2="209" stroke="#A88958" strokeWidth="0.8" />
          </g>
        ))}
      </g>

      <PalmTree x={388} y={264} h={150} />
      <PalmTree x={760} y={266} h={140} />
      <PalmTree x={420} y={260} h={110} small />

      <g>
        <rect x="430" y="186" width="180" height="90" fill="#D8C09A" />
        <rect x="430" y="186" width="180" height="6" fill="#8E3F22" />
        <polygon points="430,192 610,192 602,212 438,212" fill="#3E5A3B" />
        {Array.from({ length: 11 }).map((_, i) => (
          <polygon
            key={`aw-${i}`}
            points={`${438 + i * 16},212 ${452 + i * 16},212 ${445 + i * 16},220`}
            fill="#26371F"
          />
        ))}
        <text
          x="520"
          y="206"
          textAnchor="middle"
          fontFamily={fonts.display}
          fontSize="11"
          fill="#F5E2C6"
          fontWeight="700"
          letterSpacing="0.18em"
        >
          PALM CAFÉ
        </text>
        <rect x="440" y="220" width="76" height="48" fill="#9DBBA8" opacity="0.85" />
        <rect x="524" y="220" width="76" height="48" fill="#9DBBA8" opacity="0.85" />
        <line x1="478" y1="220" x2="478" y2="268" stroke="#5A4734" strokeWidth="1.2" />
        <line x1="562" y1="220" x2="562" y2="268" stroke="#5A4734" strokeWidth="1.2" />
        <rect x="514" y="240" width="22" height="32" fill="#1F1A12" />
        <rect x="516" y="242" width="18" height="2" fill="#A88958" />
        <polygon points="618,260 632,260 630,278 620,278" fill="#5A4734" />
        <rect x="617" y="244" width="18" height="18" fill="#F5E2C6" stroke="#5A4734" strokeWidth="0.8" />
        <text
          x="626"
          y="252"
          textAnchor="middle"
          fontFamily={fonts.mono}
          fontSize="3.4"
          fill="#5A4734"
          fontWeight="700"
        >
          TODAY
        </text>
        <text
          x="626"
          y="257"
          textAnchor="middle"
          fontFamily={fonts.mono}
          fontSize="3.6"
          fill="#8E3F22"
          fontWeight="700"
        >
          $4 OAT
        </text>
        <text
          x="626"
          y="261"
          textAnchor="middle"
          fontFamily={fonts.mono}
          fontSize="3.6"
          fill="#8E3F22"
          fontWeight="700"
        >
          LATTE
        </text>
      </g>

      <polygon points="0,275 800,275 800,290 0,290" fill="#7A6342" />
      <polygon points="0,290 800,290 800,308 0,308" fill="#5A4734" />
      <polygon points="0,308 800,308 800,450 0,450" fill="#D8C9A8" />
      {[345, 380, 415].map((y, i) => (
        <line
          key={`sw-${i}`}
          x1={0}
          y1={y}
          x2={800}
          y2={y + i * 3}
          stroke="rgba(60,40,20,0.18)"
          strokeWidth="0.8"
        />
      ))}
      <line x1="400" y1="308" x2="400" y2="450" stroke="rgba(60,40,20,0.18)" />

      <Person x={525} y={335} scale={0.78} shirt="#3A6BD9" />
      <Person x={500} y={340} scale={0.8} shirt="#C8334A" />
      <Person x={470} y={345} scale={0.82} shirt="#D4A742" />
      <Person x={438} y={352} scale={0.84} shirt="#2E8B4A" />
      <Person x={402} y={360} scale={0.86} shirt="#8A5BD9" />
      <Person x={362} y={368} scale={0.88} shirt="#D4733A" />

      <path
        d="M 90 410 Q 200 422 320 428 Q 440 432 560 428 Q 660 422 730 412"
        fill="none"
        stroke={p.accent}
        strokeWidth="2.2"
        strokeDasharray="6 4"
        opacity="0.85"
      />
      {pathPoints.map((pt, i) => (
        <circle
          key={`wp-${i}`}
          cx={pt.x}
          cy={pt.y}
          r="3"
          fill={p.accent}
          stroke="#0A0B0E"
          strokeWidth="0.8"
        />
      ))}

      <Person x={150} y={385} scale={0.86} shirt="#5BA8D4" leg="run" />

      <DeliveryBotWithScreen x={botX} y={botY - 6} accent={p.accent} />

      <rect x="0" y="0" width="800" height="450" fill="url(#dv)" />
    </svg>
  )
}

function PalmTree({ x, y, h = 140, small }: { x: number; y: number; h?: number; small?: boolean }) {
  const trunkW = small ? 5 : 7
  return (
    <g transform={`translate(${x} ${y})`}>
      <path
        d={`M 0 0 Q ${trunkW * 0.4} ${-h * 0.5} 0 ${-h}`}
        stroke="#6B4F2F"
        strokeWidth={trunkW}
        fill="none"
        strokeLinecap="round"
      />
      {Array.from({ length: small ? 5 : 7 }).map((_, i) => (
        <line
          key={`r-${i}`}
          x1={-trunkW * 0.6}
          y1={-i * (h / (small ? 6 : 8)) - 6}
          x2={trunkW * 0.6}
          y2={-i * (h / (small ? 6 : 8)) - 4}
          stroke="#3E2A1A"
          strokeWidth="0.7"
        />
      ))}
      <g transform={`translate(0 ${-h})`}>
        {[-90, -55, -20, 20, 55, 90, 135, -135].map((a, i) => (
          <path
            key={`fr-${i}`}
            d={`M 0 0 Q ${Math.cos((a * Math.PI) / 180) * (small ? 20 : 28)} ${
              Math.sin((a * Math.PI) / 180) * (small ? 20 : 28) - 10
            } ${Math.cos((a * Math.PI) / 180) * (small ? 40 : 58)} ${
              Math.sin((a * Math.PI) / 180) * (small ? 40 : 58) - 6
            }`}
            stroke="#4F7A3D"
            strokeWidth={small ? 3.6 : 4.8}
            fill="none"
            strokeLinecap="round"
            opacity="0.92"
          />
        ))}
        <circle cx="0" cy="0" r={small ? 4 : 6} fill="#3E5A2F" />
      </g>
    </g>
  )
}

function DeliveryBotWithScreen({
  x,
  y,
  accent,
}: {
  x: number
  y: number
  accent: string
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <ellipse cx="0" cy="18" rx="96" ry="11" fill="rgba(0,0,0,0.38)" />
      <polygon points="-78,16 78,16 70,-54 -70,-54" fill="#D8D8DA" stroke="#9B9DA1" strokeWidth="1" />
      <polygon points="-70,-54 70,-54 64,-68 -64,-68" fill="#E8E8EA" stroke="#9B9DA1" strokeWidth="1" />
      <rect x="-8" y="-64" width="16" height="3" rx="1" fill="#9B9DA1" />
      <line x1="0" y1="-68" x2="0" y2="-88" stroke="#9B9DA1" strokeWidth="1.4" />
      <polygon points="0,-88 14,-83 0,-78" fill={accent} />

      <rect x="-72" y="-52" width="144" height="68" rx="3.5" fill="#0A0B0E" stroke="#1A1A1A" strokeWidth="1" />
      <clipPath id="botSidePanel">
        <rect x="-70" y="-50" width="140" height="64" rx="2.5" />
      </clipPath>
      <g clipPath="url(#botSidePanel)">
        <rect x="-70" y="-50" width="140" height="64" fill="#0E1014" />
        <radialGradient id="botPanelGlow" cx="20%" cy="50%" r="80%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.20" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <rect x="-70" y="-50" width="140" height="64" fill="url(#botPanelGlow)" />

        <rect x="-70" y="-50" width="140" height="9" fill="#16191E" />
        <circle cx="-64" cy="-45.5" r="1.5" fill={accent} />
        <text
          x="-58"
          y="-44"
          fontFamily={fonts.mono}
          fontSize="4.4"
          fill="rgba(255,255,255,0.65)"
          letterSpacing="0.10em"
        >
          KOVIO · LIVE
        </text>
        <text
          x="68"
          y="-44"
          textAnchor="end"
          fontFamily={fonts.mono}
          fontSize="4.0"
          fill="rgba(255,255,255,0.42)"
          letterSpacing="0.08em"
        >
          SPONSORED
        </text>

        <rect x="-64" y="-37" width="50" height="11" rx="5.5" fill="#FF5A47" />
        <circle cx="-58" cy="-31.5" r="2" fill="#FFFFFF" opacity="0.85" />
        <text
          x="-52"
          y="-29.5"
          fontFamily={fonts.display}
          fontSize="6.8"
          fill="#FFFFFF"
          fontWeight="700"
          letterSpacing="-0.01em"
        >
          DoorDash
        </text>

        <text
          x="-64"
          y="-15"
          fontFamily={fonts.display}
          fontSize="9.5"
          fill="#FFFFFF"
          fontWeight="600"
          letterSpacing="-0.01em"
        >
          Free drink with
        </text>
        <text
          x="-64"
          y="-5.5"
          fontFamily={fonts.display}
          fontSize="9.5"
          fill="#FFFFFF"
          fontWeight="600"
          letterSpacing="-0.01em"
        >
          your first order
        </text>

        <rect x="38" y="-37" width="30" height="30" fill="#FFFFFF" rx="1" />
        {[
          [1, 1, 1, 0, 1, 0, 1, 1, 1],
          [1, 0, 1, 1, 0, 1, 1, 0, 1],
          [1, 1, 1, 0, 1, 1, 1, 1, 1],
          [0, 1, 0, 1, 0, 0, 1, 0, 0],
          [1, 0, 1, 1, 1, 0, 0, 1, 1],
          [0, 1, 0, 0, 1, 1, 1, 0, 1],
          [1, 1, 1, 0, 0, 1, 1, 1, 1],
          [1, 0, 1, 1, 0, 1, 1, 0, 1],
          [1, 1, 1, 0, 1, 0, 1, 1, 1],
        ].map((row, ri) =>
          row.map((c, ci) =>
            c ? (
              <rect
                key={`qr-${ri}-${ci}`}
                x={39 + ci * 3.1}
                y={-36 + ri * 3.1}
                width="2.8"
                height="2.8"
                fill="#0E1014"
              />
            ) : null,
          ),
        )}
        <text
          x="53"
          y="-2"
          textAnchor="middle"
          fontFamily={fonts.mono}
          fontSize="3.6"
          fill="rgba(255,255,255,0.55)"
          letterSpacing="0.06em"
        >
          SCAN
        </text>
      </g>
      <line x1="-72" y1="-52" x2="72" y2="-52" stroke="rgba(255,255,255,0.18)" strokeWidth="0.6" />

      <rect x="-66" y="17" width="132" height="5" fill="#1A1A1A" />
      {[-46, -20, 6, 32, 58].map((cx, i) => (
        <circle key={`s-${i}`} cx={cx} cy={19.5} r="1.4" fill={accent} />
      ))}

      <circle cx="-52" cy="22" r="18" fill="#1F1F1F" />
      <circle cx="52" cy="22" r="18" fill="#1F1F1F" />
      <circle cx="-52" cy="22" r="6" fill="#5B5E64" />
      <circle cx="52" cy="22" r="6" fill="#5B5E64" />
      <circle cx="-52" cy="22" r="2" fill="#9B9DA1" />
      <circle cx="52" cy="22" r="2" fill="#9B9DA1" />

      <rect x="-30" y="6" width="60" height="7" fill="rgba(0,0,0,0.78)" rx="1" />
      <text
        x="0"
        y="11"
        textAnchor="middle"
        fontFamily={fonts.mono}
        fontSize="4"
        fill="#FFF"
        fontWeight="600"
        letterSpacing="0.10em"
      >
        KOVIO · UNIT-7A4
      </text>
    </g>
  )
}

/* ─── HOME SCENE ──────────────────────────────────────────── */
function HomeScene({ tick }: { tick: number }) {
  const armSway = Math.sin(tick * 0.5) * 8
  return (
    <svg
      viewBox="0 0 800 450"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    >
      <defs>
        <linearGradient id="kWall" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#E8DFD0" />
          <stop offset="100%" stopColor="#D8CCB6" />
        </linearGradient>
        <linearGradient id="kFloor" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#7A6347" />
          <stop offset="100%" stopColor="#5A4734" />
        </linearGradient>
        <radialGradient id="kVig" cx="50%" cy="50%" r="75%">
          <stop offset="0%" stopOpacity="0" />
          <stop offset="100%" stopOpacity="0.35" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="800" height="290" fill="url(#kWall)" />
      <polygon points="0,290 800,290 800,450 0,450" fill="url(#kFloor)" />
      {Array.from({ length: 8 }).map((_, i) => (
        <line
          key={`pl-${i}`}
          x1="0"
          y1={290 + i * 20}
          x2="800"
          y2={290 + i * 20}
          stroke="rgba(0,0,0,0.12)"
          strokeWidth="0.8"
        />
      ))}

      <rect x="40" y="40" width="220" height="100" fill="#F2EAD8" stroke="#9B8E72" strokeWidth="1" />
      <line x1="150" y1="40" x2="150" y2="140" stroke="#9B8E72" strokeWidth="1" />
      <rect x="90" y="80" width="6" height="20" fill="#5B5E64" />
      <rect x="200" y="80" width="6" height="20" fill="#5B5E64" />
      <rect x="290" y="40" width="220" height="120" fill="#9DBFD8" />
      <rect x="290" y="40" width="220" height="120" fill="none" stroke="#9B8E72" strokeWidth="3" />
      <line x1="400" y1="40" x2="400" y2="160" stroke="#9B8E72" strokeWidth="2" />
      <line x1="290" y1="100" x2="510" y2="100" stroke="#9B8E72" strokeWidth="2" />
      <circle cx="340" cy="120" r="22" fill="#4F7A4A" opacity="0.8" />
      <circle cx="460" cy="115" r="18" fill="#4F7A4A" opacity="0.7" />
      <rect x="540" y="40" width="220" height="100" fill="#F2EAD8" stroke="#9B8E72" strokeWidth="1" />
      <line x1="650" y1="40" x2="650" y2="140" stroke="#9B8E72" strokeWidth="1" />
      <rect x="600" y="80" width="6" height="20" fill="#5B5E64" />
      <rect x="700" y="80" width="6" height="20" fill="#5B5E64" />

      <rect x="0" y="240" width="800" height="14" fill="#3E3530" />
      <rect x="0" y="254" width="800" height="6" fill="#2A2520" />
      <rect x="0" y="260" width="800" height="30" fill="#E8DFD0" />
      <line x1="160" y1="260" x2="160" y2="290" stroke="#9B8E72" strokeWidth="1" />
      <line x1="320" y1="260" x2="320" y2="290" stroke="#9B8E72" strokeWidth="1" />
      <line x1="480" y1="260" x2="480" y2="290" stroke="#9B8E72" strokeWidth="1" />
      <line x1="640" y1="260" x2="640" y2="290" stroke="#9B8E72" strokeWidth="1" />

      <rect x="50" y="190" width="56" height="50" fill="#2C313A" />
      <rect x="58" y="200" width="40" height="6" fill="#5B5E64" />
      <rect x="62" y="218" width="32" height="14" fill="#1A1A1A" />
      <rect x="68" y="222" width="20" height="2" fill="#C8334A" />
      <ellipse cx="630" cy="238" rx="36" ry="6" fill="#9B8E72" />
      <path d="M594 238 Q594 222 630 222 Q666 222 666 238" fill="#7A6347" />
      <circle cx="618" cy="226" r="7" fill="#D4733A" />
      <circle cx="630" cy="222" r="7" fill="#C83A3A" />
      <circle cx="642" cy="228" r="7" fill="#D4A742" />
      <rect x="700" y="178" width="6" height="62" fill="#9B8E72" />
      <rect x="688" y="172" width="30" height="8" fill="#9B8E72" />
      <rect x="697" y="184" width="12" height="40" fill="#F8F2E4" stroke="#C8B898" strokeWidth="0.8" />
      <line x1="703" y1="184" x2="703" y2="224" stroke="#9B8E72" strokeWidth="0.6" />
      <circle
        cx="703"
        cy="204"
        r={18 + (tick % 4) * 2}
        fill="none"
        stroke={p.accent}
        strokeWidth="1.4"
        opacity={0.7 - (tick % 4) * 0.15}
      />

      <g transform="translate(380 360)">
        <ellipse cx="0" cy="38" rx="58" ry="9" fill="rgba(0,0,0,0.35)" />
        <polygon points="-44,36 44,36 38,12 -38,12" fill="#E8E8EA" stroke="#9B9DA1" strokeWidth="1" />
        <circle cx="-30" cy="36" r="9" fill="#1F1F1F" />
        <circle cx="0" cy="38" r="9" fill="#1F1F1F" />
        <circle cx="30" cy="36" r="9" fill="#1F1F1F" />
        <polygon points="-22,12 22,12 18,-46 -18,-46" fill="#F2F2F2" stroke="#9B9DA1" strokeWidth="1" />
        <rect x="14" y="-30" width="6" height="36" fill="#E8E8EA" stroke="#9B9DA1" strokeWidth="0.8" />
        <g transform={`translate(20 -30) rotate(${-30 + armSway * 0.2})`}>
          <rect x="0" y="-3" width="48" height="6" fill="#E8E8EA" stroke="#9B9DA1" strokeWidth="0.8" />
          <rect x="44" y="-6" width="14" height="12" fill="#FFD86A" stroke="#9B8E72" strokeWidth="0.8" />
          <rect x="44" y="-6" width="14" height="3" fill="#7AB85F" />
        </g>
        <polygon points="-14,-46 14,-46 12,-66 -12,-66" fill="#F2F2F2" stroke="#9B9DA1" strokeWidth="1" />
        <rect x="-9" y="-60" width="18" height="8" rx="3" fill="#0E1014" />
        <circle cx="-4" cy="-56" r="1.8" fill="#5CE1B6" />
        <circle cx="4" cy="-56" r="1.8" fill="#5CE1B6" />
        <line x1="0" y1="-66" x2="0" y2="-76" stroke="#9B9DA1" strokeWidth="1.2" />
        <circle cx="0" cy="-78" r="2" fill={p.accent} />
        <rect x="-12" y="-30" width="24" height="6" rx="1" fill="#0E1014" />
        <text
          x="0"
          y="-25.5"
          textAnchor="middle"
          fontFamily={fonts.mono}
          fontSize="4"
          fill="#FFFFFF"
          fontWeight="700"
          letterSpacing="0.1em"
        >
          KOVIO
        </text>
      </g>

      <g transform="translate(470 130)">
        <polygon points="-10,80 10,80 -22,108" fill="#FFFFFF" />
        <rect x="-160" y="0" width="320" height="84" rx="10" fill="#FFFFFF" stroke="#2C313A" strokeWidth="1.4" />
        <rect x="-148" y="10" width="64" height="14" rx="2" fill={p.accent} />
        <text
          x="-116"
          y="20.5"
          textAnchor="middle"
          fontFamily={fonts.mono}
          fontSize="8"
          fill={p.accentInk}
          fontWeight="700"
          letterSpacing="0.08em"
        >
          BOUNTY
        </text>
        <text
          x="-78"
          y="20"
          fontFamily={fonts.mono}
          fontSize="8"
          fill="#5B5E64"
          letterSpacing="0.08em"
        >
          SPONSORED · KOVIO
        </text>

        <text
          x="-148"
          y="44"
          fontFamily={fonts.display}
          fontSize="17"
          fill="#1F1F1F"
          fontWeight="500"
          letterSpacing="-0.01em"
        >
          &quot;Your paper towels are
        </text>
        <text
          x="-148"
          y="62"
          fontFamily={fonts.display}
          fontSize="17"
          fill="#1F1F1F"
          fontWeight="500"
          letterSpacing="-0.01em"
        >
          almost out, reorder Bounty?&quot;
        </text>

        <rect x="-148" y="68" width="56" height="11" rx="5.5" fill="#1F1F1F" />
        <text
          x="-120"
          y="76"
          textAnchor="middle"
          fontFamily={fonts.mono}
          fontSize="6.5"
          fill="#FFFFFF"
          fontWeight="700"
          letterSpacing="0.08em"
        >
          YES, ADD
        </text>
        <rect x="-86" y="68" width="46" height="11" rx="5.5" fill="none" stroke="#5B5E64" strokeWidth="0.8" />
        <text
          x="-63"
          y="76"
          textAnchor="middle"
          fontFamily={fonts.mono}
          fontSize="6.5"
          fill="#5B5E64"
          fontWeight="600"
          letterSpacing="0.08em"
        >
          NOT NOW
        </text>
      </g>

      <line x1="384" y1="304" x2="700" y2="200" stroke={p.accent} strokeWidth="1" strokeDasharray="4 4" opacity="0.55" />

      <rect x="0" y="0" width="800" height="450" fill="url(#kVig)" />
    </svg>
  )
}

/* ─── shared bits ──────────────────────────────────────────── */
function Person({
  x,
  y,
  scale = 1,
  shirt = '#C8334A',
  leg = 'stand',
}: {
  x: number
  y: number
  scale?: number
  shirt?: string
  leg?: 'stand' | 'run'
}) {
  const s = scale
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <ellipse cx="0" cy="2" rx="14" ry="3" fill="rgba(0,0,0,0.25)" />
      {leg === 'run' ? (
        <>
          <polygon points="-9,-2 -3,-2 -1,-40 -7,-40" fill="#3B4566" />
          <polygon points="3,-2 11,-2 13,-30 7,-44" fill="#3B4566" />
          <polygon points="-9,-2 -3,-2 -3,2 -10,2" fill="#5B3A1E" />
          <polygon points="11,-2 14,2 16,4 13,-30" fill="#5B3A1E" />
        </>
      ) : (
        <>
          <polygon points="-9,-2 -3,-2 -3,-44 -8,-44" fill="#3B4566" />
          <polygon points="3,-2 9,-2 9,-44 4,-44" fill="#3B4566" />
          <polygon points="-9,-2 -3,-2 -3,2 -10,2" fill="#5B3A1E" />
          <polygon points="3,-2 9,-2 10,2 2,2" fill="#5B3A1E" />
        </>
      )}
      <polygon points="-12,-44 12,-44 14,-78 -14,-78" fill={shirt} />
      <polygon points="-12,-44 12,-44 11,-50 -11,-50" fill="rgba(0,0,0,0.18)" />
      <polygon points="-14,-78 -12,-44 -18,-50 -20,-72" fill={shirt} />
      <polygon points="14,-78 12,-44 20,-50 18,-72" fill={shirt} />
      <ellipse cx="-19" cy="-46" rx="3" ry="4" fill="#E8B89A" />
      <ellipse cx="19" cy="-46" rx="3" ry="4" fill="#E8B89A" />
      <ellipse cx="0" cy="-90" rx="11" ry="13" fill="#E8B89A" />
      <ellipse cx="0" cy="-100" rx="11" ry="6" fill="#A87454" opacity="0.6" />
    </g>
  )
}

function RetailRobot({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <ellipse cx="0" cy="6" rx="26" ry="5" fill="rgba(0,0,0,0.3)" />
      <polygon points="-22,0 22,0 18,-30 -18,-30" fill="#E8E8E8" stroke="#9B9DA1" strokeWidth="1" />
      <rect x="-12" y="-22" width="24" height="10" fill="#C97A1A" opacity="0.7" />
      {Array.from({ length: 8 }).map((_, i) => (
        <line
          key={i}
          x1={-12 + i * 3}
          y1="-22"
          x2={-12 + i * 3}
          y2="-12"
          stroke="rgba(0,0,0,0.3)"
          strokeWidth="0.8"
        />
      ))}
      <polygon points="-16,-30 16,-30 14,-72 -14,-72" fill="#F2F2F2" stroke="#9B9DA1" strokeWidth="1" />
      <rect x="-44" y="-58" width="32" height="5" fill="#E8E8E8" stroke="#9B9DA1" strokeWidth="0.8" />
      <rect x="-58" y="-60" width="16" height="9" fill="#D8D8D8" stroke="#9B9DA1" strokeWidth="0.8" />
      <circle cx="-52" cy="-56" r="2.5" fill="#2A2A2A" />
      <polygon points="-12,-72 12,-72 10,-96 -10,-96" fill="#F2F2F2" stroke="#9B9DA1" strokeWidth="1" />
      <rect x="-7" y="-90" width="14" height="6" fill="#1A1A1A" />
      <circle cx="-3" cy="-87" r="1.6" fill="#5CE1B6" />
      <circle cx="3" cy="-87" r="1.6" fill="#5CE1B6" />
      <line x1="0" y1="-96" x2="0" y2="-108" stroke="#9B9DA1" strokeWidth="1.2" />
      <circle cx="0" cy="-110" r="2" fill="#FF5B47" />
    </g>
  )
}

function BannerOverhead({
  x,
  y,
  accent,
  fg,
  brand,
  msg,
}: {
  x: number
  y: number
  accent: string
  fg: string
  brand: string
  msg: string
}) {
  const w = 200
  return (
    <g transform={`translate(${x - w / 2} ${y})`}>
      <line
        x1={w / 2}
        y1="22"
        x2={w / 2}
        y2="42"
        stroke="rgba(255,255,255,0.6)"
        strokeWidth="1.2"
        strokeDasharray="2 3"
      />
      <rect x="0" y="-2" width={w} height="24" rx="12" fill={accent} />
      <text x={10} y="14" fontFamily={fonts.mono} fontSize="9" letterSpacing="0.05em" fill={fg} fontWeight="600">
        {brand}
      </text>
      <text x={w - 10} y="14" textAnchor="end" fontFamily={fonts.mono} fontSize="9.5" fill={fg} fontWeight="600">
        {msg}
      </text>
    </g>
  )
}

function SimSidePanel({ scene, events }: { scene: SceneId; events: Event[] }) {
  const info =
    scene === 'retail'
      ? {
          kicker: 'FRESH MART · MOUNTAIN VIEW',
          title: 'Shelf-edge offer drops',
          desc: 'Robot detects shopper dwell time → bids fire → branded banner surfaces at exactly the moment of intent.',
          units: '1,212 units',
          cities: '8 cities',
        }
      : scene === 'home'
        ? {
            kicker: 'BETA HOUSEHOLD · PALO ALTO',
            title: 'Natural in-home recommendations',
            desc: 'Home robot wipes the counter → sees the paper-towel roll is nearly out → casually offers to reorder Bounty.',
            units: '240 households',
            cities: 'Closed beta',
          }
        : {
            kicker: 'ROUTE 4A · SOMA · SF',
            title: 'Side-panel ad surfacing',
            desc: 'Sidewalk bot detects nearby foot traffic → routes geo-fenced bids → side panels display the matched offer.',
            units: '120 units',
            cities: '3 cities',
          }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div
        style={{
          background: p.surface,
          border: `1px solid ${p.line}`,
          borderRadius: 14,
          padding: 18,
        }}
      >
        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 10,
            color: p.fgMute,
            letterSpacing: '0.07em',
            marginBottom: 6,
          }}
        >
          {info.kicker}
        </div>
        <h3
          style={{
            fontFamily: fonts.display,
            fontSize: 20,
            fontWeight: 500,
            letterSpacing: '-0.01em',
            color: p.fg,
            margin: '0 0 8px',
          }}
        >
          {info.title}
        </h3>
        <p style={{ color: p.fgDim, fontSize: 13, lineHeight: 1.5, margin: '0 0 14px' }}>{info.desc}</p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 10,
            borderTop: `1px solid ${p.line}`,
            paddingTop: 12,
          }}
        >
          <div>
            <div style={{ fontFamily: fonts.mono, fontSize: 10, color: p.fgMute, letterSpacing: '0.06em' }}>
              FLEET
            </div>
            <div style={{ fontFamily: fonts.mono, fontSize: 13, color: p.fg, marginTop: 2 }}>{info.units}</div>
          </div>
          <div>
            <div style={{ fontFamily: fonts.mono, fontSize: 10, color: p.fgMute, letterSpacing: '0.06em' }}>
              REACH
            </div>
            <div style={{ fontFamily: fonts.mono, fontSize: 13, color: p.fg, marginTop: 2 }}>{info.cities}</div>
          </div>
        </div>
      </div>
      <div
        style={{
          background: p.surface,
          border: `1px solid ${p.line}`,
          borderRadius: 14,
          padding: 18,
          height: 220,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 12,
          }}
        >
          <span
            style={{ fontFamily: fonts.mono, fontSize: 10, color: p.fgMute, letterSpacing: '0.07em' }}
          >
            SIM EVENT LOG
          </span>
          <span style={{ fontFamily: fonts.mono, fontSize: 10, color: p.accent }}>
            <LiveDot /> &nbsp;STREAMING
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, overflow: 'hidden' }}>
          {[0, 1, 2].map((slot) => {
            const e = events[slot]
            if (!e) {
              return <div key={slot} style={{ height: 36, opacity: 0 }} aria-hidden />
            }
            const isLatest = slot === events.length - 1
            return (
              <div
                key={slot}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr auto',
                  gap: 10,
                  alignItems: 'baseline',
                  opacity: isLatest ? 1 : 0.55,
                  transition: 'opacity .3s',
                  height: 36,
                }}
              >
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 10,
                    color: p.fgMute,
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {e.t}
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: fonts.display,
                      fontSize: 13,
                      color: p.fg,
                      fontWeight: 500,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    <span style={{ color: p.accent }}>● </span>
                    {e.brand} · {e.msg}
                  </div>
                  <div
                    style={{ fontFamily: fonts.mono, fontSize: 10, color: p.fgMute, marginTop: 2 }}
                  >
                    {e.zone}
                  </div>
                </div>
                {e.amt > 0 ? (
                  <span style={{ fontFamily: fonts.mono, fontSize: 11, color: p.accent }}>
                    +${e.amt.toFixed(2)}
                  </span>
                ) : (
                  <span />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
