import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import logo from "../../LP images/leagciii-logo.webp";
import morganMain from "../../LP images/Morgan-main.JPG";

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

function CTAButton({ label = "See If You Qualify" }: { label?: string }) {
  return (
    <Link to="/apply" className="btn-primary">
      {label} <span aria-hidden className="ml-2">→</span>
    </Link>
  );
}

function TrustStrip() {
  return (
    <p className="trust-strip">
      30 minutes · 5 spots per week only
    </p>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (height > 0) {
        setProgress((scrolled / height) * 100);
      }
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div 
      className="absolute bottom-0 left-0 h-1 transition-all duration-150 ease-out" 
      style={{ 
        width: `${progress}%`, 
        background: "var(--gradient-gold)",
        boxShadow: "0 0 10px var(--color-gold)"
      }} 
    />
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md" style={{ background: "color-mix(in oklab, var(--color-deep) 75%, transparent)", borderBottom: "1px solid color-mix(in oklab, var(--color-gold) 18%, transparent)" }}>
      <div className="container-wide flex items-center justify-between px-5 py-2.5">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Legaciii" className="h-14 w-auto" />
        </a>
        <Link to="/apply" className="btn-primary" style={{ padding: "0.55rem 1.1rem", fontSize: "0.85rem" }}>
          See if you qualify
        </Link>
      </div>
      <ScrollProgress />
    </header>
  );
}

