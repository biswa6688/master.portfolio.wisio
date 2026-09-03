import { useEffect, useState } from "react";
import { useTheme } from "@/lib/theme";
import { useScrollProgress } from "@/lib/hooks";

const links = [
  { href: "#hero", label: "01 · Home" },
  { href: "#dna", label: "02 · DNA" },
  { href: "#tech", label: "03 · Tech" },
  { href: "#career", label: "04 · Career" },
  { href: "#education", label: "05 · Education" },
  { href: "#projects", label: "06 · Projects" },
  { href: "#products", label: "07 · Products" },
  { href: "#architecture", label: "08 · Architecture" },
  { href: "#contact", label: "09 · Contact" },
];

export function Navigation() {
  const { mode, cycle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const s = () => setScrolled(window.scrollY > 30);
    s();
    window.addEventListener("scroll", s, { passive: true });
    return () => window.removeEventListener("scroll", s);
  }, []);

  const modeLabel = mode === "dark" ? "DARK" : mode === "light" ? "LIGHT" : "SYS";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "backdrop-blur-xl" : ""
        }`}
      >
        <div
          className={`pointer-events-none absolute inset-0 -z-10 border-b transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background:
              "linear-gradient(180deg, rgba(5,7,10,0.85) 0%, rgba(5,7,10,0.45) 60%, transparent 100%)",
            borderColor: "rgba(255,255,255,0.06)",
          }}
        />
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 sm:px-8">
          <a href="#hero" className="group flex items-center gap-3">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-black/40 dark:bg-black/40">
              <span className="absolute inset-[3px] rounded-sm bg-gradient-to-br from-emerald-core/80 to-emerald-deep/60 shadow-[inset_0_0_10px_rgba(0,0,0,0.4)]" />
              <span className="relative font-mono text-[10px] font-semibold text-black">BN</span>
            </span>
            <div className="hidden flex-col leading-none sm:flex">
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/50 dark:text-white/50">
                Engineering Universe
              </span>
              <span className="mt-1 font-display text-sm font-medium tracking-tight text-white dark:text-white">
                Biswaranjan Nayak
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-md px-3 py-2 font-mono text-[10.5px] uppercase tracking-[0.22em] text-white/55 transition-colors hover:text-emerald-core dark:text-white/55"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={cycle}
              className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.24em] text-white/70 transition hover:border-emerald-core/40 hover:text-emerald-core sm:flex"
              aria-label="Toggle theme"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-core shadow-[0_0_10px_var(--color-emerald-core)]" />
              {modeLabel}
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] lg:hidden"
              aria-label="Menu"
            >
              <span className="flex flex-col gap-1.5">
                <span className={`h-px w-5 bg-white/80 transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
                <span className={`h-px w-5 bg-white/80 transition ${open ? "opacity-0" : ""}`} />
                <span className={`h-px w-5 bg-white/80 transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>

        {/* progress line */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/5">
          <div
            className="h-px bg-gradient-to-r from-emerald-core via-emerald-glow to-cyan-signal"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 transition ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm border-l border-white/10 bg-ink-0/95 p-8 pt-24 transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mb-8 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
            Navigate the universe
          </div>
          <div className="space-y-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-white/5 py-4 font-display text-lg tracking-tight text-white/85 transition hover:text-emerald-core"
              >
                {l.label}
                <span className="text-emerald-core/70">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
