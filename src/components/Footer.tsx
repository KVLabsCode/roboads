export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center gap-6 md:gap-0 md:justify-between">
        <a href="#top" className="font-display text-xl tracking-tight">
          Ko<span className="text-gold italic">v</span>io
        </a>
        <p className="text-[11px] uppercase tracking-[0.2em] text-mute font-medium text-center">
          The monetisation layer for autonomous robot fleets.
        </p>
        <p className="text-[11px] uppercase tracking-[0.2em] text-mute font-medium">
          © 2026 Kovio
        </p>
      </div>
    </footer>
  );
}