function Landing() {
  useEffect(() => {
    // Force scroll to top on mount (covers refresh)
    window.scrollTo(0, 0);
    // Also prevent browser from restoring scroll position if possible
    if ('scrollRestoration' in history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <main id="top" className="text-foreground" style={{ backgroundColor: "#000421" }}>
      <Header />
      <Hero />
      <ResultsPanel />
      <Trap />
      <MeetMorgan />
      <LegaciiiChallenge />
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
function AnimatedCounter({ 
  value, 
  prefix = "", 
  suffix = "", 
  duration = 2000, 
  decimals = 0 
}: { 
  value: number; 
  prefix?: string; 
  suffix?: string; 
  duration?: number;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const endValue = value;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // easeOutExpo
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(endValue * easeOut);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value, duration]);

  const formattedCount = decimals > 0 
    ? count.toFixed(decimals) 
    : Math.floor(count).toLocaleString();

  return (
    <div ref={ref} className="inline-block">
      {prefix}{formattedCount}{suffix}
    </div>
  );
}

function ResultsPanel() {
  const stats = [
    { label: "Average Net Worth Increase", value: 32, suffix: "%" },
    { label: "Families Transformed", value: 738, suffix: "+" },
    { label: "Tax Savings", value: 5239800, prefix: "$", suffix: "+" },
  ];

  return (
    <div className="container-wide px-5 mt-8 relative z-20">
      <div 
        className="flex flex-col items-center p-8 md:p-12 rounded-3xl"
        style={{ 
          background: "color-mix(in oklab, var(--color-navy) 80%, black)",
          border: "1px solid color-mix(in oklab, var(--color-gold) 20%, transparent)",
          boxShadow: "0 20px 50px -15px rgba(0,0,0,0.5)"
        }}
      >
        <span className="eyebrow mb-8 text-center" style={{ color: "var(--color-cream)" }}>The numbers behind the system</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {stats.map((s, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold" style={{ color: "var(--color-gold)" }}>
                <AnimatedCounter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="text-sm uppercase tracking-widest font-medium" style={{ color: "var(--color-ink-soft)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="section pt-14 md:pt-20 pb-16 relative overflow-hidden">
      {/* Shine Effect Gradient from Top */}
      <div 
        className="absolute top-0 left-0 right-0 pointer-events-none" 
        style={{ 
          background: "radial-gradient(circle at 50% 0%, #002222 0%, transparent 80%)",
          height: "600px",
          zIndex: 0
        }} 
      />
      
      <div className="container-wide text-center relative z-10">
        <span className="eyebrow mb-6">Licensed advisor. 20 years. Hundreds of Canadians to real wealth.</span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] max-w-5xl mx-auto">
          You earn like you've made it.
          <br />
          <span style={{ color: "var(--color-gold)" }}>Your net worth says you haven't.</span>
        </h1>

        <p className="mt-8 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
          In 5 minutes, you are about to learn the real reason your income never turns into wealth, and a system that finally changes that.
        </p>

        <div className="mt-10 mx-auto max-w-5xl">
          <div
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center group cursor-pointer"
            style={{ background: "var(--gradient-deep)", border: "1px solid color-mix(in oklab, var(--color-gold) 25%, transparent)" }}
          >
            <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 30% 40%, var(--color-gold) 0%, transparent 60%)" }} />
          </div>
        </div>

        <div className="mt-12">
          <p className="mb-6 text-sm uppercase tracking-widest font-semibold" style={{ color: "var(--color-gold)" }}>
            I'm taking a limited number of calls this week.
          </p>
          <Link to="/apply" className="btn-primary text-lg px-10 py-5">
            See If You Qualify <span aria-hidden className="ml-2">→</span>
          </Link>
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
        </blockquote>

        <div className="space-y-5 text-lg leading-relaxed" style={{ color: "var(--color-ink)" }}>
          <p>More income just handed you more to lose track of. Not because you're careless, but because no one ever built you a system to turn it into wealth. That gap is the only thing standing between your income and your net worth.</p>
        </div>
      </div>
    </section>
  );
}

/* ---------- 3. MEET MORGAN ---------- */
function MeetMorgan() {
  return (
    <section className="section" style={{ background: "color-mix(in oklab, var(--color-navy) 50%, var(--color-deep))" }}>
      <div className="container-wide px-5">
        <div className="grid md:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-start">
          <div className="md:sticky md:top-24">
            <div
              className="aspect-[4/5] rounded-2xl overflow-hidden relative"
              style={{ boxShadow: "var(--shadow-card)", border: "1px solid color-mix(in oklab, var(--color-gold) 22%, transparent)" }}
            >
              <img 
                src={morganMain} 
                alt="Morgan Samuel" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <span className="eyebrow">Why listen to me</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
              I'm not an internet personality with a theory.
            </h2>
            <p className="mt-3 text-sm font-medium" style={{ color: "var(--color-ink-soft)" }}>
              Morgan Samuel · Founder of Legaciii Academy · Licensed advisor (LLQP, PCP)
            </p>

            <div className="mt-12 pt-8 border-t border-gold/10 text-lg leading-relaxed text-ink-soft space-y-6">
              <p>
                I'm a licensed Canadian financial advisor, and for nearly twenty years I've sat across from hundreds of high earners in the exact spot you're in now: a great income, and not enough to show for it.
              </p>
              <p>
                Everything inside the Legaciii Challenge is the work I've already done with real Canadians and real money, organized into a system you can follow one month at a time. It's built for the Canadian tax code and the way Canadian families actually live, not a generic playbook borrowed from somewhere else.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gold/10">
              <p className="text-2xl md:text-3xl font-semibold leading-tight text-gold italic">
                I've never met a high earner who couldn't build real wealth. Only ones who were never handed the system to do it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 4. THE LEGACIII CHALLENGE ---------- */
function LegaciiiChallenge() {
  const steps = [
    {
      h: "01 — Find where it's leaking.",
      d: "We start with why your money disappears and give every dollar a job. Inside the first month, you finally see where every dollar goes.",
    },
    {
      h: "02 — Make your credit work for you.",
      d: "We turn your credit from something quietly costing you into real borrowing power you can use.",
    },
    {
      h: "03 — Protect what you've built.",
      d: "We put protection in place so one bad event can't wipe out everything you've worked for.",
    },
    {
      h: "04 — Stop overpaying the CRA.",
      d: "We go after the tax bill that's been bleeding you for years, with strategies built for the Canadian tax code.",
    },
    {
      h: "05 — Build wealth that outlasts you.",
      d: "We put your money into real investments, with a roadmap that keeps growing after you and passes to your kids.",
    },
  ];

  return (
    <section className="section">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto">
          <span className="eyebrow">The system</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
            The Legaciii Challenge: the system that turns income into wealth.
          </h2>
          <p className="mt-5 text-lg md:text-xl" style={{ color: "var(--color-ink)" }}>
            It's not theory, and it's not another course. It's the exact path that already worked for hundreds of Canadians, laid out step by step, built around the Canadian tax code. One month at a time, with a coach beside you the whole way.
          </p>
        </div>

        <div className="mt-16 relative">
          {/* Horizontal line for desktop */}
          <div 
            className="hidden md:block absolute h-[2px]" 
            style={{ 
              top: "24px", 
              left: "10%",
              right: "10%",
              background: "linear-gradient(90deg, color-mix(in oklab, var(--color-gold) 10%, transparent) 0%, var(--color-gold) 50%, color-mix(in oklab, var(--color-gold) 10%, transparent) 100%)",
              opacity: 0.4
            }} 
          />

          {/* Vertical line for mobile */}
          <div 
            className="md:hidden absolute left-6 top-6 bottom-6 w-[2px]" 
            style={{ 
              background: "linear-gradient(180deg, color-mix(in oklab, var(--color-gold) 10%, transparent) 0%, var(--color-gold) 50%, color-mix(in oklab, var(--color-gold) 10%, transparent) 100%)",
              opacity: 0.4
            }} 
          />

          {/* Items container */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-0 md:h-full">
                {/* Step indicator */}
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0 md:mb-6 shadow-md transition-transform hover:scale-110"
                  style={{ 
                    background: "var(--gradient-gold)", 
                    color: "oklch(0.18 0.02 200)",
                    border: "2px solid color-mix(in oklab, var(--color-gold) 50%, white)",
                    boxShadow: "var(--shadow-gold)"
                  }}
                >
                  {i + 1}
                </div>

                {/* Card */}
                <div className="panel p-6 flex flex-col flex-1 w-full h-full relative transition-transform hover:scale-[1.02] duration-300">
                  <div className="mb-4">
                    <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "var(--color-gold)" }}>
                      Step 0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold leading-snug mb-3" style={{ color: "var(--color-cream)" }}>
                    {s.h.replace(/^\d{2} — /, '')}
                  </h3>
                  <p className="leading-relaxed text-sm" style={{ color: "var(--color-ink-soft)" }}>
                    {s.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-lg md:text-xl italic mb-10" style={{ color: "var(--color-cream)" }}>
            Other programs hand you a folder and wish you luck. Here, a coach makes sure every step actually gets done, every week, until it's finished.
          </p>
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
      tried: "Your bank's advisor. Sold you funds, earned a commission, and rotated out before you learned their name.",
      morgan: "Straight answers, with nothing waiting to be sold to you at the end.",
    },
    {
      tried: "Figuring it out yourself. A hundred open tabs, conflicting advice, and the constant feeling you're still missing something.",
      morgan: "A plan built around your life, not a stranger's average.",
    },
    {
      tried: "A \"money coach.\" A slick course and a made-up title that turned into a sales pitch the moment you trusted it.",
      morgan: "You always know exactly what you're doing and why. No hidden agenda.",
    },
    {
      tried: "A one-time financial plan. A thick PDF, a big invoice, and silence the second you actually needed help.",
      morgan: "A coach in your corner every week, until it's actually done.",
    },
  ];

  return (
    <section className="section" style={{ background: "color-mix(in oklab, var(--color-navy) 60%, var(--color-deep))" }}>
      <div className="container-wide max-w-4xl">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">The difference</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold" style={{ color: "var(--color-cream)" }}>
            You've probably tried some version of this before.
          </h2>
          <p className="mt-4 text-lg" style={{ color: "var(--color-ink-soft)" }}>
            Here's why none of it worked. You were never short on information, it's everywhere, for free. You were short on a system, and someone to make sure you used it.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          <div className="hidden md:grid md:grid-cols-2 gap-4 px-2 text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--color-ink-soft)" }}>
            <div>What you've tried</div>
            <div style={{ color: "var(--color-gold)" }}>With the Legaciii Challenge</div>
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
  const testimonials = [
    {
      text: "I raised my credit score about 100 points in a month. Enough to finally qualify for the place we wanted.",
      author: "Sarah J., Ontario",
    },
    {
      text: "I grew my savings by half in six weeks, just from finally seeing where my money was actually going.",
      author: "Mark D., BC",
    },
    {
      text: "I kept about $5,000 that was headed straight to the CRA, just by splitting our income the right way.",
      author: "Eleanor R., Alberta",
    },
    {
      text: "I set up a structure that's quietly building a tax-free head start for my kids.",
      author: "David K., Ontario",
    },
  ];

  return (
    <section className="section">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Real client work</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">This is what happens when someone finally has a system.</h2>
          <p className="mt-4 text-lg" style={{ color: "var(--color-ink)" }}>Real Canadians. Real numbers. Years before any of this was a program.</p>
        </div>

        <div className="mt-16 flex flex-col gap-10 max-w-4xl mx-auto">
          {testimonials.map((t, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={i}
                className={`w-full md:max-w-[85%] p-8 md:p-10 pt-12 relative flex flex-col justify-between transition-all hover:scale-[1.01] duration-300 ${
                  isEven ? "md:self-start md:ml-4" : "md:self-end md:mr-4"
                }`}
                style={{ 
                  borderRadius: "32px 0 32px 0", 
                  border: "2px solid color-mix(in oklab, var(--color-gold) 45%, transparent)", 
                  boxShadow: "0 0 25px rgba(212, 175, 55, 0.12)", 
                  background: "color-mix(in oklab, var(--color-panel) 92%, black)" 
                }}
              >
                {/* Glowing Quote mark */}
                <div 
                  className="absolute -top-5 left-10 px-2 text-5xl font-serif select-none" 
                  style={{ 
                    color: "var(--color-gold)", 
                    backgroundColor: "var(--background)",
                    lineHeight: 1
                  }}
                >
                  “
                </div>

                <p className="text-lg md:text-xl leading-relaxed text-cream font-medium">
                  {t.text}
                </p>

                <p className="mt-6 text-right text-sm italic font-medium" style={{ color: "var(--color-gold)" }}>
                  — {t.author}
                </p>
              </div>
            );
          })}
        </div>

        <p className="mt-12 text-center text-sm max-w-xl mx-auto italic" style={{ color: "var(--color-ink-soft)" }}>
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
          <span className="eyebrow">BEFORE YOU BOOK</span>
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
    <section className="section" style={{ background: "var(--gradient-deep)" }}>
      <div className="container-narrow text-center">
        <span className="eyebrow">The cost of inaction</span>
        <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-tight" style={{ color: "var(--color-cream)" }}>
          Every month without a system is a month you don't get back.
        </h2>
        <p className="mt-8 text-lg md:text-xl leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
          The tax you didn't plan for is already gone. The borrowing power you never built cost you the deal. The income that got absorbed this month compounds into nothing.
        </p>
        <p className="mt-4 text-lg md:text-xl leading-relaxed" style={{ color: "var(--color-cream)" }}>
          Book a free strategy session. We'll pinpoint where your money's leaking and whether the Challenge is the right fit for you. If it is, you'll see exactly what working together looks like. If it isn't, you'll walk away with direction anyway.
        </p>

        <p className="mt-10 text-sm uppercase tracking-widest font-semibold" style={{ color: "var(--color-gold)" }}>
          We only take five of these a week, because the work is hands-on.
        </p>

        <div className="mt-6">
          <CTAButton />
          <p className="trust-strip">
            30 minutes · 5 spots per week only
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- 9. FAQ ---------- */
function FAQ() {
  const items = [
    { 
      q: "Why is this free? What's the catch?", 
      a: "No catch. The fastest way to show you I'm different from everyone who's let you down is to be useful first. On the call we find where your money's leaking and decide together if the Legaciii Challenge fits. Some people move forward. Most don't, and that's fine. You walk away with real direction either way." 
    },
    { 
      q: "Is the Legaciii Challenge a paid program?", 
      a: "The strategy session is completely free. The Legaciii Challenge itself is a paid program, but we only get into what that looks like if we both agree it's the right fit. No pressure, no surprise pitch." 
    },
    { 
      q: "I've already read all the advice and tried a few things. What's different here?", 
      a: "The problem was never information. It's that nobody's looked at your actual numbers, built you a system that fits your income, your taxes, and your goals, then made sure you actually used it. Free advice is written for the average person. You're not average." 
    },
    { 
      q: "I don't have much free time. How much work is this?", 
      a: "It's hands-on, but built for busy people. One focused piece each month, and a coach who keeps you moving every week so it never stalls in your inbox like everything else has." 
    },
    { 
      q: "How do I know this isn't another program that overpromises?", 
      a: "Because I'm not promising you anything on the call except 30 honest minutes. I've done this for real Canadians for 20 years, with my license on the line, not sold a dream. Get on, see if what I tell you is worth something, and decide for yourself." 
    },
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
