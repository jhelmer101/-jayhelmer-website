export default function PointOfView() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-white/5 border border-white/10 rounded-2xl p-10 md:p-16">
          {/* Decorative quote mark */}
          <div className="absolute top-8 left-10 text-blue-500/20 text-[8rem] font-serif leading-none select-none">
            &ldquo;
          </div>
          <blockquote className="relative text-2xl md:text-3xl font-bold text-white leading-snug">
            Most digital health companies don&apos;t fail because their technology doesn&apos;t work. They fail because they never learned to sell to health plans.
          </blockquote>
          <p className="mt-6 text-white/40 text-sm font-semibold uppercase tracking-widest">
            Jay Helmer · Point of view
          </p>
        </div>
      </div>
    </section>
  );
}
