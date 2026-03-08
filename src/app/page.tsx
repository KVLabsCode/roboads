"use client";

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
      <rect x="16" y="28" width="20" height="8" rx="2" fill="#E8E2D9" />
      <rect x="40" y="28" width="20" height="8" rx="2" fill="#E8E2D9" />
      <rect x="64" y="28" width="20" height="8" rx="2" fill="#E8E2D9" />
      <rect x="16" y="40" width="20" height="8" rx="2" fill="#E8E2D9" />
      <rect x="40" y="40" width="20" height="8" rx="2" fill="#E8E2D9" />
      <rect x="64" y="40" width="20" height="8" rx="2" fill="#E8E2D9" />
      {/* Robot body */}
      <rect x="42" y="62" width="36" height="40" rx="8" fill="#2C2418" />
      <rect x="48" y="68" width="24" height="14" rx="4" fill="#C4993D" opacity="0.3" />
      {/* Screen face */}
      <circle cx="55" cy="74" r="2" fill="#C4993D" />
      <circle cx="65" cy="74" r="2" fill="#C4993D" />
      {/* Wheels */}
      <circle cx="50" cy="104" r="4" fill="#5C5346" />
      <circle cx="70" cy="104" r="4" fill="#5C5346" />
      {/* Scan beam */}
      <line x1="60" y1="58" x2="88" y2="36" stroke="#C4993D" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.5" />
      <circle cx="88" cy="36" r="3" fill="#C4993D" opacity="0.3" />
    </svg>
  );
}

function DeliveryRobot() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
      {/* Ground/sidewalk */}
      <rect x="0" y="95" width="120" height="25" fill="#F0EBE3" />
      <line x1="0" y1="95" x2="120" y2="95" stroke="#E8E2D9" strokeWidth="1" />
      {/* Robot body - boxy delivery bot */}
      <rect x="25" y="55" width="70" height="40" rx="10" fill="#2C2418" />
      {/* Lid */}
      <rect x="30" y="50" width="60" height="10" rx="5" fill="#3D3224" />
      {/* Eyes/sensors */}
      <circle cx="45" cy="72" r="4" fill="#C4993D" opacity="0.6" />
      <circle cx="75" cy="72" r="4" fill="#C4993D" opacity="0.6" />
      {/* Flag */}
      <line x1="85" y1="30" x2="85" y2="50" stroke="#5C5346" strokeWidth="1.5" />
      <rect x="85" y="30" width="16" height="10" rx="2" fill="#C4993D" opacity="0.4" />
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
      {/* Hotel hallway */}
      <rect x="0" y="15" width="120" height="90" fill="#F5F1EC" />
      <rect x="5" y="20" width="25" height="40" rx="3" fill="#E8E2D9" />
      <rect x="90" y="20" width="25" height="40" rx="3" fill="#E8E2D9" />
      {/* Door numbers */}
      <rect x="13" y="26" width="10" height="3" rx="1" fill="#D4CFC6" />
      <rect x="97" y="26" width="10" height="3" rx="1" fill="#D4CFC6" />
      {/* Floor */}
      <rect x="0" y="100" width="120" height="20" fill="#F0EBE3" />
      {/* Robot - tall concierge style */}
      <rect x="44" y="45" width="32" height="52" rx="10" fill="#2C2418" />
      {/* Head */}
      <circle cx="60" cy="40" r="12" fill="#2C2418" />
      <circle cx="55" cy="38" r="2" fill="#C4993D" />
      <circle cx="65" cy="38" r="2" fill="#C4993D" />
      {/* Tray */}
      <rect x="30" y="64" width="60" height="3" rx="1.5" fill="#C4993D" opacity="0.5" />
      <rect x="36" y="58" width="12" height="6" rx="2" fill="#B8734A" opacity="0.4" />
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
      <rect x="0" y="95" width="120" height="25" fill="#F0EBE3" />
      {/* Clean streak marks on floor */}
      <path d="M20 98 Q40 92 60 98 Q80 104 100 98" stroke="#E8E2D9" strokeWidth="1" fill="none" />
      <path d="M15 104 Q35 98 55 104 Q75 110 95 104" stroke="#E8E2D9" strokeWidth="1" fill="none" />
      {/* Sparkle marks — clean floor */}
      <path d="M25 80 L27 76 L29 80 L25 80" fill="#C4993D" opacity="0.2" />
      <path d="M85 72 L87 68 L89 72 L85 72" fill="#C4993D" opacity="0.15" />
      <path d="M50 86 L52 82 L54 86 L50 86" fill="#C4993D" opacity="0.2" />
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
      {/* Water spray dots */}
      <circle cx="40" cy="76" r="1.5" fill="#7D8C6E" opacity="0.3" />
      <circle cx="52" cy="78" r="1" fill="#7D8C6E" opacity="0.25" />
      <circle cx="68" cy="77" r="1.5" fill="#7D8C6E" opacity="0.3" />
      <circle cx="80" cy="76" r="1" fill="#7D8C6E" opacity="0.25" />
    </svg>
  );
}

function WarehouseRobot() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
      {/* Shelving racks */}
      <rect x="5" y="10" width="20" height="80" rx="2" fill="#E8E2D9" />
      <rect x="95" y="10" width="20" height="80" rx="2" fill="#E8E2D9" />
      <rect x="9" y="18" width="12" height="8" rx="1" fill="#D4CFC6" />
      <rect x="9" y="30" width="12" height="8" rx="1" fill="#D4CFC6" />
      <rect x="9" y="42" width="12" height="8" rx="1" fill="#D4CFC6" />
      <rect x="99" y="18" width="12" height="8" rx="1" fill="#D4CFC6" />
      <rect x="99" y="30" width="12" height="8" rx="1" fill="#D4CFC6" />
      <rect x="99" y="42" width="12" height="8" rx="1" fill="#D4CFC6" />
      {/* Floor */}
      <rect x="0" y="95" width="120" height="25" fill="#F0EBE3" />
      {/* Robot - flat AMR style */}
      <rect x="35" y="72" width="50" height="22" rx="6" fill="#2C2418" />
      {/* Sensor strip */}
      <rect x="40" y="76" width="40" height="4" rx="2" fill="#C4993D" opacity="0.4" />
      {/* Package on top */}
      <rect x="42" y="58" width="36" height="14" rx="3" fill="#B8734A" opacity="0.3" />
      <rect x="56" y="62" width="8" height="6" rx="1" fill="#C4993D" opacity="0.3" />
      {/* Wheels */}
      <circle cx="44" cy="96" r="5" fill="#5C5346" />
      <circle cx="76" cy="96" r="5" fill="#5C5346" />
    </svg>
  );
}

