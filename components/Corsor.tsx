"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mx = useRef(0);
  const my = useRef(0);
  const rx = useRef(0);
  const ry = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.current = e.clientX;
      my.current = e.clientY;
    };

    const tick = () => {
      if (dotRef.current) {
        dotRef.current.style.left = mx.current + "px";
        dotRef.current.style.top = my.current + "px";
      }
      rx.current += (mx.current - rx.current) * 0.11;
      ry.current += (my.current - ry.current) * 0.11;
      if (ringRef.current) {
        ringRef.current.style.left = rx.current + "px";
        ringRef.current.style.top = ry.current + "px";
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    const onEnter = () => ringRef.current?.classList.add("big");
    const onLeave = () => ringRef.current?.classList.remove("big");

    document.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(tick);

    const targets = document.querySelectorAll("a, button, .work-card, .modal-arrow, .modal-dot");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}