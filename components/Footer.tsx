"use client";

import { useEffect, useRef } from "react";
import { WA_NUMBER, INSTAGRAM, TIKTOK } from "../data/works";

const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hello, I'm interested in one of your carpet artworks.")}`;

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
      style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 46, height: 46, border: "1px solid rgba(200,151,58,.25)", color: "var(--cream)", textDecoration: "none", transition: "border-color .3s, color .3s, transform .3s", cursor: "none" }}
      onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--gold)"; el.style.color = "var(--gold)"; el.style.transform = "translateY(-3px)"; }}
      onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(200,151,58,.25)"; el.style.color = "var(--cream)"; el.style.transform = "translateY(0)"; }}
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const igSvg = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
    </svg>
  );
  const ttSvg = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.77 1.52V6.75a4.85 4.85 0 01-1-.06z" />
    </svg>
  );
  const waSvg = (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );

  return (
    <>
      {/* Contact Section */}
      <section id="contact" ref={ref} style={{ position: "relative", zIndex: 1, padding: "8rem 3rem", textAlign: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 50% 50% at 30% 50%,rgba(30,58,110,.12) 0%,transparent 60%),radial-gradient(ellipse 40% 40% at 70% 50%,rgba(139,26,47,.1) 0%,transparent 60%)", pointerEvents: "none" }} />

        <p className="reveal gradient-text-gold" style={{ fontFamily: "'Caveat', cursive", fontSize: "1rem", letterSpacing: ".28em", textTransform: "uppercase", marginBottom: ".6rem", display: "inline-block" }}>
          Acquire a Piece
        </p>
        <h2 className="reveal reveal-delay-1" style={{ fontFamily: "'Caveat', cursive", fontSize: "clamp(2.8rem,6vw,5.5rem)", fontWeight: 700, color: "var(--cream)", lineHeight: 1.0 }}>
          Own the{" "}
          <span className="gradient-text" style={{ fontStyle: "normal" }}>Unrepeatable</span>
        </h2>
        <p className="reveal reveal-delay-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "1.1rem", color: "var(--muted)", margin: "1.5rem auto 0", maxWidth: 460, lineHeight: 1.9 }}>
          Each work is one of a kind. Once it finds its home, it is gone forever. Reach out to inquire about availability or private viewings.
        </p>

        <div className="reveal reveal-delay-3" style={{ marginTop: "3.2rem", display: "flex", gap: "1.2rem", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: ".6rem", padding: ".85rem 2.2rem", background: "rgba(37,211,102,.1)", border: "1px solid rgba(37,211,102,.35)", color: "#5ddb8a", fontFamily: "'Caveat', cursive", fontSize: "1.05rem", letterSpacing: ".08em", textDecoration: "none", transition: "background .3s, transform .3s, box-shadow .3s", cursor: "none" }}
            onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(37,211,102,.2)"; el.style.transform = "translateY(-3px)"; el.style.boxShadow = "0 12px 30px rgba(37,211,102,.18)"; }}
            onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(37,211,102,.1)"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}
          >
            {waSvg} WhatsApp
          </a>
          <div style={{ display: "flex", gap: ".8rem" }}>
            <SocialIcon href={INSTAGRAM} label="Instagram">{igSvg}</SocialIcon>
            <SocialIcon href={TIKTOK} label="TikTok">{ttSvg}</SocialIcon>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) { #contact { padding: 5rem 1.2rem !important; } }
        `}</style>
      </section>

      {/* Footer */}
      <footer style={{ position: "relative", zIndex: 1, padding: "2rem 3rem", borderTop: "1px solid rgba(200,151,58,.12)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <div className="gradient-text-gold" style={{ fontFamily: "'Caveat', cursive", fontSize: "1.2rem", fontWeight: 700 }}>3baset Studio</div>
        <div style={{ fontSize: ".7rem", letterSpacing: ".08em", color: "var(--muted)" }}>© 2026 Mohamed Abdelbaset · All Rights Reserved</div>
        <div style={{ display: "flex", gap: "1.1rem" }}>
          {[{ href: INSTAGRAM, label: "Instagram", icon: igSvg }, { href: TIKTOK, label: "TikTok", icon: ttSvg }, { href: `https://wa.me/${WA_NUMBER}`, label: "WhatsApp", icon: waSvg }].map(({ href, label, icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              style={{ color: "var(--muted)", transition: "color .3s", display: "flex" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--gold)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--muted)"; }}
            >
              {icon}
            </a>
          ))}
        </div>
        <style>{`
          @media (max-width: 768px) { footer { padding: 1.8rem 1.2rem !important; flex-direction: column !important; text-align: center !important; } }
        `}</style>
      </footer>
    </>
  );
}