function HospitalRobot() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
      {/* Hospital hallway */}
      <rect x="0" y="0" width="120" height="105" fill="#F5F1EC" />
      {/* Cross symbol on wall */}
      <rect x="52" y="8" width="16" height="16" rx="2" fill="#FFFFFF" />
      <rect x="57" y="11" width="6" height="10" rx="1" fill="#7D8C6E" opacity="0.4" />
      <rect x="54" y="14" width="12" height="4" rx="1" fill="#7D8C6E" opacity="0.4" />
      {/* Floor */}
      <rect x="0" y="100" width="120" height="20" fill="#F0EBE3" />
      {/* Robot - medical delivery */}
      <rect x="40" y="40" width="40" height="56" rx="10" fill="#2C2418" />
      {/* Screen */}
      <rect x="46" y="46" width="28" height="16" rx="4" fill="#7D8C6E" opacity="0.2" />
      {/* Heart rate line on screen */}
      <polyline points="50,54 54,54 56,48 58,58 60,52 64,54 70,54" stroke="#7D8C6E" strokeWidth="1.5" fill="none" opacity="0.5" />
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
      {/* Simple environment */}
      <rect x="0" y="100" width="120" height="20" fill="#F0EBE3" />
      {/* Head */}
      <ellipse cx="60" cy="22" rx="12" ry="14" fill="#2C2418" />
      <circle cx="55" cy="20" r="2.5" fill="#C4993D" opacity="0.6" />
      <circle cx="65" cy="20" r="2.5" fill="#C4993D" opacity="0.6" />
      {/* Neck */}
      <rect x="56" y="35" width="8" height="6" fill="#3D3224" />
      {/* Torso */}
      <rect x="42" y="40" width="36" height="32" rx="6" fill="#2C2418" />
      {/* Chest light */}
      <circle cx="60" cy="52" r="4" fill="#C4993D" opacity="0.3" />
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
      {/* Restaurant interior */}
      <rect x="0" y="0" width="120" height="105" fill="#F5F1EC" />
      {/* Table */}
      <rect x="10" y="50" width="44" height="4" rx="2" fill="#E8E2D9" />
      <rect x="18" y="54" width="4" height="24" fill="#E8E2D9" />
      <rect x="44" y="54" width="4" height="24" fill="#E8E2D9" />
      {/* Plate on table */}
      <ellipse cx="32" cy="48" rx="10" ry="4" fill="#FFFFFF" stroke="#E8E2D9" />
      {/* Glass */}
      <rect x="46" y="40" width="5" height="10" rx="1" fill="#FFFFFF" stroke="#E8E2D9" strokeWidth="0.5" />
      {/* Floor */}
      <rect x="0" y="100" width="120" height="20" fill="#F0EBE3" />
      {/* Robot — tray-carrying server */}
      <rect x="66" y="38" width="34" height="56" rx="10" fill="#2C2418" />
      {/* Screen face */}
      <rect x="72" y="44" width="22" height="14" rx="4" fill="#B8734A" opacity="0.2" />
      <circle cx="79" cy="50" r="2" fill="#B8734A" opacity="0.6" />
      <circle cx="88" cy="50" r="2" fill="#B8734A" opacity="0.6" />
      {/* Tray arm */}
      <rect x="56" y="56" width="14" height="3" rx="1.5" fill="#C4993D" opacity="0.5" />
      {/* Food on tray */}
      <rect x="54" y="50" width="10" height="6" rx="2" fill="#B8734A" opacity="0.35" />
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
   HERO PANORAMIC SCENE — 5 robot types in a cityscape
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
            <stop offset="0%" stopColor="#FBF4E4" />
            <stop offset="50%" stopColor="#FAF8F5" />
            <stop offset="100%" stopColor="#F5F1EC" />
          </linearGradient>
          <linearGradient id="ground" x1="0" y1="340" x2="0" y2="480">
            <stop offset="0%" stopColor="#F0EBE3" />
            <stop offset="100%" stopColor="#E8E2D9" />
          </linearGradient>
          <linearGradient id="road" x1="0" y1="0" x2="1000" y2="0">
            <stop offset="0%" stopColor="#E8E2D9" />
            <stop offset="50%" stopColor="#DDD7CC" />
            <stop offset="100%" stopColor="#E8E2D9" />
          </linearGradient>
          <radialGradient id="beacon-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C4993D" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#C4993D" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#C4993D" stopOpacity="0" />
          </radialGradient>
          <filter id="soft-glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ═══ SKY ═══ */}
        <rect width="1000" height="480" fill="url(#sky)" />

        {/* Subtle clouds */}
        <ellipse cx="160" cy="38" rx="55" ry="10" fill="#FFFFFF" opacity="0.35" />
        <ellipse cx="185" cy="35" rx="35" ry="8" fill="#FFFFFF" opacity="0.22" />
        <ellipse cx="720" cy="48" rx="65" ry="12" fill="#FFFFFF" opacity="0.3" />
        <ellipse cx="695" cy="44" rx="40" ry="8" fill="#FFFFFF" opacity="0.18" />
        <ellipse cx="430" cy="28" rx="45" ry="8" fill="#FFFFFF" opacity="0.2" />

        {/* ═══ KOVIO BEACON — central network hub ═══ */}
        <circle cx="500" cy="75" r="55" fill="url(#beacon-glow)" className="beacon-glow-animated" />
        <circle cx="500" cy="75" r="20" fill="#2C2418" filter="url(#soft-glow)" />
        <circle cx="500" cy="75" r="20" fill="none" stroke="#C4993D" strokeWidth="1.5" className="kovio-border-animated" opacity="0.7" />
        <text x="500" y="73" textAnchor="middle" fill="#C4993D" fontSize="7.5" fontWeight="700" fontFamily="sans-serif" letterSpacing="1">KOVIO</text>
        <text x="500" y="83" textAnchor="middle" fill="#D4CFC6" fontSize="5" fontFamily="sans-serif">network</text>
        {/* Outer pulse rings */}
        <circle cx="500" cy="75" r="28" fill="none" stroke="#C4993D" strokeWidth="0.5" opacity="0.15">
          <animate attributeName="r" values="28;48;28" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.2;0;0.2" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="500" cy="75" r="36" fill="none" stroke="#C4993D" strokeWidth="0.3" opacity="0.1">
          <animate attributeName="r" values="36;60;36" dur="4s" begin="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.12;0;0.12" dur="4s" begin="2s" repeatCount="indefinite" />
        </circle>

        {/* ═══ CONNECTION LINES from beacon to each robot ═══ */}
        {/* Beacon → Retail robot (store) */}
        <path d="M 488 93 Q 415 180 325 290" stroke="#C4993D" strokeWidth="1.2" className="flow-line-animated" opacity="0.25" fill="none" />
        {/* Beacon → Hotel robot */}
        <path d="M 500 95 Q 505 195 516 300" stroke="#C4993D" strokeWidth="1.2" className="flow-line-animated" opacity="0.25" fill="none" />
        {/* Beacon → Cleaning robot */}
        <path d="M 515 92 Q 598 185 670 290" stroke="#C4993D" strokeWidth="1.2" className="flow-line-animated" opacity="0.22" fill="none" />
        {/* Beacon → Delivery robot */}
        <path d="M 482 93 Q 310 250 165 405" stroke="#C4993D" strokeWidth="1" className="flow-line-animated" opacity="0.18" fill="none" />
        {/* Beacon → Humanoid robot */}
        <path d="M 518 92 Q 655 255 760 400" stroke="#C4993D" strokeWidth="1" className="flow-line-animated" opacity="0.18" fill="none" />
        {/* Beacon → Hospital robot */}
        <path d="M 522 90 Q 695 175 840 325" stroke="#C4993D" strokeWidth="0.8" className="flow-line-animated" opacity="0.15" fill="none" />
        {/* Beacon → Warehouse */}
        <path d="M 482 90 Q 310 125 155 210" stroke="#C4993D" strokeWidth="0.8" className="flow-line-animated" opacity="0.12" fill="none" />

        {/* Animated pulse dots traveling along beacon connections */}
        <circle r="3" fill="#C4993D" opacity="0.6">
          <animateMotion dur="3.5s" repeatCount="indefinite" path="M 488 93 Q 415 180 325 290" />
        </circle>
        <circle r="3" fill="#C4993D" opacity="0.55">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 500 95 Q 505 195 516 300" begin="0.5s" />
        </circle>
        <circle r="2.5" fill="#C4993D" opacity="0.5">
          <animateMotion dur="4s" repeatCount="indefinite" path="M 515 92 Q 598 185 670 290" begin="1s" />
        </circle>
        <circle r="2.5" fill="#C4993D" opacity="0.45">
          <animateMotion dur="4.5s" repeatCount="indefinite" path="M 482 93 Q 310 250 165 405" begin="1.5s" />
        </circle>
        <circle r="2.5" fill="#C4993D" opacity="0.45">
          <animateMotion dur="4.2s" repeatCount="indefinite" path="M 518 92 Q 655 255 760 400" begin="2s" />
        </circle>
        <circle r="2" fill="#C4993D" opacity="0.35">
          <animateMotion dur="5s" repeatCount="indefinite" path="M 522 90 Q 695 175 840 325" begin="2.5s" />
        </circle>

        {/* ═══ BACKGROUND LAYER — tall buildings, warehouse, hospital ═══ */}

        {/* Tall office building — far left */}
        <rect x="20" y="60" width="70" height="280" rx="4" fill="#E8E2D9" />
        {[80, 100, 120, 140, 160, 180, 200, 220, 240].map((y) => (
          <g key={`bldg1-${y}`}>
            <rect x="28" y={y} width="10" height="8" rx="1.5" fill="#D4CFC6" />
            <rect x="44" y={y} width="10" height="8" rx="1.5" fill="#D4CFC6" />
            <rect x="60" y={y} width="10" height="8" rx="1.5" fill="#D4CFC6" />
          </g>
        ))}

        {/* Warehouse building — far left mid */}
        <rect x="110" y="140" width="90" height="200" rx="4" fill="#E8E2D9" />
        <rect x="115" y="145" width="80" height="30" rx="3" fill="#D4CFC6" opacity="0.5" />
        <text x="155" y="165" textAnchor="middle" fill="#B8A898" fontSize="8" fontFamily="sans-serif">WAREHOUSE</text>
        {/* Warehouse robot visible through large window */}
        <rect x="120" y="185" width="70" height="50" rx="3" fill="#F5F1EC" />
        <rect x="135" y="200" width="30" height="14" rx="4" fill="#2C2418" opacity="0.7" />
        <rect x="140" y="203" width="20" height="3" rx="1" fill="#C4993D" opacity="0.3" />
        <rect x="138" y="192" width="18" height="8" rx="2" fill="#B8734A" opacity="0.2" />
        {/* Shelving */}
        <rect x="120" y="245" width="70" height="50" rx="3" fill="#F5F1EC" />
        <rect x="126" y="250" width="14" height="8" rx="1" fill="#D4CFC6" />
        <rect x="144" y="250" width="14" height="8" rx="1" fill="#D4CFC6" />
        <rect x="162" y="250" width="14" height="8" rx="1" fill="#D4CFC6" />
        <rect x="126" y="262" width="14" height="8" rx="1" fill="#D4CFC6" />
        <rect x="144" y="262" width="14" height="8" rx="1" fill="#D4CFC6" />
        <rect x="162" y="262" width="14" height="8" rx="1" fill="#D4CFC6" />

        {/* Hospital — background right */}
        <rect x="780" y="80" width="100" height="260" rx="4" fill="#E8E2D9" />
        <rect x="810" y="90" width="40" height="30" rx="3" fill="#F5F1EC" />
        {/* Cross */}
        <rect x="824" y="96" width="12" height="18" rx="2" fill="#7D8C6E" opacity="0.4" />
        <rect x="821" y="102" width="18" height="6" rx="2" fill="#7D8C6E" opacity="0.4" />
        {/* Hospital windows */}
        {[130, 155, 180, 205, 230, 255].map((y) => (
          <g key={`hosp-${y}`}>
            <rect x="788" y={y} width="14" height="10" rx="2" fill="#D4CFC6" />
            <rect x="808" y={y} width="14" height="10" rx="2" fill="#D4CFC6" />
            <rect x="828" y={y} width="14" height="10" rx="2" fill="#D4CFC6" />
            <rect x="848" y={y} width="14" height="10" rx="2" fill="#D4CFC6" />
          </g>
        ))}
        {/* Hospital robot visible in lower window */}
        <rect x="830" y="270" width="30" height="20" rx="3" fill="#F5F1EC" />
        <rect x="836" y="275" width="18" height="12" rx="3" fill="#2C2418" opacity="0.6" />
        <circle cx="842" cy="280" r="1.5" fill="#7D8C6E" opacity="0.5" />
        <circle cx="848" cy="280" r="1.5" fill="#7D8C6E" opacity="0.5" />

        {/* Mid-rise building — background center-left */}
        <rect x="215" y="130" width="65" height="210" rx="4" fill="#E8E2D9" />
        {[148, 170, 192, 214, 236].map((y) => (
          <g key={`mid1-${y}`}>
            <rect x="222" y={y} width="10" height="8" rx="1" fill="#D4CFC6" />
            <rect x="238" y={y} width="10" height="8" rx="1" fill="#D4CFC6" />
            <rect x="254" y={y} width="10" height="8" rx="1" fill="#D4CFC6" />
          </g>
        ))}

        {/* Apartment building — background center-right */}
        <rect x="700" y="110" width="60" height="230" rx="4" fill="#E8E2D9" />
        {[125, 148, 171, 194, 217, 240].map((y) => (
          <g key={`apt-${y}`}>
            <rect x="706" y={y} width="10" height="10" rx="1.5" fill="#D4CFC6" />
            <rect x="722" y={y} width="10" height="10" rx="1.5" fill="#D4CFC6" />
            <rect x="738" y={y} width="10" height="10" rx="1.5" fill="#D4CFC6" />
          </g>
        ))}

        {/* ═══ MIDGROUND LAYER — shops, hotel, public spaces ═══ */}

        {/* Sidewalk / ground plane */}
        <rect y="340" width="1000" height="120" fill="url(#ground)" />
        {/* Road */}
        <rect y="365" width="1000" height="30" fill="url(#road)" />
        <line x1="0" y1="380" x2="1000" y2="380" stroke="#D4CFC6" strokeWidth="1" strokeDasharray="12 8" />
        {/* Sidewalk edge lines */}
        <line x1="0" y1="340" x2="1000" y2="340" stroke="#E8E2D9" strokeWidth="1" />
        <line x1="0" y1="395" x2="1000" y2="395" stroke="#E8E2D9" strokeWidth="0.5" />
        {/* Crosswalk */}
        <g opacity="0.25">
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={`cw-${i}`} x={448 + i * 14} y="365" width="8" height="30" rx="1" fill="#FFFFFF" />
          ))}
        </g>

        {/* ── STORE with retail robot + shopper ── */}
        <rect x="290" y="220" width="140" height="120" rx="5" fill="#FFFFFF" stroke="#E8E2D9" strokeWidth="1" />
        {/* Awning */}
        <rect x="285" y="215" width="150" height="12" rx="3" fill="#C4993D" opacity="0.15" />
        <text x="360" y="210" textAnchor="middle" fill="#9C9488" fontSize="9" fontFamily="sans-serif">GROCERY</text>
        {/* Store window with shelves */}
        <rect x="298" y="238" width="50" height="55" rx="3" fill="#FBF4E4" />
        <rect x="303" y="244" width="18" height="6" rx="1" fill="#E8E2D9" />
        <rect x="325" y="244" width="18" height="6" rx="1" fill="#E8E2D9" />
        <rect x="303" y="254" width="18" height="6" rx="1" fill="#C4993D" opacity="0.15" />
        <rect x="325" y="254" width="18" height="6" rx="1" fill="#C4993D" opacity="0.15" />
        <rect x="303" y="264" width="18" height="6" rx="1" fill="#E8E2D9" />
        <rect x="325" y="264" width="18" height="6" rx="1" fill="#E8E2D9" />
        {/* Store door */}
        <rect x="370" y="255" width="40" height="85" rx="3" fill="#F5F1EC" />
        <circle cx="405" cy="300" r="2" fill="#D4CFC6" />

        {/* Retail robot INSIDE store — helping a shopper */}
        <g className="animate-float-slow" style={{ animationDelay: "0s" }}>
          {/* Robot body */}
          <rect x="310" y="280" width="26" height="32" rx="6" fill="#2C2418" />
          <rect x="314" y="285" width="18" height="10" rx="3" fill="#C4993D" opacity="0.3" />
          <circle cx="320" cy="289" r="1.5" fill="#C4993D" />
          <circle cx="328" cy="289" r="1.5" fill="#C4993D" />
          {/* Robot arm pointing at shelf */}
          <line x1="336" y1="290" x2="345" y2="258" stroke="#2C2418" strokeWidth="2" strokeLinecap="round" />
          <circle cx="345" cy="257" r="3" fill="#C4993D" opacity="0.4" />
          <circle cx="310" cy="314" r="3" fill="#5C5346" />
          <circle cx="330" cy="314" r="3" fill="#5C5346" />
        </g>

        {/* Shopper in store — person looking at robot */}
        <circle cx="365" cy="280" r="7" fill="#D4CFC6" />
        <rect x="360" y="288" width="10" height="16" rx="3" fill="#D4CFC6" />
        <rect x="356" y="304" width="7" height="12" rx="2" fill="#D4CFC6" />
        <rect x="367" y="304" width="7" height="12" rx="2" fill="#D4CFC6" />
        {/* Speech bubble */}
        <rect x="346" y="262" width="38" height="14" rx="4" fill="#FFFFFF" stroke="#E8E2D9" strokeWidth="0.5" />
        <text x="365" y="272" textAnchor="middle" fill="#5C5346" fontSize="6" fontFamily="sans-serif">Aisle 3?</text>

        {/* ── HOTEL with service robot greeting guest ── */}
        <rect x="480" y="200" width="120" height="140" rx="5" fill="#FFFFFF" stroke="#E8E2D9" strokeWidth="1" />
        {/* Hotel sign */}
        <rect x="500" y="205" width="80" height="14" rx="3" fill="#2C2418" />
        <text x="540" y="215" textAnchor="middle" fill="#C4993D" fontSize="7" fontWeight="500" fontFamily="sans-serif">HOTEL</text>
        {/* Hotel windows */}
        <rect x="490" y="228" width="18" height="14" rx="2" fill="#FBF4E4" />
        <rect x="514" y="228" width="18" height="14" rx="2" fill="#FBF4E4" />
        <rect x="538" y="228" width="18" height="14" rx="2" fill="#FBF4E4" />
        <rect x="562" y="228" width="18" height="14" rx="2" fill="#FBF4E4" />
        <rect x="490" y="250" width="18" height="14" rx="2" fill="#FBF4E4" />
        <rect x="514" y="250" width="18" height="14" rx="2" fill="#FBF4E4" />
        <rect x="538" y="250" width="18" height="14" rx="2" fill="#FBF4E4" />
        <rect x="562" y="250" width="18" height="14" rx="2" fill="#FBF4E4" />
        {/* Hotel entrance */}
        <rect x="515" y="280" width="50" height="60" rx="3" fill="#F5F1EC" />
        <rect x="520" y="282" width="18" height="58" rx="2" fill="#F0EBE3" />
        <rect x="542" y="282" width="18" height="58" rx="2" fill="#F0EBE3" />

        {/* Hotel service robot — greeting traveler */}
        <g className="animate-float-slow" style={{ animationDelay: "0.8s" }}>
          <rect x="505" y="300" width="22" height="34" rx="7" fill="#2C2418" />
          <circle cx="516" cy="295" r="8" fill="#2C2418" />
          <circle cx="513" cy="293" r="1.5" fill="#C4993D" />
          <circle cx="519" cy="293" r="1.5" fill="#C4993D" />
          {/* Welcoming arm */}
          <line x1="504" y1="308" x2="496" y2="300" stroke="#3D3224" strokeWidth="3" strokeLinecap="round" />
          <ellipse cx="516" cy="336" rx="8" ry="3" fill="#5C5346" />
        </g>

        {/* Traveler with suitcase */}
        <circle cx="490" cy="296" r="7" fill="#B8734A" opacity="0.5" />
        <rect x="485" y="304" width="10" height="18" rx="3" fill="#B8734A" opacity="0.4" />
        <rect x="481" y="322" width="7" height="12" rx="2" fill="#B8734A" opacity="0.4" />
        <rect x="492" y="322" width="7" height="12" rx="2" fill="#B8734A" opacity="0.4" />
        {/* Suitcase */}
        <rect x="475" y="316" width="8" height="14" rx="2" fill="#D4CFC6" />
        <line x1="479" y1="314" x2="479" y2="316" stroke="#B8A898" strokeWidth="1" />

        {/* ── MALL / PUBLIC SPACE — cleaning robot ── */}
        <rect x="630" y="240" width="80" height="100" rx="5" fill="#FFFFFF" stroke="#E8E2D9" strokeWidth="1" />
        <text x="670" y="254" textAnchor="middle" fill="#9C9488" fontSize="8" fontFamily="sans-serif">MALL</text>
        <rect x="640" y="260" width="60" height="50" rx="3" fill="#F5F1EC" />

        {/* Cleaning robot inside — disc shape with water trail */}
        <g className="animate-float-slow" style={{ animationDelay: "1.5s" }}>
          <ellipse cx="670" cy="292" rx="18" ry="7" fill="#2C2418" />
          <ellipse cx="670" cy="289" rx="14" ry="5" fill="#3D3224" />
          <circle cx="664" cy="289" r="2" fill="#C4993D" opacity="0.5" />
          <circle cx="676" cy="289" r="2" fill="#C4993D" opacity="0.5" />
          {/* Clean trail sparkles */}
          <circle cx="652" cy="298" r="1.5" fill="#7D8C6E" opacity="0.25" />
          <circle cx="646" cy="295" r="1" fill="#7D8C6E" opacity="0.2" />
          <circle cx="656" cy="302" r="1" fill="#7D8C6E" opacity="0.2" />
        </g>

        {/* ═══ FOREGROUND LAYER — street robots and people ═══ */}

        {/* ── Delivery robot on sidewalk → delivering to home ── */}
        <g className="animate-float-slow" style={{ animationDelay: "0.3s" }}>
          {/* Delivery bot */}
          <rect x="140" y="400" width="44" height="24" rx="7" fill="#2C2418" />
          <rect x="146" y="394" width="32" height="8" rx="4" fill="#3D3224" />
          <circle cx="155" cy="410" r="3" fill="#C4993D" opacity="0.5" />
          <circle cx="173" cy="410" r="3" fill="#C4993D" opacity="0.5" />
          <circle cx="150" cy="426" r="4" fill="#5C5346" />
          <circle cx="174" cy="426" r="4" fill="#5C5346" />
          <circle cx="150" cy="426" r="2" fill="#3D3224" />
          <circle cx="174" cy="426" r="2" fill="#3D3224" />
          {/* Flag */}
          <line x1="175" y1="380" x2="175" y2="394" stroke="#5C5346" strokeWidth="1.2" />
          <rect x="175" y="380" width="14" height="8" rx="1.5" fill="#C4993D" opacity="0.4" />
          {/* Grocery bag on top */}
          <rect x="152" y="386" width="16" height="10" rx="2" fill="#7D8C6E" opacity="0.25" />
        </g>

        {/* Home doorstep — delivery destination */}
        <rect x="85" y="395" width="45" height="45" rx="4" fill="#FFFFFF" stroke="#E8E2D9" strokeWidth="0.8" />
        <rect x="98" y="400" width="18" height="35" rx="2" fill="#F5F1EC" />
        <circle cx="113" cy="418" r="1.5" fill="#D4CFC6" />
        {/* Person at door receiving delivery */}
        <circle cx="105" cy="398" r="5" fill="#D4CFC6" />
        <rect x="101" y="404" width="8" height="12" rx="2.5" fill="#D4CFC6" />

        {/* ── Parent + child walking, delivery bot passing ── */}
        {/* Parent */}
        <circle cx="218" cy="404" r="7" fill="#B8734A" opacity="0.4" />
        <rect x="213" y="412" width="10" height="20" rx="3" fill="#B8734A" opacity="0.35" />
        <rect x="210" y="432" width="6" height="10" rx="2" fill="#B8734A" opacity="0.35" />
        <rect x="220" y="432" width="6" height="10" rx="2" fill="#B8734A" opacity="0.35" />
        {/* Child — smaller */}
        <circle cx="234" cy="416" r="5" fill="#D4A843" opacity="0.35" />
        <rect x="230" y="422" width="8" height="14" rx="2.5" fill="#D4A843" opacity="0.3" />
        <rect x="229" y="436" width="4" height="8" rx="1.5" fill="#D4A843" opacity="0.3" />
        <rect x="236" y="436" width="4" height="8" rx="1.5" fill="#D4A843" opacity="0.3" />
        {/* Parent holding child hand */}
        <line x1="223" y1="420" x2="230" y2="424" stroke="#C4993D" strokeWidth="0.8" opacity="0.3" />

        {/* ── Humanoid robot helping carry bags for a person ── */}
        <g className="animate-float-slow" style={{ animationDelay: "1.2s" }}>
          {/* Humanoid */}
          <ellipse cx="760" cy="392" rx="9" ry="10" fill="#2C2418" />
          <circle cx="756" cy="390" r="2" fill="#C4993D" opacity="0.5" />
          <circle cx="764" cy="390" r="2" fill="#C4993D" opacity="0.5" />
          <rect x="752" y="402" width="16" height="22" rx="4" fill="#2C2418" />
          <circle cx="760" cy="410" r="2.5" fill="#C4993D" opacity="0.2" />
          {/* Arms — one carrying bag */}
          <rect x="744" y="404" width="7" height="16" rx="3.5" fill="#3D3224" />
          <rect x="769" y="404" width="7" height="16" rx="3.5" fill="#3D3224" />
          {/* Shopping bag in left hand */}
          <rect x="740" y="418" width="10" height="12" rx="2" fill="#C4993D" opacity="0.25" />
          <line x1="742" y1="418" x2="748" y2="416" stroke="#C4993D" strokeWidth="0.8" opacity="0.3" />
          {/* Legs */}
          <rect x="754" y="424" width="6" height="16" rx="3" fill="#3D3224" />
          <rect x="762" y="424" width="6" height="16" rx="3" fill="#3D3224" />
          <ellipse cx="757" cy="441" rx="5" ry="2" fill="#5C5346" />
          <ellipse cx="765" cy="441" rx="5" ry="2" fill="#5C5346" />
        </g>

        {/* Person walking WITH humanoid robot */}
        <circle cx="785" cy="398" r="7" fill="#D4CFC6" />
        <rect x="780" y="406" width="10" height="18" rx="3" fill="#D4CFC6" />
        <rect x="778" y="424" width="6" height="12" rx="2" fill="#D4CFC6" />
        <rect x="787" y="424" width="6" height="12" rx="2" fill="#D4CFC6" />

        {/* ── Hospital robot exiting hospital — transporting supplies ── */}
        <g className="animate-float-slow" style={{ animationDelay: "2s" }}>
          <rect x="830" y="320" width="24" height="36" rx="7" fill="#2C2418" />
          <rect x="834" y="325" width="16" height="10" rx="3" fill="#7D8C6E" opacity="0.25" />
          <circle cx="839" cy="329" r="1.5" fill="#7D8C6E" opacity="0.5" />
          <circle cx="847" cy="329" r="1.5" fill="#7D8C6E" opacity="0.5" />
          {/* Supplies tray on top */}
          <rect x="826" y="314" width="32" height="6" rx="2" fill="#C4993D" opacity="0.2" />
          <rect x="830" y="308" width="8" height="6" rx="1.5" fill="#7D8C6E" opacity="0.2" />
          <rect x="842" y="308" width="8" height="6" rx="1.5" fill="#7D8C6E" opacity="0.2" />
          <ellipse cx="842" cy="358" rx="10" ry="3" fill="#5C5346" />
        </g>

        {/* ── Trees and urban elements ── */}
        {/* Tree left */}
        <rect x="250" y="380" width="4" height="20" fill="#B8734A" opacity="0.25" />
        <circle cx="252" cy="372" r="14" fill="#7D8C6E" opacity="0.15" />
        <circle cx="246" cy="368" r="10" fill="#7D8C6E" opacity="0.12" />
        <circle cx="258" cy="366" r="11" fill="#7D8C6E" opacity="0.12" />

        {/* Tree center */}
        <rect x="458" y="395" width="4" height="18" fill="#B8734A" opacity="0.25" />
        <circle cx="460" cy="388" r="12" fill="#7D8C6E" opacity="0.15" />
        <circle cx="454" cy="384" r="9" fill="#7D8C6E" opacity="0.12" />
        <circle cx="466" cy="383" r="10" fill="#7D8C6E" opacity="0.12" />

        {/* Tree right */}
        <rect x="720" y="390" width="4" height="18" fill="#B8734A" opacity="0.25" />
        <circle cx="722" cy="383" r="13" fill="#7D8C6E" opacity="0.15" />
        <circle cx="716" cy="379" r="9" fill="#7D8C6E" opacity="0.12" />

        {/* Bench */}
        <rect x="440" y="428" width="30" height="4" rx="2" fill="#D4CFC6" />
        <rect x="443" y="432" width="3" height="8" fill="#D4CFC6" />
        <rect x="464" y="432" width="3" height="8" fill="#D4CFC6" />

        {/* Street lamp */}
        <line x1="620" y1="360" x2="620" y2="400" stroke="#D4CFC6" strokeWidth="2" />
        <ellipse cx="620" cy="358" rx="8" ry="3" fill="#D4CFC6" />
        <circle cx="620" cy="356" r="3" fill="#D4A843" opacity="0.15" />

        {/* ═══ INTER-ROBOT MESH — subtle peer connections ═══ */}

        {/* Store ↔ Hotel */}
        <path d="M 335 300 Q 420 260 510 310" stroke="#C4993D" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.12" fill="none" />
        {/* Hotel ↔ Cleaning */}
        <path d="M 525 310 Q 600 275 665 295" stroke="#C4993D" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.12" fill="none" />
        {/* Cleaning ↔ Hospital */}
        <path d="M 685 292 Q 760 270 835 325" stroke="#C4993D" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.1" fill="none" />
        {/* Delivery ↔ Store */}
        <path d="M 175 405 Q 245 360 315 295" stroke="#C4993D" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.1" fill="none" />
        {/* Humanoid ↔ Hotel */}
        <path d="M 760 405 Q 660 370 525 318" stroke="#C4993D" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.1" fill="none" />

        {/* Signal symbols near active robots */}
        {/* Near store robot */}
        <g opacity="0.3">
          <path d="M 340 272 Q 344 268 348 272" stroke="#C4993D" strokeWidth="0.8" fill="none" />
          <path d="M 338 268 Q 344 262 350 268" stroke="#C4993D" strokeWidth="0.8" fill="none" />
        </g>
        {/* Near hotel robot */}
        <g opacity="0.3">
          <path d="M 520 288 Q 524 284 528 288" stroke="#C4993D" strokeWidth="0.8" fill="none" />
          <path d="M 518 284 Q 524 278 530 284" stroke="#C4993D" strokeWidth="0.8" fill="none" />
        </g>
        {/* Near humanoid robot */}
        <g opacity="0.3">
          <path d="M 770 386 Q 774 382 778 386" stroke="#C4993D" strokeWidth="0.8" fill="none" />
          <path d="M 768 382 Q 774 376 780 382" stroke="#C4993D" strokeWidth="0.8" fill="none" />
        </g>
        {/* Near delivery robot */}
        <g opacity="0.3">
          <path d="M 185 392 Q 189 388 193 392" stroke="#C4993D" strokeWidth="0.8" fill="none" />
          <path d="M 183 388 Q 189 382 195 388" stroke="#C4993D" strokeWidth="0.8" fill="none" />
        </g>
        {/* Near cleaning robot */}
        <g opacity="0.25">
          <path d="M 684 278 Q 688 274 692 278" stroke="#C4993D" strokeWidth="0.8" fill="none" />
          <path d="M 682 274 Q 688 268 694 274" stroke="#C4993D" strokeWidth="0.8" fill="none" />
        </g>
        {/* Near humanoid */}
        <g opacity="0.3">
          <path d="M 770 386 Q 774 382 778 386" stroke="#C4993D" strokeWidth="0.8" fill="none" />
          <path d="M 768 382 Q 774 376 780 382" stroke="#C4993D" strokeWidth="0.8" fill="none" />
        </g>

        {/* ═══ URBAN DETAILS ═══ */}
        {/* Planter box near store */}
        <rect x="436" y="332" width="16" height="8" rx="2" fill="#D4CFC6" />
        <circle cx="440" cy="330" r="4" fill="#7D8C6E" opacity="0.15" />
        <circle cx="448" cy="329" r="5" fill="#7D8C6E" opacity="0.12" />
        {/* Planter box near hotel */}
        <rect x="606" y="332" width="16" height="8" rx="2" fill="#D4CFC6" />
        <circle cx="610" cy="330" r="4" fill="#7D8C6E" opacity="0.15" />
        <circle cx="618" cy="329" r="5" fill="#7D8C6E" opacity="0.12" />
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION 3 — Before/After Transformation Diagram
   ═══════════════════════════════════════════════════════════ */

