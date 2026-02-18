import Link from "next/link";

export default function Chelsea() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-[#034694]/40 bg-gradient-to-br from-[#034694]/20 to-[#034694]/5 p-10 flex flex-col md:flex-row items-center gap-8">
          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#034694]/20 rounded-full blur-[80px]" />
          </div>

          {/* Chelsea Badge */}
          <div className="relative flex-shrink-0">
            <div className="w-24 h-24 rounded-full bg-[#034694] flex items-center justify-center shadow-[0_0_40px_rgba(3,70,148,0.5)]">
              {/* CFC Lion crest placeholder */}
              <svg viewBox="0 0 100 100" className="w-14 h-14 text-white" fill="currentColor">
                <text x="50" y="68" textAnchor="middle" fontSize="60" fontWeight="bold">⚽</text>
              </svg>
            </div>
          </div>

          {/* Text */}
          <div className="relative flex-1 text-center md:text-left">
            <p className="text-xs font-semibold text-[#6ab0f5] uppercase tracking-widest mb-2">
              Chelsea FC Fan
            </p>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
              Never miss a Blues fixture
            </h3>
            <p className="text-white/50 mb-6 max-w-md">
              Proud Chelsea supporter. Subscribe to the fixture calendar and stay up to date with every match.
            </p>
            <Link
              href="/chelsea"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#034694] hover:bg-[#0452b8] text-white font-semibold rounded-full text-sm transition-all hover:scale-105"
            >
              View Fixtures & Subscribe
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
