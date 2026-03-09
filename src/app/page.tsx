"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import CTAButton from "@/components/CTAButton";
import { ROBOT_ENVIRONMENTS } from "@/lib/constants";

/* ═══════════════════════════════════════════════════════════
   SVG ROBOT ILLUSTRATIONS — inline, specific to each env
   ═══════════════════════════════════════════════════════════ */

function RetailRobot() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
      {/* Store shelf background */}
      <rect x="10" y="20" width="100" height="60" rx="4" fill="#F0EBE3" />
      {/* Shelf products — row 1 */}
      <rect x="16" y="28" width="20" height="8" rx="2" fill="#E8544E" opacity="0.75" />
      <rect x="40" y="28" width="20" height="8" rx="2" fill="#4A9E4A" opacity="0.7" />
      <rect x="64" y="28" width="20" height="8" rx="2" fill="#5B8ECC" opacity="0.7" />
      {/* Shelf products — row 2 */}
      <rect x="16" y="40" width="20" height="8" rx="2" fill="#E8A44E" opacity="0.7" />
      <rect x="40" y="40" width="20" height="8" rx="2" fill="#5B8ECC" opacity="0.65" />
      <rect x="64" y="40" width="20" height="8" rx="2" fill="#E8544E" opacity="0.65" />
      {/* Robot body */}
      <rect x="42" y="62" width="36" height="40" rx="8" fill="#2C2418" />
      <rect x="48" y="68" width="24" height="14" rx="4" fill="#C4993D" opacity="0.3" />
      {/* Screen face */}
      <circle cx="55" cy="74" r="2" fill="#C4993D" />
      <circle cx="65" cy="74" r="2" fill="#C4993D" />
      {/* Wheels */}
      <circle cx="50" cy="104" r="4" fill="#5C5346" />
      <circle cx="70" cy="104" r="4" fill="#5C5346" />
      {/* Scan beam — green */}
      <line x1="60" y1="58" x2="88" y2="36" stroke="#4A9E4A" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.6" />
      <circle cx="88" cy="36" r="3" fill="#4A9E4A" opacity="0.4" />
    </svg>
  );
}

function DeliveryRobot() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
      {/* Sky */}
      <rect x="0" y="0" width="120" height="95" fill="#E8F0F8" />
      {/* Ground/sidewalk */}
      <rect x="0" y="85" width="120" height="35" fill="#E8E2D9" />
      {/* Grass hints */}
      <rect x="0" y="85" width="120" height="6" fill="#7D8C6E" opacity="0.25" />
      <line x1="0" y1="91" x2="120" y2="91" stroke="#7D8C6E" strokeWidth="0.5" opacity="0.3" />
      {/* Robot body - boxy delivery bot */}
      <rect x="25" y="55" width="70" height="40" rx="10" fill="#2C2418" />
      {/* Lid */}
      <rect x="30" y="50" width="60" height="10" rx="5" fill="#3D3224" />
      {/* Eyes/sensors */}
      <circle cx="45" cy="72" r="4" fill="#C4993D" opacity="0.6" />
      <circle cx="75" cy="72" r="4" fill="#C4993D" opacity="0.6" />
      {/* Flag — DoorDash-red */}
      <line x1="85" y1="30" x2="85" y2="50" stroke="#5C5346" strokeWidth="1.5" />
      <rect x="85" y="30" width="16" height="10" rx="2" fill="#FF3008" opacity="0.75" />
      {/* Wheels */}
      <circle cx="40" cy="97" r="6" fill="#5C5346" />
      <circle cx="80" cy="97" r="6" fill="#5C5346" />
      <circle cx="40" cy="97" r="3" fill="#3D3224" />
      <circle cx="80" cy="97" r="3" fill="#3D3224" />
    </svg>
  );
}

function HotelRobot() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
      {/* Hotel hallway — burgundy/maroon tones */}
      <rect x="0" y="15" width="120" height="90" fill="#F0E8E2" />
      {/* Doors — warm wood tones */}
      <rect x="5" y="20" width="25" height="40" rx="3" fill="#8B6245" opacity="0.6" />
      <rect x="90" y="20" width="25" height="40" rx="3" fill="#8B6245" opacity="0.6" />
      {/* Door accents */}
      <rect x="13" y="26" width="10" height="3" rx="1" fill="#C4993D" opacity="0.5" />
      <rect x="97" y="26" width="10" height="3" rx="1" fill="#C4993D" opacity="0.5" />
      {/* Burgundy wall trim */}
      <rect x="0" y="15" width="120" height="4" fill="#8B2252" opacity="0.3" />
      {/* Warm carpet floor */}
      <rect x="0" y="100" width="120" height="20" fill="#D4B896" />
      <rect x="0" y="100" width="120" height="4" fill="#8B2252" opacity="0.15" />
      {/* Robot - tall concierge style */}
      <rect x="44" y="45" width="32" height="52" rx="10" fill="#2C2418" />
      {/* Head */}
      <circle cx="60" cy="40" r="12" fill="#2C2418" />
      <circle cx="55" cy="38" r="2" fill="#C4993D" />
      <circle cx="65" cy="38" r="2" fill="#C4993D" />
      {/* Tray */}
      <rect x="30" y="64" width="60" height="3" rx="1.5" fill="#C4993D" opacity="0.6" />
      {/* Food on tray — colored */}
      <rect x="36" y="58" width="12" height="6" rx="2" fill="#E8544E" opacity="0.55" />
      <circle cx="50" cy="61" r="3" fill="#4A9E4A" opacity="0.45" />
      {/* Wheels */}
      <ellipse cx="60" cy="99" rx="14" ry="4" fill="#5C5346" />
    </svg>
  );
}

function CleaningRobot() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
      {/* Floor with shine marks */}
      <rect x="0" y="0" width="120" height="105" fill="#F5F1EC" />
      {/* Clean floor zone — light green tint */}
      <rect x="0" y="95" width="120" height="25" fill="#EAF0E8" />
      {/* Clean streak marks on floor */}
      <path d="M20 98 Q40 92 60 98 Q80 104 100 98" stroke="#7D8C6E" strokeWidth="1" fill="none" opacity="0.35" />
      <path d="M15 104 Q35 98 55 104 Q75 110 95 104" stroke="#7D8C6E" strokeWidth="1" fill="none" opacity="0.3" />
      {/* Sparkle marks — bright gold */}
      <path d="M25 80 L27 76 L29 80 L25 80" fill="#C4993D" opacity="0.55" />
      <path d="M85 72 L87 68 L89 72 L85 72" fill="#C4993D" opacity="0.45" />
      <path d="M50 86 L52 82 L54 86 L50 86" fill="#C4993D" opacity="0.55" />
      <path d="M105 82 L106 79 L107 82 L105 82" fill="#C4993D" opacity="0.4" />
      {/* Robot body — disc-shaped cleaner */}
      <ellipse cx="60" cy="62" rx="34" ry="12" fill="#2C2418" />
      <ellipse cx="60" cy="58" rx="34" ry="12" fill="#3D3224" />
      {/* Top dome */}
      <ellipse cx="60" cy="52" rx="22" ry="8" fill="#2C2418" />
      {/* Sensor strip */}
      <ellipse cx="60" cy="52" rx="16" ry="4" fill="#C4993D" opacity="0.25" />
      {/* Front sensors — eyes */}
      <circle cx="50" cy="52" r="3" fill="#C4993D" opacity="0.5" />
      <circle cx="70" cy="52" r="3" fill="#C4993D" opacity="0.5" />
      {/* Brush bar underneath */}
      <rect x="36" y="68" width="48" height="4" rx="2" fill="#5C5346" />
      {/* Water spray dots — blue */}
      <circle cx="40" cy="76" r="1.5" fill="#5B8ECC" opacity="0.5" />
      <circle cx="52" cy="78" r="1" fill="#5B8ECC" opacity="0.4" />
      <circle cx="68" cy="77" r="1.5" fill="#5B8ECC" opacity="0.5" />
      <circle cx="80" cy="76" r="1" fill="#5B8ECC" opacity="0.4" />
      <circle cx="46" cy="80" r="1" fill="#5B8ECC" opacity="0.35" />
      <circle cx="74" cy="80" r="1" fill="#5B8ECC" opacity="0.35" />
    </svg>
  );
}

