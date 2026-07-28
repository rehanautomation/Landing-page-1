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

    // Dynamically load the form embed script
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center py-8 md:py-12 px-4 sm:px-5" style={{ backgroundColor: "#000421" }}>
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
      <div className="mb-8 md:mb-12 relative z-10">
        <img src={logo} alt="Legaciii" className="h-12 sm:h-14 md:h-16 w-auto" />
      </div>

      {/* Heading Section */}
      <div className="text-center max-w-3xl mb-10 md:mb-12 relative z-10">
        <h1 className="text-[2rem] sm:text-4xl md:text-5xl font-bold mb-5 md:mb-6 text-balance">Let's see if this is a fit.</h1>
        <p className="text-base sm:text-lg leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
          These calls are limited each week, and they're reserved for people ready to act, not to collect more information they'll never use. The four questions below tell us whether you're a fit and where we can actually move the needle. Answer honestly, and we'll see you on the call.
        </p>
      </div>

      {/* Form Section Wrapper with Background Gradient */}
      <div className="relative w-full max-w-4xl mb-14 md:mb-20 z-10">
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{ 
            background: "radial-gradient(circle at 50% 50%, #002222 0%, transparent 80%)",
            transform: "scale(1.3)",
            zIndex: 0
          }} 
        />
        {/* Form Section Container */}
        <div 
          className="w-full rounded-2xl p-3 sm:p-4 md:p-10 border relative z-10"
          style={{
            background: "rgba(255, 255, 255, 0.02)",
            borderColor: "rgba(233, 162, 59, 0.15)",
            boxShadow: "0 0 20px rgba(233, 162, 59, 0.12), 0 4px 30px rgba(0, 0, 0, 0.5)",
            height: "auto"
          }}
        >
          <div className="w-full max-w-[550px] mx-auto" style={{ height: "auto" }}>
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/xdhvvKDrGcS6ViY47dab"
              style={{ width: "100%", height: "1350px", border: "none", borderRadius: "8px" }}
              id="inline-xdhvvKDrGcS6ViY47dab" 
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Application Form "
              data-height="906"
              data-layout-iframe-id="inline-xdhvvKDrGcS6ViY47dab"
              data-form-id="xdhvvKDrGcS6ViY47dab"
              title="Application Form "
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-10 text-center text-xs text-muted-foreground border-t mt-auto" style={{ borderColor: "color-mix(in oklab, var(--color-gold) 15%, transparent)" }}>
        © {new Date().getFullYear()} Legaciii · Morgan Samuel, LLQP · PCP
      </footer>
    </main>
  );
}
