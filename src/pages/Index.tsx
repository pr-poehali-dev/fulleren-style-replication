import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const CENTER_IMAGE = "https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/files/4e6db7fc-54e4-43f6-95a3-6cafda6eb9fe.jpg";
const FOUNDER_IMAGE = "https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/files/286caf21-0e46-4b31-8ff2-33eba94bccd7.jpg";

const COURSES = [
  { id: 1, title: "Современная живопись", category: "Изобразительное искусство", level: "Начинающий", duration: "3 месяца", students: 128, tag: "Хит" },
  { id: 2, title: "Цифровая иллюстрация", category: "Дизайн", level: "Средний", duration: "2 месяца", students: 94, tag: "Новый" },
  { id: 3, title: "Скульптура и форма", category: "Изобразительное искусство", level: "Продвинутый", duration: "4 месяца", students: 42, tag: null },
  { id: 4, title: "Графический дизайн", category: "Дизайн", level: "Начинающий", duration: "2 месяца", students: 210, tag: "Хит" },
  { id: 5, title: "Актёрское мастерство", category: "Театр", level: "Начинающий", duration: "6 месяцев", students: 76, tag: null },
  { id: 6, title: "Режиссура и сторителлинг", category: "Театр", level: "Средний", duration: "3 месяца", students: 38, tag: "Новый" },
  { id: 7, title: "Музыкальная теория", category: "Музыка", level: "Начинающий", duration: "4 месяца", students: 155, tag: null },
  { id: 8, title: "Продюсирование треков", category: "Музыка", level: "Продвинутый", duration: "3 месяца", students: 67, tag: "Хит" },
];

const DIRECTIONS = [
  { icon: "Palette", title: "Изобразительное искусство", desc: "Живопись, графика, скульптура — от классики до современного арта", count: 12 },
  { icon: "Layers", title: "Дизайн", desc: "Графический, UX/UI, иллюстрация, типографика и визуальные коммуникации", count: 9 },
  { icon: "Drama", title: "Театр и кино", desc: "Актёрское мастерство, режиссура, сторителлинг и кинопроизводство", count: 7 },
  { icon: "Music", title: "Музыка", desc: "Вокал, инструменты, теория музыки, продюсирование и звукорежиссура", count: 11 },
  { icon: "Camera", title: "Фотография", desc: "Художественная, репортажная, коммерческая фотография и ретушь", count: 6 },
  { icon: "PenTool", title: "Литература", desc: "Творческое письмо, сценаристика, поэзия и нарратив", count: 5 },
];

const CATEGORIES = ["Все", "Изобразительное искусство", "Дизайн", "Театр", "Музыка"];
const LEVELS = ["Все уровни", "Начинающий", "Средний", "Продвинутый"];

