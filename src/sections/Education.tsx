import { education } from "@/data/content";
import { useReveal } from "@/lib/hooks";
import { SectionLabel } from "./EngineeringDNA";

export function Education() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="education" className="section-shell relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1000px 700px at 70% 40%, rgba(0,229,138,0.05), transparent 70%)",
          }}
        />
      </div>

      <div ref={ref} className="reveal mx-auto max-w-[1600px]">
        <SectionLabel index="05" title="Education Pathway" caption="Foundations, formal and applied" />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="max-w-md font-display text-2xl leading-snug tracking-tight text-white/90 sm:text-3xl">
              Six milestones — from <span className="text-emerald-core">school science</span> to <span className="text-emerald-core">M.Tech at NIT Rourkela</span>.
            </p>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/60">
              Each glass milestone marks a formal step, connected by an illuminated path. Everything that came after was built on this base.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="relative w-full rounded-2xl border border-white/8 bg-black/30 p-6 sm:p-10">
              {/* Illuminated path */}
              <svg
                viewBox="0 0 800 400"
                className="absolute inset-x-6 top-1/2 h-[220px] w-[calc(100%-3rem)] -translate-y-1/2 sm:inset-x-10 sm:w-[calc(100%-5rem)]"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="edu-path" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#00e58a" stopOpacity="0.05" />
                    <stop offset="20%" stopColor="#00e58a" stopOpacity="0.6" />
                    <stop offset="80%" stopColor="#00e58a" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#7bffb6" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <path
                  d="M 20 320 C 200 320, 220 80, 400 200 S 600 320, 780 80"
                  stroke="url(#edu-path)"
                  strokeWidth="2"
                  fill="none"
                />
                {/* soft glow underlay */}
                <path
                  d="M 20 320 C 200 320, 220 80, 400 200 S 600 320, 780 80"
                  stroke="#00e58a"
                  strokeOpacity="0.18"
                  strokeWidth="8"
                  fill="none"
                  filter="url(#edu-glow)"
                />
                <filter id="edu-glow">
                  <feGaussianBlur stdDeviation="6" />
                </filter>
                {/* dash flow */}
                <path
                  d="M 20 320 C 200 320, 220 80, 400 200 S 600 320, 780 80"
                  stroke="#7bffb6"
                  strokeOpacity="0.9"
                  strokeWidth="1"
                  fill="none"
                  className="dash-flow"
                />
              </svg>

              {/* milestones */}
              <div className="relative z-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                {education.map((e, i) => (
                  <div
                    key={e.id}
                    className="group relative"
                    style={{
                      transform: `translateY(${(i % 2 === 0 ? 24 : -24)}px)`,
                    }}
                  >
                    {/* Glass card */}
                    <div className="relative rounded-lg border border-white/12 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-4 backdrop-blur-sm transition-all duration-500 group-hover:border-emerald-core/50 group-hover:from-emerald-core/[0.12]">
                      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-core to-transparent opacity-70" />
                      <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-emerald-glow">
                        {e.year}
                      </div>
                      <div className="mt-2 font-display text-lg font-semibold tracking-tight text-white">
                        {e.degree}
                      </div>
                      <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] leading-relaxed text-white/50">
                        {e.institution}
                      </div>
                      {/* base plate */}
                      <div className="absolute -bottom-1.5 left-2 right-2 h-1.5 rounded-b-sm bg-black/60" />
                    </div>
                    {/* stem */}
                    <div className="mx-auto h-6 w-px bg-gradient-to-b from-emerald-core/60 to-transparent" />
                    {/* node */}
                    <div className="mx-auto h-2 w-2 rounded-full bg-emerald-core shadow-[0_0_12px_var(--color-emerald-core)]" />
                  </div>
                ))}
              </div>

              {/* HUD */}
              <div className="mt-8 flex items-center justify-between border-t border-white/8 pt-4 font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
                <span>Path · 2003 → 2015</span>
                <span>Six formal milestones · Ongoing informal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