function WarehouseRobot() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
      {/* Shelving racks */}
      <rect x="5" y="10" width="20" height="80" rx="2" fill="#E8E2D9" />
      <rect x="95" y="10" width="20" height="80" rx="2" fill="#E8E2D9" />
      {/* Left shelf boxes — colored */}
      <rect x="9" y="18" width="12" height="8" rx="1" fill="#E8544E" opacity="0.6" />
      <rect x="9" y="30" width="12" height="8" rx="1" fill="#5B8ECC" opacity="0.6" />
      <rect x="9" y="42" width="12" height="8" rx="1" fill="#4A9E4A" opacity="0.55" />
      {/* Right shelf boxes — colored */}
      <rect x="99" y="18" width="12" height="8" rx="1" fill="#E8A44E" opacity="0.6" />
      <rect x="99" y="30" width="12" height="8" rx="1" fill="#E8544E" opacity="0.55" />
      <rect x="99" y="42" width="12" height="8" rx="1" fill="#5B8ECC" opacity="0.55" />
      {/* Floor */}
      <rect x="0" y="95" width="120" height="25" fill="#F0EBE3" />
      {/* Robot - flat AMR style */}
      <rect x="35" y="72" width="50" height="22" rx="6" fill="#2C2418" />
      {/* Sensor strip */}
      <rect x="40" y="76" width="40" height="4" rx="2" fill="#C4993D" opacity="0.4" />
      {/* Package on top — orange/brown */}
      <rect x="42" y="58" width="36" height="14" rx="3" fill="#E8A44E" opacity="0.6" />
      <rect x="56" y="62" width="8" height="6" rx="1" fill="#B8734A" opacity="0.5" />
      {/* Wheels */}
      <circle cx="44" cy="96" r="5" fill="#5C5346" />
      <circle cx="76" cy="96" r="5" fill="#5C5346" />
    </svg>
  );
}

function HospitalRobot() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
      {/* Hospital hallway — light blue tint */}
      <rect x="0" y="0" width="120" height="105" fill="#EDF3F8" />
      {/* Cross symbol on wall — teal/green */}
      <rect x="52" y="8" width="16" height="16" rx="2" fill="#FFFFFF" />
      <rect x="57" y="11" width="6" height="10" rx="1" fill="#4A9E4A" opacity="0.6" />
      <rect x="54" y="14" width="12" height="4" rx="1" fill="#4A9E4A" opacity="0.6" />
      {/* Floor — white/blue hospital floor */}
      <rect x="0" y="100" width="120" height="20" fill="#E4ECF2" />
      {/* Robot - medical delivery */}
      <rect x="40" y="40" width="40" height="56" rx="10" fill="#2C2418" />
      {/* Screen — medical teal */}
      <rect x="46" y="46" width="28" height="16" rx="4" fill="#4A9E4A" opacity="0.15" />
      {/* Heart rate line on screen — green */}
      <polyline points="50,54 54,54 56,48 58,58 60,52 64,54 70,54" stroke="#4A9E4A" strokeWidth="1.5" fill="none" opacity="0.7" />
      {/* Compartment */}
      <rect x="46" y="68" width="28" height="12" rx="3" fill="#3D3224" />
      <line x1="60" y1="70" x2="60" y2="78" stroke="#5C5346" strokeWidth="0.5" />
      {/* Wheels */}
      <ellipse cx="60" cy="98" rx="16" ry="4" fill="#5C5346" />
    </svg>
  );
}

function HumanoidRobot() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
      {/* Environment — blue accent floor */}
      <rect x="0" y="100" width="120" height="20" fill="#D8E4F0" />
      {/* Subtle tech glow behind robot */}
      <circle cx="60" cy="60" r="40" fill="#5B8ECC" opacity="0.05" />
      {/* Head */}
      <ellipse cx="60" cy="22" rx="12" ry="14" fill="#2C2418" />
      <circle cx="55" cy="20" r="2.5" fill="#C4993D" opacity="0.6" />
      <circle cx="65" cy="20" r="2.5" fill="#C4993D" opacity="0.6" />
      {/* Neck */}
      <rect x="56" y="35" width="8" height="6" fill="#3D3224" />
      {/* Torso */}
      <rect x="42" y="40" width="36" height="32" rx="6" fill="#2C2418" />
      {/* Chest light — purple/blue tech glow */}
      <circle cx="60" cy="52" r="5" fill="#7B6ECC" opacity="0.2" />
      <circle cx="60" cy="52" r="3" fill="#5B8ECC" opacity="0.5" />
      {/* Arms */}
      <rect x="30" y="42" width="12" height="28" rx="6" fill="#3D3224" />
      <rect x="78" y="42" width="12" height="28" rx="6" fill="#3D3224" />
      {/* Hands */}
      <circle cx="36" cy="72" r="4" fill="#5C5346" />
      <circle cx="84" cy="72" r="4" fill="#5C5346" />
      {/* Legs */}
      <rect x="46" y="72" width="12" height="26" rx="5" fill="#3D3224" />
      <rect x="62" y="72" width="12" height="26" rx="5" fill="#3D3224" />
      {/* Feet */}
      <ellipse cx="52" cy="100" rx="8" ry="3" fill="#5C5346" />
      <ellipse cx="68" cy="100" rx="8" ry="3" fill="#5C5346" />
    </svg>
  );
}

function RestaurantRobot() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
      {/* Restaurant interior — burgundy tint */}
      <rect x="0" y="0" width="120" height="105" fill="#F5EEEA" />
      <rect x="0" y="0" width="120" height="12" fill="#8B2252" opacity="0.12" />
      {/* Table — warm brown */}
      <rect x="10" y="50" width="44" height="4" rx="2" fill="#8B6245" opacity="0.6" />
      <rect x="18" y="54" width="4" height="24" fill="#8B6245" opacity="0.5" />
      <rect x="44" y="54" width="4" height="24" fill="#8B6245" opacity="0.5" />
      {/* Plate on table with colorful food */}
      <ellipse cx="32" cy="48" rx="10" ry="4" fill="#FFFFFF" stroke="#E8E2D9" />
      <circle cx="29" cy="47" r="2" fill="#E8544E" opacity="0.5" />
      <circle cx="34" cy="47" r="2" fill="#4A9E4A" opacity="0.45" />
      <circle cx="31" cy="45" r="1.5" fill="#E8A44E" opacity="0.5" />
      {/* Wine glass — red wine */}
      <rect x="46" y="40" width="5" height="10" rx="1" fill="#FFFFFF" stroke="#E8E2D9" strokeWidth="0.5" />
      <rect x="46" y="40" width="5" height="5" rx="1" fill="#8B2252" opacity="0.3" />
      {/* Floor */}
      <rect x="0" y="100" width="120" height="20" fill="#F0EBE3" />
      {/* Robot — tray-carrying server */}
      <rect x="66" y="38" width="34" height="56" rx="10" fill="#2C2418" />
      {/* Screen face */}
      <rect x="72" y="44" width="22" height="14" rx="4" fill="#B8734A" opacity="0.2" />
      <circle cx="79" cy="50" r="2" fill="#B8734A" opacity="0.6" />
      <circle cx="88" cy="50" r="2" fill="#B8734A" opacity="0.6" />
      {/* Tray arm */}
      <rect x="56" y="56" width="14" height="3" rx="1.5" fill="#C4993D" opacity="0.6" />
      {/* Food on tray — warm colors */}
      <rect x="54" y="50" width="10" height="6" rx="2" fill="#E8544E" opacity="0.45" />
      <circle cx="62" cy="53" r="2" fill="#4A9E4A" opacity="0.4" />
      {/* Wheels */}
      <ellipse cx="83" cy="96" rx="14" ry="4" fill="#5C5346" />
    </svg>
  );
}

const robotIllustrations: Record<string, React.FC> = {
  retail: RetailRobot,
  delivery: DeliveryRobot,
  hotel: HotelRobot,
  cleaning: CleaningRobot,
  warehouse: WarehouseRobot,
  hospital: HospitalRobot,
  humanoid: HumanoidRobot,
  restaurant: RestaurantRobot,
};

/* ═══════════════════════════════════════════════════════════
   HERO PANORAMIC SCENE — city panorama with robots in every environment
   ═══════════════════════════════════════════════════════════ */

