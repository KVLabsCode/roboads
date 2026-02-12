import ScrollReveal from "./ScrollReveal";
import CTAButton from "./CTAButton";

interface PanelSide {
  title: string;
  description: string;
  points: string[];
  cta: { label: string; href: string };
}

interface SplitPanelProps {
  left: PanelSide;
  right: PanelSide;
}

function PanelCard({ side, delay }: { side: PanelSide; delay: number }) {
  return (
    <ScrollReveal delay={delay} className="flex-1">
      <div className="glass border border-border-glow rounded-xl p-5 sm:p-8 h-full flex flex-col glow-border-static shadow-neon-border">
        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">{side.title}</h3>
        <p className="text-muted mb-6">{side.description}</p>
        <ul className="space-y-3 mb-8 flex-1">
          {side.points.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
              <span className="text-accent mt-0.5" style={{ filter: "drop-shadow(0 0 4px rgba(0, 212, 255, 0.5))" }}>&#x2713;</span>
              {point}
            </li>
          ))}
        </ul>
        <CTAButton href={side.cta.href}>{side.cta.label}</CTAButton>
      </div>
    </ScrollReveal>
  );
}

export default function SplitPanel({ left, right }: SplitPanelProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <PanelCard side={left} delay={0} />
      <PanelCard side={right} delay={0.15} />
    </div>
  );
}
