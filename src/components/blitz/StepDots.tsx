"use client";

export default function StepDots({
  labels,
  active,
  onPick,
  groupLabel,
}: {
  labels: readonly string[];
  active: number;
  onPick: (i: number) => void;
  groupLabel: string;
}) {
  return (
    <div className="kv-dots" role="group" aria-label={groupLabel}>
      {labels.map((label, i) => (
        <button key={label} type="button" className="kv-dot" aria-label={label} aria-pressed={i === active} onClick={() => onPick(i)}>
          <span />
        </button>
      ))}
    </div>
  );
}
