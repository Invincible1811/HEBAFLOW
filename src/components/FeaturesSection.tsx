import { Calendar, MapPin, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Effortless Appointment Management",
    description:
      "Smart scheduling that understands your workflow. Book, reschedule, and manage appointments with automatic conflict detection and client notifications.",
  },
  {
    icon: MapPin,
    title: "Optimize Your Home Visit Routes",
    description:
      "Intelligent route planning that saves you hours each week. Group nearby visits, minimize travel time, and arrive refreshed for every client.",
  },
  {
    icon: MessageCircle,
    title: "Stay Connected with Your Clients",
    description:
      "Secure, HIPAA-compliant messaging built for midwifery. Share updates, documents, and care plans — all in one place your clients love.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-body font-semibold tracking-widest uppercase text-sm mb-3">
            Core Features
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need, Nothing You Don't
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Three powerful tools designed around how midwives actually work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-fade-up animation-delay-${(i + 1) * 200}`}
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
