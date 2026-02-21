const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-background/80">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-xl font-bold text-background">HebaFlow</p>
            <p className="font-body text-sm mt-1">Empowering midwives, one click at a time.</p>
          </div>

          <div className="flex items-center gap-6 font-body text-sm">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Contact</a>
            <a href="#" className="hover:text-background transition-colors">Twitter</a>
            <a href="#" className="hover:text-background transition-colors">LinkedIn</a>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-6 text-center font-body text-xs">
          © {new Date().getFullYear()} HebaFlow. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
