import { useReveal } from "@/lib/hooks";
import { SectionLabel } from "./EngineeringDNA";

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="contact" className="section-shell relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1000px 700px at 50% 40%, rgba(0,229,138,0.10), transparent 70%)",
          }}
        />
      </div>

      <div ref={ref} className="reveal mx-auto max-w-[1600px]">
        <SectionLabel index="09" title="Final Frame" caption="End of scene · start of a conversation" />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h3 className="max-w-2xl font-display text-[clamp(2rem,4.6vw,4rem)] font-semibold uppercase leading-[0.95] tracking-tight text-white">
              Have a system that needs to work in the <span className="text-emerald-core">real world</span>?
            </h3>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/65">
              I build software that connects browsers, native runtimes, telephony hardware and real-time protocols — with the reliability enterprises depend on.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#hero"
                className="group inline-flex items-center gap-3 rounded-full border border-emerald-core/40 bg-emerald-core/10 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.24em] text-emerald-glow transition hover:bg-emerald-core/20"
              >
                Back to the top
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-emerald-core/60 transition group-hover:-translate-y-1">
                  ↑
                </span>
              </a>
              <a
                href="#products"
                className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.02] px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.24em] text-white/85 transition hover:border-white/30"
              >
                Review the products
                <span className="text-emerald-core">↗</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
                Coordinates
              </div>
              <div className="mt-6 space-y-5">
                <Meta k="Name" v="Biswaranjan Nayak" />
                <Meta k="Role" v="Fullstack Developer · Tech Lead" />
                <Meta k="Current" v="VIS Networks Pvt. Ltd." />
                <Meta k="Domains" v="Web · Telephony · SDK · Native" />
                <Meta k="Experience" v="14+ years" />
              </div>

              {/* Signature scope */}
              <div className="mt-8 border-t border-white/8 pt-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
                  Signature scope
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {["RADIX", "VISION", "WebRTC SDK", "TAPI", "Avaya", "PJSIP"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-emerald-core/30 bg-emerald-core/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-glow"
                    >
                      {t}
                    </span>
                  ))}
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
                  className={`pointer-events-none absolute h-3 w-3 border-emerald-core/60 ${c}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer strip */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/8 pt-6 font-mono text-[10px] uppercase tracking-[0.28em] text-white/40 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} · Biswaranjan Nayak · Engineering Universe</span>
          <span className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-core" />
            End of scene · 09 of 09
          </span>
        </div>
      </div>
    </section>
  );
}

function Meta({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between border-b border-white/6 pb-4">
      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">{k}</span>
      <span className="font-display text-sm font-medium text-white/90">{v}</span>
    </div>
  );
}
