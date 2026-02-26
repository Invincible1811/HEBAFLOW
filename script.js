(() => {
    "use strict";
  
    // Enhanced scroll-based navbar
    function setupNavbar() {
      const navbar = document.querySelector(".navbar");
      if (!navbar) return;
      
      const handleScroll = () => {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      };
      
      window.addEventListener("scroll", handleScroll);
    }
  
    // Enhanced scroll animations with Intersection Observer
    function setupScrollAnimations() {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      }, observerOptions);
      
      // Observe all cards and sections
      const elementsToObserve = document.querySelectorAll(
        ".feature-card, .testimonial-card"
      );
      
      elementsToObserve.forEach((el) => observer.observe(el));
    }
  
    // Enhanced parallax effect
    function setupParallax() {
      const handleScroll = () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll(".hero");
        
        parallaxElements.forEach((el) => {
          const speed = 0.5;
          const yPos = -(scrolled * speed);
          el.style.transform = `translateY(${yPos}px)`;
        });
      };
      
      window.addEventListener("scroll", handleScroll);
    }
  
    // Enhanced smooth scroll for elements that have: data-scroll="#sectionId"
    function setupSmoothScroll() {
      document.addEventListener("click", (e) => {
        const el = e.target.closest("[data-scroll]");
        if (!el) return;
  
        const selector = el.getAttribute("data-scroll");
        if (!selector) return;
  
        const target = document.querySelector(selector);
        if (!target) return;
  
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  
    // Enhanced waitlist form UX with loading states
    function setupWaitlistForm() {
      const form = document.querySelector(".waitlist-form");
      if (!form) return;
  
      const msg = form.querySelector(".waitlist-msg");
      const submitBtn = form.querySelector(".waitlist-submit");
  
      const setMessage = (text, type = "success") => {
        if (!msg) return;
        msg.textContent = text;
        msg.style.color = type === "error" ? "#E55555" : "var(--muted-green)";
      };
  
      const setLoading = (loading) => {
        if (!submitBtn) return;
        submitBtn.disabled = loading;
        submitBtn.textContent = loading ? "Submitting..." : "Join the Waitlist";
        submitBtn.style.opacity = loading ? "0.7" : "1";
      };
  
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
  
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Basic validation
        if (!data.fullName || !data.email) {
          setMessage("Please fill in all required fields.", "error");
          return;
        }
  
        setLoading(true);
        setMessage("", "");
  
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 2000));
          
          // Success feedback
          setMessage("✅ You're on the waitlist! We'll be in touch soon.", "success");
          form.reset();
          
          // Add success animation
          submitBtn.style.background = "var(--gradient-2)";
          setTimeout(() => {
            submitBtn.style.background = "var(--gradient-1)";
          }, 2000);
          
        } catch (error) {
          setMessage("❌ Something went wrong. Please try again.", "error");
        } finally {
          setLoading(false);
        }
      });
    }
  
    // Enhanced hover effects for cards
    function setupCardHovers() {
      const cards = document.querySelectorAll(".feature-card, .about-feature, .testimonial-card");
      
      cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          card.style.transition = "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        });
        
        card.addEventListener("mouseleave", () => {
          card.style.transition = "all 0.3s ease";
        });
      });
    }
  
    // Enhanced typing effect for hero title (disabled to prevent issues)
    function setupTypingEffect() {
      // Disabled to prevent content visibility issues
      return;
    }
  
    // Initialize all enhanced features
    function init() {
      setupNavbar();
      setupScrollAnimations();
      setupParallax();
      setupSmoothScroll();
      setupWaitlistForm();
      setupCardHovers();
      setupTypingEffect();
    }
  
    // Start when DOM is ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }
  })();
  
        // Basic client-side validation (HTML required attributes already help)
        const fullName = form.querySelector("#fullName")?.value.trim() || "";
        const email = form.querySelector("#email")?.value.trim() || "";
        const location = form.querySelector("#location")?.value.trim() || "";
  
        if (!fullName || !email) {
          setMessage("❗ Please fill in your name and email.", "error");
          return;
        }
  
        // UX: loading state
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = "Joining...";
        }
        setMessage("");
  
        try {
          // ✅ DEMO: simulate a network request
          await new Promise((r) => setTimeout(r, 600));
  
          // This is where you'd POST to your backend, e.g.:
          // await fetch("/api/waitlist", {
          //   method: "POST",
          //   headers: { "Content-Type": "application/json" },
          //   body: JSON.stringify({ fullName, email, location })
          // });
  
          console.log("Waitlist signup:", { fullName, email, location });
  
          setMessage("✅ You're on the waitlist! We'll be in touch soon.");
          form.reset();
        } catch (err) {
          console.error(err);
          setMessage("❗ Something went wrong. Please try again.", "error");
        } finally {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = "Join the Waitlist";
          }
        }
      });
    }
  
    // Init
    document.addEventListener("DOMContentLoaded", () => {
      setupSmoothScroll();
      setupWaitlistForm();
    });
  })();