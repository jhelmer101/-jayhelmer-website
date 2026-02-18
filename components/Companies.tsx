const companies = [
  "AliveCor",
  "Pelago",
  "Teladoc Health",
  "Livongo",
  "Omada Health",
  "WebMD",
  "OptumHealth",
];

export default function Companies() {
  return (
    <section className="py-20 px-6 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm text-white/30 uppercase tracking-widest mb-10">
          Experience across leading health technology organizations
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {companies.map((c) => (
            <div
              key={c}
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white/50 text-sm font-medium hover:text-white hover:border-white/30 transition-all"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
