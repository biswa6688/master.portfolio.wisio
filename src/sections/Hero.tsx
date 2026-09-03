import { Suspense, lazy, useEffect, useState } from "react";
import { person } from "@/data/content";
import { useMouseParallax } from "@/lib/hooks";

const HeroScene = lazy(() =>
  import("@/components/three/HeroScene").then((m) => ({ default: m.HeroScene }))
);

export function Hero() {
  const mouse = useMouseParallax();
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* radial gradient */}
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(1200px 700px at 78% 40%, rgba(0,229,138,0.10), transparent 65%), radial-gradient(900px 600px at 15% 20%, rgba(111,230,255,0.06), transparent 70%), linear-gradient(180deg, #05070a 0%, #05070a 100%)",
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 85%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 items-center gap-8 px-5 pt-24 pb-16 sm:px-8 lg:grid-cols-12 lg:pt-32">
        {/* Left column */}
        <div className="relative z-10 flex flex-col lg:col-span-5">
          {/* metadata line */}
          <div className="mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 dark:text-white/50">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-emerald-core signal-ping text-emerald-core" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-core" />
            </span>
            <span>Engineering Universe · v2026.01</span>
          </div>

          <h1 className="font-display font-semibold uppercase leading-[0.92] tracking-tight">
            <span className="block text-[clamp(2.2rem,5vw,4.4rem)] text-white dark:text-white">
              Biswaranjan
            </span>
            <span className="block bg-gradient-to-br from-white via-emerald-glow to-emerald-core bg-clip-text text-[clamp(2.2rem,5vw,4.4rem)] text-transparent">
              Nayak
            </span>
          </h1>

          <div className="mt-6 flex items-center gap-4">
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-emerald-core to-transparent" />
            <div className="font-mono text-[11px] uppercase tracking-[0.34em] text-white/70">
              Fullstack Developer
            </div>
          </div>

          <div className="mt-8 flex items-baseline gap-3">
            <span className="font-display text-6xl font-semibold text-white dark:text-white sm:text-7xl">
              {person.yearsRaw}
            </span>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-sm font-medium uppercase tracking-[0.2em] text-white/85">
                Years
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
                Building software systems
              </span>
            </div>
          </div>

          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-white/70 dark:text-white/70">
            {person.tagline}
          </p>

          {/* buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-emerald-core/40 bg-emerald-core/10 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.24em] text-emerald-glow transition hover:bg-emerald-core/20"
            >
              <span className="relative z-10">Explore my work</span>
              <span className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full border border-emerald-core/60 transition group-hover:translate-x-1">
                →
              </span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-emerald-core/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a
              href="#career"
              className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.02] px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.24em] text-white/85 transition hover:border-white/30 hover:bg-white/[0.05]"
            >
              View engineering journey
              <span className="text-emerald-core">↗</span>
            </a>
          </div>

          {/* tech ticker */}
          <div className="mt-14 overflow-hidden border-y border-white/6 py-3">
            <div className="marquee-track flex gap-10 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.32em] text-white/40">
              {[
                "C# .NET",
                "Node.js",
                "React",
                "Angular",
                "TypeScript",
                "MongoDB",
                "PostgreSQL",
                "MS SQL",
                "PJSIP",
                "WebRTC",
                "TAPI",
                "Avaya",
                "Windows Native",
              ]
                .concat([
                  "C# .NET",
                  "Node.js",
                  "React",
                  "Angular",
                  "TypeScript",
                  "MongoDB",
                  "PostgreSQL",
                  "MS SQL",
                  "PJSIP",
                  "WebRTC",
                  "TAPI",
                  "Avaya",
                  "Windows Native",
                ])
                .map((t, i) => (
                  <span key={i} className="flex items-center gap-3">
                    <span className="h-1 w-1 rounded-full bg-emerald-core/70" />
                    {t}
                  </span>
                ))}
            </div>
          </div>
        </div>

        {/* Right column — 3D scene */}
        <div className="relative lg:col-span-7">
          <div className="relative aspect-[4/3.2] w-full overflow-hidden rounded-2xl border border-white/8 bg-black/40 lg:aspect-auto lg:h-[78vh]">
            {/* Panel chrome */}
            <div className="pointer-events-none absolute inset-0 z-10">
              <div className="absolute left-4 top-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-white/55">
                <span className="flex h-3 w-3 items-center justify-center rounded-sm border border-emerald-core/60">
                  <span className="h-1 w-1 rounded-full bg-emerald-core" />
                </span>
                Scene · 01 · Workstation
              </div>
              <div className="absolute right-4 top-4 font-mono text-[10px] uppercase tracking-[0.28em] text-white/50">
                Interactive · live scene
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
                <div className="max-w-[60%] leading-relaxed">
                  Move your cursor — the environment reacts. Scroll to enter the universe.
                </div>
                <div className="hidden sm:block text-white/40">
                  x{mouse.x.toFixed(2)} · y{mouse.y.toFixed(2)}
                </div>
              </div>
              {/* corner ticks */}
              {[
                "top-3 left-3 border-l border-t",
                "top-3 right-3 border-r border-t",
                "bottom-3 left-3 border-l border-b",
                "bottom-3 right-3 border-r border-b",
              ].map((c, i) => (
                <span key={i} className={`absolute h-3 w-3 border-emerald-core/60 ${c}`} />
              ))}
            </div>

            {ready && (
              <Suspense
                fallback={
                  <div className="flex h-full w-full items-center justify-center font-mono text-[11px] uppercase tracking-[0.3em] text-white/40">
                    Initializing scene…
                  </div>
                }
              >
                <HeroScene mouse={mouse} />
              </Suspense>
            )}
          </div>

          {/* small metric badges */}
          <div className="mt-4 hidden gap-3 sm:flex">
            {[
              { k: "Products", v: "RADIX · VISION · SDK" },
              { k: "Domains", v: "Web · Voice · Native" },
              { k: "Role", v: "Tech Lead · Fullstack" },
            ].map((m) => (
              <div
                key={m.k}
                className="flex-1 rounded-lg border border-white/8 bg-white/[0.02] px-4 py-3"
              >
                <div className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/45">
                  {m.k}
                </div>
                <div className="mt-1 font-display text-sm font-medium text-white/90">
                  {m.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.32em] text-white/40 lg:flex">
        <span>Scroll</span>
        <span className="relative flex h-8 w-[1px] overflow-hidden bg-white/10">
          <span
            className="absolute inset-x-0 top-0 h-3 bg-emerald-core"
            style={{ animation: "signal-ping 2s linear infinite" }}
          />
        </span>
      </div>
    </section>
  );
}
