import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const CENTER_IMAGE = "https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/files/4e6db7fc-54e4-43f6-95a3-6cafda6eb9fe.jpg";
const FOUNDER_IMAGE = "https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/files/286caf21-0e46-4b31-8ff2-33eba94bccd7.jpg";

const COURSES = [
  { id: 1, title: "Квантовое мышление", category: "Психология", level: "Начинающий", duration: "3 месяца", students: 128, tag: "Хит" },
  { id: 2, title: "Нейропедагогика", category: "Педагогика", level: "Средний", duration: "2 месяца", students: 94, tag: "Новый" },
  { id: 3, title: "Детская психология", category: "Психология", level: "Начинающий", duration: "4 месяца", students: 210, tag: "Хит" },
  { id: 4, title: "Системное обучение", category: "Педагогика", level: "Продвинутый", duration: "3 месяца", students: 67, tag: null },
  { id: 5, title: "Арт-терапия", category: "Терапия", level: "Начинающий", duration: "2 месяца", students: 155, tag: null },
  { id: 6, title: "Коучинг и развитие", category: "Коучинг", level: "Средний", duration: "3 месяца", students: 76, tag: "Новый" },
  { id: 7, title: "Семейная психология", category: "Психология", level: "Средний", duration: "4 месяца", students: 88, tag: null },
  { id: 8, title: "Методология обучения", category: "Педагогика", level: "Продвинутый", duration: "5 месяцев", students: 42, tag: null },
];

const DIRECTIONS = [
  { icon: "Brain", title: "Квантовая психология", desc: "Современные методы работы с сознанием, мышлением и эмоциональным интеллектом", count: 11 },
  { icon: "GraduationCap", title: "Инновационная педагогика", desc: "Передовые подходы к обучению и воспитанию детей и взрослых", count: 9 },
  { icon: "Heart", title: "Арт-терапия", desc: "Исцеление и развитие через творчество, рисунок, музыку и движение", count: 7 },
  { icon: "Users", title: "Семейные практики", desc: "Гармония в семье, детско-родительские отношения, системные расстановки", count: 8 },
  { icon: "Sparkles", title: "Коучинг", desc: "Личностный рост, раскрытие потенциала и достижение жизненных целей", count: 6 },
  { icon: "Atom", title: "Квантовые технологии", desc: "Передовые научные методы саморазвития и трансформации личности", count: 5 },
];

const CATEGORIES = ["Все", "Психология", "Педагогика", "Терапия", "Коучинг"];
const LEVELS = ["Все уровни", "Начинающий", "Средний", "Продвинутый"];

