import { useEffect, useRef, useState } from "react";
import { useIsTouch } from "@/lib/hooks";

export function Cursor() {
  const isTouch = useIsTouch();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState<"idle" | "interactive" | "scene">("idle");

  useEffect(() => {
    if (isTouch) return;
    document.documentElement.classList.add("cursor-hide");
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x - 3}px, ${y - 3}px, 0)`;
      }
    };
    const onOver = (e: PointerEvent) => {
      const el = e.target as HTMLElement | null;
      if (!el) return;
      if (el.closest("[data-cursor='scene']")) setHover("scene");
      else if (el.closest("a, button, [data-cursor='interactive']")) setHover("interactive");
      else setHover("idle");
    };
    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    loop();

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerover", onOver);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      document.documentElement.classList.remove("cursor-hide");
    };
  }, [isTouch]);

  if (isTouch) return null;

  const ringSize =
    hover === "interactive" ? "h-11 w-11 border-emerald-core/70" : hover === "scene" ? "h-16 w-16 border-emerald-core/40" : "h-9 w-9 border-white/25";

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[200] h-1.5 w-1.5 rounded-full bg-emerald-core mix-blend-difference"
      />
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[199] rounded-full border transition-[height,width,border-color] duration-300 ease-out ${ringSize}`}
        style={{ boxShadow: "0 0 24px -8px rgba(0, 229, 138, 0.45)" }}
      />
    </>
  );
}
