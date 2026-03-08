import ScrollReveal from "./ScrollReveal";

interface SurfaceItem {
  title: string;
  description: string;
}

interface SurfaceGridProps {
  items: SurfaceItem[];
}

export default function SurfaceGrid({ items }: SurfaceGridProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, i) => (
        <ScrollReveal key={i} delay={i * 0.08}>
          <div className="card-soft p-5 h-full">
            <h4 className="text-sm font-semibold text-foreground mb-1.5">
              {item.title}
            </h4>
            <p className="text-text-body text-xs leading-relaxed">
              {item.description}
            </p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
