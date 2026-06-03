import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Legaciii · Apply for Your Free Strategy Call with Morgan Samuel" },
      { name: "description", content: "Free 1-on-1 strategy call with Morgan Samuel, licensed Canadian financial advisor (LLQP, PCP). No products. No commission. Limited spots each week." },
      { property: "og:title", content: "Legaciii · Apply for Your Free Strategy Call" },
      { property: "og:description", content: "You earn like you've made it. Your net worth says you haven't. Book a free 30 minute call with Morgan Samuel." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

const APPLY_URL = "#apply";

function CTAButton({ label = "See If You Qualify" }: { label?: string }) {
  return (
    <a href={APPLY_URL} className="btn-primary">
      {label} <span aria-hidden className="ml-2">→</span>
    </a>
  );
}

function TrustStrip() {
  return (
    <p className="trust-strip">
      Free · ~30 minutes · Licensed advisor (LLQP, PCP) · No products sold · Limited spots each week
    </p>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md" style={{ background: "color-mix(in oklab, var(--color-deep) 75%, transparent)", borderBottom: "1px solid color-mix(in oklab, var(--color-gold) 18%, transparent)" }}>
      <div className="container-wide flex items-center justify-between px-5 py-2.5">
        <a href="#top" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md flex items-center justify-center font-bold text-sm" style={{ background: "var(--gradient-gold)", color: "var(--color-deep)" }}>
            L
          </div>
          <span className="font-semibold tracking-tight text-cream">Legaciii</span>
        </a>
        <a href={APPLY_URL} className="btn-primary" style={{ padding: "0.55rem 1.1rem", fontSize: "0.85rem" }}>
          Apply Now
        </a>
      </div>
    </header>
  );
}

function Landing() {
  return (
    <main id="top" className="text-foreground">
      <Header />
      <Hero />
      <Trap />
      <MeetMorgan />
      <WalkAway />
      <WhyMorgan />
      <Proof />
      <IsThisForYou />
      <FinalCTA />
      <FAQ />
      <footer className="py-10 text-center text-xs text-muted-foreground border-t" style={{ borderColor: "color-mix(in oklab, var(--color-gold) 15%, transparent)" }}>
        © {new Date().getFullYear()} Legaciii · Morgan Samuel, LLQP · PCP
      </footer>
    </main>
  );
}

/* ---------- 1. HERO ---------- */
function Hero() {
  return (
    <section className="section pt-14 md:pt-20 pb-16">
      <div className="container-wide text-center">
        <div className="flex justify-center gap-2 flex-wrap mb-6 text-[11px] font-medium tracking-wider uppercase" style={{ color: "var(--color-ink-soft)" }}>
          <span className="px-3 py-1 rounded-full border" style={{ borderColor: "color-mix(in oklab, var(--color-gold) 30%, transparent)" }}>LLQP</span>
          <span className="px-3 py-1 rounded-full border" style={{ borderColor: "color-mix(in oklab, var(--color-gold) 30%, transparent)" }}>PCP</span>
          <span className="px-3 py-1 rounded-full border" style={{ borderColor: "color-mix(in oklab, var(--color-gold) 30%, transparent)" }}>Accounting Degree</span>
          <span className="px-3 py-1 rounded-full border" style={{ borderColor: "color-mix(in oklab, var(--color-gold) 30%, transparent)" }}>~20 Yrs Canadian Client Work</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] max-w-5xl mx-auto">
          You earn like you've made it.
          <br />
          <span style={{ color: "var(--color-gold)" }}>Your net worth says you haven't.</span>
        </h1>

        <p className="mt-6 text-base md:text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "var(--color-ink)" }}>
          I'm <strong style={{ color: "var(--color-cream)" }}>Morgan Samuel</strong>, founder of Legaciii Academy and a licensed Canadian financial advisor (LLQP, PCP). Watch my short message below, then book a free, no obligation strategy call with me. I'll show you exactly where your money is leaking and what a plan built for your situation actually looks like. No products. No commission. No cookie cutter advice.
        </p>

        <div className="mt-10 mx-auto max-w-5xl">
          <div
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center group cursor-pointer"
            style={{ background: "var(--gradient-deep)", border: "1px solid color-mix(in oklab, var(--color-gold) 25%, transparent)" }}
          >
            <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 30% 40%, var(--color-gold) 0%, transparent 60%)" }} />
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center transition-transform group-hover:scale-110" style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}>
                <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8 ml-1"><path d="M8 5v14l11-7z" /></svg>
              </div>
              <p className="mt-4 text-white/80 text-sm">A message from Morgan · 6 min</p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <CTAButton />
          <TrustStrip />
        </div>
      </div>
    </section>
  );
}

