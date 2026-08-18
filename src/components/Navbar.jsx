
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          const current = navLinks.find(
            (link) => link.href === `#${visibleSections[0].target.id}`
          );

          if (current) setActive(current.name);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-md backdrop-blur-xl"
          : "bg-white/75 backdrop-blur-lg"
      }`}
    >
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="z-10 text-2xl font-bold tracking-wide text-blue-600"
        >
          Dev.
        </a>

        <nav
          aria-label="Main navigation"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 lg:flex xl:gap-7"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              aria-current={active === link.name ? "location" : undefined}
              className={`relative whitespace-nowrap pb-1 transition-colors duration-300 ${
                active === link.name
                  ? "font-semibold text-blue-600"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              {link.name}

              {active === link.name && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-blue-600" />
              )}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="ml-auto mr-4 hidden rounded-full bg-blue-600 px-5 py-2.5 text-white transition-colors hover:bg-blue-700 lg:inline-flex"
        >
          Hire Me
        </a>

        <button
          type="button"
          onClick={() => setOpen((previous) => !previous)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 lg:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`overflow-hidden transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[85vh] overflow-y-auto" : "max-h-0"
        }`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile navigation" className="bg-white shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              tabIndex={open ? 0 : -1}
              aria-current={active === link.name ? "location" : undefined}
              onClick={() => setOpen(false)}
              className={`block border-b border-slate-100 px-6 py-4 transition-colors hover:bg-slate-50 ${
                active === link.name
                  ? "bg-blue-50 font-semibold text-blue-600"
                  : "text-slate-600"
              }`}
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="block px-6 py-4 font-semibold text-blue-600 hover:bg-blue-50"
          >
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
