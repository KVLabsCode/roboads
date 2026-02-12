import ScrollReveal from "./ScrollReveal";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: string;
  delay?: number;
}

export default function FeatureCard({
  title,
  description,
  icon,
  delay = 0,
}: FeatureCardProps) {
  return (
    <ScrollReveal delay={delay}>
      <div className="glass border border-border-glow rounded-xl p-6 glow-border corner-accents hover:shadow-glow-sm transition-all duration-300 h-full">
        {icon && <div className="text-3xl mb-4">{icon}</div>}
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted text-sm leading-relaxed">{description}</p>
      </div>
    </ScrollReveal>
  );
}
