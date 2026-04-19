"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Work, WA_NUMBER } from "@/data/works";

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

  /* ── Details panel (shared between layouts) ── */
  const DetailsPanel = () => (
    <div className="modal-details-panel">
      <p style={{
        fontFamily: "var(--ff-caveat, 'Caveat', cursive)",
        fontSize: ".78rem", letterSpacing: ".2em",
        textTransform: "uppercase", color: work.accentColor,
        marginBottom: ".3rem",
      }}>
        {work.tag} · Cairo
      </p>

      <h2 style={{
        fontFamily: "var(--ff-caveat, 'Caveat', cursive)",
        fontSize: "clamp(1.6rem,3vw,2.1rem)",
        fontWeight: 700, color: "var(--cream)", lineHeight: 1.05,
      }}>
        {work.nameAr}
      </h2>

      <p style={{
        fontSize: ".66rem", letterSpacing: ".12em",
        textTransform: "uppercase", color: "var(--muted)", marginTop: ".55rem",
      }}>
        {work.type}
      </p>

      <p style={{
        fontFamily: "var(--ff-comic, 'Cormorant Garamond', serif)",
        fontStyle: "italic", fontSize: ".94rem", lineHeight: 1.5,
        color: "var(--muted)", direction: "rtl", textAlign: "right",
        margin: "1.1rem 0 1.2rem",
      }}>
        {work.descAr}
      </p>

      <div style={{ height: 1, background: "rgba(200,151,58,.12)", marginBottom: "1rem" }} />

      <div style={{ display: "flex", flexDirection: "column", gap: ".45rem", marginBottom: "1.3rem" }}>
        {([
          ["Dimensions", work.dimensions],
          ["Material",   work.material],
          ["Medium",     "Acrylic on Carpet"],
          ["Status",     "One of a Kind"],
        ] as [string, string][]).map(([label, val]) => (
          <div key={label} style={{
            display: "flex", justifyContent: "space-between",
            paddingBottom: ".45rem",
            borderBottom: "1px solid rgba(200,151,58,.08)",
            fontSize: ".76rem",
          }}>
            <span style={{ color: "var(--muted)", textTransform: "uppercase", fontSize: ".65rem", letterSpacing: ".08em" }}>
              {label}
            </span>
            <span style={{ color: "var(--cream)" }}>{val}</span>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: ".8rem" }}>
        <div>
          <small style={{ display: "block", fontSize: ".58rem", letterSpacing: ".12em", color: "var(--muted)", marginBottom: ".1rem" }}>
            Asking Price
          </small>
          <span style={{
            fontFamily: "var(--ff-caveat, 'Caveat', cursive)",
            fontSize: "1.8rem", fontWeight: 700, display: "inline-block",
            background: `linear-gradient(135deg, var(--gold), ${work.accentColor})`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            {work.price}
          </span>
        </div>

        <a
          href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(work.waMsg)}`}
          target="_blank" rel="noopener noreferrer"
          className="modal-wa-btn"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Inquire on WhatsApp
        </a>
      </div>
    </div>
  );

  /* ── Image section (shared) ── */
  const ImageSection = () => (
    <div className="modal-image-section">
      <Image
        src={work.images[0]}
        alt={work.nameAr}
        fill
        style={{
          objectFit: "contain",
          opacity: fading ? 0 : 1,
          transition: "opacity .28s",
        }}
        sizes="(max-width:768px) 100vw, 50vw"
        priority
      />

      {/* Top bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, zIndex: 5, 
        padding: ".65rem .9rem",
        background: "linear-gradient(to bottom, rgba(60,60,61,.88), transparent)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <span style={{
          fontFamily: "var(--ff-caveat, 'Caveat', cursive)",
          fontSize: ".9rem", letterSpacing: ".18em", color: work.accentColor,
        }}>
          {work.num} / {works.length}
        </span>

        <div style={{ display: "flex", gap: ".4rem", alignItems: "center" }}>
          {works.map((w, i) => (
            <button key={w.id} onClick={() => {
              setFading(true);
              setTimeout(() => { onNavigate(i); setFading(false); }, 280);
            }} style={{
              height: 7, width: i === activeIndex ? 20 : 7,
              borderRadius: 4, border: "none", padding: 0, cursor: "pointer",
              background: i === activeIndex ? w.accentColor : "rgba(255,255,255,.22)",
              transition: "all .35s cubic-bezier(.4,0,.2,1)",
            }} />
          ))}
        </div>

        <button onClick={onClose} style={{
          width: 28, height: 28,
          background: "rgba(4,3,6,.65)",
          border: "1px solid rgba(200,151,58,.3)",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", color: "var(--cream)", zIndex: 5,
        }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* PREV */}
      <button onClick={() => navigate(-1)} className="modal-nav-btn modal-nav-prev">
        <div className="modal-nav-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </div>
      </button>

      {/* NEXT */}
      <button onClick={() => navigate(1)} className="modal-nav-btn modal-nav-next">
        <div className="modal-nav-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      </button>

      {/* bottom fade */}
      <div className="modal-img-fade-bottom" />
    </div>
  );

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: "fixed", inset: 0, zIndex: 500,
        background: "rgba(4,3,6,.96)",
        backdropFilter: "blur(18px)",
        display: "flex", alignItems: "flex-start", justifyContent: "center",
        overflowY: "auto",
        padding: "2rem 1rem 3rem",
        animation: "mBgIn .3s ease",
        scrollbarWidth: "none" as const,
      }}
    >
      {/* ── DESKTOP: grid side by side ── */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-card"
      >
        <ImageSection />
        <DetailsPanel />
      </div>

      <style>{`
        @keyframes mBgIn  { from{opacity:0} to{opacity:1} }
        @keyframes mBoxIn {
          from{opacity:0;transform:translateY(22px) scale(.94)}
          to  {opacity:1;transform:translateY(0) scale(1)}
        }

        /* ══ CARD ══ */
        .modal-card {
          position: relative;
          background: #0e0c12;
          border: 1px solid rgba(200,151,58,.2);
          animation: mBoxIn .45s cubic-bezier(.16,1,.3,1);
          overflow: hidden;

          /* MOBILE: single column, no internal scroll */
          width: min(100%, 460px);
          display: flex;
          flex-direction: column;
        }
        

        /* ══ IMAGE SECTION ══ */
        .modal-image-section {
          position: relative;
          width: 100%;
          flex-shrink: 0;
          background: #0b0a0e;
          /* mobile: respect image ratio */
          aspect-ratio: ${work.imageRatio};
        }

        /* ══ DETAILS PANEL ══ */
        .modal-details-panel {
          padding: 1.3rem 1.3rem 1.8rem;
          flex-shrink: 0;
        }

        /* bottom image fade */
        .modal-img-fade-bottom {
          position: absolute; bottom: 0; left: 0; right: 0; height: 14%;
          background: linear-gradient(to top, #0e0c12, transparent);
          pointer-events: none; z-index: 3;
        }

        /* ══ DESKTOP (≥ 769px) ══ */
        @media (min-width: 769px) {
          .modal-card {
            /* fixed height so image fills it */
            width: min(92vw, 900px);
            height: min(88vh, 700px);
            max-height: 88vh;
            flex-direction: row;
            overflow: hidden;
          }

          /* Image: left half, fills full height */
          .modal-image-section {
            width: 50%;
            aspect-ratio: unset !important;
            height: 100%;
            flex-shrink: 0;
          }

          /* Details: right half, scrollable if needed */
          .modal-details-panel {
            width: 50%;
            height: 100%;
            overflow-y: auto;
            padding: 2.2rem 2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            scrollbar-width: none;
          }
          .modal-details-panel::-webkit-scrollbar { display: none; }

          /* on desktop image fades to dark not to #0e0c12 */
          .modal-img-fade-bottom {
            background: linear-gradient(to top, rgba(14,12,18,.8), transparent);
          }
        }

        /* ══ Nav buttons ══ */
        .modal-nav-btn {
          position: absolute; top: 0; bottom: 0;
          width: 20%; border: none; background: transparent;
          cursor: pointer; z-index: 4;
          display: flex; align-items: center;
          transition: background .25s;
        }
        .modal-nav-prev { left: 0; justify-content: flex-start; padding-left: .75rem; }
        .modal-nav-next { right: 0; justify-content: flex-end; padding-right: .75rem; }
        .modal-nav-prev:hover { background: linear-gradient(to right, rgba(4,3,6,.5), transparent); }
        .modal-nav-next:hover { background: linear-gradient(to left, rgba(4,3,6,.5), transparent); }

        .modal-nav-icon {
          width: 44px; height: 44px;
          background: rgba(4,3,6,.72);
          border: 1px solid rgba(200,151,58,.38);
          display: flex; align-items: center; justify-content: center;
          color: var(--cream);
          transition: border-color .25s, background .25s;
        }
        .modal-nav-btn:hover .modal-nav-icon {
          border-color: var(--gold);
          background: rgba(200,151,58,.14);
        }

        /* ══ WhatsApp ══ */
        .modal-wa-btn {
          display: flex; align-items: center; gap: .5rem;
          padding: .75rem 1.4rem;
          background: rgba(37,211,102,.1);
          border: 1px solid rgba(37,211,102,.35);
          color: #5ddb8a;
          font-family: var(--ff-caveat, 'Caveat', cursive);
          font-size: .95rem;
          text-decoration: none;
          transition: background .3s, transform .2s;
          white-space: nowrap;
        }
        .modal-wa-btn:hover {
          background: rgba(37,211,102,.2);
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}