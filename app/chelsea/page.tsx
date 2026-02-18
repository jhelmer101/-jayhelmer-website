import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chelsea FC Fixtures | Jay Helmer",
  description: "Subscribe to Chelsea FC fixture calendar — never miss a Blues match.",
};

const links = [
  {
    label: "Subscribe to Fixture Calendar",
    description: "Add all Chelsea FC matches directly to your Google Calendar, Apple Calendar, or Outlook.",
    href: "webcal://www.chelseafc.com/en/fixtures-and-results?ical=1",
    icon: "📅",
    cta: "Subscribe via iCal",
  },
  {
    label: "Official Chelsea FC Site",
    description: "News, squad, tickets, and more from the official Chelsea FC website.",
    href: "https://www.chelseafc.com",
    icon: "🦁",
    cta: "Visit chelseafc.com",
  },
  {
    label: "Fixtures & Results",
    description: "Full schedule of upcoming Premier League, Champions League, and cup fixtures.",
    href: "https://www.chelseafc.com/en/fixtures-and-results",
    icon: "📋",
    cta: "View All Fixtures",
  },
  {
    label: "Chelsea on BBC Sport",
    description: "Match reports, live scores, and league table from BBC Sport.",
    href: "https://www.bbc.com/sport/football/teams/chelsea",
    icon: "📰",
    cta: "BBC Sport Chelsea",
  },
];

export default function ChelseaPage() {
  return (
    <main className="min-h-screen bg-[#06060f] text-white px-6 py-24">
      {/* Back link */}
      <div className="max-w-4xl mx-auto mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to jayhelmer.com
        </Link>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-80 h-80 bg-[#034694]/20 rounded-full blur-[100px]" />
          </div>
          <div className="relative w-24 h-24 rounded-full bg-[#034694] flex items-center justify-center mx-auto mb-6 shadow-[0_0_60px_rgba(3,70,148,0.5)]">
            <span className="text-4xl">🦁</span>
          </div>
          <h1 className="relative text-5xl md:text-6xl font-extrabold mb-4">
            <span className="text-white">Chelsea </span>
            <span className="text-[#034694]" style={{textShadow: "0 0 40px rgba(3,70,148,0.8)"}}>FC</span>
          </h1>
          <p className="relative text-white/50 text-lg max-w-md mx-auto">
            A proud Blues supporter. Subscribe to never miss a fixture — home, away, or European.
          </p>
        </div>

        {/* Links */}
        <div className="grid md:grid-cols-2 gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("webcal") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group bg-white/5 border border-white/10 hover:border-[#034694]/50 hover:bg-[#034694]/10 rounded-2xl p-6 transition-all"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{l.icon}</span>
                <div className="flex-1">
                  <h3 className="font-bold text-white mb-1 group-hover:text-[#6ab0f5] transition-colors">
                    {l.label}
                  </h3>
                  <p className="text-white/40 text-sm mb-4 leading-relaxed">
                    {l.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#034694] group-hover:text-[#6ab0f5] transition-colors">
                    {l.cta}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* KTBFFH */}
        <div className="text-center mt-16 text-white/20 text-sm font-semibold tracking-widest uppercase">
          Keep the Blue Flag Flying High 🔵
        </div>
      </div>
    </main>
  );
}
