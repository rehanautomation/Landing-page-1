import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import logo from "../../LP images/leagciii-logo.webp";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Apply · Legaciii" },
      { name: "description", content: "See if you qualify for a free strategy call." },
    ],
  }),
  component: ApplyPage,
});

function ApplyPage() {
  useEffect(() => {
    // Force scroll to top on mount (covers refresh)
    window.scrollTo(0, 0);
    // Also prevent browser from restoring scroll position if possible
    if ('scrollRestoration' in history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center py-12 px-5" style={{ backgroundColor: "#000421" }}>
      {/* Background Gradient */}
      <div 
        className="absolute top-0 left-0 right-0 pointer-events-none" 
        style={{ 
          background: "radial-gradient(circle at 50% 0%, #002222 0%, transparent 80%)",
          height: "600px",
          zIndex: 0
        }} 
      />

      {/* Logo */}
      <div className="mb-12 relative z-10">
        <img src={logo} alt="Legaciii" className="h-16 w-auto" />
      </div>

      {/* Heading Section */}
      <div className="text-center max-w-3xl mb-12 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's see if this is a fit.</h1>
        <p className="text-lg leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
          I only take a handful of these calls a week, and I keep them for people who are serious about acting, not collecting more information they'll never use. These four questions tell me if you're a fit and where I can actually move the needle for you. Answer honestly and I'll see you on the call.
        </p>
      </div>

      {/* Form Section */}
      <form className="w-full max-w-2xl space-y-10 mb-20 relative z-10">
        {/* Standard Info */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold uppercase tracking-wider ml-1" style={{ color: "var(--color-gold)" }}>Name</label>
            <input 
              type="text" 
              placeholder="Your full name" 
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-gold/50 transition-colors"
              required 
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold uppercase tracking-wider ml-1" style={{ color: "var(--color-gold)" }}>Email</label>
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-gold/50 transition-colors"
              required 
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-semibold uppercase tracking-wider ml-1" style={{ color: "var(--color-gold)" }}>Phone</label>
            <input 
              type="tel" 
              placeholder="Your phone number" 
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-gold/50 transition-colors"
              required 
            />
          </div>
        </div>

        {/* Question 1 */}
        <div className="space-y-4">
          <p className="text-xl font-bold">Q1. What's the biggest reason you want to talk to me?</p>
          <div className="grid gap-3">
            {[
              "I make good money but still feel behind",
              "Too much of my income disappears to taxes",
              "I want to build real wealth and don't have a system for it",
              "I want to protect my family and build something that lasts"
            ].map((option) => (
              <label key={option} className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5 cursor-pointer hover:bg-white/10 transition-colors group">
                <input type="radio" name="q1" value={option} className="w-4 h-4 accent-gold" required />
                <span className="text-cream group-hover:text-white transition-colors">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Question 2 */}
        <div className="space-y-4">
          <p className="text-xl font-bold">Q2. What's your approximate household income?</p>
          <div className="grid gap-3">
            {[
              "Under $120,000",
              "$120,000 – $200,000",
              "$200,000 – $350,000",
              "$350,000+"
            ].map((option) => (
              <label key={option} className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5 cursor-pointer hover:bg-white/10 transition-colors group">
                <input type="radio" name="q2" value={option} className="w-4 h-4 accent-gold" required />
                <span className="text-cream group-hover:text-white transition-colors">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Question 3 */}
        <div className="space-y-4">
          <p className="text-xl font-bold">Q3. Who makes the big financial decisions in your household?</p>
          <div className="grid gap-3">
            {[
              "Me",
              "My partner and I, together",
              "Mostly my partner or someone else"
            ].map((option) => (
              <label key={option} className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5 cursor-pointer hover:bg-white/10 transition-colors group">
                <input type="radio" name="q3" value={option} className="w-4 h-4 accent-gold" required />
                <span className="text-cream group-hover:text-white transition-colors">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Question 4 */}
        <div className="space-y-4">
          <p className="text-xl font-bold">Q4. How ready are you to do something about it?</p>
          <div className="grid gap-3">
            {[
              "I'm ready to start now",
              "Soon — within the next month or so",
              "Just exploring for now"
            ].map((option) => (
              <label key={option} className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5 cursor-pointer hover:bg-white/10 transition-colors group">
                <input type="radio" name="q4" value={option} className="w-4 h-4 accent-gold" required />
                <span className="text-cream group-hover:text-white transition-colors">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <button type="submit" className="btn-primary w-full py-5 text-xl mt-12">
          Submit Application <span aria-hidden className="ml-2">→</span>
        </button>
      </form>

      {/* Footer */}
      <footer className="w-full py-10 text-center text-xs text-muted-foreground border-t mt-auto" style={{ borderColor: "color-mix(in oklab, var(--color-gold) 15%, transparent)" }}>
        © {new Date().getFullYear()} Legaciii · Morgan Samuel, LLQP · PCP
      </footer>
    </main>
  );
}
