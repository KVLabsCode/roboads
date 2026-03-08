import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  className = "",
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <ScrollReveal className={`${alignment} ${className}`}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-body text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