const FOUNDERS = [
  {
    name: "Анна Воронова",
    role: "Основатель и арт-директор",
    bio: "Художник с 20-летним опытом, выпускница Санкт-Петербургской академии художеств. Создала Центр в 2014 году с верой в то, что творчество — это язык, доступный каждому.",
    image: FOUNDER_IMAGE,
  },
  {
    name: "Михаил Соколов",
    role: "Со-основатель, педагог",
    bio: "Режиссёр и театральный педагог, ученик школы Станиславского. Автор уникальной методики творческого развития взрослых через телесные практики и импровизацию.",
    image: FOUNDER_IMAGE,
  },
];

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [activeLevel, setActiveLevel] = useState("Все уровни");
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const cursorDot = useRef<HTMLDivElement>(null);
  const cursorRing = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorDot.current) {
        cursorDot.current.style.left = e.clientX + "px";
        cursorDot.current.style.top = e.clientY + "px";
      }
      setTimeout(() => {
        if (cursorRing.current) {
          cursorRing.current.style.left = e.clientX + "px";
          cursorRing.current.style.top = e.clientY + "px";
        }
      }, 80);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
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
      {/* Custom cursor */}
      <div ref={cursorDot} className="cursor-dot hidden md:block" />
      <div ref={cursorRing} className="cursor-ring hidden md:block" />

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between"
        style={{ backdropFilter: "blur(20px)", background: "hsl(20 10% 6% / 0.85)", borderBottom: "1px solid hsl(var(--border))" }}>
        <button onClick={() => scrollTo("home")} className="font-cormorant text-xl font-semibold tracking-wide">
          <span className="gradient-text">Центр</span>
          <span style={{ color: "hsl(var(--foreground) / 0.6)", marginLeft: "4px" }}>Творчества</span>
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className="text-sm font-golos tracking-wide transition-all duration-300 relative group"
                style={{ color: activeSection === item.id ? "hsl(var(--orange))" : "hsl(var(--muted-foreground))" }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px bg-[hsl(28,95%,55%)] transition-all duration-300 group-hover:w-full w-0" />
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollTo("contacts")}
          className="hidden md:block px-5 py-2 rounded-full text-sm font-semibold font-golos transition-all duration-300 hover:scale-105"
          style={{ background: "hsl(var(--orange))", color: "hsl(20 10% 6%)" }}
        >
          Записаться
        </button>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ color: "hsl(var(--foreground))" }}>
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col pt-20 px-6 py-8"
          style={{ background: "hsl(20 10% 6% / 0.97)", backdropFilter: "blur(30px)" }}>
          {navItems.map((item, i) => (
            <button key={item.id} onClick={() => scrollTo(item.id)}
              className="font-cormorant text-3xl font-light py-4 text-left animate-fade-in-up"
              style={{ borderBottom: "1px solid hsl(var(--border))", animationDelay: `${i * 0.07}s`, opacity: 0, color: "hsl(var(--foreground))" }}>
              {item.label}
            </button>
          ))}
          <button onClick={() => scrollTo("contacts")}
            className="mt-8 px-6 py-3 rounded-full font-semibold font-golos text-lg"
            style={{ background: "hsl(var(--orange))", color: "hsl(20 10% 6%)" }}>
            Записаться на курс
          </button>
        </div>
      )}

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden noise">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/files/f361bc78-d73c-40ca-9bc9-3d09baa6cda9.jpg"
            alt="hero"
            className="w-full h-full object-cover"
            style={{ opacity: 0.2 }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(20 10% 6%) 40%, hsl(20 10% 6% / 0.6) 100%)" }} />
        </div>

        {/* Floating circles */}
        <div className="absolute top-32 right-16 md:right-32 z-10 animate-float pointer-events-none">
          <div className="w-40 h-40 md:w-64 md:h-64 rounded-full" style={{ border: "1px solid hsl(28 95% 55% / 0.3)" }} />
        </div>
        <div className="absolute bottom-32 right-8 md:right-64 z-10 pointer-events-none animate-float" style={{ animationDelay: "2s" }}>
          <div className="w-20 h-20 rounded-full" style={{ border: "1px solid hsl(28 95% 55% / 0.4)", background: "hsl(28 95% 55% / 0.05)" }} />
        </div>
        <div className="absolute top-1/2 right-4 md:right-16 -translate-y-1/2 z-10 animate-spin-slow opacity-20 pointer-events-none">
          <div className="w-80 h-80 rounded-full" style={{ background: "conic-gradient(from 0deg, transparent 0deg, hsl(28 95% 55%) 30deg, transparent 60deg)" }} />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 pt-28 pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-golos font-semibold tracking-widest uppercase animate-fade-in-up"
              style={{ border: "1px solid hsl(28 95% 55% / 0.4)", color: "hsl(var(--orange))", background: "hsl(28 95% 55% / 0.08)" }}>
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "hsl(var(--orange))" }} />
              Образовательный центр
            </div>

            <h1 className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] mb-6 animate-fade-in-up delay-100" style={{ opacity: 0 }}>
              Твори.<br />
              <em className="gradient-text not-italic">Открывай.</em><br />
              Расцветай.
            </h1>

            <p className="font-golos text-base md:text-lg max-w-xl mb-10 animate-fade-in-up delay-200" style={{ opacity: 0, color: "hsl(var(--muted-foreground))" }}>
              Образовательная платформа, где профессиональные художники, музыканты и педагоги помогают раскрыть твой творческий потенциал.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300" style={{ opacity: 0 }}>
              <button onClick={() => scrollTo("directions")}
                className="px-8 py-3.5 rounded-full font-golos font-semibold text-sm transition-all duration-300 hover:scale-105 animate-pulse-glow"
                style={{ background: "hsl(var(--orange))", color: "hsl(20 10% 6%)" }}>
                Смотреть курсы
              </button>
              <button onClick={() => scrollTo("about")}
                className="px-8 py-3.5 rounded-full font-golos font-medium text-sm transition-all duration-300"
                style={{ border: "1px solid hsl(var(--border))", color: "hsl(var(--muted-foreground))" }}>
                О центре
              </button>
            </div>

            <div className="flex flex-wrap gap-10 mt-16 pt-8 animate-fade-in-up delay-400" style={{ opacity: 0, borderTop: "1px solid hsl(var(--border))" }}>
              {[["800+", "Студентов"], ["50+", "Курсов"], ["20+", "Педагогов"], ["10", "Лет опыта"]].map(([num, label]) => (
                <div key={label}>
                  <div className="font-cormorant text-3xl md:text-4xl font-light gradient-text">{num}</div>
                  <div className="font-golos text-xs mt-0.5 tracking-wide" style={{ color: "hsl(var(--muted-foreground))" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in-up delay-600" style={{ opacity: 0 }}>
          <span className="font-golos text-xs tracking-widest uppercase" style={{ color: "hsl(var(--muted-foreground))" }}>Скролл</span>
          <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, hsl(28 95% 55% / 0.5), transparent)" }} />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="py-4 overflow-hidden" style={{ background: "hsl(var(--orange))" }}>
        <div className="marquee-inner">
          {Array.from({ length: 4 }).flatMap((_, bi) =>
            ["Живопись", "Дизайн", "Музыка", "Театр", "Фотография", "Скульптура", "Иллюстрация", "Вокал"].map((t, ti) => (
              <span key={`${bi}-${ti}`} className="font-cormorant text-lg font-medium mx-6 whitespace-nowrap" style={{ color: "hsl(20 10% 6%)" }}>
                {t} ·
              </span>
            ))
          )}
        </div>
      </div>

      {/* DIRECTIONS */}
      <section id="directions" className="py-24 md:py-32 relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 relative">
            <span className="section-num top-0 left-0">01</span>
            <div className="relative z-10">
              <p className="font-golos text-xs tracking-widest uppercase mb-3" style={{ color: "hsl(var(--orange))" }}>Направления</p>
              <h2 className="font-cormorant text-4xl md:text-6xl font-light leading-tight">
                Наши<br />направления
              </h2>
            </div>
            <p className="font-golos text-sm max-w-sm relative z-10" style={{ color: "hsl(var(--muted-foreground))" }}>
              Шесть творческих дисциплин, в каждой из которых вас ждут опытные педагоги и живая атмосфера
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {DIRECTIONS.map((dir) => (
              <div key={dir.title}
                className="card-hover group p-7 rounded-2xl relative overflow-hidden cursor-pointer"
                style={{ background: "hsl(20 8% 14%)", border: "1px solid hsl(var(--border))" }}>
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "hsl(28 95% 55% / 0.08)", transform: "translate(30%, -30%)" }} />
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "hsl(28 95% 55% / 0.15)" }}>
                  <Icon name={dir.icon} fallback="Palette" size={20} style={{ color: "hsl(var(--orange))" }} />
                </div>
                <h3 className="font-cormorant text-xl font-medium mb-2">{dir.title}</h3>
                <p className="font-golos text-sm leading-relaxed mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>{dir.desc}</p>
                <span className="font-golos text-xs" style={{ color: "hsl(28 95% 55% / 0.8)" }}>{dir.count} курсов</span>
              </div>
            ))}
          </div>

          {/* Course catalog */}
          <div className="pt-8" style={{ borderTop: "1px solid hsl(var(--border))" }}>
            <h3 className="font-cormorant text-3xl md:text-4xl font-light mb-8">Каталог курсов</h3>

            <div className="flex flex-wrap gap-3 mb-4">
              {CATEGORIES.map((cat) => (
                <button key={cat} className={`filter-chip ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}>
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 mb-10">
              {LEVELS.map((lvl) => (
                <button key={lvl} className={`filter-chip ${activeLevel === lvl ? "active" : ""}`}
                  onClick={() => setActiveLevel(lvl)}>
                  {lvl}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredCourses.map((course) => (
                <div key={course.id}
                  className="card-hover group p-5 rounded-2xl relative"
                  style={{ background: "hsl(20 8% 14%)", border: "1px solid hsl(var(--border))" }}>
                  {course.tag && (
                    <span className="absolute top-4 right-4 text-xs font-golos font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: "hsl(var(--orange))", color: "hsl(20 10% 6%)" }}>
                      {course.tag}
                    </span>
                  )}
                  <div className="mb-3">
                    <span className="text-xs font-golos tracking-wide" style={{ color: "hsl(28 95% 55% / 0.8)" }}>{course.category}</span>
                  </div>
                  <h4 className="font-cormorant text-lg font-medium mb-3 leading-snug pr-12">{course.title}</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs font-golos px-2 py-1 rounded-lg" style={{ background: "hsl(var(--border))", color: "hsl(var(--muted-foreground))" }}>
                      {course.level}
                    </span>
                    <span className="text-xs font-golos px-2 py-1 rounded-lg" style={{ background: "hsl(var(--border))", color: "hsl(var(--muted-foreground))" }}>
                      {course.duration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
                      <Icon name="Users" size={12} />
                      <span className="font-golos">{course.students} студентов</span>
                    </div>
                    <button className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{ background: "hsl(var(--orange))", color: "hsl(20 10% 6%)" }}>
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

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32 relative overflow-hidden" style={{ background: "hsl(20 8% 11%)" }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/5" }}>
                <img src={CENTER_IMAGE} alt="О центре" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsl(20 8% 11%) 0%, transparent 50%)" }} />
              </div>
              <div className="absolute -bottom-6 -right-4 md:-right-8 p-5 rounded-2xl"
                style={{ background: "hsl(20 8% 14%)", border: "1px solid hsl(var(--border))" }}>
                <div className="font-cormorant text-4xl font-light gradient-text">10+</div>
                <div className="font-golos text-xs mt-1 leading-snug" style={{ color: "hsl(var(--muted-foreground))" }}>лет в сфере<br />творческого образования</div>
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full animate-float" style={{ border: "1px solid hsl(28 95% 55% / 0.4)" }} />
            </div>

            <div className="relative">
              <p className="font-golos text-xs tracking-widest uppercase mb-4" style={{ color: "hsl(var(--orange))" }}>О нас</p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light leading-tight mb-6">
                Место, где<br />рождается<br /><em className="gradient-text not-italic">искусство</em>
              </h2>
              <div className="space-y-4 font-golos text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                <p>Центр Творческого Развития — это живое пространство, где встречаются люди разных возрастов и профессий, объединённые желанием творить.</p>
                <p>Мы убеждены: творческий потенциал есть у каждого. Задача наших педагогов — не навязать шаблоны, а помочь найти собственный голос и стиль.</p>
                <p>За 10 лет мы выпустили более 800 студентов, среди которых профессиональные художники, дизайнеры, музыканты и просто счастливые люди, нашедшие своё хобби.</p>
              </div>

              <div className="grid grid-cols-2 gap-5 mt-8">
                {[
                  { icon: "MapPin", text: "Современные студии в центре города" },
                  { icon: "Star", text: "Авторские методики от практиков" },
                  { icon: "Users", text: "Малые группы до 10 человек" },
                  { icon: "Zap", text: "Онлайн и офлайн форматы" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "hsl(28 95% 55% / 0.12)" }}>
                      <Icon name={item.icon} fallback="Star" size={15} style={{ color: "hsl(var(--orange))" }} />
                    </div>
                    <span className="font-golos text-xs leading-snug" style={{ color: "hsl(var(--foreground) / 0.8)" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section id="founders" className="py-24 md:py-32 relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="font-golos text-xs tracking-widest uppercase mb-3" style={{ color: "hsl(var(--orange))" }}>Команда</p>
            <h2 className="font-cormorant text-4xl md:text-6xl font-light">
              Основатели<br />Центра
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {FOUNDERS.map((founder, i) => (
              <div key={founder.name}
                className="card-hover group rounded-3xl overflow-hidden"
                style={{ background: "hsl(20 8% 14%)", border: "1px solid hsl(var(--border))" }}>
                <div className="overflow-hidden relative" style={{ aspectRatio: "4/3" }}>
                  <img src={founder.image} alt={founder.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsl(20 8% 14%) 0%, transparent 60%)" }} />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center font-cormorant text-lg font-light"
                    style={{ background: "hsl(var(--orange))", color: "hsl(20 10% 6%)" }}>
                    0{i + 1}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-cormorant text-2xl font-medium mb-1">{founder.name}</h3>
                  <p className="font-golos text-xs tracking-wide mb-3" style={{ color: "hsl(var(--orange))" }}>{founder.role}</p>
                  <p className="font-golos text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{founder.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden" style={{ background: "hsl(var(--orange))" }}>
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full opacity-20"
          style={{ background: "hsl(20 10% 6%)", transform: "translate(-30%, -30%)" }} />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-20"
          style={{ background: "hsl(20 10% 6%)", transform: "translate(30%, 30%)" }} />
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <h2 className="font-cormorant text-4xl md:text-6xl font-light mb-4" style={{ color: "hsl(20 10% 6%)" }}>
            Начни своё<br />творческое путешествие
          </h2>
          <p className="font-golos text-sm mb-8" style={{ color: "hsl(20 10% 6% / 0.7)" }}>
            Запишись на бесплатный пробный урок — без обязательств
          </p>
          <button onClick={() => scrollTo("contacts")}
            className="px-10 py-4 rounded-full font-golos font-bold text-sm transition-all duration-300 hover:scale-105"
            style={{ background: "hsl(20 10% 6%)", color: "hsl(var(--orange))" }}>
            Записаться бесплатно
          </button>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 md:py-32" style={{ background: "hsl(20 8% 11%)" }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <p className="font-golos text-xs tracking-widest uppercase mb-4" style={{ color: "hsl(var(--orange))" }}>Контакты</p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6">
                Свяжитесь<br />с нами
              </h2>
              <p className="font-golos text-sm leading-relaxed mb-8" style={{ color: "hsl(var(--muted-foreground))" }}>
                Готовы ответить на все ваши вопросы. Запишитесь на бесплатную консультацию или просто напишите нам.
              </p>

              <div className="space-y-4">
                {[
                  { icon: "MapPin", label: "Адрес", value: "ул. Творческая, 42, Москва" },
                  { icon: "Phone", label: "Телефон", value: "+7 (495) 000-00-00" },
                  { icon: "Mail", label: "Email", value: "hello@centr-tvorchest.ru" },
                  { icon: "Clock", label: "Режим работы", value: "Пн–Сб: 10:00 – 21:00" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "hsl(28 95% 55% / 0.12)" }}>
                      <Icon name={item.icon} fallback="MapPin" size={16} style={{ color: "hsl(var(--orange))" }} />
                    </div>
                    <div>
                      <p className="font-golos text-xs mb-0.5" style={{ color: "hsl(var(--muted-foreground))" }}>{item.label}</p>
                      <p className="font-golos text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl" style={{ background: "hsl(20 8% 14%)", border: "1px solid hsl(var(--border))" }}>
              <h3 className="font-cormorant text-2xl font-medium mb-6">Записаться на курс</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="font-golos text-xs mb-1.5 block" style={{ color: "hsl(var(--muted-foreground))" }}>Ваше имя</label>
                  <input type="text" placeholder="Имя Фамилия"
                    className="w-full px-4 py-3 rounded-xl text-sm font-golos outline-none transition-all duration-200"
                    style={{ background: "hsl(20 10% 6%)", border: "1px solid hsl(var(--border))", color: "hsl(var(--foreground))" }} />
                </div>
                <div>
                  <label className="font-golos text-xs mb-1.5 block" style={{ color: "hsl(var(--muted-foreground))" }}>Телефон</label>
                  <input type="tel" placeholder="+7 (___) ___-__-__"
                    className="w-full px-4 py-3 rounded-xl text-sm font-golos outline-none"
                    style={{ background: "hsl(20 10% 6%)", border: "1px solid hsl(var(--border))", color: "hsl(var(--foreground))" }} />
                </div>
                <div>
                  <label className="font-golos text-xs mb-1.5 block" style={{ color: "hsl(var(--muted-foreground))" }}>Направление</label>
                  <select className="w-full px-4 py-3 rounded-xl text-sm font-golos outline-none"
                    style={{ background: "hsl(20 10% 6%)", border: "1px solid hsl(var(--border))", color: "hsl(var(--foreground))" }}>
                    <option value="">Выберите направление</option>
                    {DIRECTIONS.map((d) => <option key={d.title}>{d.title}</option>)}
                  </select>
                </div>
                <div>
                  <label className="font-golos text-xs mb-1.5 block" style={{ color: "hsl(var(--muted-foreground))" }}>Сообщение (необязательно)</label>
                  <textarea placeholder="Расскажите о себе и своих целях..." rows={3}
                    className="w-full px-4 py-3 rounded-xl text-sm font-golos outline-none resize-none"
                    style={{ background: "hsl(20 10% 6%)", border: "1px solid hsl(var(--border))", color: "hsl(var(--foreground))" }} />
                </div>
                <button type="submit"
                  className="w-full py-3.5 rounded-xl font-golos font-semibold text-sm transition-all duration-300 hover:scale-[1.02]"
                  style={{ background: "hsl(var(--orange))", color: "hsl(20 10% 6%)" }}>
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8" style={{ borderTop: "1px solid hsl(var(--border))" }}>
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-cormorant text-lg font-medium">
            <span className="gradient-text">Центр</span>
            <span className="ml-1" style={{ color: "hsl(var(--muted-foreground))" }}>Творчества</span>
          </div>
          <p className="font-golos text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
            © 2024 Центр Творческого Развития. Все права защищены.
          </p>
          <div className="flex gap-4">
            {["Instagram", "VK", "Telegram"].map((s) => (
              <button key={s} className="font-golos text-xs transition-colors duration-200"
                style={{ color: "hsl(var(--muted-foreground))" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(var(--orange))")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(var(--muted-foreground))")}>
                {s}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}