function TransformationDiagram() {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {/* WITHOUT KOVIO */}
      <div className="card-soft p-8 text-center">
        <p className="text-sm font-medium text-text-muted uppercase tracking-wider mb-6">
          Without Kovio
        </p>
        <svg viewBox="0 0 240 180" fill="none" className="w-full max-w-[240px] mx-auto mb-4">
          {/* Robot */}
          <rect x="90" y="20" width="60" height="50" rx="10" fill="#E8E2D9" />
          <circle cx="110" cy="40" r="4" fill="#D4CFC6" />
          <circle cx="130" cy="40" r="4" fill="#D4CFC6" />
          {/* Arrow down */}
          <line x1="120" y1="80" x2="120" y2="120" stroke="#D4CFC6" strokeWidth="2" />
          <polygon points="114,115 120,128 126,115" fill="#D4CFC6" />
          {/* Single task box */}
          <rect x="70" y="135" width="100" height="30" rx="6" fill="#F0EBE3" />
          <text x="120" y="154" textAnchor="middle" fill="#9C9488" fontSize="11" fontFamily="sans-serif">One task. No value.</text>
        </svg>
        <p className="text-text-muted text-sm">Robots do one job. No revenue beyond the sale.</p>
      </div>

      {/* WITH KOVIO */}
      <div className="card-soft p-8 text-center border-accent/20">
        <p className="text-sm font-medium text-accent uppercase tracking-wider mb-6">
          With Kovio
        </p>
        <svg viewBox="0 0 240 180" fill="none" className="w-full max-w-[240px] mx-auto mb-4">
          {/* Robot */}
          <rect x="90" y="10" width="60" height="40" rx="10" fill="#2C2418" />
          <circle cx="110" cy="26" r="3" fill="#C4993D" />
          <circle cx="130" cy="26" r="3" fill="#C4993D" />
          {/* Arrows branching out */}
          <line x1="120" y1="55" x2="120" y2="75" stroke="#C4993D" strokeWidth="2" />
          {/* Kovio layer */}
          <rect x="75" y="75" width="90" height="24" rx="6" fill="#C4993D" opacity="0.15" />
          <rect x="75" y="75" width="90" height="24" rx="6" fill="none" stroke="#C4993D" strokeWidth="1" className="kovio-border-animated" opacity="0.6" />
          <text x="120" y="91" textAnchor="middle" fill="#C4993D" fontSize="10" fontWeight="600" fontFamily="sans-serif">KOVIO</text>
          {/* Four output branches */}
          <line x1="85" y1="99" x2="35" y2="128" stroke="#C4993D" strokeWidth="1.5" className="flow-line-animated" opacity="0.6" />
          <line x1="107" y1="99" x2="88" y2="128" stroke="#C4993D" strokeWidth="1.5" className="flow-line-animated" opacity="0.6" />
          <line x1="133" y1="99" x2="152" y2="128" stroke="#C4993D" strokeWidth="1.5" className="flow-line-animated" opacity="0.6" />
          <line x1="155" y1="99" x2="205" y2="128" stroke="#C4993D" strokeWidth="1.5" className="flow-line-animated" opacity="0.6" />
          {/* Value nodes */}
          <rect x="10" y="128" width="50" height="24" rx="6" fill="#FBF4E4" />
          <text x="35" y="143" textAnchor="middle" fill="#A67C2E" fontSize="7.5" fontFamily="sans-serif">Interacts</text>
          <rect x="65" y="128" width="50" height="24" rx="6" fill="#FBF4E4" />
          <text x="90" y="143" textAnchor="middle" fill="#A67C2E" fontSize="7.5" fontFamily="sans-serif">Revenue</text>
          <rect x="127" y="128" width="50" height="24" rx="6" fill="#FBF4E4" />
          <text x="152" y="143" textAnchor="middle" fill="#A67C2E" fontSize="7.5" fontFamily="sans-serif">Attribution</text>
          <rect x="182" y="128" width="50" height="24" rx="6" fill="#FBF4E4" />
          <text x="207" y="143" textAnchor="middle" fill="#A67C2E" fontSize="7.5" fontFamily="sans-serif">Scales</text>
          {/* Glow dots */}
          <circle cx="35" cy="163" r="3" fill="#C4993D" opacity="0.3" />
          <circle cx="90" cy="163" r="3" fill="#C4993D" opacity="0.3" />
          <circle cx="152" cy="163" r="3" fill="#C4993D" opacity="0.3" />
          <circle cx="207" cy="163" r="3" fill="#C4993D" opacity="0.3" />
        </svg>
        <p className="text-text-body text-sm">Every robot becomes a revenue-generating platform.</p>
      </div>
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
        <rect x="65" y="70" width="210" height="100" rx="14" fill="#FFFFFF" stroke="#E8E2D9" strokeWidth="1.5" />
        {/* Icons */}
        <rect x="85" y="92" width="22" height="18" rx="3" fill="#FBF4E4" stroke="#E8E2D9" strokeWidth="0.8" />
        <rect x="90" y="88" width="12" height="5" rx="1" fill="#C4993D" opacity="0.35" />
        <rect x="116" y="102" width="5" height="8" rx="1" fill="#C4993D" opacity="0.25" />
        <rect x="124" y="98" width="5" height="12" rx="1" fill="#C4993D" opacity="0.3" />
        <rect x="132" y="93" width="5" height="17" rx="1" fill="#C4993D" opacity="0.4" />
        <text x="155" y="103" fill="#2C2418" fontSize="18" fontWeight="700" fontFamily="sans-serif">Brands</text>
        <text x="85" y="134" fill="#3D3224" fontSize="11" fontFamily="sans-serif">Campaigns &amp; marketing budgets</text>
        <text x="85" y="152" fill="#A67C2E" fontSize="9.5" fontWeight="600" fontFamily="sans-serif">$ Fund robot interactions</text>

        {/* ═══ NODE: ROBOT FLEETS — top right ═══ */}
        <rect x="625" y="70" width="210" height="108" rx="14" fill="#FFFFFF" stroke="#E8E2D9" strokeWidth="1.5" />
        {/* Mini robots */}
        <rect x="645" y="95" width="18" height="11" rx="3" fill="#2C2418" opacity="0.8" />
        <circle cx="651" cy="99" r="1.5" fill="#C4993D" opacity="0.6" />
        <circle cx="659" cy="99" r="1.5" fill="#C4993D" opacity="0.6" />
        <circle cx="649" cy="108" r="2" fill="#5C5346" />
        <circle cx="659" cy="108" r="2" fill="#5C5346" />
        <rect x="670" y="90" width="14" height="18" rx="5" fill="#2C2418" opacity="0.75" />
        <circle cx="674" cy="96" r="1.5" fill="#C4993D" opacity="0.6" />
        <circle cx="680" cy="96" r="1.5" fill="#C4993D" opacity="0.6" />
        <ellipse cx="700" cy="104" rx="10" ry="4" fill="#2C2418" opacity="0.65" />
        <circle cx="697" cy="102" r="1.5" fill="#C4993D" opacity="0.5" />
        <circle cx="703" cy="102" r="1.5" fill="#C4993D" opacity="0.5" />
        <text x="720" y="102" fill="#2C2418" fontSize="16" fontWeight="700" fontFamily="sans-serif">Robot</text>
        <text x="720" y="118" fill="#2C2418" fontSize="16" fontWeight="700" fontFamily="sans-serif">Fleets</text>
        <text x="645" y="140" fill="#3D3224" fontSize="10.5" fontFamily="sans-serif">Deliver interactions across</text>
        <text x="645" y="153" fill="#3D3224" fontSize="10.5" fontFamily="sans-serif">all environments</text>
        <text x="645" y="166" fill="#A67C2E" fontSize="9.5" fontWeight="600" fontFamily="sans-serif">$ Earn revenue share</text>

        {/* ═══ NODE: KOVIO — center ═══ */}
        <rect x="350" y="228" width="200" height="80" rx="16" fill="#2C2418" />
        <rect x="350" y="228" width="200" height="80" rx="16" fill="none" stroke="#C4993D" strokeWidth="2" className="kovio-border-animated" opacity="0.65" />
        <text x="450" y="262" textAnchor="middle" fill="#C4993D" fontSize="24" fontWeight="800" fontFamily="sans-serif">Kovio</text>
        <text x="450" y="282" textAnchor="middle" fill="#FAF8F5" fontSize="11.5" fontFamily="sans-serif">Economic interaction layer</text>
        <text x="450" y="298" textAnchor="middle" fill="#9C9488" fontSize="9" fontFamily="sans-serif">Connecting brands to robots at scale</text>

        {/* ═══ NODE: INTERACTIONS — bottom right ═══ */}
        <rect x="618" y="400" width="218" height="110" rx="14" fill="#FBF4E4" stroke="#C4993D" strokeWidth="1.2" />
        {/* Monetizable badge inside card */}
        <rect x="636" y="410" width="90" height="20" rx="10" fill="#C4993D" opacity="0.15" />
        <text x="681" y="424" textAnchor="middle" fill="#A67C2E" fontSize="8.5" fontWeight="700" fontFamily="sans-serif">$ Monetizable</text>
        {/* Person */}
        <circle cx="650" cy="452" r="7" fill="#D4CFC6" />
        <rect x="645" y="460" width="10" height="13" rx="3" fill="#D4CFC6" />
        {/* Robot */}
        <rect x="668" y="448" width="18" height="22" rx="6" fill="#2C2418" opacity="0.8" />
        <circle cx="674" cy="455" r="2" fill="#C4993D" opacity="0.6" />
        <circle cx="680" cy="455" r="2" fill="#C4993D" opacity="0.6" />
        {/* Spark */}
        <circle cx="662" cy="458" r="4" fill="#C4993D" opacity="0.12" />
        <text x="698" y="452" fill="#2C2418" fontSize="14" fontWeight="700" fontFamily="sans-serif">Real-world</text>
        <text x="698" y="469" fill="#2C2418" fontSize="14" fontWeight="700" fontFamily="sans-serif">Interactions</text>
        <text x="636" y="494" fill="#3D3224" fontSize="10.5" fontFamily="sans-serif">Branded robot moments</text>

        {/* ═══ NODE: INSIGHTS — bottom left ═══ */}
        <rect x="65" y="400" width="218" height="110" rx="14" fill="#FFFFFF" stroke="#E8E2D9" strokeWidth="1.5" />
        {/* Chart icon */}
        <rect x="85" y="422" width="46" height="30" rx="3" fill="#FBF4E4" />
        <polyline points="92,446 100,436 108,440 116,430 124,434" stroke="#C4993D" strokeWidth="1.8" fill="none" opacity="0.6" />
        <rect x="92" y="448" width="5" height="4" rx="1" fill="#C4993D" opacity="0.25" />
        <rect x="100" y="446" width="5" height="6" rx="1" fill="#C4993D" opacity="0.3" />
        <rect x="108" y="444" width="5" height="8" rx="1" fill="#C4993D" opacity="0.35" />
        <rect x="116" y="441" width="5" height="11" rx="1" fill="#C4993D" opacity="0.45" />
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
                Activating the
                <br />
                <span className="text-gradient-primary">robot economy.</span>
              </h1>
              <p className="text-lg sm:text-xl text-text-body max-w-xl mx-auto mb-8">
                The economic layer that connects brands to autonomous robots — at scale.
              </p>
              <CTAButton href="/brands">See how it works</CTAButton>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <HeroPanorama />
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 2: ROBOTS ARE ENTERING THE REAL WORLD ── */}
      <section className="py-20 md:py-28 bg-section-alt">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Robots are entering the real world.
              </h2>
              <p className="text-text-body text-lg max-w-lg mx-auto">
                Seven environments. Millions of daily interactions. Zero monetization — until now.
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

      {/* ── SECTION 3: THE MISSING ECONOMIC LAYER ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                The missing economic layer.
              </h2>
              <p className="text-text-body text-lg max-w-lg mx-auto">
                Robots are powerful but single-purpose. Kovio makes every interaction count.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <TransformationDiagram />
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 4: TWO ECOSYSTEMS CONNECTED ── */}
      <section className="py-20 md:py-28 bg-section-warm">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Two ecosystems, connected.
              </h2>
              <p className="text-text-body text-lg max-w-lg mx-auto">
                Brands fund campaigns. Robots deliver interactions. Kovio connects them.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <ArchitectureFlow />
          </ScrollReveal>

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
