"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -100, y: -100 });   // where the mouse is
  const pos = useRef({ x: -100, y: -100 });      // where the cursor is (smoothed)
  const rafRef = useRef<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Respect touch devices / coarse pointers (don’t show custom cursor)
    const isFinePointer =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(pointer: fine)").matches;

    if (!isFinePointer) return;

    const el = cursorRef.current;
    if (!el) return;

    // Hide the default cursor (desktop only) while mounted
    const prevBodyCursor = document.body.style.cursor;
    document.body.style.cursor = "none";

    // Smooth follow via rAF
    const speed = 0.14; // 0..1 (lower = more floaty)
    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * speed;
      pos.current.y += (target.current.y - pos.current.y) * speed;
      // center the element around the pointer using translate3d (GPU-friendly)
      el.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    const handleMove = (e: MouseEvent) => {
      // Offset so the blob’s center sits on the native pointer
      // We'll size via CSS variables so we know the half-size.
      const size = isHovering ? 72 : 36; // keep in sync with CSS below
      target.current.x = e.clientX - size / 2;
      target.current.y = e.clientY - size / 2;
    };

    const handleEnterDoc = (e: MouseEvent) => {
      el.style.opacity = "1";
      handleMove(e);
    };
    const handleLeaveDoc = () => {
      el.style.opacity = "0"; // fade when leaving window
    };

    document.addEventListener("mousemove", handleMove, { passive: true });
    document.addEventListener("mouseenter", handleEnterDoc, { passive: true });
    document.addEventListener("mouseleave", handleLeaveDoc, { passive: true });

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseenter", handleEnterDoc);
      document.removeEventListener("mouseleave", handleLeaveDoc);
      document.body.style.cursor = prevBodyCursor;
    };
  }, [isHovering]);

  useEffect(() => {
    const isFinePointer =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);

    const attach = (root: Document | HTMLElement) => {
      root.querySelectorAll<HTMLElement>("[data-cursor-hover]").forEach((n) => {
        n.addEventListener("mouseenter", onEnter);
        n.addEventListener("mouseleave", onLeave);
      });
      return () =>
        root
          .querySelectorAll<HTMLElement>("[data-cursor-hover]")
          .forEach((n) => {
            n.removeEventListener("mouseenter", onEnter);
            n.removeEventListener("mouseleave", onLeave);
          });
    };

    const detach = attach(document);
    return () => detach();
  }, []);

  return (
    <div
      ref={cursorRef}
      style={
        {
          
          ["--size"]: isHovering ? "72px" : "50px",
          ["--border"]: isHovering ? "0px" : "1px",
          opacity: 0, 
        } as React.CSSProperties
      }
      className={`
        fixed top-0 left-0 z-[9999] pointer-events-none
        transition-[width,height,box-shadow,background,opacity,transform] duration-200 ease-out
        will-change-transform
      `}
    >
      <div
        className={`
          w-[var(--size)] h-[var(--size)]
          ${isHovering ? "rounded-[8px]" : "rounded-full border"}
         border-[#2191FF] 
         bg-no-repeat bg-center bg-cover
         `}
        style={{
          backgroundImage: isHovering ? "url(/apple-touch-icon.png)" : "none",
          boxShadow: isHovering ? "none" : "2px -3px 11px -1px rgba(0,44,136,1)",
        }}
      />
    </div>
  );
}
