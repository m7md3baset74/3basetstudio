"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".hero-anim");
    els?.forEach((el, i) => {
      setTimeout(() => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "translateY(0)";
      }, 300 + i * 200);
    });
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      {/* Glow */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 2,
        background: `
          radial-gradient(ellipse 40% 50% at 25% 35%, rgba(30,58,110,.35) 0%,transparent 65%),
          radial-gradient(ellipse 35% 45% at 75% 65%, rgba(139,26,47,.28) 0%,transparent 60%),
          radial-gradient(ellipse 30% 40% at 50% 50%, rgba(74,45,107,.22) 0%,transparent 55%),
          radial-gradient(ellipse 20% 25% at 85% 15%, rgba(200,151,58,.15) 0%,transparent 45%)
        `,
        pointerEvents: "none",
      }} />

      {/* Paint blobs */}
      {[
        { w: 420, h: 300, bg: "rgba(30,58,110,.22)", top: "5%", left: "-10%", delay: "0s" },
        { w: 320, h: 380, bg: "rgba(139,26,47,.18)", bottom: "5%", right: "-8%", delay: "-5s" },
        { w: 280, h: 240, bg: "rgba(74,45,107,.2)", top: "40%", right: "15%", delay: "-9s" },
        { w: 200, h: 260, bg: "rgba(58,107,85,.15)", bottom: "20%", left: "10%", delay: "-3s" },
      ].map((b, i) => (
        <div key={i} style={{
          position: "absolute",
          width: b.w, height: b.h,
          background: b.bg,
          borderRadius: "60% 40% 70% 30% / 50% 60% 40% 70%",
          filter: "blur(70px)",
          pointerEvents: "none",
          zIndex: 2,
          top: (b as any).top,
          left: (b as any).left,
          bottom: (b as any).bottom,
          right: (b as any).right,
          animation: `blobFloat 15s ease-in-out infinite ${b.delay}`,
        }} />
      ))}

      {/* Sketch frame */}
      <div style={{ position: "absolute", inset: 18, zIndex: 3, pointerEvents: "none", border: "1px solid rgba(200,151,58,.16)" }}>
        <div style={{ position: "absolute", inset: 7, border: "1px dashed rgba(200,151,58,.08)" }} />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 4, textAlign: "center", padding: "0 1rem" }}>
        <p className="hero-anim" style={{
          fontFamily: "'var(--font-comic)', cursive", fontSize: "1rem", letterSpacing: ".32em",
          textTransform: "uppercase", display: "inline-block", marginBottom: "0.5rem",
          background: "linear-gradient(90deg, var(--cobalt), var(--rose), var(--gold))",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          opacity: 0, transform: "translateY(26px)", transition: "opacity .9s ease, transform .9s ease",
        }}>
          — Acrylic · Carpet · Portrait —
        </p>

        <h1 className="hero-anim" style={{
          fontFamily: "var(--font-comic)",
          fontSize: "clamp(4.5rem, 13vw, 11rem)",
          fontWeight: 700, lineHeight: 0.95,
          padding: "0.05em 0.08em",
          background: "linear-gradient(160deg, var(--cream) 0%, rgba(240,232,220,.9) 25%, var(--gold) 50%, var(--rose) 70%, var(--cream) 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          opacity: 0, transform: "translateY(26px)", transition: "opacity .9s ease, transform .9s ease",
        }}>
          3baset<br />Studio
        </h1>

        <p className="hero-anim" style={{
          fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
          fontSize: "clamp(.95rem, 2.2vw, 1.35rem)",
          background: "linear-gradient(90deg, var(--rose), var(--gold))",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          display: "inline-block", marginTop: ".5rem",
          opacity: 0, transform: "translateY(26px)", transition: "opacity .9s ease, transform .9s ease",
        }}>
          Where the brushstroke lives in the weave
        </p>

        {/* Wavy divider */}
        <div className="hero-anim" style={{
          width: 160, height: 20, margin: "1.8rem auto",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='20'%3E%3Cdefs%3E%3ClinearGradient id='wg' x1='0' y1='0' x2='1' y2='0'%3E%3Cstop offset='0' stop-color='%231e3a6e'/%3E%3Cstop offset='33%25' stop-color='%23c8973a'/%3E%3Cstop offset='66%25' stop-color='%238b1a2f'/%3E%3Cstop offset='100%25' stop-color='%234a2d6b'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M4 10 Q26 4 46 10 Q66 16 86 10 Q106 4 126 10 Q146 16 158 10' stroke='url(%23wg)' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3Ccircle cx='80' cy='10' r='3' fill='%23c8973a' opacity='.7'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat", backgroundPosition: "center",
          opacity: 0, transform: "translateY(26px)", transition: "opacity .9s ease, transform .9s ease",
        }} />

        <p className="hero-anim" style={{
          fontSize: ".84rem", lineHeight: 2, color: "var(--muted)",
          maxWidth: 390, margin: "0 auto",
          opacity: 0, transform: "translateY(26px)", transition: "opacity .9s ease, transform .9s ease",
        }}>
          Four portraits. Four handmade carpets. A discipline that barely exists anywhere else — painted from Cairo, for the world.
        </p>

        {/* CTA button */}
        <div className="hero-anim" style={{
          marginTop: "2.6rem",
          opacity: 0, transform: "translateY(26px)", transition: "opacity .9s ease, transform .9s ease",
        }}>
          <Link href="#works"
            onMouseEnter={(e) => {
              const btn = e.currentTarget as HTMLElement;
              btn.style.color = "var(--bg)";
              const fill = btn.querySelector(".btn-fill") as HTMLElement;
              if (fill) fill.style.transform = "translateX(0)";
            }}
            onMouseLeave={(e) => {
              const btn = e.currentTarget as HTMLElement;
              btn.style.color = "var(--cream)";
              const fill = btn.querySelector(".btn-fill") as HTMLElement;
              if (fill) fill.style.transform = "translateX(-102%)";
            }}
          >
            <span className="btn-g" style={{fontFamily:"var(--font-comic)", position: "relative", zIndex: 1 }}>View the Artworks</span>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: "1.8rem", left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: ".4rem",
        opacity: 0, animation: "fadeUp 1s ease forwards 2s",
      }}>
        <span style={{ fontFamily: "'Caveat', cursive", fontSize: ".85rem", letterSpacing: ".25em", color: "var(--muted)" }}>scroll</span>
        <div style={{
          width: 1, height: 44,
          background: "linear-gradient(to bottom, var(--gold), var(--rose), transparent)",
          animation: "scrollPulse 2s ease-in-out infinite",
        }} />
      </div>

      <style>{`
        @keyframes blobFloat {
          0%,100% { transform: translate(0,0) scale(1) rotate(0deg); }
          33% { transform: translate(15px,-20px) scale(1.04) rotate(3deg); }
          66% { transform: translate(-12px,14px) scale(.97) rotate(-2deg); }
        }
        @keyframes fadeUp {
          from { opacity:0; transform: translateX(-50%) translateY(10px); }
          to { opacity:1; transform: translateX(-50%) translateY(0); }
        }
        @keyframes scrollPulse {
          0%,100% { opacity:1; }
          50% { opacity:.2; }
        }
      `}</style>
    </section>
  );
}