import { Shield, Lock, Heart } from "lucide-react";

const testimonials = [
  {
    quote: "I used to spend Sunday evenings planning my week. Now HebaFlow does it in seconds. I finally have my weekends back.",
    name: "Sarah M.",
    role: "Independent Midwife, Bristol",
  },
  {
    quote: "The route planning alone saves me 4 hours a week. That's 4 more hours I can give to my clients — or myself.",
    name: "Emma K.",
    role: "Community Midwife, Edinburgh",
  },
  {
    quote: "My clients love the secure messaging. It feels personal and professional. HebaFlow just gets midwifery.",
    name: "Priya D.",
    role: "Birth Centre Lead, London",
  },
];

const trustBadges = [
  { icon: Shield, label: "HIPAA Compliant" },
  { icon: Lock, label: "End-to-End Encrypted" },
  { icon: Heart, label: "Built by Healthcare Pros" },
];

const SocialProofSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-body font-semibold tracking-widest uppercase text-sm mb-3">
            Trusted by Midwives
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Hear from Your Colleagues
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card border border-border rounded-xl p-7 flex flex-col"
            >
              <p className="font-body text-foreground leading-relaxed mb-6 flex-1 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-body font-semibold text-foreground">{t.name}</p>
                <p className="font-body text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-muted-foreground">
              <badge.icon className="w-5 h-5 text-primary" />
              <span className="font-body text-sm font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
