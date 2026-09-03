import { projects, type Project } from "@/data/content";
import { useReveal } from "@/lib/hooks";
import { SectionLabel } from "./EngineeringDNA";

export function Projects() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="projects" className="section-shell relative">
      <div ref={ref} className="reveal mx-auto max-w-[1600px]">
        <SectionLabel index="06" title="Project World" caption="Four public web platforms" />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {projects.map((p, i) => {
            // Editorial asymmetric layout
            const span =
              i === 0
                ? "lg:col-span-7"
                : i === 1
                ? "lg:col-span-5"
                : i === 2
                ? "lg:col-span-5"
                : "lg:col-span-7";
            return <ProjectTile key={p.id} project={p} className={span} />;
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectTile({ project, className }: { project: Project; className: string }) {
  return (
    <a
      href={`https://${project.domain}`}
      target="_blank"
      rel="noreferrer"
      className={`group relative flex min-h-[380px] flex-col overflow-hidden rounded-2xl border border-white/8 bg-black/30 p-8 transition ${className}`}
      data-cursor="interactive"
    >
      {/* Bespoke visual per motif */}
      <ProjectVisual motif={project.motif} />

      <div className="relative z-10 mt-auto">
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-white/50">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-core" />
          {project.category}
        </div>
        <h3 className="mt-3 font-display text-3xl font-semibold uppercase leading-[1] tracking-tight text-white sm:text-4xl">
          {project.name}
        </h3>
        <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-white/65">
          {project.description}
        </p>
        <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-4">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-emerald-glow">
            {project.domain}
          </span>
          <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-white/60 transition group-hover:text-emerald-core">
            Visit
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/15 transition group-hover:translate-x-1 group-hover:border-emerald-core/50">
              →
            </span>
          </span>
        </div>
      </div>

      {/* corner ticks */}
      {[
        "top-3 left-3 border-l border-t",
        "top-3 right-3 border-r border-t",
        "bottom-3 left-3 border-l border-b",
        "bottom-3 right-3 border-r border-b",
      ].map((c, i) => (
        <span
          key={i}
          className={`pointer-events-none absolute h-3 w-3 border-white/25 transition group-hover:border-emerald-core/70 ${c}`}
        />
      ))}
    </a>
  );
}

function ProjectVisual({ motif }: { motif: Project["motif"] }) {
  if (motif === "filigree") return <FiligreeVisual />;
  if (motif === "gem") return <GemVisual />;
  if (motif === "network-blue") return <NetworkVisual accent="#6fe6ff" />;
  return <NetworkVisual accent="#f6a45c" />;
}

function FiligreeVisual() {
  // A hand-crafted silver-filigree inspired pattern
  return (
    <div className="pointer-events-none absolute inset-0">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(500px 300px at 70% 30%, rgba(200,220,255,0.08), transparent 70%), linear-gradient(180deg, rgba(0,229,138,0.05) 0%, rgba(5,7,10,0.9) 100%)",
        }}
      />
      <svg
        viewBox="0 0 500 400"
        className="absolute right-0 top-0 h-full w-2/3 opacity-70"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="fg-gold" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#e6d9b3" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#7bffb6" stopOpacity="0.4" />
          </radialGradient>
        </defs>
        <g stroke="url(#fg-gold)" strokeWidth="0.6" fill="none" opacity="0.9">
          {/* radial filigree pattern */}
          {Array.from({ length: 14 }).map((_, i) => {
            const angle = (i / 14) * Math.PI * 2;
            const cx = 320;
            const cy = 200;
            const r = 100;
            const x1 = cx + Math.cos(angle) * 20;
            const y1 = cy + Math.sin(angle) * 20;
            const x2 = cx + Math.cos(angle) * r;
            const y2 = cy + Math.sin(angle) * r;
            const cx1 = cx + Math.cos(angle + 0.4) * r * 0.6;
            const cy1 = cy + Math.sin(angle + 0.4) * r * 0.6;
            return (
              <g key={i}>
                <path d={`M ${x1} ${y1} Q ${cx1} ${cy1} ${x2} ${y2}`} />
                <circle cx={x2} cy={y2} r="4" fill="url(#fg-gold)" opacity="0.6" />
                <circle cx={x2} cy={y2} r="1.5" fill="#e6d9b3" />
              </g>
            );
          })}
          {/* concentric arcs */}
          {[60, 90, 120, 150].map((r) => (
            <circle key={r} cx="320" cy="200" r={r} strokeOpacity="0.25" />
          ))}
          {/* central medallion */}
          <circle cx="320" cy="200" r="18" fill="url(#fg-gold)" stroke="#e6d9b3" strokeOpacity="0.8" />
          <circle cx="320" cy="200" r="6" fill="#7bffb6" />
        </g>
      </svg>
    </div>
  );
}

function GemVisual() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(500px 320px at 30% 60%, rgba(0,229,138,0.12), transparent 70%), linear-gradient(180deg, #060a0d 0%, #05070a 100%)",
        }}
      />
      <svg
        viewBox="0 0 500 400"
        className="absolute right-0 top-0 h-full w-2/3"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="gem-face" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7bffb6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#00e58a" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="gem-side" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00e58a" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#067d54" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {/* emerald cut gem — hexagonal */}
        <g transform="translate(340 210)">
          {/* main faces */}
          <polygon points="-90,-40 -50,-80 50,-80 90,-40 50,60 -50,60" fill="url(#gem-face)" opacity="0.85" />
          <polygon points="-90,-40 -50,-80 -30,-30 -70,20" fill="url(#gem-side)" opacity="0.6" />
          <polygon points="90,-40 50,-80 30,-30 70,20" fill="url(#gem-side)" opacity="0.6" />
          {/* facet lines */}
          <g stroke="#7bffb6" strokeWidth="0.6" opacity="0.7" fill="none">
            <polygon points="-70,-30 -30,-60 30,-60 70,-30 30,40 -30,40" />
            <line x1="-90" y1="-40" x2="-70" y2="-30" />
            <line x1="-50" y1="-80" x2="-30" y2="-60" />
            <line x1="50" y1="-80" x2="30" y2="-60" />
            <line x1="90" y1="-40" x2="70" y2="-30" />
            <line x1="50" y1="60" x2="30" y2="40" />
            <line x1="-50" y1="60" x2="-30" y2="40" />
            <line x1="-70" y1="-30" x2="70" y2="-30" opacity="0.4" />
          </g>
          {/* highlight */}
          <polygon points="-30,-60 30,-60 20,-30 -20,-30" fill="#ffffff" opacity="0.18" />
        </g>
        {/* smaller gems */}
        <g transform="translate(120 130)" opacity="0.5">
          <polygon points="0,-20 15,-8 15,10 0,22 -15,10 -15,-8" fill="url(#gem-face)" stroke="#7bffb6" strokeWidth="0.4" />
        </g>
        <g transform="translate(180 300)" opacity="0.35">
          <polygon points="0,-15 12,-5 12,8 0,18 -12,8 -12,-5" fill="url(#gem-face)" stroke="#7bffb6" strokeWidth="0.4" />
        </g>
      </svg>
    </div>
  );
}

