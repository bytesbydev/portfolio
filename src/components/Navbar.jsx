import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = navLinks.map((item) =>
      document.querySelector(item.href)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const link = navLinks.find(
              (item) => item.href === `#${entry.target.id}`
            );

            if (link) setActive(link.name);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-md"
          : "bg-white/70 backdrop-blur-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a
          href="#home"
          className="text-2xl font-bold text-blue-600 tracking-wide"
        >
          Dev.
        </a>

        {/* Desktop */}

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative pb-1 transition-all duration-300 ${
                active === link.name
                  ? "text-blue-600 font-semibold"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              {link.name}

              {active === link.name && (
                <span className="absolute left-0 bottom-0 h-[2px] w-full bg-blue-600 rounded-full"></span>
              )}
            </a>
          ))}
        </nav>

        {/* Hire Button */}

        <a
          href="#contact"
          className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition"
        >
          Hire Me
        </a>

        {/* Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-700"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-white shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block px-6 py-4 border-b border-slate-100 ${
                active === link.name
                  ? "text-blue-600 font-semibold"
                  : "text-slate-600"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;