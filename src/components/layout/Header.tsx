import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Work", path: "/work" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-editorial",
          isScrolled
            ? "bg-background/95 backdrop-blur-sm py-4"
            : "bg-transparent py-6 md:py-8"
        )}
      >
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-xl md:text-2xl text-ink transition-opacity duration-300 hover:opacity-70"
            >
              Elena Vance
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8 lg:gap-12">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={cn(
                      "editorial-link text-sm font-medium tracking-wide text-ink-light transition-colors duration-300 hover:text-ink",
                      location.pathname === link.path && "text-ink"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 -mr-2 text-ink transition-opacity duration-300 hover:opacity-70"
              aria-label="Open menu"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!isMobileMenuOpen}
        {...(!isMobileMenuOpen ? ({ inert: "" } as Record<string, string>) : {})}
        className={cn(
          "fixed inset-0 z-[100] bg-background transition-all duration-500 ease-editorial md:hidden h-dvh",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col h-full px-6 py-6">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="font-serif text-xl text-ink"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Elena Vance
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 -mr-2 text-ink transition-opacity duration-300 hover:opacity-70"
              aria-label="Close menu"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <nav className="flex-1 flex flex-col justify-center">
            <ul className="space-y-8">
              {navLinks.map((link, index) => (
                <li
                  key={link.path}
                  className={cn(
                    "opacity-0",
                    isMobileMenuOpen && "animate-fade-in"
                  )}
                  style={{ animationDelay: `${index * 100 + 100}ms` }}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      "font-serif text-4xl text-ink-light transition-colors duration-300 hover:text-ink",
                      location.pathname === link.path && "text-ink"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Footer */}
          <div
            className={cn(
              "pt-8 border-t border-divider opacity-0",
              isMobileMenuOpen && "animate-fade-in animate-delay-500"
            )}
          >
            <div className="flex gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-muted transition-colors duration-300 hover:text-ink"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-muted transition-colors duration-300 hover:text-ink"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