/* ---------- 2. THE TRAP ---------- */
function Trap() {
  return (
    <section className="section">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-5xl font-bold text-center leading-tight">
          On paper, you're the success story.
          <br />
          So why does it feel like you're losing ground every month?
        </h2>

        <div className="mt-10 space-y-5 text-lg leading-relaxed" style={{ color: "var(--color-ink)" }}>
          <p>You crossed six figures. Maybe well past it. The income is real. But the money comes in and disappears, and you couldn't tell anyone exactly where it went.</p>
          <p>Real estate still feels out of reach, even at $150K+. The tax bill feels like a ceiling you can't get over. And underneath all of it is a thought you don't say out loud:</p>
          <p className="text-2xl md:text-3xl font-semibold italic border-l-4 pl-6 my-8" style={{ borderColor: "var(--color-gold)", color: "var(--color-cream)" }}>
            "I make good money. I should be further ahead than this."
          </p>
        </div>

        <blockquote
          className="my-14 p-8 md:p-12 rounded-2xl text-center"
          style={{ background: "var(--gradient-deep)", border: "1px solid color-mix(in oklab, var(--color-gold) 22%, transparent)" }}
        >
          <p className="text-2xl md:text-4xl font-semibold leading-snug" style={{ color: "var(--color-cream)" }}>
            It was never an income problem.
          </p>
          <p className="mt-4 text-lg md:text-xl leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
            The discipline that worked when you had nothing quietly stopped working the moment your income climbed, and no one ever replaced it with a system.
          </p>
        </blockquote>

        <div className="space-y-5 text-lg leading-relaxed" style={{ color: "var(--color-ink)" }}>
          <p>The playbook you were handed (max the RRSP, buy the mutual fund, "talk to your guy at the bank") was built to <strong style={{ color: "var(--color-cream)" }}>park</strong> your money, not grow it.</p>
          <p>You're not behind because you're careless. You're behind because no one with an actual incentive ever sat down and showed someone in your situation what to do next.</p>
          <p className="font-semibold" style={{ color: "var(--color-cream)" }}>That's the entire reason I do these calls.</p>
        </div>
      </div>
    </section>
  );
}

