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
      <div className="card-soft p-6 h-full">
        {icon && <div className="text-3xl mb-4">{icon}</div>}
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-text-body text-sm leading-relaxed">{description}</p>
      </div>
    </ScrollReveal>
  );
}
