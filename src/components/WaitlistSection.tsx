import { useState } from "react";

const WaitlistSection = () => {
  const [form, setForm] = useState({ name: "", email: "", location: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Please enter your name";
    if (!form.email.trim() || !form.email.includes("@")) errs.email = "Please enter a valid email";
    if (!form.location.trim()) errs.location = "Please enter your practice location";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <section id="waitlist" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-lg mx-auto text-center">
          <p className="text-primary font-body font-semibold tracking-widest uppercase text-sm mb-3">
            Early Access
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Be First to Transform Your Practice
          </h2>
          <p className="font-body text-muted-foreground mb-10">
            Join our waitlist and be among the first midwives to reclaim your time.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label htmlFor="name" className="block font-body text-sm font-medium text-foreground mb-1.5">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 font-body"
                  placeholder="Jane Smith"
                />
                {errors.name && <p className="text-destructive text-xs mt-1 font-body">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block font-body text-sm font-medium text-foreground mb-1.5">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 font-body"
                  placeholder="jane@practice.com"
                />
                {errors.email && <p className="text-destructive text-xs mt-1 font-body">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="location" className="block font-body text-sm font-medium text-foreground mb-1.5">
                  Practice Location
                </label>
                <input
                  id="location"
                  type="text"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 font-body"
                  placeholder="Bristol, UK"
                />
                {errors.location && <p className="text-destructive text-xs mt-1 font-body">{errors.location}</p>}
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold hover:bg-rose-dusty transition-colors duration-200 mt-2"
              >
                Join the Waitlist
              </button>

              <p className="text-xs text-muted-foreground text-center font-body">
                🔒 Your data is safe. We never share your information with third parties.
              </p>
            </form>
          ) : (
            <div className="bg-card border border-border rounded-xl p-8 animate-fade-up">
              <div className="text-4xl mb-3">🎉</div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">Welcome to HebaFlow!</h3>
              <p className="font-body text-muted-foreground">
                Thanks, {form.name}! We'll reach out to {form.email} with updates and early access details.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
