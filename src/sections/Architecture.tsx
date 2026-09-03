import { architectureLayers } from "@/data/content";
import { useReveal } from "@/lib/hooks";
import { SectionLabel } from "./EngineeringDNA";

const flows = [
  {
    id: "web",
    label: "Web",
    steps: ["React / Angular", "Node.js / .NET", "Database"],
    color: "#00e58a",
  },
  {
    id: "telephony",
    label: "Telephony",
    steps: ["Application", "SDK", "TAPI / Avaya / PJSIP"],
    color: "#6fe6ff",
  },
  {
    id: "native",
    label: "Native",
    steps: ["Web", "JavaScript SDK", "Native Layer"],
    color: "#c084fc",
  },
  {
    id: "comm",
    label: "Communication",
    steps: ["Web Application", "WebRTC Wrapper", "WebRTC"],
    color: "#7bffb6",
  },
];

export function Architecture() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="architecture" className="section-shell relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1000px 700px at 30% 60%, rgba(0,229,138,0.06), transparent 70%)",
          }}
        />
      </div>

      <div ref={ref} className="reveal mx-auto max-w-[1600px]">
        <SectionLabel index="08" title="How Software Connects" caption="Layered architecture, four flows" />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Main layered stack */}
          <div className="lg:col-span-5">
            <p className="max-w-md font-display text-2xl leading-snug tracking-tight text-white/90 sm:text-3xl">
              A universal layer model, followed by <span className="text-emerald-core">four specialized flows</span>.
            </p>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/60">
              Every product I ship walks a version of this stack. The materials change; the discipline doesn't.
            </p>

            <div className="mt-8 space-y-1.5">
              {architectureLayers.map((l, i) => (
                <div
                  key={l.id}
                  className="relative flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3.5 transition hover:border-emerald-core/40"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">
                      L{String(architectureLayers.length - i).padStart(2, "0")}
                    </span>
                    <span className="font-display text-base font-semibold tracking-tight text-white">
                      {l.name}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/50">
                    {l.tech}
                  </span>
                  {/* left accent */}
                  <span
                    className="absolute inset-y-0 left-0 w-[2px] rounded-l-lg bg-emerald-core"
                    style={{ opacity: 0.2 + i * 0.12 }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Four flows */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {flows.map((f) => (
                <FlowCard key={f.id} flow={f} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowCard({
  flow,
}: {
  flow: { id: string; label: string; steps: string[]; color: string };
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-white/[0.03] to-transparent p-6 transition hover:border-emerald-core/40">
      <div className="mb-4 flex items-center justify-between">
        <span
          className="font-display text-sm font-medium uppercase tracking-[0.22em]"
          style={{ color: flow.color }}
        >
          {flow.label}
        </span>
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ background: flow.color, boxShadow: `0 0 12px ${flow.color}` }}
        />
      </div>

      <div className="relative space-y-2">
        {flow.steps.map((s, i) => (
          <div key={i}>
            <div
              className="flex items-center gap-3 rounded-md border border-white/8 bg-black/30 px-3 py-2.5"
              style={{
                boxShadow: `inset 0 0 0 1px ${flow.color}11`,
              }}
            >
              <span
                className="font-mono text-[9px] uppercase tracking-[0.24em]"
                style={{ color: flow.color }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-mono text-[11px] tracking-wide text-white/85">{s}</span>
            </div>
            {i < flow.steps.length - 1 && (
              <div className="mx-auto my-1 flex flex-col items-center gap-0.5">
                <span className="h-3 w-px" style={{ background: flow.color, opacity: 0.5 }} />
                <span
                  className="h-1 w-1 rotate-45"
                  style={{ background: flow.color, opacity: 0.9 }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* corner ticks */}
      {[
        "top-2 left-2 border-l border-t",
        "top-2 right-2 border-r border-t",
        "bottom-2 left-2 border-l border-b",
        "bottom-2 right-2 border-r border-b",
      ].map((c, i) => (
        <span
          key={i}
          className={`pointer-events-none absolute h-2.5 w-2.5 border-white/20 transition group-hover:border-emerald-core/60 ${c}`}
        />
      ))}
    </div>
  );
}
