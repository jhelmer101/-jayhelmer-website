const cases = [
  {
    company: "Livongo",
    role: "VP, Health Services Sales",
    story:
      "Livongo had proven its diabetes management platform clinically — but health plan distribution required a fundamentally different sales motion than employer-direct. I built and led the health plan channel, working with Blues plans, national carriers, and regional TPAs to integrate Livongo into their covered benefit and care management programs.",
    outcome: "Helped scale Livongo to millions of members through health plan channels ahead of the $18.5B Teladoc merger.",
    tags: ["Health Plan Distribution", "Diabetes Management", "Enterprise Sales"],
  },
  {
    company: "Pelago",
    role: "VP, Health Plan Partnerships",
    story:
      "When I joined Pelago (then Quit Genius), the health plan channel was largely untapped. Substance use programs face unique coverage and stigma challenges — I developed the payer narrative, built the contracting infrastructure, and established relationships across commercial, Medicaid, and government markets.",
    outcome: "Built the health plan channel from near zero, establishing coverage across multiple national and regional payers for substance use programs.",
    tags: ["Substance Use", "Payer Strategy", "Coverage Expansion"],
  },
  {
    company: "AliveCor",
    role: "VP, Strategic Alliances",
    story:
      "AliveCor's AI-powered ECG technology is clinically differentiated — but getting health plans and employers to deploy wearable cardiac monitoring at scale requires a compelling total-cost-of-care story, operational integration, and sustained partnership investment. I am currently building that foundation.",
    outcome: "Developing strategic alliances to bring KardiaMobile and AI cardiac screening to plan and employer populations at scale.",
    tags: ["Cardiac Health", "AI / Wearables", "Strategic Alliances"],
    current: true,
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4">
          Case studies
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 leading-tight">
          Work that{" "}
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            moved markets
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div
              key={c.company}
              className={`bg-white/5 border rounded-2xl p-8 flex flex-col transition-all ${
                c.current
                  ? "border-blue-500/30 shadow-[0_0_40px_-10px_rgba(37,99,235,0.3)]"
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">{c.company}</h3>
                {c.current && (
                  <span className="text-xs font-semibold bg-blue-600/30 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded-full">
                    Current
                  </span>
                )}
              </div>
              <p className="text-sm text-blue-400 font-medium mb-5">{c.role}</p>
              <p className="text-white/55 leading-relaxed mb-6 flex-1">{c.story}</p>
              <div className="border-t border-white/10 pt-5 mb-5">
                <p className="text-white/80 text-sm font-semibold leading-relaxed">
                  {c.outcome}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-white/5 border border-white/10 text-white/60 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
