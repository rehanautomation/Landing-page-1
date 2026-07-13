import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import logo from "../../LP images/leagciii-logo.webp";
import step1Img from "../../LP images/thank-you/Step 1.jpeg";
import step2Img from "../../LP images/thank-you/Step 2 .png";
import step3Img from "../../LP images/thank-you/Unknown sender.jpeg";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You · Legaciii" },
      { name: "description", content: "Your strategy call has been tentatively scheduled." },
    ],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    if ('scrollRestoration' in history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <main className="min-h-screen relative flex flex-col items-center py-12 px-5" style={{ backgroundColor: "#000421" }}>
      {/* Background Gradient */}
      <div 
        className="absolute top-0 left-0 right-0 pointer-events-none" 
        style={{ 
          background: "radial-gradient(circle at 50% 0%, #002222 0%, transparent 80%)",
          height: "600px",
          zIndex: 0
        }} 
      />

      {/* Top Banner Alert */}
      <div 
        className="w-full text-white py-3 px-4 text-center font-bold text-sm md:text-base relative z-20 flex items-center justify-center gap-2 mb-12 rounded shadow-lg max-w-4xl"
        style={{ backgroundColor: "#D35400" }} 
      >
        <span>⚠️</span>
        <span>Important: Your Call Is <span className="underline">Tentatively</span> Scheduled!</span>
        <span>⚠️</span>
      </div>

      {/* Logo */}
      <div className="mb-8 relative z-10">
        <img src={logo} alt="Legaciii" className="h-16 w-auto" />
      </div>

      {/* Heading Section */}
      <div className="text-center max-w-4xl mb-16 relative z-10 px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white mb-4">
          Complete A Few Steps To Confirm Your Appointment
        </h1>
      </div>

      {/* Container for the steps to allow relative positioning of the connecting line */}
      <div className="relative w-full max-w-4xl mb-8 z-10 px-2 flex flex-col items-center">
        
        {/* SVG Dotted Arrow Line (Desktop Only - connects Step 2 bottom to Step 3 top) */}
        <svg className="absolute hidden md:block pointer-events-none" style={{ top: '45%', left: 0, width: '100%', height: '250px', zIndex: -1 }}>
           <path 
             d="M 75% 0 C 75% 100, 50% 50, 50% 180" 
             fill="transparent" 
             stroke="#D35400" 
             strokeWidth="4" 
             strokeDasharray="12 12" 
           />
           {/* Target pulsing circle right above step 3 */}
           <circle cx="50%" cy="180" r="6" fill="#D35400" />
           <circle cx="50%" cy="180" r="16" fill="transparent" stroke="#D35400" strokeWidth="2" className="animate-ping" opacity="0.6" />
        </svg>

        {/* Step 1 and 2 Side by Side - using max-w-3xl for smaller cards and more space */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-3xl mb-24 relative">
          
          {/* Step 1 Card */}
          <div 
            className="rounded p-6 border flex flex-col items-center text-center bg-white/5 backdrop-blur-sm h-full"
            style={{
              borderColor: "rgba(233, 162, 59, 0.15)",
              boxShadow: "0 0 20px rgba(233, 162, 59, 0.12), 0 4px 30px rgba(0, 0, 0, 0.5)",
            }}
          >
            {/* Image Thumbnail with fixed aspect ratio matching step 2 */}
            <div className="w-full aspect-[16/10] mb-6 flex flex-col items-center justify-center overflow-hidden rounded shadow-md border border-gray-800 bg-[#0c1033]">
              <img src={step1Img} alt="Add to Calendar" className="w-full h-full object-cover" />
            </div>

            <h2 className="text-xl font-bold mb-2 text-white">Step 1:</h2>
            <p className="text-sm leading-relaxed text-gray-300">
              Add Your Appointment To Your Calendar Below
            </p>
          </div>

          {/* Step 2 Card */}
          <div 
            className="rounded p-6 border flex flex-col items-center text-center bg-white/5 backdrop-blur-sm h-full"
            style={{
              borderColor: "rgba(233, 162, 59, 0.15)",
              boxShadow: "0 0 20px rgba(233, 162, 59, 0.12), 0 4px 30px rgba(0, 0, 0, 0.5)",
            }}
          >
            {/* Image Thumbnail with fixed aspect ratio matching step 1 */}
            <div className="w-full aspect-[16/10] mb-6 flex flex-col items-center justify-center overflow-hidden rounded shadow-md border border-gray-800 bg-[#0c1033]">
              <img src={step2Img} alt="SMS Confirmation" className="w-full h-full object-cover" />
            </div>

            <h2 className="text-xl font-bold mb-2 text-white">Step 2:</h2>
            <p className="text-sm leading-relaxed text-gray-300">
              Please Confirm Your Appointment Via Text (We'll Be Texting You Within 10 Minutes!)
            </p>
          </div>
        </div>

        {/* Step 3 (Google Update) - Smaller card, centered underneath */}
        <div className="w-full max-w-2xl relative z-10">
          <div 
            className="w-full rounded overflow-hidden border" 
            style={{ 
              background: "rgba(255, 255, 255, 0.05)",
              borderColor: "rgba(233, 162, 59, 0.15)",
              boxShadow: "0 0 20px rgba(233, 162, 59, 0.12), 0 4px 30px rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(4px)"
            }}
          >
            {/* Header of box */}
            <div className="text-white py-2 px-4 font-bold text-center text-sm flex items-center justify-center gap-2" style={{ backgroundColor: "#D35400" }}>
              <span>ℹ️</span>
              <span>This Google Update Could Affect Your Appointment</span>
            </div>
            
            {/* Body of box */}
            <div className="p-5 md:p-6 flex flex-col items-center">
              <h2 className="text-xl font-bold mb-2 text-white text-center">Step 3:</h2>
              <p className="text-sm leading-relaxed text-center font-medium max-w-2xl mb-5 text-gray-300">
                You may also notice an email from Google titled <strong className="font-bold text-white">"Invitation from an unknown sender"</strong>. This is due to a recent Google Calendar update that has a slight technical bug. If you see this email, please select <strong className="font-bold" style={{ color: "#E9A23B" }}>"I know the sender"</strong> to avoid confusion.
              </p>

              {/* Unknown sender Actual Screenshot */}
              <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded shadow-lg border border-gray-700 bg-white">
                 <img src={step3Img} alt="Google Unknown Sender Warning" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Completion Subheading & Call to Action */}
      <div className="text-center max-w-2xl mb-16 relative z-10 px-4 mt-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          That's it! You're all set.
        </h2>
        <p className="text-base text-gray-300 leading-relaxed">
          Once you've completed the steps above, your spot is locked in. We look forward to speaking with you soon—see you on the meeting!
        </p>
      </div>

      {/* Footer */}
      <footer className="w-full py-8 text-center text-xs text-muted-foreground border-t mt-auto" style={{ borderColor: "color-mix(in oklab, var(--color-gold) 15%, transparent)" }}>
        © {new Date().getFullYear()} Legaciii · Morgan Samuel, LLQP · PCP
      </footer>
    </main>
  );
}
