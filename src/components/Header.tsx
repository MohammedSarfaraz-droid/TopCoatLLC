import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/#services" },
  { label: "Portfolio", path: "/#portfolio" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleNavClick = (path: string) => {
    if (path.startsWith("/#")) {
      const id = path.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-primary/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-serif font-bold text-gradient-copper tracking-wide">
            TOPCOAT
          </span>
          <span className="text-xs font-sans text-muted-foreground tracking-widest uppercase">
            LLC
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              onClick={() => handleNavClick(link.path)}
              className="text-sm font-sans font-medium text-foreground/80 hover:text-primary transition-colors tracking-wide uppercase"
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact">
            <Button className="bg-primary hover:bg-copper-light text-primary-foreground font-sans text-sm tracking-wide">
              <Phone className="w-4 h-4 mr-2" />
              Get a Quote
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-primary/10 animate-fade-in">
          <nav className="container mx-auto flex flex-col py-6 px-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className="text-base font-sans font-medium text-foreground/80 hover:text-primary transition-colors py-2 border-b border-border/50"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button className="w-full bg-primary hover:bg-copper-light text-primary-foreground font-sans mt-2">
                <Phone className="w-4 h-4 mr-2" />
                Get a Quote
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
