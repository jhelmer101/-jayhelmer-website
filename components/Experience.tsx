const roles = [
  {
    company: "AliveCor",
    title: "Vice President of Strategic Alliances",
    period: "May 2025 – Present",
    description:
      "Leading strategic alliances for AliveCor, the pioneer in AI-powered personal ECG technology. Developing partnerships with health plans, employers, and health systems to bring cardiac monitoring to populations at scale.",
    tags: ["Cardiac Health", "AI/Wearables", "Strategic Alliances"],
    current: true,
  },
  {
    company: "Pelago",
    title: "Vice President, Health Plan Partnerships",
    period: "Oct 2021 – May 2025 · 3 yrs 8 mos",
    description:
      "Pelago (formerly Quit Genius) is the world's leading virtual clinic for substance use management. Led health plan partnerships to drive adoption of CBT and medication-assisted treatment (MAT) programs across commercial and government markets, integrating with health plans, PBMs, and wellness platforms.",
    tags: ["Substance Use", "CBT / MAT", "Health Plan BD"],
    current: false,
  },
  {
    company: "Teladoc Health",
    title: "Vice President, Health Services Segment Sales",
    period: "Nov 2020 – Oct 2021 · 1 yr",
    description:
      "Drove health services segment sales at Teladoc Health, the global leader in virtual care. Focused on health plan and employer channels, expanding access to virtual care and behavioral health services.",
    tags: ["Virtual Care", "Behavioral Health", "Health Plans"],
    current: false,
  },
  {
    company: "Livongo",
    title: "Vice President, Health Services Sales",
    period: "Sep 2017 – Nov 2020 · 3 yrs 3 mos",
    description:
      "Livongo reinvented chronic condition management by blending technology, real-time data, and human support — starting with diabetes. Partnered with health plans, TPAs, and provider organizations to deploy Livongo to their membership, delivering measurable cost and quality improvements for diabetic populations.",
    tags: ["Chronic Conditions", "Diabetes", "Health Plans & TPAs"],
    current: false,
  },
  {
    company: "Omada Health",
    title: "Senior Account Executive",
    period: "Oct 2015 – Sep 2017 · 2 yrs",
    description:
      "Worked with self-insured employers to deploy Omada's digital behavioral medicine program — helping members prevent and manage obesity-related conditions like heart disease and diabetes before they develop.",
    tags: ["Obesity Prevention", "Employer Sales", "Digital Health"],
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4">
          Experience
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 leading-tight">
          A career built on{" "}
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            impact
          </span>
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 ml-5 hidden md:block" />

          <div className="space-y-12">
            {roles.map((role, i) => (
              <div key={i} className="relative md:pl-16">
                {/* Dot */}
                <div
                  className={`absolute left-0 top-6 w-10 h-10 rounded-full border-2 flex items-center justify-center hidden md:flex ${
                    role.current
                      ? "border-blue-500 bg-blue-500/20"
                      : "border-white/20 bg-white/5"
                  }`}
                >
                  {role.current && (
                    <span className="w-3 h-3 rounded-full bg-blue-400 animate-pulse" />
                  )}
                </div>

                {/* Card */}
                <div
                  className={`bg-white/5 border rounded-2xl p-8 hover:bg-white/[0.07] transition-all ${
                    role.current
                      ? "border-blue-500/30 shadow-[0_0_40px_-10px_rgba(37,99,235,0.3)]"
                      : "border-white/10"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-bold text-white">
                          {role.company}
                        </h3>
                        {role.current && (
                          <span className="text-xs font-semibold bg-blue-600/30 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-white/70 font-medium">{role.title}</p>
                    </div>
                    <span className="text-sm text-white/40 whitespace-nowrap">
                      {role.period}
                    </span>
                  </div>

                  <p className="text-white/55 leading-relaxed mb-6">
                    {role.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {role.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-white/5 border border-white/10 text-white/60 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
