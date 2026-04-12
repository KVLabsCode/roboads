type IconProps = { className?: string };

const base = "w-12 h-12";

export function AudienceIcon({ className }: IconProps) {
  return (
    <svg
      className={`${base} ${className ?? ""}`}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="24" cy="24" r="18" />
      <circle cx="24" cy="24" r="11" />
      <circle cx="24" cy="24" r="4" />
      <line x1="24" y1="2" x2="24" y2="10" />
      <line x1="24" y1="38" x2="24" y2="46" />
      <line x1="2" y1="24" x2="10" y2="24" />
      <line x1="38" y1="24" x2="46" y2="24" />
    </svg>
  );
}

export function FleetsIcon({ className }: IconProps) {
  return (
    <svg
      className={`${base} ${className ?? ""}`}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* small delivery bot */}
      <rect x="6" y="26" width="12" height="9" rx="1.5" />
      <circle cx="9" cy="37" r="1.6" fill="currentColor" />
      <circle cx="15" cy="37" r="1.6" fill="currentColor" />
      <line x1="12" y1="22" x2="12" y2="26" />
      <circle cx="12" cy="21" r="1" fill="currentColor" />
      {/* humanoid */}
      <circle cx="24" cy="14" r="3.5" />
      <line x1="24" y1="17.5" x2="24" y2="30" />
      <line x1="20" y1="22" x2="28" y2="22" />
      <line x1="24" y1="30" x2="21" y2="38" />
      <line x1="24" y1="30" x2="27" y2="38" />
      {/* drone */}
      <line x1="34" y1="10" x2="44" y2="10" />
      <circle cx="34" cy="10" r="2" />
      <circle cx="44" cy="10" r="2" />
      <line x1="39" y1="10" x2="39" y2="16" />
      <path d="M36 16 L42 16 L39 21 Z" />
    </svg>
  );
}

export function CreativeIcon({ className }: IconProps) {
  return (
    <svg
      className={`${base} ${className ?? ""}`}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="10" width="38" height="24" rx="1.5" />
      <line x1="5" y1="16" x2="43" y2="16" />
      <circle cx="9" cy="13" r="0.8" fill="currentColor" />
      <circle cx="12" cy="13" r="0.8" fill="currentColor" />
      <circle cx="15" cy="13" r="0.8" fill="currentColor" />
      <path d="M24 20 L24 30" />
      <path d="M24 20 L20 24" />
      <path d="M24 20 L28 24" />
      <line x1="17" y1="30" x2="31" y2="30" />
      <line x1="19" y1="42" x2="29" y2="42" />
      <line x1="24" y1="34" x2="24" y2="42" />
    </svg>
  );
}

export function MeasureIcon({ className }: IconProps) {
  return (
    <svg
      className={`${base} ${className ?? ""}`}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="6" y1="6" x2="6" y2="42" />
      <line x1="6" y1="42" x2="44" y2="42" />
      <path d="M12 32 L20 24 L26 29 L36 14" />
      <circle cx="12" cy="32" r="1.8" fill="currentColor" />
      <circle cx="20" cy="24" r="1.8" fill="currentColor" />
      <circle cx="26" cy="29" r="1.8" fill="currentColor" />
      <circle cx="36" cy="14" r="1.8" fill="currentColor" />
      <path d="M32 14 L36 10 L40 14" />
    </svg>
  );
}
