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
    <div className="relative w-full max-w-5xl mx-auto h-[280px] sm:h-[340px] md:h-[400px]">
      <svg
        viewBox="0 0 1000 400"
        fill="none"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Sky gradient */}
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="400">
            <stop offset="0%" stopColor="#FBF4E4" />
            <stop offset="100%" stopColor="#FAF8F5" />
          </linearGradient>
          <linearGradient id="ground" x1="0" y1="300" x2="0" y2="400">
            <stop offset="0%" stopColor="#F0EBE3" />
            <stop offset="100%" stopColor="#E8E2D9" />
          </linearGradient>
        </defs>
        <rect width="1000" height="400" fill="url(#sky)" />

        {/* Ground plane */}
        <rect y="310" width="1000" height="90" fill="url(#ground)" />
        <line x1="0" y1="310" x2="1000" y2="310" stroke="#E8E2D9" strokeWidth="1" />

        {/* Buildings - background cityscape */}
        <rect x="60" y="120" width="80" height="190" rx="4" fill="#E8E2D9" />
        <rect x="65" y="130" width="14" height="10" rx="2" fill="#D4CFC6" />
        <rect x="85" y="130" width="14" height="10" rx="2" fill="#D4CFC6" />
        <rect x="105" y="130" width="14" height="10" rx="2" fill="#D4CFC6" />
        <rect x="65" y="150" width="14" height="10" rx="2" fill="#D4CFC6" />
        <rect x="85" y="150" width="14" height="10" rx="2" fill="#D4CFC6" />
        <rect x="105" y="150" width="14" height="10" rx="2" fill="#D4CFC6" />

        <rect x="160" y="160" width="60" height="150" rx="4" fill="#E8E2D9" />
        <rect x="165" y="168" width="10" height="8" rx="1" fill="#D4CFC6" />
        <rect x="180" y="168" width="10" height="8" rx="1" fill="#D4CFC6" />
        <rect x="195" y="168" width="10" height="8" rx="1" fill="#D4CFC6" />

        <rect x="720" y="100" width="90" height="210" rx="4" fill="#E8E2D9" />
        <rect x="725" y="108" width="12" height="10" rx="2" fill="#D4CFC6" />
        <rect x="743" y="108" width="12" height="10" rx="2" fill="#D4CFC6" />
        <rect x="761" y="108" width="12" height="10" rx="2" fill="#D4CFC6" />

        <rect x="830" y="180" width="70" height="130" rx="4" fill="#E8E2D9" />
        <rect x="835" y="188" width="10" height="8" rx="1" fill="#D4CFC6" />
        <rect x="850" y="188" width="10" height="8" rx="1" fill="#D4CFC6" />

        {/* Store front */}
        <rect x="240" y="230" width="120" height="80" rx="4" fill="#FFFFFF" stroke="#E8E2D9" />
        <rect x="255" y="240" width="35" height="40" rx="2" fill="#FBF4E4" />
        <rect x="298" y="240" width="35" height="40" rx="2" fill="#FBF4E4" />
        <text x="280" y="226" textAnchor="middle" fill="#9C9488" fontSize="10" fontFamily="sans-serif">STORE</text>

        {/* Hospital cross */}
        <rect x="550" y="190" width="100" height="120" rx="4" fill="#FFFFFF" stroke="#E8E2D9" />
        <rect x="590" y="198" width="20" height="20" rx="2" fill="#F5F1EC" />
        <rect x="596" y="201" width="8" height="14" rx="1" fill="#7D8C6E" opacity="0.5" />
        <rect x="593" y="205" width="14" height="6" rx="1" fill="#7D8C6E" opacity="0.5" />

        {/* ── Robot 1: Retail robot in store ── */}
        <g className="animate-float-slow" style={{ animationDelay: "0s" }}>
          <rect x="275" y="270" width="30" height="36" rx="6" fill="#2C2418" />
          <rect x="279" y="275" width="22" height="12" rx="3" fill="#C4993D" opacity="0.3" />
          <circle cx="286" cy="280" r="1.5" fill="#C4993D" />
          <circle cx="294" cy="280" r="1.5" fill="#C4993D" />
          <circle cx="282" cy="308" r="3" fill="#5C5346" />
          <circle cx="298" cy="308" r="3" fill="#5C5346" />
        </g>

        {/* ── Robot 2: Delivery bot on sidewalk ── */}
        <g className="animate-float-slow" style={{ animationDelay: "1s" }}>
          <rect x="420" y="280" width="50" height="26" rx="8" fill="#2C2418" />
          <rect x="427" y="274" width="36" height="8" rx="4" fill="#3D3224" />
          <circle cx="435" cy="290" r="3" fill="#C4993D" opacity="0.5" />
          <circle cx="457" cy="290" r="3" fill="#C4993D" opacity="0.5" />
          <circle cx="430" cy="308" r="4" fill="#5C5346" />
          <circle cx="460" cy="308" r="4" fill="#5C5346" />
          {/* Flag */}
          <line x1="460" y1="258" x2="460" y2="274" stroke="#5C5346" strokeWidth="1" />
          <rect x="460" y="258" width="12" height="8" rx="1" fill="#C4993D" opacity="0.4" />
        </g>

        {/* ── Robot 3: Hospital robot ── */}
        <g className="animate-float-slow" style={{ animationDelay: "2s" }}>
          <rect x="575" y="260" width="30" height="44" rx="8" fill="#2C2418" />
          <rect x="579" y="265" width="22" height="12" rx="3" fill="#7D8C6E" opacity="0.2" />
          <polyline points="583,271 586,268 589,273 592,270 596,271" stroke="#7D8C6E" strokeWidth="1" fill="none" opacity="0.5" />
          <ellipse cx="590" cy="306" rx="12" ry="3" fill="#5C5346" />
        </g>

        {/* ── Robot 4: Humanoid on street ── */}
        <g className="animate-float-slow" style={{ animationDelay: "0.5s" }}>
          {/* Head */}
          <ellipse cx="680" cy="252" rx="10" ry="11" fill="#2C2418" />
          <circle cx="676" cy="250" r="2" fill="#C4993D" opacity="0.5" />
          <circle cx="684" cy="250" r="2" fill="#C4993D" opacity="0.5" />
          {/* Body */}
          <rect x="670" y="263" width="20" height="24" rx="4" fill="#2C2418" />
          <circle cx="680" cy="272" r="3" fill="#C4993D" opacity="0.2" />
          {/* Arms */}
          <rect x="662" y="265" width="8" height="18" rx="4" fill="#3D3224" />
          <rect x="690" y="265" width="8" height="18" rx="4" fill="#3D3224" />
          {/* Legs */}
          <rect x="672" y="287" width="7" height="18" rx="3" fill="#3D3224" />
          <rect x="681" y="287" width="7" height="18" rx="3" fill="#3D3224" />
          <ellipse cx="675" cy="306" rx="5" ry="2" fill="#5C5346" />
          <ellipse cx="685" cy="306" rx="5" ry="2" fill="#5C5346" />
        </g>

        {/* ── Robot 5: Warehouse AMR ── */}
        <g className="animate-float-slow" style={{ animationDelay: "1.5s" }}>
          <rect x="850" y="285" width="40" height="18" rx="5" fill="#2C2418" />
          <rect x="855" y="289" width="30" height="4" rx="2" fill="#C4993D" opacity="0.3" />
          <rect x="858" y="275" width="24" height="10" rx="2" fill="#B8734A" opacity="0.25" />
          <circle cx="858" cy="305" r="4" fill="#5C5346" />
          <circle cx="882" cy="305" r="4" fill="#5C5346" />
        </g>

        {/* Kovio connection lines — animated */}
        <path d="M 300 290 Q 360 250 430 290" stroke="#C4993D" strokeWidth="1.5" className="flow-line-animated" opacity="0.3" fill="none" />
        <path d="M 460 290 Q 520 250 580 280" stroke="#C4993D" strokeWidth="1.5" className="flow-line-animated" opacity="0.3" fill="none" />
        <path d="M 600 280 Q 640 250 675 270" stroke="#C4993D" strokeWidth="1.5" className="flow-line-animated" opacity="0.3" fill="none" />
        <path d="M 695 280 Q 770 250 855 290" stroke="#C4993D" strokeWidth="1.5" className="flow-line-animated" opacity="0.3" fill="none" />
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
    <div className="max-w-4xl mx-auto">
      <svg viewBox="0 0 800 200" fill="none" className="w-full" preserveAspectRatio="xMidYMid meet">
        {/* Brands node */}
        <rect x="20" y="60" width="140" height="80" rx="12" fill="#FFFFFF" stroke="#E8E2D9" strokeWidth="1.5" />
        <text x="90" y="92" textAnchor="middle" fill="#2C2418" fontSize="15" fontWeight="600" fontFamily="sans-serif">Brands</text>
        <text x="90" y="112" textAnchor="middle" fill="#5C5346" fontSize="11" fontFamily="sans-serif">Campaigns &amp; budgets</text>

        {/* Arrow 1 */}
        <line x1="165" y1="100" x2="260" y2="100" stroke="#C4993D" strokeWidth="2" className="flow-line-animated" />
        <polygon points="255,94 268,100 255,106" fill="#C4993D" />

        {/* Kovio node */}
        <rect x="270" y="50" width="160" height="100" rx="14" fill="#2C2418" />
        <rect x="270" y="50" width="160" height="100" rx="14" fill="none" stroke="#C4993D" strokeWidth="1.5" className="kovio-border-animated" opacity="0.6" />
        <text x="350" y="92" textAnchor="middle" fill="#C4993D" fontSize="16" fontWeight="700" fontFamily="sans-serif">Kovio</text>
        <text x="350" y="112" textAnchor="middle" fill="#D4CFC6" fontSize="11" fontFamily="sans-serif">Economic layer</text>

        {/* Arrow 2 */}
        <line x1="435" y1="100" x2="530" y2="100" stroke="#C4993D" strokeWidth="2" className="flow-line-animated" />
        <polygon points="525,94 538,100 525,106" fill="#C4993D" />

        {/* Robot Fleets node */}
        <rect x="540" y="60" width="160" height="80" rx="12" fill="#FFFFFF" stroke="#E8E2D9" strokeWidth="1.5" />
        <text x="620" y="92" textAnchor="middle" fill="#2C2418" fontSize="15" fontWeight="600" fontFamily="sans-serif">Robot Fleets</text>
        <text x="620" y="112" textAnchor="middle" fill="#5C5346" fontSize="11" fontFamily="sans-serif">Deliver interactions</text>

        {/* Arrow 3 */}
        <path d="M 620 145 L 620 165" stroke="#C4993D" strokeWidth="2" className="flow-line-animated" />
        <polygon points="614,160 620,173 626,160" fill="#C4993D" />

        {/* Interactions node */}
        <rect x="555" y="175" width="130" height="22" rx="6" fill="#FBF4E4" />
        <text x="620" y="190" textAnchor="middle" fill="#A67C2E" fontSize="10" fontWeight="500" fontFamily="sans-serif">Real-world interactions</text>

        {/* Feedback loop */}
        <path d="M 620 10 Q 350 0 90 55" stroke="#C4993D" strokeWidth="1.5" className="flow-line-animated" opacity="0.4" fill="none" />
        <text x="350" y="18" textAnchor="middle" fill="#5C5346" fontSize="10" fontWeight="500" fontFamily="sans-serif">Attribution &amp; insights</text>
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
