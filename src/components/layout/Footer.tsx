import { Link } from "react-router-dom";

const navLinks = [
  { name: "Work", path: "/work" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const socialLinks = [
  { name: "Instagram", url: "https://instagram.com" },
  { name: "LinkedIn", url: "https://linkedin.com" },
  { name: "Twitter", url: "https://twitter.com" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream-dark border-t border-divider">
      <div className="container-editorial px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif text-2xl text-ink transition-opacity duration-300 hover:opacity-70"
            >
              Elena Vance
            </Link>
            <p className="mt-4 text-sm text-ink-muted max-w-xs">
              Designer and brand strategist crafting distinctive identities with intention and restraint.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-6">
            <h4 className="eyebrow mb-4">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-ink-light transition-colors duration-300 hover:text-ink"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-3">
            <h4 className="eyebrow mb-4">Connect</h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink-light transition-colors duration-300 hover:text-ink"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-divider flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-xs text-ink-muted">
            © {currentYear} Elena Vance. All rights reserved.
          </p>
          <p className="text-xs text-ink-muted">
            New York, NY
          </p>
        </div>
      </div>
    </footer>
  );
}
