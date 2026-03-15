"use client";
import { useState } from "react";

const placeholders = [
  {
    title: "Why health plans say no — and how to change that",
    description:
      "A breakdown of the real reasons digital health companies lose health plan deals, and the go-to-market shifts that turn rejections into partnerships.",
    label: "Coming soon",
  },
  {
    title: "The difference between a pilot and a partnership",
    description:
      "Most digital health pilots don't convert. The companies that scale understand that a pilot is just the beginning of a sales process, not the end of one.",
    label: "Coming soon",
  },
];

export default function Insights() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="insights" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4">
          Insights
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
          Thinking out{" "}
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            loud
          </span>
        </h2>
        <p className="text-white/50 text-lg mb-16 max-w-xl">
          Essays on digital health commercialization, health plan strategy, and what it actually takes to build durable partnerships.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {placeholders.map((p) => (
            <div
              key={p.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 opacity-70"
            >
              <span className="inline-block text-xs font-semibold text-white/40 border border-white/10 px-3 py-1 rounded-full mb-5">
                {p.label}
              </span>
              <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="text-white/50 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>

        {/* Email capture */}
        <div className="max-w-xl">
          <p className="text-white/70 font-semibold mb-4">
            Get notified when new essays are published.
          </p>
          {submitted ? (
            <p className="text-green-400 font-medium">
              You&apos;re on the list. I&apos;ll be in touch.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full text-sm transition-all hover:scale-105 whitespace-nowrap"
              >
                Notify me
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
