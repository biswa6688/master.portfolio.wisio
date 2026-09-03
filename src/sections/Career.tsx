import { useState } from "react";
import { career } from "@/data/content";
import { useReveal } from "@/lib/hooks";
import { SectionLabel } from "./EngineeringDNA";

export function Career() {
  const ref = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<string>(career[career.length - 1].id);
  const current = career.find((c) => c.id === active)!;

  return (
    <section id="career" className="section-shell relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1000px 700px at 30% 40%, rgba(0,229,138,0.06), transparent 70%), radial-gradient(700px 500px at 80% 60%, rgba(111,230,255,0.05), transparent 70%)",
          }}
        />
      </div>

      <div ref={ref} className="reveal mx-auto max-w-[1600px]">
        <SectionLabel index="04" title="Career Journey" caption="A camera moving forward in time" />

        {/* 3D perspective walkway */}
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="relative h-[560px] w-full overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-b from-ink-1/40 to-ink-0/60">
              {/* Perspective floor */}
              <div className="pointer-events-none absolute inset-0" aria-hidden>
                <div
                  className="absolute inset-x-0 bottom-0 h-2/3"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent, rgba(0,229,138,0.05) 40%, rgba(0,229,138,0.15) 100%)",
                    transform: "perspective(900px) rotateX(60deg)",
                    transformOrigin: "bottom",
                  }}
                />
                {/* Perspective grid */}
                <svg
                  viewBox="0 0 1000 600"
                  preserveAspectRatio="none"
                  className="absolute inset-0 h-full w-full"
                >
                  <defs>
                    <linearGradient id="floor-fade" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00e58a" stopOpacity="0" />
                      <stop offset="60%" stopColor="#00e58a" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#00e58a" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>
                  {/* horizon */}
                  <line x1="0" y1="200" x2="1000" y2="200" stroke="#00e58a" strokeOpacity="0.25" />
                  {/* vertical vanishing lines */}
                  {Array.from({ length: 20 }).map((_, i) => {
                    const startX = (i / 19) * 1000;
                    return (
                      <line
                        key={i}
                        x1={startX}
                        y1={600}
                        x2={500}
                        y2={200}
                        stroke="url(#floor-fade)"
                        strokeWidth={0.6}
                      />
                    );
                  })}
                  {/* horizontal receding lines */}
                  {[210, 230, 260, 300, 350, 410, 490, 590].map((y, i) => (
                    <line
                      key={i}
                      x1="0"
                      y1={y}
                      x2="1000"
                      y2={y}
                      stroke="#00e58a"
                      strokeOpacity={0.06 + i * 0.02}
                    />
                  ))}
                </svg>
                {/* atmosphere */}
                <div
                  className="absolute inset-x-0 top-0 h-1/2"
                  style={{
                    background:
                      "radial-gradient(600px 300px at 50% 100%, rgba(0,229,138,0.14), transparent 70%)",
                  }}
                />
              </div>

              {/* Milestone monoliths — laid out on the walkway */}
              <div className="absolute inset-x-0 bottom-4 top-[45%]">
                <div className="relative mx-auto flex h-full max-w-[900px] items-end justify-between px-8">
                  {career.map((c, i) => {
                    const isActive = c.id === active;
                    // Larger later
                    const heightPct = 40 + i * 12 + (isActive ? 8 : 0);
                    const widthPx = 46 + i * 8 + (isActive ? 6 : 0);
                    return (
                      <button
                        key={c.id}
                        onMouseEnter={() => setActive(c.id)}
                        onClick={() => setActive(c.id)}
                        className="group relative flex h-full flex-col items-center justify-end transition-[width] duration-500 ease-out"
                        style={{ width: widthPx }}
                      >
                        {/* Monolith */}
                        <div
                          className="relative w-full overflow-hidden rounded-t-md border border-white/10 transition-all duration-500"
                          style={{
                            height: `${heightPct}%`,
                            background: isActive
                              ? "linear-gradient(180deg, rgba(0,229,138,0.45), rgba(0,229,138,0.15) 60%, rgba(10,13,18,0.9))"
                              : "linear-gradient(180deg, rgba(0,229,138,0.18), rgba(10,13,18,0.85))",
                            boxShadow: isActive
                              ? "0 0 40px -10px rgba(0,229,138,0.7)"
                              : "0 20px 40px -20px rgba(0,0,0,0.7)",
                          }}
                        >
                          <div className="absolute inset-x-2 top-2 flex flex-col items-center font-mono text-[9px] uppercase tracking-[0.24em] text-white/70">
                            {c.year}
                          </div>
                          <div className="absolute inset-x-1 bottom-2 top-8 flex items-end justify-center">
                            <span
                              className="rotate-180 font-mono text-[8px] uppercase tracking-[0.32em] text-white/50"
                              style={{ writingMode: "vertical-rl" }}
                            >
                              {c.company.split(" ")[0]}
                            </span>
                          </div>
                          {/* Emerald cap */}
                          <div className="absolute inset-x-0 top-0 h-[3px] bg-emerald-core shadow-[0_0_16px_var(--color-emerald-core)]" />
                        </div>
                        {/* Reflection */}
                        <div
                          className="mt-1 w-full"
                          style={{
                            height: `${heightPct * 0.35}%`,
                            background:
                              "linear-gradient(180deg, rgba(0,229,138,0.15), transparent)",
                            transform: "scaleY(-1)",
                            maskImage: "linear-gradient(180deg, black, transparent)",
                            WebkitMaskImage: "linear-gradient(180deg, black, transparent)",
                            opacity: 0.5,
                          }}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* HUD */}
              <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-white/55">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-core" />
                Scene · 04 · Career walkway
              </div>
              <div className="pointer-events-none absolute right-4 top-4 font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
                {career[0].year} → present
              </div>
              {[
                "top-3 left-3 border-l border-t",
                "top-3 right-3 border-r border-t",
                "bottom-3 left-3 border-l border-b",
                "bottom-3 right-3 border-r border-b",
              ].map((c, i) => (
                <span
                  key={i}
                  className={`pointer-events-none absolute h-3 w-3 border-emerald-core/60 ${c}`}
                />
              ))}
            </div>
          </div>

          {/* Active milestone details */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 rounded-2xl border border-white/8 bg-white/[0.02] p-8">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-emerald-glow">
                  {current.years ?? current.year}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                  {current.role}
                </span>
              </div>
              <h3 className="mt-3 font-display text-3xl font-semibold uppercase leading-[1] tracking-tight text-white">
                {current.company}
              </h3>
              <p className="mt-5 text-[15px] leading-relaxed text-white/70">{current.summary}</p>

              <div className="mt-8 border-t border-white/8 pt-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
                  All milestones
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {career.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setActive(c.id)}
                      onMouseEnter={() => setActive(c.id)}
                      className={`rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] transition ${
                        active === c.id
                          ? "border-emerald-core/60 bg-emerald-core/15 text-emerald-glow"
                          : "border-white/10 text-white/60 hover:border-white/25"
                      }`}
                    >
                      {c.year}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
