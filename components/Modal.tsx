"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Work, WA_NUMBER } from "../data/works";

interface ModalProps {
  works: Work[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Modal({ works, activeIndex, onClose, onNavigate }: ModalProps) {
  const [fading, setFading] = useState(false);

  const navigate = useCallback((dir: number) => {
    if (activeIndex === null) return;
    setFading(true);
    setTimeout(() => {
      onNavigate((activeIndex + dir + works.length) % works.length);
      setFading(false);
    }, 280);
  }, [activeIndex, works.length, onNavigate]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [activeIndex, onClose, navigate]);

  useEffect(() => {
    document.body.style.overflow = activeIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeIndex]);

  if (activeIndex === null) return null;
  const work = works[activeIndex];

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: "fixed", inset: 0, zIndex: 500,
        background: "rgba(6,5,8,.95)", backdropFilter: "blur(16px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        animation: "fadeIn .3s ease",
      }}
    >
      <div style={{
        position: "relative", maxWidth: 880, width: "93%",
        background: "#13111a",
        border: "1px solid rgba(200,151,58,.22)",
        animation: "modalIn .5s cubic-bezier(.16,1,.3,1)",
        overflow: "hidden",
      }}>
        {/* inner dashed border */}
        <div style={{ position: "absolute", inset: 5, border: "1px dashed rgba(200,151,58,.1)", pointerEvents: "none", zIndex: 0 }} />

        {/* Close */}
        <button
          onClick={onClose}
          className="modal-arrow"
          style={{
            position: "absolute", top: ".9rem", right: ".9rem",
            width: 32, height: 32, background: "rgba(255,255,255,.04)",
            border: "1px solid rgba(200,151,58,.28)", display: "flex",
            alignItems: "center", justifyContent: "center",
            cursor: "none", zIndex: 10, color: "var(--cream)",
            transition: "background .3s",
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", position: "relative", zIndex: 1 }}>
          {/* Image side */}
          <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden", background: "#0b0a0e" }}>
            <Image
              src={work.images[0]}
              alt={work.nameAr}
              fill
              style={{ objectFit: "cover", opacity: fading ? 0 : 1, transition: "opacity .28s" }}
              sizes="440px"
            />
            {/* Prev */}
            <button className="modal-arrow" onClick={() => navigate(-1)} style={{
              position: "absolute", top: "50%", left: ".6rem", transform: "translateY(-50%)",
              width: 36, height: 36, background: "rgba(11,10,14,.75)",
              border: "1px solid rgba(200,151,58,.35)", display: "flex",
              alignItems: "center", justifyContent: "center", cursor: "none", zIndex: 5,
              color: "var(--cream)", transition: "background .3s, border-color .3s",
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            {/* Next */}
            <button className="modal-arrow" onClick={() => navigate(1)} style={{
              position: "absolute", top: "50%", right: ".6rem", transform: "translateY(-50%)",
              width: 36, height: 36, background: "rgba(11,10,14,.75)",
              border: "1px solid rgba(200,151,58,.35)", display: "flex",
              alignItems: "center", justifyContent: "center", cursor: "none", zIndex: 5,
              color: "var(--cream)", transition: "background .3s, border-color .3s",
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
            </button>
            {/* Dots */}
            <div style={{ position: "absolute", bottom: ".8rem", left: "50%", transform: "translateX(-50%)", display: "flex", gap: ".5rem", zIndex: 5 }}>
              {works.map((w, i) => (
                <button key={w.id} className="modal-dot" onClick={() => { setFading(true); setTimeout(() => { onNavigate(i); setFading(false); }, 280); }} style={{
                  width: 6, height: 6, borderRadius: "50%", cursor: "none", border: "none", padding: 0,
                  background: i === activeIndex ? w.accentColor : "rgba(255,255,255,.25)",
                  transform: i === activeIndex ? "scale(1.4)" : "scale(1)",
                  transition: "background .3s, transform .3s",
                }} />
              ))}
            </div>
          </div>

          {/* Info side */}
          <div style={{ padding: "2.6rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <p style={{ fontFamily: "'Caveat', cursive", fontSize: ".9rem", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: ".4rem" }}>
                {work.num} — {work.tag} · Cairo
              </p>
              <h2 style={{ fontFamily: "'Caveat', cursive", fontSize: "2rem", fontWeight: 700, color: "var(--cream)", lineHeight: 1.05 }}>
                {work.nameAr}
              </h2>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: ".94rem", lineHeight: 2, color: "var(--muted)", marginTop: "1.3rem", direction: "rtl", textAlign: "right" }}>
                {work.descAr}
              </p>
              <div style={{ marginTop: "1.6rem", display: "flex", flexDirection: "column", gap: ".5rem" }}>
                {[
                  ["Dimensions", work.dimensions],
                  ["Material", work.material],
                  ["Medium", "Acrylic on Carpet"],
                  ["Status", "One of a Kind"],
                ].map(([label, val]) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", paddingBottom: ".5rem", borderBottom: "1px solid rgba(200,151,58,.12)", fontSize: ".78rem" }}>
                    <span style={{ color: "var(--muted)", textTransform: "uppercase", fontSize: ".67rem", letterSpacing: ".08em" }}>{label}</span>
                    <span style={{ color: "var(--cream)" }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price + WA */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "1.8rem" }}>
              <div>
                <small style={{ display: "block", fontFamily: "'Questrial', sans-serif", fontSize: ".6rem", letterSpacing: ".12em", color: "var(--muted)", marginBottom: ".1rem" }}>Asking Price</small>
                <span className="gradient-text-gold" style={{ fontFamily: "'Caveat', cursive", fontSize: "1.85rem", fontWeight: 700 }}>{work.price}</span>
              </div>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(work.waMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: ".5rem",
                  padding: ".75rem 1.4rem",
                  background: "rgba(37,211,102,.1)", border: "1px solid rgba(37,211,102,.3)",
                  color: "#5ddb8a", fontFamily: "'Caveat', cursive", fontSize: ".95rem",
                  textDecoration: "none", transition: "background .3s, transform .2s",
                  cursor: "none",
                }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Inquire
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
        @keyframes modalIn { from { opacity:0; transform:scale(.93) translateY(18px) } to { opacity:1; transform:scale(1) translateY(0) } }
        @media (max-width: 768px) {
          .modal-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}