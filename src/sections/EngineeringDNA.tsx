import { useState } from "react";
import { dnaBranches } from "@/data/content";
import { useReveal } from "@/lib/hooks";

export function EngineeringDNA() {
  const ref = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<string | null>(null);
  const size = 640;
  const cx = size / 2;
  const cy = size / 2;
  const inner = 96;
  const outer = 260;

  return (
    <section id="dna" className="section-shell relative">
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(700px 500px at 30% 40%, rgba(0,229,138,0.08), transparent 70%), radial-gradient(600px 400px at 80% 70%, rgba(111,230,255,0.06), transparent 70%)",
          }}
        />
      </div>

      <div ref={ref} className="reveal mx-auto max-w-[1600px]">
        <SectionLabel index="02" title="Engineering DNA" caption="Identity as a system" />

        <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Diagram */}
          <div className="relative order-2 lg:order-1 lg:col-span-7">
            <div className="relative mx-auto aspect-square w-full max-w-[720px]">
              <svg viewBox={`0 0 ${size} ${size}`} className="h-full w-full">
                <defs>
                  <radialGradient id="dna-core" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="#7bffb6" stopOpacity="0.9" />
                    <stop offset="60%" stopColor="#00e58a" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#00e58a" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="dna-line" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#00e58a" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#00e58a" stopOpacity="0.05" />
                  </linearGradient>
                </defs>

                {/* Concentric rings */}
                {[outer, outer - 40, outer - 90, outer - 140].map((r, i) => (
                  <circle
                    key={i}
                    cx={cx}
                    cy={cy}
                    r={r}
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity={0.08}
                    className="text-white"
                  />
                ))}
                {/* Dashed guide ring */}
                <g className="slow-spin" style={{ transformOrigin: `${cx}px ${cy}px` }}>
                  <circle
                    cx={cx}
                    cy={cy}
                    r={outer - 20}
                    fill="none"
                    stroke="#00e58a"
                    strokeOpacity={0.35}
                    strokeDasharray="2 8"
                  />
                </g>

                {/* Halo */}
                <circle cx={cx} cy={cy} r={inner + 40} fill="url(#dna-core)" />

                {/* Branches */}
                {dnaBranches.map((b) => {
                  const rad = (b.angle * Math.PI) / 180;
                  const x1 = cx + Math.cos(rad) * (inner + 6);
                  const y1 = cy + Math.sin(rad) * (inner + 6);
                  const x2 = cx + Math.cos(rad) * (outer - 20);
                  const y2 = cy + Math.sin(rad) * (outer - 20);
                  const isActive = active === b.id;
                  return (
                    <g
                      key={b.id}
                      onMouseEnter={() => setActive(b.id)}
                      onMouseLeave={() => setActive(null)}
                      style={{ cursor: "pointer" }}
                    >
                      <line
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke={isActive ? "#7bffb6" : "#00e58a"}
                        strokeOpacity={isActive ? 0.9 : 0.35}
                        strokeWidth={isActive ? 1.4 : 0.8}
                      />
                      {/* end dot */}
                      <circle
                        cx={x2}
                        cy={y2}
                        r={isActive ? 5 : 3.5}
                        fill={isActive ? "#7bffb6" : "#00e58a"}
                        filter={isActive ? "url(#glow)" : undefined}
                      />
                      {/* label */}
                      <BranchLabel cx={cx} cy={cy} angle={b.angle} outer={outer} label={b.label} detail={b.detail} isActive={isActive} />
                    </g>
                  );
                })}

                {/* Center core */}
                <g>
                  <circle cx={cx} cy={cy} r={inner} fill="#0a0d12" stroke="#00e58a" strokeOpacity="0.5" />
                  <circle cx={cx} cy={cy} r={inner - 6} fill="none" stroke="#00e58a" strokeOpacity="0.15" />
                  <text
                    x={cx}
                    y={cy - 12}
                    textAnchor="middle"
                    className="font-display"
                    fontSize="42"
                    fontWeight="700"
                    fill="#f1f5f9"
                  >
                    14+
                  </text>
                  <text
                    x={cx}
                    y={cy + 14}
                    textAnchor="middle"
                    fontFamily="JetBrains Mono, monospace"
                    fontSize="10"
                    letterSpacing="4"
                    fill="#7bffb6"
                  >
                    YEARS
                  </text>
                  <text
                    x={cx}
                    y={cy + 32}
                    textAnchor="middle"
                    fontFamily="JetBrains Mono, monospace"
                    fontSize="8.5"
                    letterSpacing="3"
                    fill="#94a3b8"
                  >
                    ENGINEERING CORE
                  </text>
                </g>

                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </svg>
            </div>
          </div>

          {/* Description */}
          <div className="order-1 lg:order-2 lg:col-span-5">
            <p className="max-w-md font-display text-2xl leading-snug tracking-tight text-white/90 dark:text-white/90 sm:text-3xl">
              Not a resume. A <span className="text-emerald-core">system</span> — eight branches shaped by fourteen years of building.
            </p>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/60 dark:text-white/60">
              Every branch below is an area I ship in, not a checkbox. Hover the diagram to isolate a branch and see how it connects to the engineering core.
            </p>

            <div className="mt-10 space-y-1.5">
              {dnaBranches.map((b) => (
                <button
                  key={b.id}
                  onMouseEnter={() => setActive(b.id)}
                  onMouseLeave={() => setActive(null)}
                  className={`flex w-full items-center justify-between border-b border-white/6 py-3 text-left transition ${
                    active === b.id ? "border-emerald-core/40" : ""
                  }`}
                >
                  <span
                    className={`font-mono text-[11px] uppercase tracking-[0.28em] transition ${
                      active === b.id ? "text-emerald-glow" : "text-white/75"
                    }`}
                  >
                    {b.label}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                    {b.detail}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BranchLabel({
  cx,
  cy,
  angle,
  outer,
  label,
  detail,
  isActive,
}: {
  cx: number;
  cy: number;
  angle: number;
  outer: number;
  label: string;
  detail: string;
  isActive: boolean;
}) {
  const rad = (angle * Math.PI) / 180;
  const lx = cx + Math.cos(rad) * (outer + 8);
  const ly = cy + Math.sin(rad) * (outer + 8);
  // determine anchor
  const cos = Math.cos(rad);
  const anchor = cos > 0.2 ? "start" : cos < -0.2 ? "end" : "middle";
  const dx = anchor === "start" ? 10 : anchor === "end" ? -10 : 0;
  const dy = Math.sin(rad) > 0.5 ? 12 : Math.sin(rad) < -0.5 ? -6 : 4;
  return (
    <g transform={`translate(${lx + dx}, ${ly + dy})`}>
      <text
        textAnchor={anchor}
        fontFamily="Space Grotesk, sans-serif"
        fontWeight="600"
        fontSize="13"
        letterSpacing="2"
        fill={isActive ? "#f1f5f9" : "#cbd5e1"}
      >
        {label}
      </text>
      <text
        y={14}
        textAnchor={anchor}
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        letterSpacing="1.5"
        fill={isActive ? "#7bffb6" : "#64748b"}
      >
        {detail}
      </text>
    </g>
  );
}

export function SectionLabel({
  index,
  title,
  caption,
}: {
  index: string;
  title: string;
  caption: string;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex items-start gap-6">
        <span className="mt-2 flex h-6 items-center rounded-sm border border-emerald-core/40 bg-emerald-core/10 px-2 font-mono text-[10px] uppercase tracking-[0.3em] text-emerald-glow">
          Scene · {index}
        </span>
        <div>
          <h2 className="font-display text-[clamp(2rem,4.4vw,3.6rem)] font-semibold uppercase leading-[0.98] tracking-tight text-white dark:text-white">
            {title}
          </h2>
          <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.3em] text-white/45">
            {caption}
          </div>
        </div>
      </div>
      <div className="hidden max-w-xs text-right text-[11px] uppercase tracking-[0.3em] text-white/35 sm:block">
        <span className="font-mono">Continuous cinematic story ·</span>
      </div>
    </div>
  );
}
