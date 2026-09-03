import { Suspense, lazy, useState } from "react";
import { techClusters } from "@/data/content";
import { useReveal } from "@/lib/hooks";
import { SectionLabel } from "./EngineeringDNA";

const TechConstellation = lazy(() =>
  import("@/components/three/TechConstellation").then((m) => ({ default: m.TechConstellation }))
);

const CLUSTER_COLOR: Record<string, string> = {
  frontend: "#00e58a",
  backend: "#6fe6ff",
  data: "#7bffb6",
  comm: "#00e58a",
  systems: "#c084fc",
};

export function TechUniverse() {
  const ref = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="tech" className="section-shell relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1000px 700px at 60% 50%, rgba(0,229,138,0.06), transparent 70%)",
          }}
        />
      </div>

      <div ref={ref} className="reveal mx-auto max-w-[1600px]">
        <SectionLabel index="03" title="Technology Constellation" caption="Stack as spatial clusters" />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="max-w-md font-display text-2xl leading-snug tracking-tight text-white/90 dark:text-white/90 sm:text-3xl">
              No progress bars. Each technology exists as a <span className="text-emerald-core">node</span> in a live 3D lattice.
            </p>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/60 dark:text-white/60">
              Rotate the constellation, hover a node, or filter a cluster. The scene isolates relationships so you can see how stacks combine on real projects.
            </p>

            <div className="mt-8 space-y-2">
              {techClusters.map((c) => {
                const isActive = active === c.id;
                return (
                  <button
                    key={c.id}
                    onMouseEnter={() => setActive(c.id)}
                    onMouseLeave={() => setActive(null)}
                    onClick={() => setActive((prev) => (prev === c.id ? null : c.id))}
                    className={`group flex w-full items-center justify-between rounded-lg border px-4 py-3 text-left transition ${
                      isActive
                        ? "border-emerald-core/50 bg-emerald-core/10"
                        : "border-white/8 bg-white/[0.02] hover:border-white/20"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{
                          background: CLUSTER_COLOR[c.id],
                          boxShadow: `0 0 12px ${CLUSTER_COLOR[c.id]}`,
                        }}
                      />
                      <span>
                        <span className="block font-display text-sm font-medium uppercase tracking-[0.18em] text-white/90">
                          {c.label}
                        </span>
                        <span className="block font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">
                          {c.hint}
                        </span>
                      </span>
                    </span>
                    <span className="font-mono text-[10px] text-white/45">
                      {c.items.length.toString().padStart(2, "0")}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="relative h-[560px] w-full overflow-hidden rounded-2xl border border-white/8 bg-black/40 sm:h-[640px]">
              {/* HUD overlays */}
              <div className="pointer-events-none absolute inset-0 z-10">
                <div className="absolute left-4 top-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-white/55">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-core" />
                  Constellation · Interactive
                </div>
                <div className="absolute right-4 top-4 font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
                  {active
                    ? `Isolating · ${techClusters.find((c) => c.id === active)?.label}`
                    : "Drag to rotate · scroll to zoom"}
                </div>
                {[
                  "top-3 left-3 border-l border-t",
                  "top-3 right-3 border-r border-t",
                  "bottom-3 left-3 border-l border-b",
                  "bottom-3 right-3 border-r border-b",
                ].map((c, i) => (
                  <span key={i} className={`absolute h-3 w-3 border-emerald-core/60 ${c}`} />
                ))}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
                  <div className="flex flex-wrap gap-2">
                    {techClusters.map((c) => (
                      <span
                        key={c.id}
                        className="inline-flex items-center gap-1.5 rounded-sm border border-white/10 px-2 py-1"
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ background: CLUSTER_COLOR[c.id] }}
                        />
                        {c.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <Suspense
                fallback={
                  <div className="flex h-full w-full items-center justify-center font-mono text-[11px] uppercase tracking-[0.3em] text-white/40">
                    Loading constellation…
                  </div>
                }
              >
                <TechConstellation activeCluster={active} setActiveCluster={setActive} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
