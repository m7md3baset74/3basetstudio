import Cursor from "../components/Corsor";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Works from "../components/Works";
import Footer from "../components/Footer";
import { WA_NUMBER } from "../data/works";

export default function Home() {
  return (
    <>
      {/* Fixed backgrounds */}
      <div className="carpet-bg" />
      <div className="noise-bg" />

      {/* Cursor */}
      <Cursor />

      {/* WhatsApp fixed button */}
      <a
        href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hello, I'm interested in one of your carpet artworks.")}`}
        className="wa-fixed"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <div className="wa-pulse" />
        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Wave divider SVG component */}
      <Navbar />
      <main>
        <Hero />
        <WaveDivider />
        <About />
        <WaveDivider reverse />
        <Works />
        <Footer />
      </main>
    </>
  );
}

function WaveDivider({ reverse }: { reverse?: boolean }) {
  return (
    <div className="wave-divider">
      <svg viewBox="0 0 1200 36" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={reverse ? "dg2" : "dg1"} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="transparent" />
            <stop offset="20%" stopColor={reverse ? "#4a2d6b" : "#1e3a6e"} stopOpacity=".5" />
            <stop offset="50%" stopColor="#c8973a" stopOpacity=".6" />
            <stop offset="80%" stopColor={reverse ? "#3a6b55" : "#8b1a2f"} stopOpacity=".5" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path
          d={reverse
            ? "M0 18 Q200 10 400 18 Q600 26 800 18 Q1000 10 1200 18"
            : "M0 18 Q150 8 300 18 Q450 28 600 18 Q750 8 900 18 Q1050 28 1200 18"}
          stroke={`url(#${reverse ? "dg2" : "dg1"})`}
          strokeWidth="1.2"
          fill="none"
        />
        <circle cx={reverse ? "400" : "300"} cy="18" r="2.5" fill={reverse ? "#4a2d6b" : "#1e3a6e"} fillOpacity=".5" />
        <circle cx="600" cy="18" r="3.5" fill="#c8973a" fillOpacity=".6" />
        <circle cx={reverse ? "800" : "900"} cy="18" r="2.5" fill={reverse ? "#3a6b55" : "#8b1a2f"} fillOpacity=".5" />
      </svg>
    </div>
  );
}