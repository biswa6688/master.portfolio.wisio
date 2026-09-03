import { useState } from "react";
import { products, type Product } from "@/data/content";
import { useReveal } from "@/lib/hooks";
import { SectionLabel } from "./EngineeringDNA";

const KIND_COLOR: Record<string, string> = {
  web: "#6fe6ff",
  sdk: "#7bffb6",
  engine: "#00e58a",
  native: "#c084fc",
  protocol: "#f6a45c",
  signal: "#00e58a",
};

export function Products() {
  const ref = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<string>(products[0].id);
  const current = products.find((p) => p.id === active)!;

  return (
    <section id="products" className="section-shell relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1000px 700px at 50% 30%, rgba(0,229,138,0.08), transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          }}
        />
      </div>

      <div ref={ref} className="reveal mx-auto max-w-[1600px]">
        <SectionLabel index="07" title="Product Laboratory" caption="Software as living systems" />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Product list rail */}
          <div className="lg:col-span-3">
            <div className="sticky top-28 space-y-2">
              <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
                Select product
              </div>
              {products.map((p) => {
                const isActive = active === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActive(p.id)}
                    onMouseEnter={() => setActive(p.id)}
                    className={`group flex w-full flex-col items-start gap-1 rounded-lg border p-4 text-left transition ${
                      isActive
                        ? "border-emerald-core/50 bg-emerald-core/10"
                        : "border-white/8 bg-white/[0.02] hover:border-white/25"
                    }`}
                  >
                    <div className="flex w-full items-center justify-between">
                      <span
                        className={`font-display text-lg font-semibold tracking-tight ${
                          isActive ? "text-emerald-glow" : "text-white/90"
                        }`}
                      >
                        {p.name}
                      </span>
                      <span
                        className={`h-2 w-2 rounded-full transition ${
                          isActive
                            ? "bg-emerald-core shadow-[0_0_12px_var(--color-emerald-core)]"
                            : "bg-white/20"
                        }`}
                      />
                    </div>
                    <span className="font-mono text-[9.5px] uppercase tracking-[0.24em] text-white/50">
                      {p.kind}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Laboratory scene */}
          <div className="lg:col-span-9">
            <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-black/40 p-6 sm:p-10">
              {/* HUD */}
              <div className="mb-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-core" />
                  Product · {current.name}
                </span>
                <span>Architecture view · live</span>
              </div>

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                {/* Intro */}
                <div className="lg:col-span-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-emerald-glow">
                    {current.kind}
                  </div>
                  <h3 className="mt-3 font-display text-4xl font-semibold uppercase leading-[0.98] tracking-tight text-white sm:text-5xl">
                    {current.name}
                  </h3>
                  <p className="mt-5 text-[15px] leading-relaxed text-white/70">{current.intro}</p>

                  {/* deployments */}
                  {current.deployments && (
                    <div className="mt-8 border-t border-white/8 pt-6">
                      <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
                        Deployments
                      </div>
                      <ul className="mt-4 space-y-2">
                        {current.deployments.map((d) => (
                          <li
                            key={d}
                            className="flex items-start gap-3 rounded-md border border-white/8 bg-white/[0.02] px-3 py-2 font-mono text-[11px] tracking-wide text-white/75"
                          >
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-core" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-8 border-t border-white/8 pt-6">
                    <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
                      Layer legend
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {Object.entries(KIND_COLOR).map(([k, v]) => (
                        <span
                          key={k}
                          className="inline-flex items-center gap-1.5 rounded-sm border border-white/10 bg-black/30 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.22em] text-white/60"
                        >
                          <span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ background: v }}
                          />
                          {k}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Architecture stack visualization */}
                <div className="lg:col-span-7">
                  <ArchitectureStack product={current} />
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
                  className={`pointer-events-none absolute h-3 w-3 border-emerald-core/40 ${c}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArchitectureStack({ product }: { product: Product }) {
  return (
    <div className="relative">
      <div className="relative flex flex-col gap-2">
        {product.layers.map((layer, i) => {
          const color = KIND_COLOR[layer.kind];
          return (
            <div key={`${product.id}-${i}`} className="group relative">
              {/* Layer plate */}
              <div
                className="relative flex items-center justify-between overflow-hidden rounded-lg border border-white/10 bg-gradient-to-r from-white/[0.04] to-white/[0.01] px-5 py-4 transition-all duration-500"
                style={{
                  transform: `translateX(${(i % 2 === 0 ? -1 : 1) * 4}px) perspective(1200px) rotateY(${i % 2 === 0 ? -2 : 2}deg)`,
                  boxShadow: `0 20px 40px -20px ${color}22, inset 0 1px 0 rgba(255,255,255,0.04)`,
                  animation: `layerIn 700ms ${i * 90}ms cubic-bezier(0.16, 1, 0.3, 1) both`,
                }}
              >
                {/* left accent bar */}
                <div
                  className="absolute inset-y-0 left-0 w-[3px]"
                  style={{ background: color, boxShadow: `0 0 12px ${color}` }}
                />
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">
                    L{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-lg font-medium tracking-tight text-white">
                    {layer.label}
                  </span>
                </div>
                <span
                  className="font-mono text-[9.5px] uppercase tracking-[0.24em]"
                  style={{ color }}
                >
                  {layer.kind}
                </span>

                {/* signal traveling across */}
                <span
                  className="pointer-events-none absolute inset-y-0 left-0 w-1/4 opacity-40"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${color}66, transparent)`,
                    animation: `signalMove 4s ${i * 0.4}s ease-in-out infinite`,
                  }}
                />
              </div>
              {/* connector down */}
              {i < product.layers.length - 1 && (
                <div className="relative mx-auto h-6 w-px overflow-hidden">
                  <div
                    className="absolute inset-x-0 top-0 h-full"
                    style={{
                      background: `linear-gradient(180deg, ${color}, ${
                        KIND_COLOR[product.layers[i + 1].kind]
                      })`,
                      opacity: 0.7,
                    }}
                  />
                  {/* Traveling dot */}
                  <div
                    className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full"
                    style={{
                      background: color,
                      boxShadow: `0 0 12px ${color}`,
                      animation: `dotFall 2.2s ${i * 0.3}s ease-in-out infinite`,
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes layerIn {
          from { opacity: 0; transform: translateY(24px) perspective(1200px) rotateY(-6deg); }
          to { opacity: 1; }
        }
        @keyframes signalMove {
          0% { transform: translateX(-30%); opacity: 0; }
          40% { opacity: 1; }
          100% { transform: translateX(430%); opacity: 0; }
        }
        @keyframes dotFall {
          0% { top: -8px; opacity: 0; }
          20% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}
