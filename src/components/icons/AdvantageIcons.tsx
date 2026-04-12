type IconProps = { className?: string };

const base = "w-10 h-10";

export function EyeLevelIcon({ className }: IconProps) {
  return (
    <svg
      className={`${base} ${className ?? ""}`}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="6" y="10" width="20" height="12" rx="1.5" />
      <line x1="10" y1="22" x2="10" y2="27" />
      <line x1="22" y1="22" x2="22" y2="27" />
      <line x1="16" y1="6" x2="16" y2="10" />
      <circle cx="16" cy="4" r="1.5" />
    </svg>
  );
}

export function ProgrammableIcon({ className }: IconProps) {
  return (
    <svg
      className={`${base} ${className ?? ""}`}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="16" cy="16" r="10" />
      <path d="M16 6 L22 16 L16 26 L10 16 Z" />
      <circle cx="16" cy="16" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function TapToConvertIcon({ className }: IconProps) {
  return (
    <svg
      className={`${base} ${className ?? ""}`}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 14 V8 a3 3 0 0 1 6 0 v10" />
      <path d="M17 14 a3 3 0 0 1 6 0 v7 a6 6 0 0 1 -6 6 h-3 a6 6 0 0 1 -6 -6 v-3" />
      <path d="M7 12 L4 9" />
      <path d="M9 6 L7 3" />
    </svg>
  );
}

export function VerifiedImpressionsIcon({ className }: IconProps) {
  return (
    <svg
      className={`${base} ${className ?? ""}`}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 4 L27 9 v8 c0 6 -5 11 -11 12 c-6 -1 -11 -6 -11 -12 V9 Z" />
      <path d="M11 16 L15 20 L22 12" />
    </svg>
  );
}

export function OneBuyIcon({ className }: IconProps) {
  return (
    <svg
      className={`${base} ${className ?? ""}`}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="16" cy="8" r="3" />
      <circle cx="7" cy="22" r="3" />
      <circle cx="25" cy="22" r="3" />
      <path d="M16 11 L16 18" />
      <path d="M16 18 L9 21" />
      <path d="M16 18 L23 21" />
    </svg>
  );
}

export function FullAttributionIcon({ className }: IconProps) {
  return (
    <svg
      className={`${base} ${className ?? ""}`}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 22 L10 16 L14 19 L20 11 L26 16" />
      <circle cx="4" cy="22" r="1.5" />
      <circle cx="10" cy="16" r="1.5" />
      <circle cx="14" cy="19" r="1.5" />
      <circle cx="20" cy="11" r="1.5" />
      <circle cx="26" cy="16" r="1.5" />
    </svg>
  );
}
