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
      { property: "og:description", content: "You earn like you've made it. Your net worth says you haven't. Book a free 15 minute call with Morgan Samuel." },
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
      15 minutes · 5 sessions per week only
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
        <span className="eyebrow mb-6">The system behind hundreds of high earners' wealth</span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] max-w-5xl mx-auto">
          You earn like you've made it. <span style={{ color: "var(--color-gold)" }}>Your net worth says you haven't.</span>
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
                I've spent nearly twenty years in the financial sector, eleven of them as a licensed Canadian advisor, sitting across from hundreds of high earners in the exact spot you're in now: a great income, and not enough to show for it.
              </p>
              <p>
                Everything inside the Legaciii Challenge is the work I've already done with real Canadians and real money, organized into a system you can follow one month at a time. It's built for the Canadian tax code and the way Canadian families actually live, not a generic playbook borrowed from somewhere else.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gold/10">
              <p className="text-2xl md:text-3xl font-semibold leading-tight text-gold italic">
                I've never met a high earner Who couldn't become a millionaire. Only ones who were never handed the system to do it.
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
  const pillars = [
    {
      label: "01 · Structure It",
      title: "Stop the leaks and lock down your foundation.",
      desc: "We find where your money actually goes and give every dollar a job, turn your credit into real borrowing power, and put protection in place so one bad event can't undo years of work. Chaos becomes control.",
    },
    {
      label: "02 · Grow It",
      title: "Turn controlled income into growing wealth.",
      desc: "Now your money goes to work: real investments matched to your situation, a realistic path to the home you want, and a tax strategy that stops the CRA from quietly bleeding your returns every year.",
    },
    {
      label: "03 · Protect It",
      title: "Build wealth that outlasts you.",
      desc: "We turn what you've built into a legacy: retirement income you can count on, an estate that transfers cleanly, and structures that pass real wealth to your kids instead of the tax man.",
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
            It's not theory, and it's not another course. It's the exact path that already worked for hundreds of Canadians: three phases that take you from where your money leaks today to a legacy that outlasts you, all built for the Canadian tax code.
          </p>
        </div>

        <div className="mt-16 relative">
          {/* Connecting line for desktop */}
          <div 
            className="hidden md:block absolute h-[2px]" 
            style={{ 
              top: "24px", 
              left: "16%",
              right: "16%",
              background: "linear-gradient(90deg, color-mix(in oklab, var(--color-gold) 10%, transparent) 0%, var(--color-gold) 50%, color-mix(in oklab, var(--color-gold) 10%, transparent) 100%)",
              opacity: 0.3
            }} 
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {pillars.map((p, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                {/* Pillar indicator */}
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0 mb-8 transition-transform group-hover:scale-110"
                  style={{ 
                    background: "var(--gradient-gold)", 
                    color: "oklch(0.18 0.02 200)",
                    border: "2px solid color-mix(in oklab, var(--color-gold) 50%, white)",
                    boxShadow: "var(--shadow-gold)"
                  }}
                >
                  {i + 1}
                </div>

                {/* Pillar Content */}
                <div className="panel p-8 flex flex-col flex-1 w-full h-full border-t-2 border-t-gold/30">
                  <span className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--color-gold)" }}>
                    {p.label}
                  </span>
                  <h3 className="text-xl font-bold mb-4 leading-snug" style={{ color: "var(--color-cream)" }}>
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Your Support System */}
        <div className="mt-24 space-y-4">
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <span className="eyebrow" style={{ color: "var(--color-gold)" }}>YOUR SUPPORT SYSTEM</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">You don't do any of it alone.</h2>
            <p className="mt-4 text-lg" style={{ color: "#9aa9bd" }}>
              The system is the roadmap. These are the people who get you to the destination.
            </p>
          </div>

          {/* Block 1: Two cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Card A: Coach */}
            <div className="group p-6 md:p-8 rounded-[16px] transition-all duration-200 hover:-translate-y-[3px] border" 
                 style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}>
              <style dangerouslySetInnerHTML={{ __html: `
                .group:hover { border-color: #e9223b !important; }
                /* Using a slightly more vibrant orange for hover to match intent */
                .group:hover { border-color: var(--color-gold) !important; }
              `}} />
              <div className="w-[44px] h-[44px] md:w-[46px] md:h-[46px] rounded-lg flex items-center justify-center mb-6" style={{ background: "rgba(233,162,59,0.12)", color: "#f0ad4e" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19.07 4.93a10 10 0 0 0-14.14 0M15.54 8.46a5 10 0 0 0-7.08 0"/><rect x="2" y="13" width="4" height="7" rx="2"/><rect x="18" y="13" width="4" height="7" rx="2"/><path d="M12 2v2"/><path d="M12 11v3"/><path d="M12 18v3"/></svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">A dedicated coach</h4>
              <p className="text-sm leading-relaxed" style={{ color: "#9aa9bd" }}>
                Your direct line, every week, until the work is done — never figuring it out alone.
              </p>
            </div>

            {/* Card B: Community */}
            <div className="group p-6 md:p-8 rounded-[16px] transition-all duration-200 hover:-translate-y-[3px] border" 
                 style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}>
              <div className="w-[44px] h-[44px] md:w-[46px] md:h-[46px] rounded-lg flex items-center justify-center mb-6" style={{ background: "rgba(233,162,59,0.12)", color: "#f0ad4e" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">A private community</h4>
              <p className="text-sm leading-relaxed" style={{ color: "#9aa9bd" }}>
                A room of peers doing the same work, sharing what's working right now.
              </p>
            </div>
          </div>

          {/* Block 2: Expert Network */}
          <div className="group p-6 md:p-10 rounded-[16px] transition-all duration-200 hover:-translate-y-[3px] border" 
               style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(233,162,59,0.24)" }}>
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
              <div className="w-[44px] h-[44px] md:w-[46px] md:h-[46px] rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(233,162,59,0.12)", color: "#f0ad4e" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">An expert network</h4>
                <p className="text-sm" style={{ color: "#9aa9bd" }}>A full bench of vetted specialists, ready to execute your plan — included.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-[10px]">
              {[
                "Estate Lawyer", "Mortgage Broker", "Tax Specialist", 
                "Insurance Expert", "Licensed Trustee", "Real Estate Expert"
              ].map((role) => (
                <div key={role} className="flex items-center gap-3 px-[13px] py-[11px] rounded-[9px] border" 
                     style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.07)" }}>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#e9a23b" }} />
                  <span className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-white/90">{role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Block 3: Testimonial Bar */}
          <div className="p-6 md:p-8 rounded-[16px] border flex flex-col md:flex-row items-center gap-6" 
               style={{ background: "rgba(233,162,59,0.06)", borderColor: "rgba(233,162,59,0.22)" }}>
            <div className="shrink-0 text-gold opacity-40">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.01697 21L2.01697 18C2.01697 16.8954 2.9124 16 4.01697 16H7.01697C7.56925 16 8.01697 15.5523 8.01697 15V9C8.01697 8.44772 7.56925 8 7.01697 8H4.01697C3.46468 8 3.01697 8.44772 3.01697 9V12C3.01697 12.5523 2.56925 13 2.01697 13H0.0169678V5H10.017V15C10.017 18.3137 7.33066 21 4.01697 21H2.01697Z"/></svg>
            </div>
            <p className="text-lg italic leading-relaxed text-cream flex-1 text-center md:text-left">
              "The network alone saved me months of vetting. It's like having a family office for the first time."
            </p>
            <p className="text-sm font-bold uppercase tracking-widest text-gold shrink-0 md:ml-auto">
              — Verified Client
            </p>
          </div>
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-lg md:text-xl italic mb-10" style={{ color: "var(--color-cream)" }}>
            Most programs hand you a folder and wish you luck. This one surrounds you with the people who make sure it gets done.
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
      morgan: "A coach in your corner every month, until it's actually done.",
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
            Here's why none of it worked. You were never short on information, it's everywhere, for free. You were short on a system, and someone to insure you use it.
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
          No hype. No "get rich quick."
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
          <p className="mt-4 text-lg" style={{ color: "var(--color-ink)" }}>We only take a handful a week. Here's who they're for.</p>
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
          Book a discovery session. We'll pinpoint where your money's leaking and whether the Challenge is the right fit for you. If it is, you'll see exactly what working together looks like. If it isn't, you'll walk away with direction anyway.
        </p>

        <p className="mt-10 text-sm uppercase tracking-widest font-semibold" style={{ color: "var(--color-gold)" }}>
          We only take five of these a week, because the work is hands-on.
        </p>

        <div className="mt-6">
          <CTAButton />
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
      a: "Because I'm not promising you anything on the call except 15 honest minutes. I've done this for real Canadians for 20 years, with my license on the line, not sold a dream. Get on, see if what I tell you is worth something, and decide for yourself." 
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