function NetworkVisual({ accent }: { accent: string }) {
  // MLM hierarchy visualization
  const nodes = [
    { x: 250, y: 40, r: 12, tier: 0 },
    { x: 130, y: 140, r: 9, tier: 1 },
    { x: 250, y: 140, r: 9, tier: 1 },
    { x: 370, y: 140, r: 9, tier: 1 },
    { x: 70, y: 240, r: 6, tier: 2 },
    { x: 160, y: 240, r: 6, tier: 2 },
    { x: 220, y: 240, r: 6, tier: 2 },
    { x: 280, y: 240, r: 6, tier: 2 },
    { x: 340, y: 240, r: 6, tier: 2 },
    { x: 430, y: 240, r: 6, tier: 2 },
    { x: 50, y: 330, r: 4, tier: 3 },
    { x: 100, y: 330, r: 4, tier: 3 },
    { x: 190, y: 330, r: 4, tier: 3 },
    { x: 250, y: 330, r: 4, tier: 3 },
    { x: 310, y: 330, r: 4, tier: 3 },
    { x: 400, y: 330, r: 4, tier: 3 },
    { x: 450, y: 330, r: 4, tier: 3 },
  ];
  const edges: [number, number][] = [
    [0, 1], [0, 2], [0, 3],
    [1, 4], [1, 5], [2, 6], [2, 7], [3, 8], [3, 9],
    [4, 10], [4, 11], [5, 12], [6, 13], [7, 13], [8, 14], [9, 15], [9, 16],
  ];
  return (
    <div className="pointer-events-none absolute inset-0">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(500px 320px at 30% 40%, ${accent}22, transparent 70%), linear-gradient(180deg, rgba(5,7,10,0.7) 0%, rgba(5,7,10,0.95) 100%)`,
        }}
      />
      <svg
        viewBox="0 0 500 380"
        className="absolute right-0 top-0 h-full w-2/3 opacity-90"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke={accent} strokeOpacity="0.4" strokeWidth="0.8" fill="none">
          {edges.map(([a, b], i) => (
            <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} />
          ))}
        </g>
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r={n.r + 3} fill={accent} opacity="0.15" />
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill="#0a0d12"
              stroke={accent}
              strokeWidth="1.2"
              opacity="0.9"
            />
            <circle cx={n.x} cy={n.y} r={n.r * 0.4} fill={accent} />
          </g>
        ))}
      </svg>
    </div>
  );
}
