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
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Building the future of{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                digital health
              </span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              I&apos;m a Growth Mindset business development professional dedicated to
              helping people reach their health goals through scalable
              technologies that engage, inform, and change behavior.
            </p>
            <p className="text-white/60 text-lg leading-relaxed">
              Across early-stage startups and established organizations, I&apos;ve
              partnered with health plans and employers to solve big health
              challenges within their populations — delivering results from a
              financial, clinical, and quality of life perspective.
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