function HeroPanorama() {
  return (
    <div className="relative w-full max-w-5xl mx-auto h-[320px] sm:h-[400px] md:h-[480px]">
      <svg
        viewBox="0 0 1000 480"
        fill="none"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="480">
            <stop offset="0%" stopColor="#E8F0F8" />
            <stop offset="30%" stopColor="#F5EEE4" />
            <stop offset="60%" stopColor="#FAF8F5" />
            <stop offset="100%" stopColor="#F0EBE3" />
          </linearGradient>
          <linearGradient id="ground" x1="0" y1="340" x2="0" y2="480">
            <stop offset="0%" stopColor="#E8E2D5" />
            <stop offset="100%" stopColor="#D0C8B8" />
          </linearGradient>
          <linearGradient id="road" x1="0" y1="0" x2="1000" y2="0">
            <stop offset="0%" stopColor="#D4CFC6" />
            <stop offset="50%" stopColor="#CBC4B8" />
            <stop offset="100%" stopColor="#D4CFC6" />
          </linearGradient>
          <linearGradient id="sidewalk" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E8E2D9" />
            <stop offset="100%" stopColor="#DDD7CC" />
          </linearGradient>
          <radialGradient id="beacon-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C4993D" stopOpacity="0.45" />
            <stop offset="35%" stopColor="#C4993D" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#C4993D" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="sun-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F5E6C0" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#F5E6C0" stopOpacity="0" />
          </radialGradient>
          <filter id="soft-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="shadow-sm">
            <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#2C2418" floodOpacity="0.08" />
          </filter>
          <linearGradient id="grocery-awning" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3B8C3B" />
            <stop offset="50%" stopColor="#4A9E4A" />
            <stop offset="100%" stopColor="#3B8C3B" />
          </linearGradient>
          <linearGradient id="hotel-awning" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8B2252" />
            <stop offset="50%" stopColor="#A62D68" />
            <stop offset="100%" stopColor="#8B2252" />
          </linearGradient>
          <linearGradient id="mall-awning" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3366AA" />
            <stop offset="50%" stopColor="#4477BB" />
            <stop offset="100%" stopColor="#3366AA" />
          </linearGradient>
        </defs>

        {/* ═══ SKY ═══ */}
        <rect width="1000" height="480" fill="url(#sky)" />

        {/* ═══ SUN — warm golden glow, top right ═══ */}
        <circle cx="920" cy="25" r="80" fill="url(#sun-glow)" />
        <circle cx="920" cy="25" r="28" fill="#F5E6C0" opacity="0.45" />
        <circle cx="920" cy="25" r="18" fill="#F0D89A" opacity="0.5" />
        <circle cx="920" cy="25" r="10" fill="#E8CC7A" opacity="0.5" />

        {/* ═══ CLOUDS — layered for depth ═══ */}
        <ellipse cx="80" cy="40" rx="90" ry="16" fill="#FFFFFF" opacity="0.5" />
        <ellipse cx="110" cy="36" rx="50" ry="10" fill="#FFFFFF" opacity="0.35" />
        <ellipse cx="300" cy="30" rx="70" ry="13" fill="#FFFFFF" opacity="0.4" />
        <ellipse cx="330" cy="26" rx="40" ry="9" fill="#FFFFFF" opacity="0.28" />
        <ellipse cx="500" cy="38" rx="55" ry="11" fill="#FFFFFF" opacity="0.3" />
        <ellipse cx="680" cy="28" rx="65" ry="12" fill="#FFFFFF" opacity="0.38" />
        <ellipse cx="710" cy="24" rx="38" ry="8" fill="#FFFFFF" opacity="0.25" />
        <ellipse cx="820" cy="42" rx="80" ry="14" fill="#FFFFFF" opacity="0.4" />
        <ellipse cx="850" cy="38" rx="45" ry="9" fill="#FFFFFF" opacity="0.3" />

        {/* ═══ BRAND BUBBLES — arc above Kovio, connected ═══ */}
        {[
          { x: 220, y: 28, label: "Starbucks", color: "#00704A" },
          { x: 310, y: 18, label: "Nike", color: "#111111" },
          { x: 400, y: 14, label: "Coca-Cola", color: "#E61A27" },
          { x: 600, y: 14, label: "DoorDash", color: "#FF3008" },
          { x: 690, y: 18, label: "Chipotle", color: "#A81612" },
          { x: 780, y: 28, label: "Sephora", color: "#111111" },
        ].map((b) => (
          <g key={b.label}>
            {/* Connection line to Kovio */}
            <path d={`M ${b.x} ${b.y + 10} Q ${(b.x + 500) / 2} ${b.y + 30} 500 55`} stroke="#C4993D" strokeWidth="1" strokeDasharray="4 3" opacity="0.2" fill="none" />
            {/* Brand bubble */}
            <rect x={b.x - 30} y={b.y - 9} width="60" height="18" rx="9" fill="#FFFFFF" stroke="#E8E2D9" strokeWidth="0.8" opacity="0.9" />
            <circle cx={b.x - 18} cy={b.y} r="4.5" fill={b.color} opacity="0.5" />
            <text x={b.x + 5} y={b.y + 3.5} textAnchor="middle" fill="#3D3224" fontSize="6.5" fontWeight="600" fontFamily="sans-serif" opacity="0.75">{b.label}</text>
            {/* Animated dot flowing toward Kovio */}
            <circle r="2" fill="#C4993D" opacity="0.5">
              <animateMotion dur={`${5 + Math.random() * 3}s`} repeatCount="indefinite" begin={`${Math.random() * 3}s`} path={`M ${b.x} ${b.y + 10} Q ${(b.x + 500) / 2} ${b.y + 30} 500 55`} />
            </circle>
          </g>
        ))}

        {/* ═══ KOVIO BEACON — LARGE central network hub ═══ */}
        {/* Sunlight glow behind Kovio */}
        <circle cx="500" cy="82" r="100" fill="url(#beacon-glow)" className="beacon-glow-animated" />
        <circle cx="500" cy="82" r="34" fill="#2C2418" filter="url(#soft-glow)" />
        <circle cx="500" cy="82" r="34" fill="none" stroke="#C4993D" strokeWidth="2.5" className="kovio-border-animated" opacity="0.7" />
        <text x="500" y="79" textAnchor="middle" fill="#C4993D" fontSize="13" fontWeight="800" fontFamily="sans-serif" letterSpacing="1.5">KOVIO</text>
        <text x="500" y="93" textAnchor="middle" fill="#D4CFC6" fontSize="7.5" fontFamily="sans-serif">network</text>
        {/* Outer pulse rings */}
        <circle cx="500" cy="82" r="42" fill="none" stroke="#C4993D" strokeWidth="1" opacity="0.2">
          <animate attributeName="r" values="42;75;42" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.25;0;0.25" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="500" cy="82" r="58" fill="none" stroke="#C4993D" strokeWidth="0.6" opacity="0.12">
          <animate attributeName="r" values="58;95;58" dur="4s" begin="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.15;0;0.15" dur="4s" begin="2s" repeatCount="indefinite" />
        </circle>

        {/* ═══ CONNECTION LINES — thicker, with branch nodes ═══ */}
        {/* To Grocery (center ~270, top ~180) */}
        <path d="M 484 110 Q 370 165 270 210" stroke="#C4993D" strokeWidth="2" strokeDasharray="6 4" opacity="0.3" fill="none" />
        <circle cx="378" cy="162" r="3" fill="#C4993D" opacity="0.2" />
        {/* To Hotel (center ~505, top ~170) */}
        <path d="M 500 116 Q 503 160 505 200" stroke="#C4993D" strokeWidth="2" strokeDasharray="6 4" opacity="0.3" fill="none" />
        <circle cx="502" cy="162" r="3" fill="#C4993D" opacity="0.2" />
        {/* To Mall (center ~707, top ~195) */}
        <path d="M 520 110 Q 620 170 707 225" stroke="#C4993D" strokeWidth="2" strokeDasharray="6 4" opacity="0.28" fill="none" />
        <circle cx="615" cy="168" r="3" fill="#C4993D" opacity="0.2" />
        {/* To Delivery robot */}
        <path d="M 475 110 Q 280 260 105 430" stroke="#C4993D" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.22" fill="none" />
        <circle cx="290" cy="258" r="2.5" fill="#C4993D" opacity="0.18" />
        {/* To Humanoid */}
        <path d="M 528 108 Q 690 270 840 420" stroke="#C4993D" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.22" fill="none" />
        <circle cx="680" cy="262" r="2.5" fill="#C4993D" opacity="0.18" />
        {/* To Hospital robot */}
        <path d="M 534 102 Q 730 200 925 320" stroke="#C4993D" strokeWidth="1.2" strokeDasharray="6 4" opacity="0.18" fill="none" />

        {/* Animated pulse dots */}
        <circle r="3.5" fill="#C4993D" opacity="0.65">
          <animateMotion dur="3.5s" repeatCount="indefinite" path="M 484 110 Q 370 165 270 210" />
        </circle>
        <circle r="3.5" fill="#C4993D" opacity="0.6">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 500 116 Q 503 160 505 200" begin="0.5s" />
        </circle>
        <circle r="3" fill="#C4993D" opacity="0.55">
          <animateMotion dur="4s" repeatCount="indefinite" path="M 520 110 Q 620 170 707 225" begin="1s" />
        </circle>
        <circle r="3" fill="#C4993D" opacity="0.5">
          <animateMotion dur="4.5s" repeatCount="indefinite" path="M 475 110 Q 280 260 105 430" begin="1.5s" />
        </circle>
        <circle r="3" fill="#C4993D" opacity="0.5">
          <animateMotion dur="4.2s" repeatCount="indefinite" path="M 528 108 Q 690 270 840 420" begin="2s" />
        </circle>
        <circle r="2.5" fill="#C4993D" opacity="0.4">
          <animateMotion dur="5s" repeatCount="indefinite" path="M 534 102 Q 730 200 925 320" begin="2.5s" />
        </circle>

        {/* ═══ BACKGROUND BUILDINGS ═══ */}
        {/* Tall office — far left */}
        <rect x="15" y="80" width="75" height="290" rx="4" fill="#E0D9CE" />
        <rect x="15" y="80" width="75" height="12" rx="4" fill="#D4CFC6" />
        {[100, 118, 136, 154, 172, 190, 208, 226, 244, 262, 280, 298, 316, 334, 352].map((y) => (
          <g key={`bldg1-${y}`}>
            <rect x="24" y={y} width="10" height="7" rx="1.5" fill="#C4BEB4" />
            <rect x="40" y={y} width="10" height="7" rx="1.5" fill="#C4BEB4" />
            <rect x="56" y={y} width="10" height="7" rx="1.5" fill="#C4BEB4" />
            <rect x="72" y={y} width="10" height="7" rx="1.5" fill="#C4BEB4" />
          </g>
        ))}

        {/* Mid-rise — center-left */}
        <rect x="110" y="155" width="80" height="215" rx="4" fill="#E0D9CE" />
        <rect x="110" y="155" width="80" height="10" rx="4" fill="#D4CFC6" />
        {[174, 194, 214, 234, 254, 274, 294, 312, 330, 348].map((y) => (
          <g key={`mid1-${y}`}>
            <rect x="118" y={y} width="12" height="8" rx="1.5" fill="#C4BEB4" />
            <rect x="136" y={y} width="12" height="8" rx="1.5" fill="#C4BEB4" />
            <rect x="154" y={y} width="12" height="8" rx="1.5" fill="#C4BEB4" />
            <rect x="172" y={y} width="12" height="8" rx="1.5" fill="#C4BEB4" />
          </g>
        ))}

        {/* Apartment — behind grocery, peek above */}
        <rect x="280" y="120" width="55" height="60" rx="4" fill="#E0D9CE" />
        {[130, 148].map((y) => (
          <g key={`apt1-${y}`}>
            <rect x="286" y={y} width="9" height="8" rx="1" fill="#C4BEB4" />
            <rect x="300" y={y} width="9" height="8" rx="1" fill="#C4BEB4" />
            <rect x="314" y={y} width="9" height="8" rx="1" fill="#C4BEB4" />
          </g>
        ))}

        {/* Hospital — right side */}
        <rect x="790" y="90" width="110" height="280" rx="4" fill="#E0D9CE" />
        <rect x="790" y="90" width="110" height="14" rx="4" fill="#D4CFC6" />
        <rect x="830" y="98" width="30" height="30" rx="4" fill="#F5F1EC" />
        <rect x="841" y="102" width="8" height="22" rx="2" fill="#D4584A" opacity="0.5" />
        <rect x="834" y="109" width="22" height="8" rx="2" fill="#D4584A" opacity="0.5" />
        {[140, 162, 184, 206, 228, 250, 272, 294, 312, 330, 348].map((y) => (
          <g key={`hosp-${y}`}>
            <rect x="798" y={y} width="12" height="9" rx="2" fill="#C4BEB4" />
            <rect x="816" y={y} width="12" height="9" rx="2" fill="#C4BEB4" />
            <rect x="834" y={y} width="12" height="9" rx="2" fill="#C4BEB4" />
            <rect x="852" y={y} width="12" height="9" rx="2" fill="#C4BEB4" />
            <rect x="870" y={y} width="12" height="9" rx="2" fill="#C4BEB4" />
          </g>
        ))}

        {/* Smaller building — behind mall, peek above */}
        <rect x="670" y="130" width="50" height="65" rx="4" fill="#E0D9CE" />
        {[140, 158].map((y) => (
          <g key={`sm1-${y}`}>
            <rect x="676" y={y} width="9" height="8" rx="1" fill="#C4BEB4" />
            <rect x="690" y={y} width="9" height="8" rx="1" fill="#C4BEB4" />
            <rect x="704" y={y} width="9" height="8" rx="1" fill="#C4BEB4" />
          </g>
        ))}

        {/* ═══ GROUND PLANE — pushed down for more building room ═══ */}
        <rect y="370" width="1000" height="110" fill="url(#ground)" />
        <rect y="370" width="1000" height="25" fill="url(#sidewalk)" />
        <line x1="0" y1="370" x2="1000" y2="370" stroke="#D4CFC6" strokeWidth="1.2" />
        <rect y="395" width="1000" height="35" fill="url(#road)" />
        <line x1="0" y1="412" x2="1000" y2="412" stroke="#B8B0A4" strokeWidth="1" strokeDasharray="14 10" />
        <line x1="0" y1="430" x2="1000" y2="430" stroke="#D4CFC6" strokeWidth="0.8" />
        {/* Crosswalk */}
        <g opacity="0.3">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={`cw-${i}`} x={460 + i * 14} y="395" width="8" height="35" rx="1" fill="#FFFFFF" />
          ))}
        </g>

        {/* ═══ GROCERY STORE — bigger, spread left ═══ */}
        <g filter="url(#shadow-sm)">
          <rect x="155" y="180" width="230" height="190" rx="6" fill="#FFFFFF" stroke="#D4CFC6" strokeWidth="1.2" />
        </g>
        <path d="M 152 180 L 388 180 L 390 194 L 150 194 Z" fill="url(#grocery-awning)" opacity="0.85" />
        <path d="M 150 194 Q 165 201 180 194 Q 195 201 210 194 Q 225 201 240 194 Q 255 201 270 194 Q 285 201 300 194 Q 315 201 330 194 Q 345 201 360 194 Q 375 201 390 194" stroke="#3B8C3B" strokeWidth="1" fill="none" opacity="0.5" />
        <rect x="185" y="198" width="195" height="20" rx="3" fill="#4A9E4A" opacity="0.12" />
        <ellipse cx="200" cy="208" rx="5" ry="6" fill="#4A9E4A" opacity="0.5" transform="rotate(-20 200 208)" />
        <line x1="200" y1="212" x2="200" y2="205" stroke="#4A9E4A" strokeWidth="0.8" opacity="0.4" />
        <text x="270" y="213" textAnchor="middle" fill="#3B7A3B" fontSize="13" fontWeight="700" fontFamily="sans-serif">Fresh Mart</text>
        {/* Shelving */}
        <rect x="165" y="224" width="100" height="70" rx="3" fill="#F8F5EF" />
        <rect x="173" y="232" width="12" height="8" rx="1" fill="#E8544E" opacity="0.5" /><rect x="189" y="232" width="12" height="8" rx="1" fill="#E8A44E" opacity="0.5" /><rect x="205" y="232" width="12" height="8" rx="1" fill="#4A9E4A" opacity="0.4" /><rect x="221" y="232" width="12" height="8" rx="1" fill="#5B8ECC" opacity="0.4" /><rect x="237" y="232" width="12" height="8" rx="1" fill="#D4A843" opacity="0.4" />
        <rect x="173" y="246" width="12" height="8" rx="1" fill="#D4A843" opacity="0.4" /><rect x="189" y="246" width="12" height="8" rx="1" fill="#4A9E4A" opacity="0.4" /><rect x="205" y="246" width="12" height="8" rx="1" fill="#E8544E" opacity="0.4" /><rect x="221" y="246" width="12" height="8" rx="1" fill="#E8A44E" opacity="0.4" /><rect x="237" y="246" width="12" height="8" rx="1" fill="#5B8ECC" opacity="0.4" />
        <rect x="173" y="260" width="12" height="8" rx="1" fill="#5B8ECC" opacity="0.4" /><rect x="189" y="260" width="12" height="8" rx="1" fill="#D4A843" opacity="0.4" /><rect x="205" y="260" width="12" height="8" rx="1" fill="#E8544E" opacity="0.35" /><rect x="221" y="260" width="12" height="8" rx="1" fill="#4A9E4A" opacity="0.35" /><rect x="237" y="260" width="12" height="8" rx="1" fill="#E8A44E" opacity="0.35" />
        {/* Fridge */}
        <rect x="280" y="224" width="90" height="110" rx="3" fill="#E8F4F8" opacity="0.5" />
        <rect x="286" y="230" width="30" height="40" rx="2" fill="#FFFFFF" stroke="#D4E8EE" strokeWidth="0.5" />
        <rect x="322" y="230" width="30" height="40" rx="2" fill="#FFFFFF" stroke="#D4E8EE" strokeWidth="0.5" />

        {/* Retail robot */}
        <g className="animate-float-slow" style={{ animationDelay: "0s" }}>
          <rect x="210" y="300" width="34" height="42" rx="8" fill="#1A1208" />
          <rect x="215" y="306" width="24" height="14" rx="3" fill="#C4993D" opacity="0.35" />
          <circle cx="224" cy="312" r="2.5" fill="#C4993D" /><circle cx="235" cy="312" r="2.5" fill="#C4993D" />
          <line x1="244" y1="314" x2="261" y2="270" stroke="#1A1208" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="261" cy="269" r="4.5" fill="#C4993D" opacity="0.5" />
          <circle cx="217" cy="344" r="4.5" fill="#3D3224" /><circle cx="237" cy="344" r="4.5" fill="#3D3224" />
        </g>
        {/* Shopper — bigger, more visible */}
        <circle cx="310" cy="300" r="10" fill="#B8734A" opacity="0.7" />
        <rect x="303" y="312" width="14" height="24" rx="4" fill="#B8734A" opacity="0.6" />
        <rect x="298" y="336" width="9" height="16" rx="3" fill="#B8734A" opacity="0.55" /><rect x="313" y="336" width="9" height="16" rx="3" fill="#B8734A" opacity="0.55" />
        {/* Shopping bag */}
        <rect x="319" y="326" width="10" height="12" rx="2" fill="#4A9E4A" opacity="0.35" />

        {/* Grocery Speech Bubble */}
        <rect x="300" y="250" width="96" height="40" rx="6" fill="#FFFFFF" stroke="#D4CFC6" strokeWidth="0.8" />
        <text x="348" y="265" textAnchor="middle" fill="#3D3224" fontSize="7" fontWeight="700" fontFamily="sans-serif">Looking for drinks?</text>
        <text x="348" y="276" textAnchor="middle" fill="#E61A27" fontSize="6.5" fontWeight="600" fontFamily="sans-serif">Coca-Cola 20% off</text>
        <text x="348" y="287" textAnchor="middle" fill="#9C9488" fontSize="5" fontFamily="sans-serif">Sponsored · Aisle 3</text>
        <polygon points="325,290 331,290 328,296" fill="#FFFFFF" />

        {/* Revenue tag */}
        <g opacity="0.9">
          <rect x="234" y="356" width="72" height="16" rx="8" fill="#C4993D" opacity="0.18" />
          <text x="270" y="367" textAnchor="middle" fill="#8B6B2A" fontSize="7" fontWeight="700" fontFamily="sans-serif">+$0.55 interaction</text>
        </g>

        {/* ═══ HOTEL — bigger, centered ═══ */}
        <g filter="url(#shadow-sm)">
          <rect x="400" y="170" width="210" height="200" rx="6" fill="#FFFFFF" stroke="#D4CFC6" strokeWidth="1.2" />
        </g>
        <path d="M 397 170 L 613 170 L 615 184 L 395 184 Z" fill="url(#hotel-awning)" opacity="0.8" />
        <path d="M 395 184 Q 410 191 425 184 Q 440 191 455 184 Q 470 191 485 184 Q 500 191 515 184 Q 530 191 545 184 Q 560 191 575 184 Q 590 191 605 184 Q 615 191 615 184" stroke="#8B2252" strokeWidth="0.8" fill="none" opacity="0.4" />
        <rect x="469" y="188" width="72" height="16" rx="3" fill="#2C2418" />
        <text x="505" y="200" textAnchor="middle" fill="#C4993D" fontSize="11" fontWeight="700" fontFamily="sans-serif">HOTEL</text>
        {[212, 238, 264].map((wy) => (
          <g key={`hw-${wy}`}>
            <rect x="410" y={wy} width="22" height="16" rx="2" fill="#E8DFD2" /><rect x="440" y={wy} width="22" height="16" rx="2" fill="#E8DFD2" /><rect x="470" y={wy} width="22" height="16" rx="2" fill="#E8DFD2" /><rect x="500" y={wy} width="22" height="16" rx="2" fill="#E8DFD2" /><rect x="530" y={wy} width="22" height="16" rx="2" fill="#FBF4E4" /><rect x="560" y={wy} width="22" height="16" rx="2" fill="#E8DFD2" /><rect x="580" y={wy} width="22" height="16" rx="2" fill="#E8DFD2" />
          </g>
        ))}
        <rect x="475" y="295" width="65" height="75" rx="3" fill="#F0EBE3" />
        <rect x="480" y="297" width="26" height="73" rx="2" fill="#E8E2D9" /><rect x="510" y="297" width="26" height="73" rx="2" fill="#E8E2D9" />

        {/* Hotel robot */}
        <g className="animate-float-slow" style={{ animationDelay: "0.8s" }}>
          <circle cx="440" cy="318" r="12" fill="#1A1208" />
          <circle cx="436" cy="316" r="2.5" fill="#C4993D" /><circle cx="444" cy="316" r="2.5" fill="#C4993D" />
          <rect x="428" y="330" width="24" height="32" rx="7" fill="#1A1208" />
          <line x1="426" y1="340" x2="412" y2="328" stroke="#1A1208" strokeWidth="3" strokeLinecap="round" />
          <rect x="400" y="322" width="16" height="7" rx="2" fill="#D4CFC6" />
          <rect x="403" y="318" width="8" height="5" rx="1" fill="#E8A44E" opacity="0.5" />
          <circle cx="436" cy="364" r="4.5" fill="#3D3224" /><circle cx="448" cy="364" r="4.5" fill="#3D3224" />
        </g>
        {/* Guest — bigger, more visible */}
        <circle cx="565" cy="315" r="11" fill="#5B8ECC" opacity="0.65" />
        <rect x="558" y="328" width="14" height="24" rx="4" fill="#5B8ECC" opacity="0.55" />
        <rect x="553" y="352" width="9" height="16" rx="3" fill="#5B8ECC" opacity="0.5" /><rect x="568" y="352" width="9" height="16" rx="3" fill="#5B8ECC" opacity="0.5" />
        {/* Luggage */}
        <rect x="580" y="346" width="12" height="18" rx="2.5" fill="#8B6B3E" opacity="0.5" />
        <rect x="582" y="343" width="8" height="4" rx="1" fill="#8B6B3E" opacity="0.4" />

        {/* Hotel Speech Bubble */}
        <rect x="540" y="270" width="86" height="38" rx="6" fill="#FFFFFF" stroke="#D4CFC6" strokeWidth="0.8" />
        <text x="583" y="284" textAnchor="middle" fill="#3D3224" fontSize="7" fontWeight="700" fontFamily="sans-serif">Hungry?</text>
        <text x="583" y="295" textAnchor="middle" fill="#A81612" fontSize="6.5" fontWeight="600" fontFamily="sans-serif">Chipotle: 10% off</text>
        <text x="583" y="305" textAnchor="middle" fill="#9C9488" fontSize="5" fontFamily="sans-serif">Sponsored · Guest offer</text>
        <polygon points="556,308 562,308 559,314" fill="#FFFFFF" />

        {/* Revenue tag */}
        <g opacity="0.9">
          <rect x="473" y="356" width="64" height="16" rx="8" fill="#C4993D" opacity="0.18" />
          <text x="505" y="367" textAnchor="middle" fill="#8B6B2A" fontSize="7" fontWeight="700" fontFamily="sans-serif">+$0.45 referral</text>
        </g>

        {/* ═══ MALL — bigger, spread right ═══ */}
        <g filter="url(#shadow-sm)">
          <rect x="625" y="195" width="165" height="175" rx="6" fill="#FFFFFF" stroke="#D4CFC6" strokeWidth="1.2" />
        </g>
        <path d="M 622 195 L 793 195 L 795 208 L 620 208 Z" fill="url(#mall-awning)" opacity="0.75" />
        <path d="M 620 208 Q 635 215 650 208 Q 665 215 680 208 Q 695 215 710 208 Q 725 215 740 208 Q 755 215 770 208 Q 785 215 795 208" stroke="#3366AA" strokeWidth="0.8" fill="none" opacity="0.4" />
        <text x="707" y="226" textAnchor="middle" fill="#3366AA" fontSize="11" fontWeight="700" fontFamily="sans-serif" opacity="0.7">CITY MALL</text>
        <rect x="635" y="238" width="60" height="55" rx="3" fill="#F8F5EF" />
        <rect x="705" y="238" width="60" height="55" rx="3" fill="#F8F5EF" />
        <rect x="641" y="244" width="12" height="14" rx="1" fill="#E8544E" opacity="0.25" /><rect x="657" y="244" width="12" height="14" rx="1" fill="#5B8ECC" opacity="0.25" /><rect x="673" y="244" width="12" height="14" rx="1" fill="#D4A843" opacity="0.25" />
        <rect x="711" y="244" width="12" height="14" rx="1" fill="#D4A843" opacity="0.3" /><rect x="727" y="244" width="12" height="14" rx="1" fill="#4A9E4A" opacity="0.25" /><rect x="743" y="244" width="12" height="14" rx="1" fill="#E8544E" opacity="0.25" />

        {/* Cleaning robot */}
        <g className="animate-float-slow" style={{ animationDelay: "1.5s" }}>
          <ellipse cx="707" cy="318" rx="22" ry="9" fill="#1A1208" />
          <ellipse cx="707" cy="314" rx="18" ry="7" fill="#2C1E10" />
          <circle cx="697" cy="314" r="3" fill="#C4993D" opacity="0.6" /><circle cx="717" cy="314" r="3" fill="#C4993D" opacity="0.6" />
          <circle cx="683" cy="322" r="2.5" fill="#5B8ECC" opacity="0.2" /><circle cx="673" cy="320" r="2" fill="#5B8ECC" opacity="0.15" />
        </g>

        {/* Mall Speech Bubble */}
        <rect x="720" y="296" width="80" height="30" rx="6" fill="#FFFFFF" stroke="#D4CFC6" strokeWidth="0.8" />
        <text x="760" y="309" textAnchor="middle" fill="#111111" fontSize="6.5" fontWeight="700" fontFamily="sans-serif">Nike: new drop!</text>
        <text x="760" y="321" textAnchor="middle" fill="#9C9488" fontSize="5.5" fontFamily="sans-serif">Want directions? →</text>
        <polygon points="736,326 742,326 739,332" fill="#FFFFFF" />

        {/* Revenue tag */}
        <g opacity="0.85">
          <rect x="673" y="340" width="68" height="16" rx="8" fill="#C4993D" opacity="0.18" />
          <text x="707" y="351" textAnchor="middle" fill="#8B6B2A" fontSize="7" fontWeight="700" fontFamily="sans-serif">+$0.30 promotion</text>
        </g>

        {/* ═══ STREET LEVEL ═══ */}
        {/* Delivery robot — far left */}
        <g className="animate-float-slow" style={{ animationDelay: "0.3s" }}>
          <rect x="80" y="430" width="50" height="28" rx="8" fill="#1A1208" />
          <rect x="86" y="422" width="38" height="10" rx="5" fill="#2C1E10" />
          <circle cx="98" cy="442" r="3.5" fill="#C4993D" opacity="0.6" /><circle cx="118" cy="442" r="3.5" fill="#C4993D" opacity="0.6" />
          <circle cx="92" cy="460" r="5" fill="#3D3224" /><circle cx="120" cy="460" r="5" fill="#3D3224" />
          <line x1="120" y1="408" x2="120" y2="422" stroke="#5C5346" strokeWidth="1.5" />
          <rect x="120" y="406" width="16" height="9" rx="2" fill="#FF3008" opacity="0.45" />
          <rect x="92" y="414" width="20" height="12" rx="2.5" fill="#D4A843" opacity="0.35" />
        </g>

        {/* Delivery Speech Bubble */}
        <rect x="60" y="386" width="90" height="30" rx="6" fill="#FFFFFF" stroke="#D4CFC6" strokeWidth="0.8" />
        <text x="105" y="399" textAnchor="middle" fill="#FF3008" fontSize="6.5" fontWeight="700" fontFamily="sans-serif">DoorDash special!</text>
        <text x="105" y="411" textAnchor="middle" fill="#3D3224" fontSize="6" fontFamily="sans-serif">Free drink with order</text>
        <polygon points="100,416 106,416 103,422" fill="#FFFFFF" />
        {/* Revenue tag */}
        <g opacity="0.85">
          <rect x="72" y="466" width="62" height="14" rx="7" fill="#C4993D" opacity="0.18" />
          <text x="103" y="476" textAnchor="middle" fill="#8B6B2A" fontSize="6.5" fontWeight="700" fontFamily="sans-serif">+$0.40 upsell</text>
        </g>

        {/* Receiving person — bigger */}
        <circle cx="48" cy="436" r="10" fill="#B8734A" opacity="0.7" />
        <rect x="42" y="448" width="12" height="22" rx="3.5" fill="#B8734A" opacity="0.6" />
        <rect x="38" y="470" width="8" height="10" rx="2.5" fill="#B8734A" opacity="0.55" /><rect x="50" y="470" width="8" height="10" rx="2.5" fill="#B8734A" opacity="0.55" />

        {/* Parent + child — bigger */}
        <circle cx="180" cy="438" r="10" fill="#8B6B3E" opacity="0.7" />
        <rect x="174" y="450" width="12" height="24" rx="3.5" fill="#8B6B3E" opacity="0.6" />
        <rect x="170" y="474" width="8" height="10" rx="2.5" fill="#8B6B3E" opacity="0.55" /><rect x="182" y="474" width="8" height="10" rx="2.5" fill="#8B6B3E" opacity="0.55" />
        <circle cx="200" cy="450" r="7" fill="#D4A843" opacity="0.6" />
        <rect x="196" y="458" width="8" height="18" rx="2.5" fill="#D4A843" opacity="0.5" />
        <line x1="186" y1="458" x2="196" y2="462" stroke="#C4993D" strokeWidth="1.2" opacity="0.35" />

        {/* Humanoid robot + person — right side */}
        <g className="animate-float-slow" style={{ animationDelay: "1.2s" }}>
          <ellipse cx="840" cy="420" rx="11" ry="13" fill="#1A1208" />
          <circle cx="835" cy="418" r="2.5" fill="#C4993D" opacity="0.6" /><circle cx="845" cy="418" r="2.5" fill="#C4993D" opacity="0.6" />
          <rect x="830" y="433" width="20" height="28" rx="5" fill="#1A1208" />
          <circle cx="840" cy="444" r="3" fill="#C4993D" opacity="0.2" />
          <rect x="822" y="436" width="8" height="20" rx="4" fill="#2C1E10" /><rect x="850" y="436" width="8" height="20" rx="4" fill="#2C1E10" />
          <rect x="816" y="454" width="14" height="14" rx="2" fill="#C4993D" opacity="0.3" />
          <rect x="832" y="461" width="8" height="18" rx="4" fill="#2C1E10" /><rect x="842" y="461" width="8" height="18" rx="4" fill="#2C1E10" />
        </g>
        <rect x="826" y="408" width="28" height="11" rx="3" fill="#2C2418" />
        <text x="840" y="417" textAnchor="middle" fill="#C4993D" fontSize="6.5" fontWeight="700" fontFamily="sans-serif">KOVIO</text>

        {/* Humanoid Speech Bubble */}
        <rect x="860" y="400" width="84" height="30" rx="6" fill="#FFFFFF" stroke="#D4CFC6" strokeWidth="0.8" />
        <text x="902" y="413" textAnchor="middle" fill="#3D3224" fontSize="7" fontWeight="700" fontFamily="sans-serif">Need coffee?</text>
        <text x="902" y="425" textAnchor="middle" fill="#00704A" fontSize="6" fontWeight="600" fontFamily="sans-serif">Starbucks — 2 min away</text>
        <polygon points="872,430 878,430 875,436" fill="#FFFFFF" />
        {/* Revenue tag */}
        <g opacity="0.85">
          <rect x="856" y="434" width="88" height="14" rx="7" fill="#C4993D" opacity="0.18" />
          <text x="900" y="444" textAnchor="middle" fill="#8B6B2A" fontSize="6.5" fontWeight="700" fontFamily="sans-serif">+$0.35 recommendation</text>
        </g>

        {/* Person next to humanoid — bigger */}
        <circle cx="880" cy="452" r="10" fill="#5B8ECC" opacity="0.6" />
        <rect x="874" y="464" width="12" height="22" rx="3.5" fill="#5B8ECC" opacity="0.55" />

        {/* Hospital robot */}
        <g className="animate-float-slow" style={{ animationDelay: "2s" }}>
          <rect x="910" y="320" width="30" height="44" rx="8" fill="#1A1208" />
          <rect x="916" y="326" width="18" height="14" rx="3" fill="#4A9E4A" opacity="0.3" />
          <circle cx="922" cy="332" r="2.5" fill="#4A9E4A" opacity="0.6" /><circle cx="930" cy="332" r="2.5" fill="#4A9E4A" opacity="0.6" />
          <rect x="904" y="314" width="40" height="7" rx="2.5" fill="#D4CFC6" />
          <rect x="910" y="310" width="8" height="5" rx="1.5" fill="#D4584A" opacity="0.25" /><rect x="924" y="310" width="8" height="5" rx="1.5" fill="#4A9E4A" opacity="0.2" />
        </g>

        {/* ═══ TREES ═══ */}
        {/* Tree between grocery and hotel (gap: 385-400) */}
        <rect x="390" y="377" width="4" height="18" fill="#7A5C32" opacity="0.55" />
        <circle cx="392" cy="371" r="11" fill="#3E8C2E" opacity="0.4" /><circle cx="386" cy="367" r="8" fill="#52A83E" opacity="0.35" /><circle cx="398" cy="366" r="9" fill="#2E7A22" opacity="0.32" />
        {/* Tree between hotel and mall (gap: 610-625) */}
        <rect x="615" y="377" width="4" height="18" fill="#7A5C32" opacity="0.55" />
        <circle cx="617" cy="371" r="11" fill="#3E8C2E" opacity="0.4" /><circle cx="611" cy="367" r="8" fill="#52A83E" opacity="0.35" /><circle cx="623" cy="366" r="9" fill="#2E7A22" opacity="0.32" />

        {/* Street lamps */}
        <line x1="142" y1="380" x2="142" y2="430" stroke="#C4BEB4" strokeWidth="2.5" />
        <ellipse cx="142" cy="378" rx="9" ry="3.5" fill="#C4BEB4" />
        <circle cx="142" cy="377" r="3" fill="#F0D89A" opacity="0.3" />
        <line x1="617" y1="380" x2="617" y2="430" stroke="#C4BEB4" strokeWidth="2.5" />
        <ellipse cx="617" cy="378" rx="9" ry="3.5" fill="#C4BEB4" />
        <circle cx="617" cy="377" r="3" fill="#F0D89A" opacity="0.3" />
      </svg>
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════
   SECTION 4 — Architecture Flow Diagram
   ═══════════════════════════════════════════════════════════ */

