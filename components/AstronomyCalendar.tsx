export default function AstronomyCalendar() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-indigo-500/30 bg-gradient-to-br from-indigo-900/20 to-purple-900/10 p-10 flex flex-col md:flex-row items-center gap-8">
          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-600/15 rounded-full blur-[80px]" />
          </div>

          {/* Icon */}
          <div className="relative flex-shrink-0">
            <div className="w-24 h-24 rounded-full bg-indigo-900/60 border border-indigo-500/40 flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.35)]">
              <svg className="w-12 h-12 text-indigo-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
            </div>
          </div>

          {/* Text */}
          <div className="relative flex-1 text-center md:text-left">
            <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-2">
              Free Subscribable Calendar
            </p>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
              Astronomy &amp; Space Calendar
            </h3>
            <p className="text-white/50 mb-6 max-w-md">
              A free subscribable calendar of 2026 astronomical events — eclipses, meteor showers, moon phases, and planet oppositions — delivered straight to your calendar app.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                href="webcal://raw.githubusercontent.com/jhelmer101/astronomy-calendar/refs/heads/main/astronomy-calendar-2026.ics"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full text-sm transition-all hover:scale-105"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Subscribe on iPhone/Mac
              </a>
              <a
                href="https://raw.githubusercontent.com/jhelmer101/astronomy-calendar/refs/heads/main/astronomy-calendar-2026.ics"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-full text-sm transition-all hover:scale-105"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Subscribe on Google Calendar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
