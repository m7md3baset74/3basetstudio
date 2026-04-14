"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      style={{
        position: "relative", zIndex: 1,
        padding: "7rem 3rem", maxWidth: 1060, margin: "0 auto",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "5rem", alignItems: "center",
      }}
    >
      {/* Left */}
      <div className="reveal">
        <p className="sec-label">The Artist</p>
        <h2 style={{ fontFamily: "'Caveat', cursive", fontSize: "clamp(2.4rem,5vw,3.8rem)", fontWeight: 700, lineHeight: 1.1, color: "var(--cream)" }}>
          Mohamed<br />
          <span className="gradient-text-gold">Abdelbaset</span>
        </h2>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "1.05rem", lineHeight: 2, color: "var(--muted)", marginTop: "1.4rem" }}>
          A Cairo-based artist pioneering a discipline that barely exists elsewhere — painting vivid acrylic portraits directly onto handmade carpets. The face merges with the weave. The woman becomes the pattern. Each piece lives at the intersection of centuries-old craft and contemporary fine art.
        </p>
        <div style={{ display: "flex", gap: "2.4rem", marginTop: "2.6rem", paddingTop: "2rem", borderTop: "1px solid rgba(200,151,58,.15)" }}>
          {[["4", "Original Works"], ["1", "Of a Kind Each"], ["∞", "Years to Last"]].map(([n, l]) => (
            <div key={l}>
              <div className="gradient-text-gold" style={{ fontFamily: "'Caveat', cursive", fontSize: "2.8rem", fontWeight: 700, lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: ".72rem", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", marginTop: ".2rem" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — Quote box */}
      <div className="reveal reveal-delay-2">
        <div style={{
          position: "relative", padding: "2.6rem",
          background: "linear-gradient(135deg,rgba(30,58,110,.12),rgba(74,45,107,.1),rgba(139,26,47,.08))",
          border: "1px solid rgba(200,151,58,.2)",
        }}>
          <div style={{ position: "absolute", top: -5, left: -5, right: 5, bottom: 5, border: "1px dashed rgba(200,151,58,.1)", pointerEvents: "none" }} />
          <span className="gradient-text-gold" style={{ fontFamily: "'Caveat', cursive", fontSize: "5rem", lineHeight: ".4", display: "block", marginBottom: "1.2rem" }}>&quot;</span>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "1.15rem", lineHeight: 1.85, color: "var(--cream)" }}>
            The carpet is not a canvas — it breathes, it carries centuries of craft. Painting on it is not decoration. It is a conversation between two art forms across time.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about { grid-template-columns: 1fr !important; gap: 2.5rem !important; padding: 5rem 1.2rem !important; }
        }
      `}</style>
    </section>
  );
}