/* ---------- 3. MEET MORGAN ---------- */
function MeetMorgan() {
  return (
    <section className="section" style={{ background: "color-mix(in oklab, var(--color-navy) 50%, var(--color-deep))" }}>
      <div className="container-wide">
        <div className="grid md:grid-cols-[5fr_7fr] gap-12 items-start">
          <div className="md:sticky md:top-24">
            <div
              className="aspect-[4/5] rounded-2xl overflow-hidden flex items-end justify-center relative"
              style={{ background: "var(--gradient-deep)", boxShadow: "var(--shadow-card)", border: "1px solid color-mix(in oklab, var(--color-gold) 22%, transparent)" }}
            >
              <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at 50% 30%, var(--color-gold) 0%, transparent 65%)" }} />
              <div className="relative z-10 text-center pb-10 px-6">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-bold" style={{ background: "var(--gradient-gold)", color: "var(--color-deep)" }}>
                  MS
                </div>
                <p className="text-white/70 text-xs uppercase tracking-widest">Photo of Morgan</p>
              </div>
            </div>
          </div>

          <div>
            <span className="eyebrow">My Story</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
              Hi, I'm Morgan.
            </h2>
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium">
              <span className="px-3 py-1 rounded-full" style={{ background: "color-mix(in oklab, var(--color-gold) 18%, transparent)", color: "var(--color-cream)", border: "1px solid color-mix(in oklab, var(--color-gold) 35%, transparent)" }}>LLQP</span>
              <span className="px-3 py-1 rounded-full" style={{ background: "color-mix(in oklab, var(--color-gold) 18%, transparent)", color: "var(--color-cream)", border: "1px solid color-mix(in oklab, var(--color-gold) 35%, transparent)" }}>PCP</span>
              <span className="px-3 py-1 rounded-full" style={{ background: "color-mix(in oklab, var(--color-gold) 18%, transparent)", color: "var(--color-cream)", border: "1px solid color-mix(in oklab, var(--color-gold) 35%, transparent)" }}>Accounting Degree</span>
            </div>
            <p className="mt-3 text-sm" style={{ color: "var(--color-ink-soft)" }}>Founder of Legaciii Academy. Not a guru, not a YouTuber, not a salesman.</p>

            <div className="mt-8 space-y-5 text-base md:text-lg leading-relaxed" style={{ color: "var(--color-ink)" }}>
              <p>I've spent nearly two decades across banking, payroll, corporate accounting, insurance, and investments, on both sides of the Canada/US border, sitting across from hundreds of real Canadians solving real money problems.</p>
              <p>I didn't start ahead. Years ago, earning well above average, I was still burning through thousands a month with no system and no idea where it went. Then a property came up at fire sale pricing (the kind of opportunity that doesn't come twice) and I couldn't take it. I didn't have the cash. <em>At my income, I should have.</em></p>
              <p>That was the day I decided to learn the system from the inside out.</p>
              <p>Everything I do now, including Legaciii Academy, came out of that.</p>
            </div>

            <blockquote
              className="my-10 p-8 rounded-2xl relative panel"
              style={{ borderLeft: "4px solid var(--color-gold)" }}
            >
              <span className="absolute -top-4 -left-2 text-7xl leading-none font-serif" style={{ color: "var(--color-gold)" }}>"</span>
              <p className="text-lg md:text-xl leading-relaxed relative" style={{ color: "var(--color-cream)" }}>
                Most advisors aren't creative. They run the same RRSP and mutual fund playbook on everyone and call it a plan. But a 35 year old family in Toronto and a 28 year old founder in Calgary don't have the same situation, so why would they get the same advice? Sometimes the right move is reducing your income, not raising it. Sometimes the right insurance isn't insurance at all. <strong>I don't do cookie cutter. I do custom.</strong>
              </p>
            </blockquote>

            <div
              className="p-5 rounded-xl text-sm md:text-base flex items-start gap-3"
              style={{ background: "color-mix(in oklab, var(--color-gold) 12%, transparent)", border: "1px solid color-mix(in oklab, var(--color-gold) 30%, transparent)" }}
            >
              <span className="text-2xl">🛡️</span>
              <p style={{ color: "var(--color-cream)" }}>
                <strong>I'm not paid to sell you a mutual fund, an insurance policy, or anything else.</strong> There is no commission. On our call, my only job is to tell you the truth about your situation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 4. WHAT YOU WALK AWAY WITH ---------- */