function ArchitectureFlow() {
  return (
    <div className="max-w-5xl mx-auto">
      <svg viewBox="0 0 900 560" fill="none" className="w-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <radialGradient id="eco-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C4993D" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#C4993D" stopOpacity="0" />
          </radialGradient>
          <marker id="arrow-gold" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0,0 10,3.5 0,7" fill="#C4993D" opacity="0.8" />
          </marker>
        </defs>

        {/* Central glow */}
        <circle cx="450" cy="268" r="130" fill="url(#eco-glow)" />

        {/* ═══ FLOW ARROWS ═══ */}

        {/* 1. Brands → Kovio */}
        <path d="M 275 140 C 315 165, 340 200, 368 238" stroke="#C4993D" strokeWidth="2" className="flow-line-animated" opacity="0.45" fill="none" markerEnd="url(#arrow-gold)" />
        {/* 2. Kovio → Robot Fleets */}
        <path d="M 532 238 C 560 200, 585 165, 625 140" stroke="#C4993D" strokeWidth="2" className="flow-line-animated" opacity="0.45" fill="none" markerEnd="url(#arrow-gold)" />
        {/* 3. Robot Fleets → Interactions */}
        <path d="M 748 175 C 764 260, 764 340, 748 400" stroke="#C4993D" strokeWidth="2" className="flow-line-animated" opacity="0.45" fill="none" markerEnd="url(#arrow-gold)" />
        {/* 4. Interactions → Insights */}
        <path d="M 618 455 C 510 490, 390 490, 282 455" stroke="#C4993D" strokeWidth="2" className="flow-line-animated" opacity="0.45" fill="none" markerEnd="url(#arrow-gold)" />
        {/* 5. Insights → Brands */}
        <path d="M 152 400 C 136 340, 136 225, 152 175" stroke="#C4993D" strokeWidth="2" className="flow-line-animated" opacity="0.45" fill="none" markerEnd="url(#arrow-gold)" />

        {/* Animated pulse dots */}
        <circle r="4" fill="#C4993D" opacity="0.6">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 275 140 C 315 165, 340 200, 368 238" />
        </circle>
        <circle r="4" fill="#C4993D" opacity="0.6">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 532 238 C 560 200, 585 165, 625 140" begin="0.6s" />
        </circle>
        <circle r="4" fill="#C4993D" opacity="0.6">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 748 175 C 764 260, 764 340, 748 400" begin="1.2s" />
        </circle>
        <circle r="4" fill="#C4993D" opacity="0.6">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 618 455 C 510 490, 390 490, 282 455" begin="1.8s" />
        </circle>
        <circle r="4" fill="#C4993D" opacity="0.6">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 152 400 C 136 340, 136 225, 152 175" begin="2.4s" />
        </circle>

        {/* ═══ ARROW LABELS — clean, horizontal ═══ */}
        <text x="305" y="185" fill="#5C5346" fontSize="10" fontWeight="500" fontFamily="sans-serif">Fund campaigns</text>
        <text x="563" y="185" fill="#5C5346" fontSize="10" fontWeight="500" fontFamily="sans-serif">Route to fleets</text>
        <text x="778" y="290" fill="#5C5346" fontSize="10" fontWeight="500" fontFamily="sans-serif">Engage</text>
        <text x="450" y="508" fill="#5C5346" fontSize="10" fontWeight="500" fontFamily="sans-serif" textAnchor="middle">Generate data</text>
        <text x="118" y="290" fill="#5C5346" fontSize="10" fontWeight="500" fontFamily="sans-serif" textAnchor="end">Measure</text>

        {/* ═══ NODE: BRANDS — top left ═══ */}
        <rect x="65" y="70" width="210" height="100" rx="14" fill="#EDF3FA" stroke="#C2D6EC" strokeWidth="1.5" />
        {/* Icons */}
        <rect x="85" y="92" width="22" height="18" rx="3" fill="#FFFFFF" stroke="#C2D6EC" strokeWidth="0.8" />
        <rect x="90" y="88" width="12" height="5" rx="1" fill="#C4993D" opacity="0.45" />
        {/* Mini chart bars — distinct colors ascending */}
        <rect x="116" y="102" width="5" height="8" rx="1" fill="#5B8ECC" opacity="0.55" />
        <rect x="124" y="98" width="5" height="12" rx="1" fill="#4A9E4A" opacity="0.55" />
        <rect x="132" y="93" width="5" height="17" rx="1" fill="#C4993D" opacity="0.65" />
        <text x="155" y="103" fill="#2C2418" fontSize="18" fontWeight="700" fontFamily="sans-serif">Brands</text>
        <text x="85" y="134" fill="#3D3224" fontSize="11" fontFamily="sans-serif">Campaigns &amp; marketing budgets</text>
        <text x="85" y="152" fill="#A67C2E" fontSize="9.5" fontWeight="600" fontFamily="sans-serif">$ Fund robot interactions</text>

        {/* ═══ NODE: ROBOT FLEETS — top right ═══ */}
        <rect x="625" y="70" width="210" height="108" rx="14" fill="#EDF5ED" stroke="#B8D8B8" strokeWidth="1.5" />
        {/* Mini robots — colored by type */}
        {/* Retail robot — dark */}
        <rect x="645" y="95" width="18" height="11" rx="3" fill="#2C2418" opacity="0.85" />
        <circle cx="651" cy="99" r="1.5" fill="#C4993D" opacity="0.6" />
        <circle cx="659" cy="99" r="1.5" fill="#C4993D" opacity="0.6" />
        <circle cx="649" cy="108" r="2" fill="#5C5346" />
        <circle cx="659" cy="108" r="2" fill="#5C5346" />
        {/* Delivery robot — blue-grey */}
        <rect x="670" y="90" width="14" height="18" rx="5" fill="#3D4A5C" opacity="0.8" />
        <circle cx="674" cy="96" r="1.5" fill="#C4993D" opacity="0.6" />
        <circle cx="680" cy="96" r="1.5" fill="#C4993D" opacity="0.6" />
        {/* Cleaning robot — green-grey */}
        <ellipse cx="700" cy="104" rx="10" ry="4" fill="#4A5C46" opacity="0.7" />
        <circle cx="697" cy="102" r="1.5" fill="#C4993D" opacity="0.5" />
        <circle cx="703" cy="102" r="1.5" fill="#C4993D" opacity="0.5" />
        <text x="720" y="102" fill="#2C2418" fontSize="16" fontWeight="700" fontFamily="sans-serif">Robot</text>
        <text x="720" y="118" fill="#2C2418" fontSize="16" fontWeight="700" fontFamily="sans-serif">Fleets</text>
        <text x="645" y="140" fill="#3D3224" fontSize="10.5" fontFamily="sans-serif">Deliver interactions across</text>
        <text x="645" y="153" fill="#3D3224" fontSize="10.5" fontFamily="sans-serif">all environments</text>
        <text x="645" y="166" fill="#A67C2E" fontSize="9.5" fontWeight="600" fontFamily="sans-serif">$ Earn revenue share</text>

        {/* ═══ NODE: KOVIO — center ═══ */}
        <rect x="350" y="228" width="200" height="80" rx="16" fill="#2C2418" />
        <rect x="350" y="228" width="200" height="80" rx="16" fill="none" stroke="#C4993D" strokeWidth="2.5" className="kovio-border-animated" opacity="0.85" />
        <text x="450" y="262" textAnchor="middle" fill="#C4993D" fontSize="24" fontWeight="800" fontFamily="sans-serif">Kovio</text>
        <text x="450" y="282" textAnchor="middle" fill="#FAF8F5" fontSize="11.5" fontFamily="sans-serif">Economic interaction layer</text>
        <text x="450" y="298" textAnchor="middle" fill="#9C9488" fontSize="9" fontFamily="sans-serif">Connecting brands to robots at scale</text>

        {/* ═══ NODE: INTERACTIONS — bottom right ═══ */}
        <rect x="618" y="400" width="218" height="110" rx="14" fill="#FBF4E4" stroke="#C4993D" strokeWidth="1.2" />
        {/* Monetizable badge inside card */}
        <rect x="636" y="410" width="90" height="20" rx="10" fill="#C4993D" opacity="0.15" />
        <text x="681" y="424" textAnchor="middle" fill="#A67C2E" fontSize="8.5" fontWeight="700" fontFamily="sans-serif">$ Monetizable</text>
        {/* Person — colored */}
        <circle cx="650" cy="452" r="7" fill="#B8734A" opacity="0.7" />
        <rect x="645" y="460" width="10" height="13" rx="3" fill="#B8734A" opacity="0.6" />
        {/* Robot — with face color */}
        <rect x="668" y="448" width="18" height="22" rx="6" fill="#2C2418" opacity="0.85" />
        <circle cx="674" cy="455" r="2" fill="#C4993D" opacity="0.7" />
        <circle cx="680" cy="455" r="2" fill="#C4993D" opacity="0.7" />
        {/* Spark */}
        <circle cx="662" cy="458" r="4" fill="#C4993D" opacity="0.2" />
        <text x="698" y="452" fill="#2C2418" fontSize="14" fontWeight="700" fontFamily="sans-serif">Real-world</text>
        <text x="698" y="469" fill="#2C2418" fontSize="14" fontWeight="700" fontFamily="sans-serif">Interactions</text>
        <text x="636" y="494" fill="#3D3224" fontSize="10.5" fontFamily="sans-serif">Branded robot moments</text>

        {/* ═══ NODE: INSIGHTS — bottom left ═══ */}
        <rect x="65" y="400" width="218" height="110" rx="14" fill="#F0EDF5" stroke="#C8BED8" strokeWidth="1.5" />
        {/* Chart icon */}
        <rect x="85" y="422" width="46" height="30" rx="3" fill="#FFFFFF" />
        <polyline points="92,446 100,436 108,440 116,430 124,434" stroke="#C4993D" strokeWidth="1.8" fill="none" opacity="0.7" />
        {/* Colored chart bars */}
        <rect x="92" y="448" width="5" height="4" rx="1" fill="#5B8ECC" opacity="0.55" />
        <rect x="100" y="446" width="5" height="6" rx="1" fill="#4A9E4A" opacity="0.55" />
        <rect x="108" y="444" width="5" height="8" rx="1" fill="#E8A44E" opacity="0.6" />
        <rect x="116" y="441" width="5" height="11" rx="1" fill="#C4993D" opacity="0.65" />
        <text x="148" y="438" fill="#2C2418" fontSize="14" fontWeight="700" fontFamily="sans-serif">Insights &amp;</text>
        <text x="148" y="456" fill="#2C2418" fontSize="14" fontWeight="700" fontFamily="sans-serif">Attribution</text>
        <text x="85" y="490" fill="#3D3224" fontSize="10.5" fontFamily="sans-serif">Measure engagement &amp; ROI</text>
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   HOME PAGE
   ═══════════════════════════════════════════════════════════ */

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* ── SECTION 1: HERO ── */}
      <section className="relative pt-28 pb-12 md:pt-36 md:pb-20 overflow-hidden">
        {/* Decorative orbs */}
        <div className="orb-accent absolute top-20 left-[-10%] w-[500px] h-[500px]" />
        <div className="orb-warm absolute bottom-0 right-[-10%] w-[400px] h-[400px]" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.1] mb-5">
                The monetization layer for
                <br />
                <span className="text-gradient-primary">autonomous robots.</span>
              </h1>
              <p className="text-lg sm:text-xl text-text-body max-w-xl mx-auto mb-8">
                Enabling robot fleets to generate revenue from real-world interaction signals.
              </p>
              <CTAButton href="/brands">See how it works</CTAButton>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <HeroPanorama />
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 2: ROBOTS ARE BECOMING PART OF EVERYDAY LIFE ── */}
      <section className="py-20 md:py-28 bg-section-alt">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Robots are becoming part of everyday life.
              </h2>
              <p className="text-text-body text-lg max-w-2xl mx-auto">
                From grocery stores to hospitals, autonomous robots are entering every environment — creating millions of daily interactions with no economic infrastructure.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {ROBOT_ENVIRONMENTS.map((env, i) => {
              const Illustration = robotIllustrations[env.icon];
              return (
                <ScrollReveal key={env.name} delay={i * 0.08}>
                  <div className="card-soft p-4 md:p-5 flex flex-col items-center text-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 mb-3">
                      {Illustration && <Illustration />}
                    </div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">
                      {env.name}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {env.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY KOVIO ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Why Kovio?
              </h2>
              <p className="text-text-body text-lg max-w-2xl mx-auto">
                Robots interact with millions of people every day — in stores, hotels, hospitals, streets. None of it is monetised. Kovio changes that.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                title: "An untapped channel",
                desc: "Every robot interaction is an opportunity for brands to reach consumers in the physical world. No one has built the economic layer — until now.",
                icon: (
                  <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
                    <circle cx="20" cy="20" r="18" fill="#FBF4E4" />
                    <rect x="12" y="14" width="16" height="12" rx="3" fill="#2C2418" />
                    <circle cx="17" cy="20" r="2" fill="#C4993D" />
                    <circle cx="23" cy="20" r="2" fill="#C4993D" />
                    <path d="M20 30 L20 36" stroke="#C4993D" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="20" cy="37" r="1.5" fill="#C4993D" opacity="0.4" />
                  </svg>
                ),
              },
              {
                title: "Revenue for robot companies",
                desc: "Your fleet already reaches people. Kovio adds a monetisation layer so every greeting, scan, or delivery becomes a revenue moment.",
                icon: (
                  <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
                    <circle cx="20" cy="20" r="18" fill="#FBF4E4" />
                    <text x="20" y="25" textAnchor="middle" fill="#C4993D" fontSize="16" fontWeight="700" fontFamily="sans-serif">$</text>
                  </svg>
                ),
              },
              {
                title: "Attribution for brands",
                desc: "Brands get measurable, real-world engagement — not impressions on a screen, but physical interactions they can track and optimise.",
                icon: (
                  <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
                    <circle cx="20" cy="20" r="18" fill="#FBF4E4" />
                    <rect x="11" y="16" width="18" height="12" rx="2" fill="#2C2418" />
                    <polyline points="14,24 18,20 22,22 26,18" stroke="#C4993D" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  </svg>
                ),
              },
            ].map((item) => (
              <ScrollReveal key={item.title} delay={0.1}>
                <div className="card-soft p-6 md:p-7 h-full">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-text-body leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: ONE PLATFORM. TWO ECOSYSTEMS. INFINITE VALUE. ── */}
      <section className="py-20 md:py-28 bg-section-warm">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                One platform. Two ecosystems. Infinite value.
              </h2>
              <p className="text-text-body text-lg max-w-2xl mx-auto">
                Brands fund real-world interactions. Robot fleets deliver them. Kovio connects both sides and measures everything.
              </p>
            </div>
          </ScrollReveal>

          {/* Desktop: full SVG diagram */}
          <ScrollReveal delay={0.15}>
            <div className="hidden md:block">
              <ArchitectureFlow />
            </div>
          </ScrollReveal>

          {/* Mobile: simplified card version */}
          <div className="md:hidden space-y-4">
            <ScrollReveal delay={0.1}>
              <div className="card-soft p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FBF4E4] flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none"><rect x="4" y="6" width="12" height="8" rx="2" fill="#2C2418" /><polyline points="6,12 8,10 10,11 14,8" stroke="#C4993D" strokeWidth="1.2" fill="none" /></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Brands</p>
                  <p className="text-xs text-text-body">Fund campaigns and marketing budgets that reach consumers through robots.</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="flex justify-center">
                <svg viewBox="0 0 20 20" className="w-5 h-5 text-[#C4993D]" fill="none"><path d="M10 4v12M5 11l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="rounded-xl bg-[#2C2418] p-5 flex items-start gap-4">
                <Image src="/logo.png" alt="Kovio" width={40} height={40} className="w-10 h-10 rounded-lg shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[#C4993D] mb-1">Kovio</p>
                  <p className="text-xs text-[#D4CFC6]">Economic interaction layer connecting brands to robot fleets at scale.</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <div className="flex justify-center">
                <svg viewBox="0 0 20 20" className="w-5 h-5 text-[#C4993D]" fill="none"><path d="M10 4v12M5 11l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="card-soft p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FBF4E4] flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none"><rect x="4" y="6" width="12" height="8" rx="3" fill="#2C2418" /><circle cx="8" cy="10" r="1.5" fill="#C4993D" /><circle cx="12" cy="10" r="1.5" fill="#C4993D" /></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Robot Fleets</p>
                  <p className="text-xs text-text-body">Deliver interactions across all environments and earn revenue share.</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.35}>
              <div className="flex justify-center">
                <svg viewBox="0 0 20 20" className="w-5 h-5 text-[#C4993D]" fill="none"><path d="M10 4v12M5 11l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="rounded-xl bg-[#FBF4E4] border border-[#C4993D]/20 p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none"><circle cx="7" cy="10" r="3" fill="#D4CFC6" /><rect x="11" y="8" width="6" height="8" rx="2" fill="#2C2418" /><circle cx="13" cy="11" r="1" fill="#C4993D" /><circle cx="15" cy="11" r="1" fill="#C4993D" /></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Real-world Interactions</p>
                  <p className="text-xs text-text-body">Branded robot moments measured with full attribution.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14">
              <CTAButton href="/brands">For Brands</CTAButton>
              <CTAButton href="/oem" variant="secondary">
                For OEMs
              </CTAButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
