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
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-cyan-white mb-4 accent-line-center">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
