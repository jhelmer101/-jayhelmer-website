export default function About() {
  const highlights = [
    { value: "15+", label: "Years in Health Tech" },
    { value: "6", label: "Iconic Companies" },
    { value: "5M+", label: "Members Impacted" },
  ];

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4">
              About
            </p>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              Digital health is full of companies with genuinely life-changing technology that never reaches the people who need it most. I&apos;ve dedicated my career to closing that gap — partnering with health plans, employers, and health systems to build the commercial bridges that scale innovative solutions from promising pilot to millions of members.
            </p>
            <p className="text-white/60 text-lg leading-relaxed">
              Today I work with startups and growth-stage companies as an advisor and thought partner — helping founders navigate the health plan and employer landscape, sharpen their go-to-market strategy, and build the kind of partnerships that drive durable growth.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-blue-500/40 transition-colors"
              >
                <div className="text-4xl font-extrabold text-white mb-2">
                  {h.value}
                </div>
                <div className="text-sm text-white/50">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
