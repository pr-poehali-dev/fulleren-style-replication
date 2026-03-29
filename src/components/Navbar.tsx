import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "directions", label: "Направления" },
  { id: "about", label: "О Центре" },
  { id: "founders", label: "Основатели" },
  { id: "contacts", label: "Контакты" },
];

interface NavbarProps {
  scrolled: boolean;
  activeSection: string;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  scrollTo: (id: string) => void;
}

export default function Navbar({ scrolled, activeSection, menuOpen, setMenuOpen, scrollTo }: NavbarProps) {
  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-5 md:px-10 py-3 flex items-center justify-between transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.7)",
          backdropFilter: "blur(16px)",
          borderBottom: scrolled ? "1px solid hsl(var(--border))" : "1px solid transparent",
          boxShadow: scrolled ? "0 2px 20px hsl(210 82% 36% / 0.06)" : "none",
        }}
      >
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2.5">
          <div className="relative w-8 h-8 flex-shrink-0">
            <div className="absolute inset-0 rounded-full" style={{ background: "linear-gradient(135deg, hsl(var(--blue)), hsl(var(--teal)))" }} />
            <svg viewBox="0 0 32 32" className="absolute inset-0 w-full h-full" fill="none">
              <circle cx="16" cy="16" r="4" fill="white" fillOpacity="0.9" />
              <circle cx="8" cy="10" r="2.5" fill="white" fillOpacity="0.6" />
              <circle cx="24" cy="10" r="2.5" fill="white" fillOpacity="0.6" />
              <circle cx="8" cy="22" r="2.5" fill="white" fillOpacity="0.6" />
              <circle cx="24" cy="22" r="2.5" fill="white" fillOpacity="0.6" />
              <line x1="16" y1="16" x2="8" y2="10" stroke="white" strokeWidth="1.2" strokeOpacity="0.5" />
              <line x1="16" y1="16" x2="24" y2="10" stroke="white" strokeWidth="1.2" strokeOpacity="0.5" />
              <line x1="16" y1="16" x2="8" y2="22" stroke="white" strokeWidth="1.2" strokeOpacity="0.5" />
              <line x1="16" y1="16" x2="24" y2="22" stroke="white" strokeWidth="1.2" strokeOpacity="0.5" />
            </svg>
          </div>
          <div className="leading-tight">
            <div className="font-cormorant text-base font-semibold gradient-text leading-none">Фуллерен</div>
            <div className="font-golos text-[10px] tracking-wide" style={{ color: "hsl(var(--muted-foreground))" }}>Центр квантовой педагогики</div>
          </div>
        </button>

        <ul className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className="font-golos text-sm tracking-wide transition-all duration-300 relative group"
                style={{ color: activeSection === item.id ? "hsl(var(--blue))" : "hsl(var(--muted-foreground))" }}
              >
                {item.label}
                <span
                  className="absolute -bottom-0.5 left-0 h-px transition-all duration-300 group-hover:w-full w-0"
                  style={{ background: "hsl(var(--blue))", opacity: activeSection === item.id ? 1 : 0.7 }}
                />
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollTo("contacts")}
          className="hidden md:block px-5 py-2 rounded-full text-sm font-semibold font-golos transition-all duration-300 hover:scale-105 animate-pulse-blue"
          style={{ background: "hsl(var(--blue))", color: "#fff" }}
        >
          Записаться
        </button>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ color: "hsl(var(--foreground))" }}>
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col pt-20 px-6 py-8" style={{ background: "rgba(255,255,255,0.98)", backdropFilter: "blur(20px)" }}>
          {NAV_ITEMS.map((item, i) => (
            <button key={item.id} onClick={() => scrollTo(item.id)}
              className="font-cormorant text-3xl font-light py-4 text-left animate-fade-in-up"
              style={{ borderBottom: "1px solid hsl(var(--border))", animationDelay: `${i * 0.07}s`, opacity: 0, color: "hsl(var(--foreground))" }}>
              {item.label}
            </button>
          ))}
          <button onClick={() => scrollTo("contacts")} className="mt-8 px-6 py-3 rounded-full font-golos font-semibold text-base"
            style={{ background: "hsl(var(--blue))", color: "#fff" }}>
            Записаться на курс
          </button>
        </div>
      )}
    </>
  );
}
