import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import logo from "../../LP images/leagciii-logo.webp";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book Your Call · Legaciii" },
      { name: "description", content: "Schedule your strategy call with Morgan Samuel." },
    ],
  }),
  component: BookingPage,
});

function BookingPage() {
  useEffect(() => {
    // Force scroll to top on mount
    window.scrollTo(0, 0);
    if ('scrollRestoration' in history) {
      window.history.scrollRestoration = 'manual';
    }

    // Dynamically load the form/booking embed script
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
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

      {/* Calendar Section Wrapper with Background Gradient */}
      <div className="relative w-full max-w-6xl mb-20 z-10">
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{ 
            background: "radial-gradient(circle at 50% 50%, #002222 0%, transparent 80%)",
            transform: "scale(1.3)",
            zIndex: 0
          }} 
        />
        {/* Calendar Section Container */}
        <div 
          className="w-full rounded-2xl p-4 md:p-10 border relative z-10"
          style={{
            background: "rgba(255, 255, 255, 0.02)",
            borderColor: "rgba(233, 162, 59, 0.15)",
            boxShadow: "0 0 20px rgba(233, 162, 59, 0.12), 0 4px 30px rgba(0, 0, 0, 0.5)",
            height: "auto"
          }}
        >
          <div className="w-full max-w-[1000px] mx-auto" style={{ height: "auto" }}>
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/6dHpDYFwfMgU5wmwS5wv"
              style={{ width: "100%", height: "1000px", border: "none", borderRadius: "8px", overflow: "hidden" }}
              scrolling="no"
              id="6dHpDYFwfMgU5wmwS5wv_1782208808320"
              title="Booking Calendar"
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