function WalkAway() {
  const outcomes = [
    {
      icon: "💸",
      h: "The truth about where your money is going.",
      d: "Not a budget app. A real picture of which dollars are building your future and which are quietly disappearing, and why.",
    },
    {
      icon: "🧾",
      h: "At least one tax move that fits your situation.",
      d: "Specific to your bracket, your income type, your spouse, and a rough sense of what it could put back in your pocket this year alone.",
    },
    {
      icon: "📈",
      h: "A real read on your credit.",
      d: "Whether it's working for you or quietly costing you, and what it would take to unlock the borrowing power you're already sitting on.",
    },
    {
      icon: "🛡️",
      h: "The blind spots no one's flagged for you yet.",
      d: "Where you're exposed, what's missing, and what would actually protect you and your family if something went sideways tomorrow.",
    },
    {
      icon: "🗺️",
      h: "The first sketch of a plan built for you.",
      d: "Not a template. Not what worked for the last person. A direction grounded in your actual numbers, and the clear next step to take this week.",
    },
  ];

  return (
    <section className="section">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">What you walk away with</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
            In 30 minutes, you'll have answers to questions you've been carrying for years.
          </h2>
          <p className="mt-5 text-lg" style={{ color: "var(--color-ink)" }}>
            Here's what you walk away with, whether or not we ever speak again.
          </p>
        </div>

        <div className="mt-14 max-w-[640px] mx-auto space-y-4">
          {outcomes.map((o, i) => (
            <div key={i} className="panel p-6 md:p-7 flex gap-4 items-start">
              <div className="shrink-0 w-11 h-11 rounded-lg flex items-center justify-center text-xl" style={{ background: "color-mix(in oklab, var(--color-gold) 18%, transparent)", border: "1px solid color-mix(in oklab, var(--color-gold) 35%, transparent)" }}>
                <span aria-hidden>{o.icon}</span>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold leading-snug" style={{ color: "var(--color-cream)" }}>{o.h}</h3>
                <p className="mt-2 leading-relaxed" style={{ color: "var(--color-ink)" }}>{o.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CTAButton />
          <TrustStrip />
        </div>
      </div>
    </section>
  );
}

/* ---------- 5. WHY MORGAN ---------- */
function WhyMorgan() {
  const rows = [
    {
      tried: "The bank advisor. Sells products on commission, reads from a script, and is gone at the next branch reshuffle.",
      morgan: "A straight answer. Even when the straight answer is \"you don't actually need me right now.\" Nothing dressed up to sell you something.",
    },
    {
      tried: "Reddit + index funds. Decent information, zero personalization, and no one to tell you what you specifically are missing.",
      morgan: "Specifics built around your situation. Your tax bracket, your spouse, your goals, your blind spots, not a subreddit's \"general advice for the average person.\"",
    },
    {
      tried: "The \"money coach.\" An unregulated title in Canada, often a front end for an insurance or mortgage upsell.",
      morgan: "Direction you can use this week. Not a 90 minute pitch ending in a product you didn't ask about.",
    },
    {
      tried: "The $4K to $10K flat fee plan. One document, then silence, with no one in your corner when it's time to actually execute.",
      morgan: "A real conversation. Your questions answered out loud, in plain English. Nothing you'll have to re read and decode later.",
    },
  ];

  return (
    <section className="section" style={{ background: "color-mix(in oklab, var(--color-navy) 60%, var(--color-deep))" }}>
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">The contrast</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold" style={{ color: "var(--color-cream)" }}>
            You've probably tried some version of this before.
          </h2>
          <p className="mt-4 text-lg" style={{ color: "var(--color-ink-soft)" }}>Here's why it didn't move the needle.</p>
        </div>

        <div className="mt-14 space-y-4">
          <div className="hidden md:grid md:grid-cols-2 gap-4 px-2 text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--color-ink-soft)" }}>
            <div>What you've tried</div>
            <div style={{ color: "var(--color-gold)" }}>With me</div>
          </div>
          {rows.map((r, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-4">
              <div className="p-6 rounded-xl text-base leading-relaxed" style={{ background: "color-mix(in oklab, var(--color-deep) 70%, black)", color: "var(--color-ink-soft)", border: "1px solid color-mix(in oklab, white 8%, transparent)" }}>
                <div className="md:hidden text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: "var(--color-ink-soft)" }}>What you've tried</div>
                {r.tried}
              </div>
              <div
                className="p-6 rounded-xl text-base leading-relaxed font-medium relative"
                style={{ background: "var(--gradient-gold)", color: "oklch(0.18 0.02 200)" }}
              >
                <div className="md:hidden text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: "oklch(0.18 0.02 200 / 0.7)" }}>With me</div>
                {r.morgan}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CTAButton />
          <TrustStrip />
        </div>
      </div>
    </section>
  );
}

/* ---------- 6. PROOF ---------- */
function Proof() {
  const cards = [
    "One client I worked with raised their credit score by roughly 100 points in about a month, enough to change what they qualified for.",
    "Another grew their savings by about half in six weeks, mostly by finally seeing where the money was going.",
    "Another cut their taxable income through income splitting and kept roughly $5,000 that was headed to the CRA.",
    "Another set up a structure that quietly becomes a tax advantaged head start for their kids.",
  ];
  return (
    <section className="section">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Real client work</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">I've been doing this long before it had a name.</h2>
          <p className="mt-4 text-lg" style={{ color: "var(--color-ink)" }}>These came from real client work, years before any program existed.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {cards.map((c, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl panel relative"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold" style={{ background: "var(--gradient-gold)", color: "var(--color-deep)" }}>
                ✓
              </div>
              <p className="leading-relaxed" style={{ color: "var(--color-ink)" }}>{c}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm max-w-xl mx-auto italic" style={{ color: "var(--color-ink-soft)" }}>
          No hype. No "get rich quick." Just the kind of moves I make once I actually sit down with someone's numbers.
        </p>
      </div>
    </section>
  );
}

/* ---------- 7. IS THIS FOR YOU ---------- */
function IsThisForYou() {
  const yes = [
    "You're a high earning Canadian (roughly $120K+ household).",
    "You earn well but know your wealth doesn't reflect it.",
    "You're done with cookie cutter advice and product pitches.",
    "You're ready to actually do the work, not just collect more information.",
  ];
  const no = [
    "You're looking for a get rich quick scheme.",
    "You want someone to do it all for you while you stay hands off.",
    "You're not in a position to act on what you'd find.",
    "You're convinced the only answer is \"more income.\"",
  ];

  return (
    <section className="section" style={{ background: "color-mix(in oklab, var(--color-navy) 50%, var(--color-deep))" }}>
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">The filter</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">This call isn't for everyone.</h2>
          <p className="mt-4 text-lg" style={{ color: "var(--color-ink)" }}>I only take a handful a week. Here's who they're for.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl panel" style={{ borderColor: "var(--color-gold)", boxShadow: "var(--shadow-card)" }}>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ color: "var(--color-gold)" }}>
              <span className="inline-flex w-8 h-8 rounded-full items-center justify-center text-sm" style={{ background: "var(--gradient-gold)", color: "var(--color-deep)" }}>✓</span>
              This is for you if
            </h3>
            <ul className="space-y-4">
              {yes.map((t, i) => (
                <li key={i} className="flex gap-3 leading-relaxed" style={{ color: "var(--color-ink)" }}>
                  <span style={{ color: "var(--color-gold)" }} className="font-bold mt-0.5">✓</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 rounded-2xl panel" style={{ borderColor: "color-mix(in oklab, white 15%, transparent)", boxShadow: "var(--shadow-card)" }}>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ color: "var(--color-ink-soft)" }}>
              <span className="inline-flex w-8 h-8 rounded-full items-center justify-center text-sm" style={{ background: "color-mix(in oklab, white 15%, transparent)", color: "var(--color-cream)" }}>✕</span>
              This isn't for you if
            </h3>
            <ul className="space-y-4">
              {no.map((t, i) => (
                <li key={i} className="flex gap-3 leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
                  <span className="font-bold mt-0.5">✕</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <CTAButton />
          <TrustStrip />
        </div>
      </div>
    </section>
  );
}

/* ---------- 8. FINAL CTA ---------- */
function FinalCTA() {
  return (
    <section id="apply" className="section" style={{ background: "var(--gradient-deep)" }}>
      <div className="container-narrow text-center">
        <span className="eyebrow">The cost of inaction</span>
        <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-tight" style={{ color: "var(--color-cream)" }}>
          Every month without a system is a month you don't get back.
        </h2>
        <p className="mt-8 text-lg md:text-xl leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
          The tax you didn't plan for is already gone. The borrowing power you never built cost you the deal. The income that got absorbed this month compounds into nothing.
        </p>
        <p className="mt-4 text-lg md:text-xl leading-relaxed" style={{ color: "var(--color-cream)" }}>
          You can keep earning well and hoping it sorts itself out, <strong>or</strong> you can spend 30 minutes with me and find out exactly where you stand.
        </p>

        <p className="mt-10 text-sm uppercase tracking-widest" style={{ color: "var(--color-gold)" }}>
          I'm taking a limited number of calls this week.
        </p>

        <div className="mt-6">
          <CTAButton />
          <p className="trust-strip">
            Free · ~30 minutes · No products, no commission · Limited spots each week
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- 9. FAQ ---------- */
function FAQ() {
  const items = [
    { q: "Is the call really free?", a: "Yes. No card, no catch. I'd rather start by being useful." },
    { q: "Are you going to try to sell me something?", a: "It's a strategy session, not a pitch. I'll give you real direction first. If there's a clear way I can help you further, I'll say so, and you decide. No pressure either way." },
    { q: "Are you actually licensed?", a: "Yes. LLQP and PCP, plus an accounting degree and nearly 20 years of real client work. Not a coach with a title I gave myself." },
    { q: "Do I need a certain income?", a: "These calls are built for high earners (roughly $120K+ household). The short application makes sure it's a fit before either of us spends time." },
    { q: "What happens after I apply?", a: "If you qualify, you'll pick a time on my calendar right away. If not, you'll know quickly." },
  ];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section">
      <div className="container-narrow">
        <div className="text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">A few honest answers</h2>
        </div>

        <div className="mt-12 space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="rounded-xl panel overflow-hidden" style={{ boxShadow: isOpen ? "var(--shadow-card)" : "none" }}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 hover:bg-white/[0.03] transition"
                >
                  <span className="font-semibold text-base md:text-lg" style={{ color: "var(--color-cream)" }}>{it.q}</span>
                  <span className={`text-2xl transition-transform ${isOpen ? "rotate-45" : ""}`} style={{ color: "var(--color-gold)" }}>+</span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 leading-relaxed" style={{ color: "var(--color-ink)" }}>{it.a}</div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg mb-4 font-medium" style={{ color: "var(--color-cream)" }}>Ready?</p>
          <CTAButton />
          <TrustStrip />
        </div>
      </div>
    </section>
  );
}