const FOUNDERS = [
  {
    name: "Анна Воронова",
    role: "Основатель и научный директор",
    bio: "Доктор психологических наук, практикующий психолог с 20-летним стажем. Создала Центр в 2012 году, объединив передовые научные исследования и практики квантовой психологии.",
    image: FOUNDER_IMAGE,
  },
  {
    name: "Михаил Соколов",
    role: "Со-основатель, педагог-новатор",
    bio: "Кандидат педагогических наук, автор уникальной методики нейропедагогики. Более 15 лет разрабатывает системы обучения, основанные на последних открытиях в области нейронауки.",
    image: FOUNDER_IMAGE,
  },
];

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [activeLevel, setActiveLevel] = useState("Все уровни");
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filteredCourses = COURSES.filter((c) => {
    const catOk = activeCategory === "Все" || c.category === activeCategory;
    const lvlOk = activeLevel === "Все уровни" || c.level === activeLevel;
    return catOk && lvlOk;
  });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Главная" },
    { id: "directions", label: "Направления" },
    { id: "about", label: "О Центре" },
    { id: "founders", label: "Основатели" },
    { id: "contacts", label: "Контакты" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "hsl(var(--background))", color: "hsl(var(--foreground))" }}>

      {/* NAV */}
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
          {/* Fullerene molecule icon */}
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
          {navItems.map((item) => (
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
          {navItems.map((item, i) => (
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

      {/* ── HERO ── */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/bucket/296abdaf-d231-43ba-bfdd-75d4eac15504.png"
            alt="quantum background"
            className="w-full h-full object-cover"
          />
          {/* Darkening overlay */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(8,15,35,0.82) 0%, rgba(8,15,35,0.65) 55%, rgba(8,15,35,0.4) 100%)" }} />
        </div>

        <div className="container mx-auto px-6 md:px-12 pt-28 pb-20 relative z-10">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full text-xs font-golos font-semibold tracking-widest uppercase animate-fade-in-up"
              style={{ border: "1.5px solid rgba(100,210,230,0.4)", color: "rgb(130,220,240)", background: "rgba(100,210,230,0.1)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "rgb(130,220,240)" }} />
              Образовательный центр · с 2012 года
            </div>

            <h1 className="font-cormorant font-light leading-[1.05] mb-5 animate-fade-in-up delay-100 text-white" style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)", opacity: 0 }}>
              Центр квантовой<br />
              педагогики и психологии<br />
              <em className="not-italic" style={{ background: "linear-gradient(130deg, #7dd8f0, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Фуллерен</em>
            </h1>

            <p className="font-golos text-base md:text-lg max-w-lg mb-10 animate-fade-in-up delay-200 leading-relaxed" style={{ opacity: 0, color: "rgba(255,255,255,0.65)" }}>
              Передовые методы развития личности, основанные на современной нейронауке, психологии и инновационной педагогике.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300" style={{ opacity: 0 }}>
              <button
                onClick={() => scrollTo("directions")}
                className="px-8 py-3.5 rounded-full font-golos font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ background: "hsl(var(--blue))", color: "#fff", boxShadow: "0 4px 24px hsl(var(--blue) / 0.5)" }}
              >
                Наши курсы
              </button>
              <button
                onClick={() => scrollTo("about")}
                className="px-8 py-3.5 rounded-full font-golos font-medium text-sm transition-all duration-300"
                style={{ border: "1.5px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.75)", backdropFilter: "blur(8px)" }}
              >
                О центре
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 mt-14 pt-8 animate-fade-in-up delay-400" style={{ opacity: 0, borderTop: "1px solid rgba(255,255,255,0.15)" }}>
              {[["1000+", "Выпускников"], ["50+", "Программ"], ["25+", "Специалистов"], ["12", "Лет опыта"]].map(([num, label]) => (
                <div key={label}>
                  <div className="font-cormorant text-3xl md:text-4xl font-light" style={{ color: "#7dd8f0" }}>{num}</div>
                  <div className="font-golos text-xs mt-0.5 tracking-wide" style={{ color: "rgba(255,255,255,0.55)" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in-up delay-600" style={{ opacity: 0 }}>
          <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, hsl(var(--blue) / 0.4), transparent)" }} />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="py-3.5 overflow-hidden" style={{ background: "hsl(var(--blue))" }}>
        <div className="marquee-inner">
          {Array.from({ length: 4 }).flatMap((_, bi) =>
            ["Квантовая психология", "Педагогика", "Арт-терапия", "Нейронаука", "Коучинг", "Семейные практики", "Саморазвитие"].map((t, ti) => (
              <span key={`${bi}-${ti}`} className="font-golos text-sm font-medium mx-7 whitespace-nowrap" style={{ color: "rgba(255,255,255,0.85)" }}>
                {t} ·
              </span>
            ))
          )}
        </div>
      </div>

      {/* ── DIRECTIONS ── */}
      <section id="directions" className="py-24 md:py-32" style={{ background: "hsl(var(--background))" }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="section-label mb-3">Направления</p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light leading-tight">
                Наши<br />направления
              </h2>
            </div>
            <p className="font-golos text-sm max-w-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
              Шесть специализированных направлений, разработанных командой учёных и практиков
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {DIRECTIONS.map((dir) => (
              <div
                key={dir.title}
                className="card-hover group p-7 rounded-2xl relative overflow-hidden"
                style={{ background: "#fff", border: "1.5px solid hsl(var(--border))" }}
              >
                <div
                  className="absolute top-0 right-0 w-28 h-28 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "hsl(var(--blue) / 0.05)", transform: "translate(30%, -30%)" }}
                />
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "hsl(var(--blue) / 0.09)" }}>
                  <Icon name={dir.icon} fallback="Sparkles" size={22} style={{ color: "hsl(var(--blue))" }} />
                </div>
                <h3 className="font-cormorant text-xl font-semibold mb-2">{dir.title}</h3>
                <p className="font-golos text-sm leading-relaxed mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>{dir.desc}</p>
                <span className="font-golos text-xs font-semibold" style={{ color: "hsl(var(--teal))" }}>{dir.count} программ</span>
              </div>
            ))}
          </div>

          {/* Course catalog */}
          <div className="pt-10" style={{ borderTop: "1px solid hsl(var(--border))" }}>
            <h3 className="font-cormorant text-3xl md:text-4xl font-light mb-8">Каталог курсов</h3>

            <div className="flex flex-wrap gap-2.5 mb-3">
              {CATEGORIES.map((cat) => (
                <button key={cat} className={`filter-chip ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}>{cat}</button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2.5 mb-10">
              {LEVELS.map((lvl) => (
                <button key={lvl} className={`filter-chip ${activeLevel === lvl ? "active" : ""}`}
                  onClick={() => setActiveLevel(lvl)}>{lvl}</button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredCourses.map((course) => (
                <div key={course.id} className="card-hover group p-5 rounded-2xl relative"
                  style={{ background: "#fff", border: "1.5px solid hsl(var(--border))" }}>
                  {course.tag && (
                    <span className="absolute top-4 right-4 text-xs font-golos font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: "hsl(var(--teal))", color: "#fff" }}>
                      {course.tag}
                    </span>
                  )}
                  <div className="mb-2">
                    <span className="text-xs font-golos font-semibold tracking-wide" style={{ color: "hsl(var(--teal))" }}>{course.category}</span>
                  </div>
                  <h4 className="font-cormorant text-lg font-semibold mb-3 leading-snug pr-10">{course.title}</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs font-golos px-2.5 py-1 rounded-lg" style={{ background: "hsl(var(--section-alt))", color: "hsl(var(--muted-foreground))" }}>
                      {course.level}
                    </span>
                    <span className="text-xs font-golos px-2.5 py-1 rounded-lg" style={{ background: "hsl(var(--section-alt))", color: "hsl(var(--muted-foreground))" }}>
                      {course.duration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
                      <Icon name="Users" size={12} />
                      <span className="font-golos">{course.students} участников</span>
                    </div>
                    <button className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{ background: "hsl(var(--blue))", color: "#fff" }}>
                      <Icon name="ArrowRight" size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="py-16 text-center">
                <p className="font-cormorant text-2xl" style={{ color: "hsl(var(--muted-foreground))" }}>Курсы не найдены</p>
                <p className="font-golos text-sm mt-2" style={{ color: "hsl(var(--muted-foreground))" }}>Попробуйте изменить фильтры</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 md:py-32" style={{ background: "hsl(var(--section-alt))" }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/5" }}>
                <img src={CENTER_IMAGE} alt="О центре" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsl(var(--section-alt)) 0%, transparent 55%)" }} />
              </div>
              <div className="absolute -bottom-5 -right-4 md:-right-8 p-5 rounded-2xl"
                style={{ background: "#fff", border: "1.5px solid hsl(var(--border))", boxShadow: "0 8px 32px hsl(210 82% 36% / 0.1)" }}>
                <div className="font-cormorant text-4xl font-light gradient-text">12+</div>
                <div className="font-golos text-xs mt-1 leading-snug" style={{ color: "hsl(var(--muted-foreground))" }}>лет в квантовой<br />педагогике</div>
              </div>
              <div className="absolute -top-5 -left-5 w-20 h-20 rounded-full animate-float"
                style={{ border: "1.5px solid hsl(var(--teal) / 0.35)", background: "hsl(var(--teal) / 0.05)" }} />
            </div>

            <div>
              <p className="section-label mb-4">О нас</p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light leading-tight mb-6">
                Наука о<br />развитии<br /><em className="gradient-text not-italic">человека</em>
              </h2>
              <div className="space-y-4 font-golos text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                <p>
                  Центр квантовой педагогики и психологии «Фуллерен» — это научно-образовательное пространство, объединяющее передовые исследования в области нейронауки, психологии и педагогики.
                </p>
                <p>
                  Наш подход основан на принципах квантовой психологии: каждый человек обладает уникальным потенциалом, и наша задача — создать условия для его раскрытия.
                </p>
                <p>
                  За 12 лет работы мы создали экосистему из более 50 авторских программ, которые помогли тысячам людей найти себя, стать лучшими педагогами и психологами.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-5 mt-8">
                {[
                  { icon: "FlaskConical", text: "Научно обоснованные методики" },
                  { icon: "Award", text: "Государственные лицензии и сертификаты" },
                  { icon: "Users", text: "Группы до 12 человек" },
                  { icon: "Monitor", text: "Очный и дистанционный форматы" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "hsl(var(--blue) / 0.1)" }}>
                      <Icon name={item.icon} fallback="Check" size={15} style={{ color: "hsl(var(--blue))" }} />
                    </div>
                    <span className="font-golos text-xs leading-snug" style={{ color: "hsl(var(--foreground) / 0.8)" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDERS ── */}
      <section id="founders" className="py-24 md:py-32" style={{ background: "hsl(var(--background))" }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Команда</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light">
              Основатели<br />Центра
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {FOUNDERS.map((founder, i) => (
              <div key={founder.name} className="card-hover group rounded-3xl overflow-hidden"
                style={{ background: "#fff", border: "1.5px solid hsl(var(--border))" }}>
                <div className="overflow-hidden relative" style={{ aspectRatio: "4/3" }}>
                  <img src={founder.image} alt={founder.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(255,255,255,0.95) 0%, transparent 55%)" }} />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center font-cormorant text-lg font-semibold"
                    style={{ background: "hsl(var(--blue))", color: "#fff" }}>
                    0{i + 1}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-cormorant text-2xl font-semibold mb-1">{founder.name}</h3>
                  <p className="font-golos text-xs font-semibold tracking-wide mb-3" style={{ color: "hsl(var(--teal))" }}>{founder.role}</p>
                  <p className="font-golos text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{founder.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 relative overflow-hidden" style={{ background: "hsl(var(--section-dark))" }}>
        <div className="orbital animate-spin-slow" style={{ width: 500, height: 500, top: "50%", left: "-150px", marginTop: -250 }} />
        <div className="orbital animate-spin-rev" style={{ width: 300, height: 300, top: "50%", right: "-80px", marginTop: -150 }} />
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <p className="section-label mb-4" style={{ color: "hsl(var(--teal-light))" }}>Начните сегодня</p>
          <h2 className="font-cormorant text-4xl md:text-6xl font-light mb-4 text-white">
            Раскройте свой<br />потенциал с Фуллерен
          </h2>
          <p className="font-golos text-sm mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
            Запишитесь на бесплатную консультацию — без обязательств
          </p>
          <button onClick={() => scrollTo("contacts")}
            className="px-10 py-4 rounded-full font-golos font-bold text-sm transition-all duration-300 hover:scale-105"
            style={{ background: "hsl(var(--teal))", color: "#fff", boxShadow: "0 4px 24px hsl(var(--teal) / 0.4)" }}>
            Получить консультацию
          </button>
        </div>
      </section>

      {/* ── CONTACTS ── */}
      <section id="contacts" className="py-24 md:py-32" style={{ background: "hsl(var(--section-alt))" }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <p className="section-label mb-4">Контакты</p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6">
                Свяжитесь<br />с нами
              </h2>
              <p className="font-golos text-sm leading-relaxed mb-8" style={{ color: "hsl(var(--muted-foreground))" }}>
                Готовы ответить на все вопросы о программах и записи. Первая консультация — бесплатно.
              </p>

              <div className="space-y-4">
                {[
                  { icon: "MapPin", label: "Адрес", value: "ул. Творческая, 42, Москва" },
                  { icon: "Phone", label: "Телефон", value: "+7 (495) 000-00-00" },
                  { icon: "Mail", label: "Email", value: "info@fullerenclub.ru" },
                  { icon: "Clock", label: "Режим работы", value: "Пн–Сб: 09:00 – 20:00" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "hsl(var(--blue) / 0.1)" }}>
                      <Icon name={item.icon} fallback="MapPin" size={16} style={{ color: "hsl(var(--blue))" }} />
                    </div>
                    <div>
                      <p className="font-golos text-xs mb-0.5" style={{ color: "hsl(var(--muted-foreground))" }}>{item.label}</p>
                      <p className="font-golos text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="p-8 rounded-3xl" style={{ background: "#fff", border: "1.5px solid hsl(var(--border))", boxShadow: "0 8px 40px hsl(210 82% 36% / 0.07)" }}>
              <h3 className="font-cormorant text-2xl font-semibold mb-6">Записаться на курс</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                {[
                  { label: "Ваше имя", type: "text", placeholder: "Имя Фамилия" },
                  { label: "Телефон", type: "tel", placeholder: "+7 (___) ___-__-__" },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="font-golos text-xs mb-1.5 block font-medium" style={{ color: "hsl(var(--muted-foreground))" }}>{field.label}</label>
                    <input type={field.type} placeholder={field.placeholder}
                      className="w-full px-4 py-3 rounded-xl text-sm font-golos outline-none transition-all duration-200 focus:ring-2"
                      style={{ background: "hsl(var(--section-alt))", border: "1.5px solid hsl(var(--border))", color: "hsl(var(--foreground))" }} />
                  </div>
                ))}
                <div>
                  <label className="font-golos text-xs mb-1.5 block font-medium" style={{ color: "hsl(var(--muted-foreground))" }}>Направление</label>
                  <select className="w-full px-4 py-3 rounded-xl text-sm font-golos outline-none appearance-none"
                    style={{ background: "hsl(var(--section-alt))", border: "1.5px solid hsl(var(--border))", color: "hsl(var(--foreground))" }}>
                    <option value="">Выберите направление</option>
                    {DIRECTIONS.map((d) => <option key={d.title}>{d.title}</option>)}
                  </select>
                </div>
                <div>
                  <label className="font-golos text-xs mb-1.5 block font-medium" style={{ color: "hsl(var(--muted-foreground))" }}>Сообщение (необязательно)</label>
                  <textarea placeholder="Ваш вопрос или пожелание..." rows={3} className="w-full px-4 py-3 rounded-xl text-sm font-golos outline-none resize-none"
                    style={{ background: "hsl(var(--section-alt))", border: "1.5px solid hsl(var(--border))", color: "hsl(var(--foreground))" }} />
                </div>
                <button type="submit" className="w-full py-3.5 rounded-xl font-golos font-semibold text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                  style={{ background: "hsl(var(--blue))", color: "#fff", boxShadow: "0 4px 16px hsl(var(--blue) / 0.25)" }}>
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8" style={{ borderTop: "1px solid hsl(var(--border))", background: "#fff" }}>
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="relative w-7 h-7 flex-shrink-0">
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
            <div>
              <div className="font-cormorant text-sm font-semibold gradient-text leading-none">Фуллерен</div>
              <div className="font-golos text-[9px] tracking-wide" style={{ color: "hsl(var(--muted-foreground))" }}>Центр квантовой педагогики и психологии</div>
            </div>
          </div>
          <p className="font-golos text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
            © 2024 ЦКПиП Фуллерен. Все права защищены.
          </p>
          <div className="flex gap-5">
            {["VK", "Telegram", "YouTube"].map((s) => (
              <a key={s} href="#" className="font-golos text-xs transition-colors duration-200"
                style={{ color: "hsl(var(--muted-foreground))" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(var(--blue))")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(var(--muted-foreground))")}>
                {s}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}