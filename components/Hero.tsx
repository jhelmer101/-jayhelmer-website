import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/15 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Headshot */}
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.2)]">
            <Image
              src="/headshot.jpg"
              alt="Jay Helmer"
              width={128}
              height={128}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-white/70">VP of Strategic Alliances · AliveCor</span>
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-none mb-6">
          <span className="text-white">Jay </span>
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Helmer
          </span>
        </h1>

        {/* Headline */}
        <p className="text-2xl md:text-3xl font-bold text-white/90 max-w-3xl mx-auto leading-snug mb-6">
          Turning great digital health technology into real partnerships that scale.
        </p>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-12">
          Health plans and employers don&apos;t buy technology — they buy trust, outcomes, and relationships. I&apos;ve spent 15 years building exactly that.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#how-i-help"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full text-sm transition-all hover:scale-105"
          >
            How I help
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-full text-sm transition-all"
          >
            Work with me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-white/50 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
