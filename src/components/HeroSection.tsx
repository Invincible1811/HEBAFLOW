import { useState } from "react";
import { Calendar, MapPin, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleQuickSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-body font-semibold tracking-widest uppercase text-sm mb-4 animate-fade-up">
            Built for Midwives
          </p>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up animation-delay-200">
            Spend Less Time on Admin.{" "}
            <span className="text-primary">More Time on Care.</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 animate-fade-up animation-delay-400">
            HebaFlow combines smart scheduling, intelligent route planning, and streamlined communication — so you can focus on what matters most.
          </p>

          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-10 animate-fade-up animation-delay-400">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-primary" /> Scheduling</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Routes</span>
            <span className="flex items-center gap-1.5"><MessageCircle className="w-4 h-4 text-primary" /> Communication</span>
          </div>

          {!submitted ? (
            <form onSubmit={handleQuickSignup} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto animate-fade-up animation-delay-600">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-5 py-3.5 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 font-body"
              />
              <button
                type="submit"
                className="px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold hover:bg-rose-dusty transition-colors duration-200 whitespace-nowrap"
              >
                Join the Waitlist
              </button>
            </form>
          ) : (
            <div className="animate-fade-up bg-card border border-border rounded-lg px-6 py-4 max-w-md mx-auto">
              <p className="text-primary font-semibold font-body">You're on the list! 🎉</p>
              <p className="text-sm text-muted-foreground font-body">We'll be in touch soon.</p>
            </div>
          )}

          <p className="text-xs text-muted-foreground mt-4 animate-fade-up animation-delay-600 font-body">
            Join 200+ midwives already on the waitlist. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
