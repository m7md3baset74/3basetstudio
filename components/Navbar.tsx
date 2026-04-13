"use client";

import Link from "next/link";
import { INSTAGRAM, TIKTOK } from "../data/works";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "1.3rem 2.8rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "linear-gradient(to bottom, rgba(11,10,14,.92), transparent)",
        backdropFilter: "blur(4px)",
      }}
    >
      {/* Logo */}
      <Link href="#hero" className="gradient-text" style={{ fontFamily: "'Caveat', cursive", fontSize: "1.65rem", fontWeight: 700, textDecoration: "none", paddingBottom: "0.05em" }}>
        3baset Studio
      </Link>

      {/* Links */}
      <ul style={{ listStyle: "none", display: "flex", gap: "2.2rem" }} className="nav-links">
        {["about", "works", "contact"].map((s) => (
          <li key={s}>
            <Link
              href={`#${s}`}
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "1.05rem",
                color: "var(--cream)",
                textDecoration: "none",
                opacity: 0.65,
                transition: "opacity .3s, color .3s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.color = "var(--gold)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.65"; (e.currentTarget as HTMLElement).style.color = "var(--cream)"; }}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social icons */}
      <div style={{ display: "flex", gap: "0.9rem", alignItems: "center" }}>
        <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" style={{ color: "var(--cream)", opacity: 0.55, transition: "opacity .3s, color .3s", display: "flex" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.color = "var(--gold)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.55"; (e.currentTarget as HTMLElement).style.color = "var(--cream)"; }}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
          </svg>
        </a>
        <a href={TIKTOK} target="_blank" rel="noopener noreferrer" style={{ color: "var(--cream)", opacity: 0.55, transition: "opacity .3s, color .3s", display: "flex" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.color = "var(--gold)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.55"; (e.currentTarget as HTMLElement).style.color = "var(--cream)"; }}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.77 1.52V6.75a4.85 4.85 0 01-1-.06z" />
          </svg>
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  );
}