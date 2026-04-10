import Icon from "@/components/ui/icon";

interface NavBarProps {
  scrolled: boolean;
  activeSection: string;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  scrollTo: (id: string) => void;
}

const navItems = [
  { id: "home", label: "Главная" },
  { id: "meetups", label: "Встречи" },
  { id: "interview", label: "Интервью" },
  { id: "contacts", label: "Контакты" },
];

const FullerenLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <circle cx="16" cy="16" r="6" stroke="rgb(232,213,176)" strokeWidth="1" strokeOpacity="0.7" fill="none"/>
    <circle cx="16" cy="5" r="2" fill="rgb(232,213,176)" fillOpacity="0.5"/>
    <circle cx="16" cy="27" r="2" fill="rgb(232,213,176)" fillOpacity="0.5"/>
    <circle cx="5" cy="16" r="2" fill="rgb(232,213,176)" fillOpacity="0.5"/>
    <circle cx="27" cy="16" r="2" fill="rgb(232,213,176)" fillOpacity="0.5"/>
    <line x1="16" y1="10" x2="16" y2="5" stroke="rgb(232,213,176)" strokeWidth="0.8" strokeOpacity="0.4"/>
    <line x1="16" y1="22" x2="16" y2="27" stroke="rgb(232,213,176)" strokeWidth="0.8" strokeOpacity="0.4"/>
    <line x1="10" y1="16" x2="5" y2="16" stroke="rgb(232,213,176)" strokeWidth="0.8" strokeOpacity="0.4"/>
    <line x1="22" y1="16" x2="27" y2="16" stroke="rgb(232,213,176)" strokeWidth="0.8" strokeOpacity="0.4"/>
  </svg>
);

export default function NavBar({ scrolled, activeSection, menuOpen, setMenuOpen, scrollTo }: NavBarProps) {
  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-500"
        style={{
          padding: scrolled ? "10px 40px" : "18px 40px",
          background: scrolled ? "rgba(10,10,14,0.96)" : "rgba(10,10,14,0.55)",
          backdropFilter: "blur(20px)",
          borderBottom: scrolled ? "1px solid rgba(232,213,176,0.12)" : "1px solid rgba(232,213,176,0.06)",
        }}
      >
        <button onClick={() => scrollTo("home")} className="flex items-center gap-3 group">
          <div className="relative w-7 h-7 flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            <FullerenLogo />
          </div>
          <div className="leading-tight">
            <div className="font-cormorant font-light tracking-[0.2em] uppercase text-sm leading-none"
              style={{ color: "rgb(232,213,176)" }}>Фуллерен</div>
            <div className="font-golos text-[9px] tracking-[0.15em] uppercase mt-0.5"
              style={{ color: "rgba(232,213,176,0.45)" }}>Центр поддержки семьи</div>
          </div>
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className="font-golos text-xs tracking-[0.12em] uppercase transition-all duration-300 relative group"
                style={{ color: activeSection === item.id ? "rgb(232,213,176)" : "rgba(255,255,255,0.45)" }}
              >
                {item.label}
                <span
                  className="absolute -bottom-1 left-0 h-px transition-all duration-300 group-hover:w-full"
                  style={{ width: activeSection === item.id ? "100%" : "0", background: "linear-gradient(90deg, rgb(232,213,176), rgb(201,169,110))" }}
                />
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:block w-px h-5" style={{ background: "rgba(232,213,176,0.2)" }} />

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ color: "rgb(232,213,176)" }}>
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col justify-center px-10"
          style={{ background: "rgba(8,8,12,0.97)", backdropFilter: "blur(24px)" }}>
          <div className="absolute top-0 left-10 right-10 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(232,213,176,0.3), transparent)" }} />
          <div className="mb-10">
            <div className="font-cormorant font-light tracking-[0.2em] uppercase text-xs mb-1" style={{ color: "rgba(232,213,176,0.45)" }}>Фуллерен</div>
            <div className="w-8 h-px" style={{ background: "rgb(232,213,176)", opacity: 0.3 }} />
          </div>
          {navItems.map((item, i) => (
            <button key={item.id} onClick={() => scrollTo(item.id)}
              className="font-cormorant text-4xl font-light py-3.5 text-left animate-fade-in-up transition-all duration-300 hover:translate-x-2"
              style={{
                borderBottom: "1px solid rgba(232,213,176,0.08)",
                animationDelay: `${i * 0.06}s`,
                opacity: 0,
                color: activeSection === item.id ? "rgb(232,213,176)" : "rgba(255,255,255,0.65)",
              }}>
              {item.label}
            </button>
          ))}
          <div className="absolute bottom-0 left-10 right-10 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(232,213,176,0.3), transparent)" }} />
        </div>
      )}
    </>
  );
}
