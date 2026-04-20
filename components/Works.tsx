"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { works } from "@/data/works";
import Modal from "./Modal";

const overlayColors = [
  "rgba(30,58,110,.15)",
  "rgba(139,26,47,.15)",
  "rgba(58,107,85,.15)",
  "rgba(74,45,107,.15)",
];
const tagBorderColors = ["var(--gold)", "var(--crimson)", "#6abf95", "#a080d0"];
const numColors = ["var(--gold)", "var(--rose)", "#6abf95", "#a080d0"];

export default function Works() {
  const ref = useRef<HTMLElement>(null);
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="works" ref={ref} style={{ position: "relative", zIndex: 1, padding: "5rem 3rem 9rem" }}>

        {/* Header */}
        <div className="reveal works-header" style={{ maxWidth: 1200, margin: "0 auto 4rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <p className="sec-label">The Collection</p>
            <h2 style={{ fontFamily: "'Caveat', cursive", fontSize: "clamp(2.2rem,4.5vw,3.4rem)", fontWeight: 700, color: "var(--cream)", lineHeight: 1.1 }}>
              Four Works.<br />Four Worlds.
            </h2>
          </div>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "var(--muted)", fontSize: "1rem" }}>
            Each piece is unique &amp; unrepeatable
          </p>
        </div>

        {/* Grid — desktop: masonry 2-col, mobile: 1-col */}
        <div className="works-grid" style={{ maxWidth: 1200, margin: "0 auto" }}>
          {works.map((work, i) => {
            const isHovered = hoveredCard === i;
            return (
              <div
                key={work.id}
                className={`reveal work-card-item reveal-delay-${Math.min(i, 3)}`}
                data-index={i}
                onClick={() => setActiveModal(i)}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  cursor: "none",
                  background: "#0b0a0e",
                }}
              >
                <Image
                  src={work.images[0]}
                  alt={work.nameAr}
                  fill
                  style={{
                    objectFit: "cover",
                    transform: isHovered ? "scale(1.06)" : "scale(1)",
                    filter: isHovered ? "brightness(.62) saturate(1.15)" : "brightness(.85) saturate(1.08)",
                    transition: "transform .8s cubic-bezier(.25,.46,.45,.94), filter .8s",
                  }}
                  sizes="(max-width: 768px) 100vw, 600px"
                />

                {/* Overlay */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: `linear-gradient(to top, rgba(11,10,14,.97) 0%, ${overlayColors[i]} 60%, transparent 100%)`,
                  opacity: isHovered ? 0.95 : 1,
                  transition: "opacity .5s",
                }} />

                {/* Tag */}
                <div style={{
                  position: "absolute", top: "1rem", left: "1rem",
                  fontFamily: "'Caveat', cursive", fontSize: ".85rem",
                  color: "var(--cream)", background: "rgba(11,10,14,.72)",
                  padding: ".22rem .7rem",
                  borderLeft: `2px solid ${tagBorderColors[i]}`,
                  backdropFilter: "blur(4px)",
                }}>
                  {work.tag}
                </div>

                {/* Info */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0, padding: "2rem",
                  transform: isHovered ? "translateY(0)" : "translateY(10px)",
                  transition: "transform .5s cubic-bezier(.25,.46,.45,.94)",
                }}>
                  <p style={{ fontFamily: "'Caveat', cursive", fontSize: ".85rem", letterSpacing: ".2em", color: numColors[i], marginBottom: ".4rem" }}>
                    — {work.num}
                  </p>
                  <h3 style={{ fontFamily: "'Caveat', cursive", fontSize: "1.9rem", fontWeight: 700, color: "var(--cream)", lineHeight: 1.05 }}>
                    {work.nameAr}
                  </h3>
                  <p style={{ fontSize: ".7rem", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", marginTop: ".4rem" }}>
                    {work.type}
                  </p>
                  <div style={{
                    display: "flex", justifyContent: "space-between", alignItems: "flex-end",
                    marginTop: "1.2rem", paddingTop: "1.1rem",
                    borderTop: "1px solid rgba(200,151,58,.18)",
                  }}>
                    <div style={{ fontSize: ".74rem", color: "var(--muted)", lineHeight: 1.7 }}>
                      {work.dimensions}<br />{work.material}
                    </div>
                    <div style={{ fontFamily: "'Caveat', cursive", fontSize: "1.25rem", fontWeight: 700, color: "var(--gold)" }}>
                      {work.price}
                    </div>
                  </div>
                  {/* View Details button */}
                  <div className={`work-details-btn ${isHovered ? "hovered" : ""}`}>
                    View Details →
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <style>{`
          /* ── DESKTOP: masonry 2-col, first card spans 2 rows ── */
          .works-grid {
            display: grid;
            grid-template-columns: 1.1fr 1fr;
            grid-template-rows: 0.8fr 0.1fr;
            gap: 3px;
          }
          .work-card-item { aspect-ratio: 1.5/2.9; }
          .work-card-item[data-index="0"] {
            grid-row: span 2;
            aspect-ratio: unset;
          }
          .work-card-item[data-index="1"] {
            aspect-ratio: 3/4.2;
          }

          /* ── MOBILE: single column, all equal ── */
          @media (max-width: 768px) {
            #works { padding: 4rem .8rem 6rem !important; }
            .works-grid {
              grid-template-columns: 1fr !important;
              grid-template-rows: unset !important;
              gap: 2px !important;
            }
            .work-card-item { aspect-ratio: 1.5/2.9 !important; }
            .work-card-item[data-index="0"] {
              grid-row: span 1 !important;
              aspect-ratio: 3/5 !important;
            }
            .work-card-item[data-index="1"] {
              grid-row: span 1 !important;
              aspect-ratio: 3/4.2 !important;
            }
            .works-header {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: .8rem !important;
              margin-bottom: 2rem !important;
              padding: 0 1rem !important;
            }
          }

          /* ── View Details button ── */
          .work-details-btn {
            display: inline-block;
            margin-top: 1.1rem;
            font-family: 'Caveat', cursive;
            font-size: .95rem;
            padding: .45rem 1.4rem;
            border: 1px solid rgba(200,151,58,.3);
            color: var(--cream);
            background: transparent;
            transition: border-color .3s, color .3s, background .3s;
          }
          .work-details-btn.hovered {
            border-color: var(--gold);
            color: var(--gold);
            background: rgba(200,151,58,.08);
          }
        `}</style>
      </section>

      <Modal
        works={works}
        activeIndex={activeModal}
        onClose={() => setActiveModal(null)}
        onNavigate={setActiveModal}
      />
    </>
  );
}