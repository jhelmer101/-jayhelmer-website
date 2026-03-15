const services = [
  {
    title: "Go-to-market strategy",
    description:
      "Helping digital health companies identify the right entry points — health plans, employers, or health systems — and build a commercial strategy that reflects how these buyers actually make decisions.",
    icon: "→",
  },
  {
    title: "Partnership development",
    description:
      "Designing and executing partnership strategies that go beyond a signed contract. I help companies build the operational, clinical, and economic case that gets health plan partners invested in mutual success.",
    icon: "◈",
  },
  {
    title: "Sales leadership",
    description:
      "Advising on sales team structure, pipeline management, and enterprise deal strategy. I've carried quota at every stage from startup to public company and know what it takes to close in a complex environment.",
    icon: "◎",
  },
];

export default function HowIHelp() {
  return (
    <section id="how-i-help" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4">
          How I help
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 leading-tight">
          Where I can{" "}
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            move the needle
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 hover:bg-white/[0.07] transition-all"
            >
              <div className="text-2xl text-blue-400 mb-6">{s.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{s.title}</h3>
              <p className="text-white/55 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
