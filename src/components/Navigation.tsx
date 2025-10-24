import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-heading font-bold text-foreground hover:text-primary transition-colors"
          >
            Small Tools
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`font-body font-medium transition-all duration-300 relative ${
                isActive("/")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              } after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                isActive("/") ? "after:scale-x-100" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-body font-medium transition-all duration-300 relative ${
                isActive("/about")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              } after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                isActive("/about") ? "after:scale-x-100" : ""
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`font-body font-medium transition-all duration-300 relative ${
                isActive("/contact")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              } after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                isActive("/contact") ? "after:scale-x-100" : ""
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
