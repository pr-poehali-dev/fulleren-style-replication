import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ContentSections from "@/components/ContentSections";
import Footer from "@/components/Footer";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "directions", label: "Направления" },
  { id: "meetups", label: "Встречи" },
  { id: "clubs", label: "Сообщества" },
  { id: "about", label: "О Центре" },
  { id: "founders", label: "Основатели" },
  { id: "contacts", label: "Контакты" },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "hsl(var(--background))", color: "hsl(var(--foreground))" }}>
      <Navbar
        scrolled={scrolled}
        activeSection={activeSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollTo={scrollTo}
        navItems={NAV_ITEMS}
      />
      <HeroSection scrollTo={scrollTo} />
      <ContentSections scrollTo={scrollTo} />
      <Footer />
    </div>
  );
}
