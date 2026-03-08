export default function KovioLogo({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="kovio-grad"
          x1="0"
          y1="0"
          x2="32"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C4993D" />
          <stop offset="1" stopColor="#A67C2E" />
        </linearGradient>
      </defs>
      <rect
        width="32"
        height="32"
        rx="8"
        fill="url(#kovio-grad)"
        opacity="0.12"
      />
      <path
        d="M10 7v18"
        stroke="url(#kovio-grad)"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M10 16l9-9"
        stroke="url(#kovio-grad)"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 16l9 9"
        stroke="url(#kovio-grad)"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="21.5" cy="7" r="2.2" fill="#C4993D" />
      <circle cx="21.5" cy="25" r="2.2" fill="#A67C2E" />
    </svg>
  );
}
