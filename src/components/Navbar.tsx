const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="font-display text-xl font-bold text-foreground">
          HebaFlow
        </a>
        <div className="hidden sm:flex items-center gap-8 font-body text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#waitlist" className="hover:text-foreground transition-colors">Waitlist</a>
        </div>
        <a
          href="#waitlist"
          className="px-5 py-2 rounded-lg bg-primary text-primary-foreground font-body text-sm font-semibold hover:bg-rose-dusty transition-colors"
        >
          Get Early Access
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
