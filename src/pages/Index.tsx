import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const CENTER_IMAGE = "https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/files/4e6db7fc-54e4-43f6-95a3-6cafda6eb9fe.jpg";
const FOUNDER_IMAGE = "https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/files/286caf21-0e46-4b31-8ff2-33eba94bccd7.jpg";



const DIRECTIONS = [
  { icon: "Brain", title: "Квантовая психология", desc: "Современные методы работы с сознанием, мышлением и эмоциональным интеллектом", count: 11, bg: "https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/bucket/48d26136-c533-4c2a-978b-a2c70e3cfbff.png" },
  { icon: "GraduationCap", title: "Инновационная педагогика", desc: "Передовые подходы к обучению и воспитанию детей и взрослых", count: 9, bg: "https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/bucket/2a47d22c-3843-4ffa-ab00-9e0b6df80822.png" },
  { icon: "Heart", title: "Арт-терапия", desc: "Исцеление и развитие через творчество, рисунок, музыку и движение", count: 7, bg: "https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/bucket/808eee28-63fb-4c22-9341-db1d76e18e40.png" },
  { icon: "Users", title: "Семейные практики", desc: "Гармония в семье, детско-родительские отношения, системные расстановки", count: 8, bg: "https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/bucket/8064f6c5-0140-494c-9653-5ff4fcbee61c.jpg" },
  { icon: "Sparkles", title: "Коучинг", desc: "Личностный рост, раскрытие потенциала и достижение жизненных целей", count: 6, bg: "https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/bucket/5efdd7f9-fc3f-48cf-b3e7-9324838045c0.png" },
  { icon: "Atom", title: "Квантовые технологии", desc: "Передовые научные методы саморазвития и трансформации личности", count: 5, bg: "https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/bucket/8aa13d10-72a9-4f3f-99de-6c6a095a1ba3.png" },
  { icon: "BookOpen", title: "Медитация и осознанность", desc: "Практики управления вниманием, снижения стресса и глубокого самопознания", count: 4, bg: "https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/bucket/d8ce199e-0b41-4efd-a7d1-ee84d8f75640.png" },
];

const CLUBS = [
  { icon: "FlaskConical", title: "Клуб квантовых практиков", desc: "Закрытое сообщество для тех, кто уже прошёл базовые программы центра. Ежемесячные встречи, разборы случаев и обмен опытом.", members: 84, bg: "https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/bucket/2660bb1c-4f22-45e9-bdd3-e174569dcfb4.png" },
  { icon: "TreePine", title: "Родительский клуб", desc: "Пространство для родителей, которые хотят строить осознанные отношения с детьми, опираясь на нейронауку и квантовую педагогику.", members: 120, bg: "https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/bucket/af3294b0-de3a-4622-8180-0d6e976f926b.png" },
  { icon: "Compass", title: "Клуб личной трансформации", desc: "Интенсивное сообщество для тех, кто находится в процессе глубоких изменений: работа с идентичностью, целями и жизненным смыслом.", members: 57, bg: "https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/bucket/03c49ab7-8ac6-48c9-928b-a7e7f61fb947.png" },
];

const MEETUPS = [
  { icon: "Mic", title: "Открытые лекции", desc: "Бесплатные публичные лекции от ведущих специалистов центра и приглашённых экспертов — каждый второй вторник месяца.", date: "Каждые 2 недели", format: "Онлайн / Очно", bg: "https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/bucket/72fd8e60-d0ef-47fd-9d56-a1368875f9f0.jpg" },
  { icon: "MessageCircle", title: "Супервизионные группы", desc: "Профессиональные встречи для педагогов и психологов: разбор сложных случаев, обмен методиками, поддержка коллег.", date: "Еженедельно", format: "Очно", bg: "https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/bucket/5b571cfc-8d26-4054-923e-01b51e09be56.png" },
  { icon: "Sunrise", title: "Утренние практики", desc: "Еженедельные сессии по квантовым медитациям и телесным практикам в малых группах. Идеально для начала недели.", date: "По понедельникам", format: "Очно / Онлайн", bg: "https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/bucket/bb53d7fe-1679-482b-8b1e-625eccaf437e.png" },
  { icon: "Globe", title: "Международный форум", desc: "Ежегодный форум центра с участием зарубежных специалистов в области нейронауки, квантовой психологии и педагогики.", date: "1 раз в год", format: "Очно", bg: "https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/bucket/eab79b53-e3b9-4283-84b9-ef1c2da76180.png" },
];


const FOUNDERS = [
  {
    name: "Анна Воронова",
    role: "Основатель и научный директор",
    bio: "Доктор психологических наук, практикующий психолог с 20-летним стажем. Создала Центр в 2012 году, объединив передовые научные исследования и практики квантовой психологии.",
    image: "https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/bucket/84789e52-45cd-4247-b1bd-1eaa959488ab.png",
    objectPosition: "center top",
  },
  {
    name: "Михаил Соколов",
    role: "Со-основатель, педагог-новатор",
    bio: "Кандидат педагогических наук, автор уникальной методики нейропедагогики. Более 15 лет разрабатывает системы обучения, основанные на последних открытиях в области нейронауки.",
    image: "https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/bucket/73a0e2b4-a082-4de9-a9d7-c67fd3965043.png",
    objectPosition: "center center",
  },
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

  const navItems = [
    { id: "home", label: "Главная" },
    { id: "directions", label: "Курсы" },
    { id: "meetups", label: "Встречи" },
    { id: "clubs", label: "Сообщества" },
    { id: "about", label: "О Центре" },
    { id: "founders", label: "Основатели" },
    { id: "contacts", label: "Контакты" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "hsl(var(--background))", color: "hsl(var(--foreground))" }}>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-500"
        style={{
          padding: scrolled ? "10px 40px" : "18px 40px",
          background: scrolled ? "rgba(10,10,14,0.96)" : "rgba(10,10,14,0.55)",
          backdropFilter: "blur(20px)",
          borderBottom: scrolled ? "1px solid rgba(232,213,176,0.12)" : "1px solid rgba(232,213,176,0.06)",
        }}
      >
        {/* Logo */}
        <button onClick={() => scrollTo("home")} className="flex items-center gap-3 group">
          <div className="relative w-7 h-7 flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
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
          </div>
          <div className="leading-tight">
            <div className="font-cormorant font-light tracking-[0.2em] uppercase text-sm leading-none"
              style={{ color: "rgb(232,213,176)" }}>Фуллерен</div>
            <div className="font-golos text-[9px] tracking-[0.15em] uppercase mt-0.5"
              style={{ color: "rgba(232,213,176,0.45)" }}>Центр поддержки семьи</div>
          </div>
        </button>

        {/* Desktop nav */}
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

        {/* Divider + mobile trigger */}
        <div className="hidden md:block w-px h-5" style={{ background: "rgba(232,213,176,0.2)" }} />

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ color: "rgb(232,213,176)" }}>
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col justify-center px-10"
          style={{ background: "rgba(8,8,12,0.97)", backdropFilter: "blur(24px)" }}>
          {/* Decorative line */}
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

      {/* ── HERO ── */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/bucket/16d29147-af1f-494a-ad66-5570977b1b4b.jpg"
            alt="quantum background"
            className="w-full h-full object-cover"
          />
          {/* Darkening overlay */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(8,15,35,0.82) 0%, rgba(8,15,35,0.65) 55%, rgba(8,15,35,0.4) 100%)" }} />
        </div>

        <div className="container mx-auto px-6 md:px-12 pt-28 pb-20 relative z-10">
          <div className="max-w-xl">
            <div
              className="inline-flex flex-col items-center gap-1 mb-7 px-4 py-2 rounded-full text-xs font-golos font-semibold tracking-widest uppercase animate-fade-in-up md:flex-row md:gap-2"
              style={{ border: "1.5px solid rgba(232,213,176,0.4)", color: "rgb(232,213,176)", background: "rgba(232,213,176,0.08)" }}
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "rgb(232,213,176)" }} />
                Центр поддержки семьи
              </span>
              <span className="md:before:content-['·'] md:before:mr-2">с 2017 года</span>
            </div>

            <h1 className="font-cormorant font-light leading-[1.05] mb-3 animate-fade-in-up delay-100 text-white" style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)", opacity: 0 }}>
              Центр квантовой<br />
              педагогики и психологии
            </h1>

            <div className="animate-fade-in-up delay-150 mb-5" style={{ opacity: 0 }}>
              <span
                className="font-cormorant font-light tracking-[0.18em] uppercase"
                style={{
                  fontSize: "clamp(2.6rem, 7vw, 6rem)",
                  background: "linear-gradient(130deg, #e8d5b0 0%, #f5e6cc 40%, #c9a96e 70%, #e8d5b0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "block",
                  lineHeight: 1.1,
                  letterSpacing: "0.18em",
                  textShadow: "none",
                }}
              >
                Фуллерен
              </span>
              <div style={{ height: "1.5px", width: "100%", maxWidth: "340px", background: "linear-gradient(90deg, rgba(232,213,176,0.8) 0%, rgba(201,169,110,0.4) 60%, transparent 100%)", marginTop: "6px" }} />
            </div>

            <p className="font-golos text-base md:text-lg max-w-lg mb-10 animate-fade-in-up delay-200 leading-relaxed" style={{ opacity: 0, color: "rgba(255,255,255,0.65)" }}>
              Передовые методы развития личности, основанные на современной нейронауке, психологии и инновационной педагогике.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300" style={{ opacity: 0 }}>
              <button
                onClick={() => scrollTo("about")}
                className="px-8 py-3.5 rounded-full font-golos font-medium text-sm transition-all duration-300"
                style={{ border: "1.5px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.75)", backdropFilter: "blur(8px)" }}
              >
                О центре
              </button>
            </div>

            {/* Stats */}
            <div className="mt-14 pt-8 animate-fade-in-up delay-400" style={{ opacity: 0, borderTop: "1px solid rgba(232,213,176,0.15)" }}>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-px" style={{ background: "rgba(232,213,176,0.08)", borderRadius: "2px" }}>
                {[
                  ["500+", "Родительских встреч"],
                  ["25+", "Выступлений"],
                  ["15+", "Мероприятий"],
                  ["14+", "Направлений"],
                  ["9+", "Лет опыта"],
                  ["3+", "Сообществ"],
                ].map(([num, label]) => (
                  <div key={label} className="flex flex-col items-center justify-center text-center px-4 py-5 transition-all duration-300 hover:bg-white/5"
                    style={{ background: "rgba(10,10,14,0.4)" }}>
                    <div className="font-cormorant text-2xl md:text-3xl font-light leading-none mb-1.5"
                      style={{ background: "linear-gradient(135deg, rgb(232,213,176), rgb(201,169,110))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                      {num}
                    </div>
                    <div className="font-golos text-[10px] tracking-[0.1em] uppercase leading-tight"
                      style={{ color: "rgba(255,255,255,0.45)" }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in-up delay-600" style={{ opacity: 0 }}>
          <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, hsl(var(--blue) / 0.4), transparent)" }} />
        </div>
      </section>

      <div className="flex items-center justify-center py-0" aria-hidden>
        <div className="h-px w-full max-w-5xl mx-12" style={{ background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.35), rgba(232,213,176,0.6), rgba(201,169,110,0.35), transparent)" }} />
      </div>

      {/* ── MEETUPS ── */}
      <section className="py-24 md:py-32" style={{ background: "hsl(var(--section-alt))" }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-14">
            <h2 className="font-cormorant text-4xl md:text-5xl font-light leading-tight mb-10">
              Встречи
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  label: "для родителей",
                  text: "Каждую неделю у нас организуются живые встречи с родителями по темам воспитания и образования, с возможностью познакомиться с нами ближе, в формате живых дискуссий.",
                },
                {
                  label: "для женщин",
                  text: "Также мы проводим тематические встречи для женщин и организуем встречи с приездом спикеров из других регионов по разным направлениям.",
                },
                {
                  label: "для педагогов",
                  text: "Встречи для педагогов проходят в формате онлайн и офлайн. С анонсом всех встреч на ближайшее время вы можете познакомиться в этом разделе.",
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-px flex-shrink-0 mt-1 self-stretch" style={{ background: "linear-gradient(to bottom, hsl(var(--teal)), transparent)" }} />
                  <div>
                    <div className="font-golos text-xs font-semibold tracking-[0.14em] uppercase mb-2" style={{ color: "hsl(var(--teal))" }}>
                      {item.label}
                    </div>
                    <p className="font-golos text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {MEETUPS.map((meetup) => (
              <div
                key={meetup.title}
                className="card-hover group p-6 rounded-2xl relative overflow-hidden flex flex-col"
                style={{ border: "1.5px solid rgba(255,255,255,0.1)", minHeight: 280 }}
              >
                <div
                  className="absolute inset-0 z-0"
                  style={{
                    backgroundImage: `url(${meetup.bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 z-0" style={{ background: "rgba(0,0,0,0.72)" }} />
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(6px)" }}>
                    <Icon name={meetup.icon} fallback="Calendar" size={22} style={{ color: "#fff" }} />
                  </div>
                  <h3 className="font-cormorant text-xl font-semibold mb-2" style={{ color: "#fff" }}>{meetup.title}</h3>
                  <p className="font-golos text-sm leading-relaxed mb-5 flex-1" style={{ color: "rgba(255,255,255,0.65)" }}>{meetup.desc}</p>
                  <div className="space-y-1.5 mt-auto">
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={11} style={{ color: "rgba(255,255,255,0.5)" }} />
                      <span className="font-golos text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{meetup.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" size={11} style={{ color: "rgba(255,255,255,0.5)" }} />
                      <span className="font-golos text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{meetup.format}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center py-0" aria-hidden>
        <div className="h-px w-full max-w-5xl mx-12" style={{ background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.35), rgba(232,213,176,0.6), rgba(201,169,110,0.35), transparent)" }} />
      </div>

      {/* ── CLUBS ── */}
      <section className="py-24 md:py-32" style={{ background: "hsl(var(--background))" }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>

              <h2 className="font-cormorant text-4xl md:text-5xl font-light leading-tight">
                Клубы и<br />сообщества
              </h2>
            </div>
            <p className="font-golos text-sm max-w-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
              Онлайн клубы для женщин, родителей и педагогов, в которых можно найти поддержку сообщества и познакомиться с материалами живых и онлайн встреч
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {CLUBS.map((club) => (
              <div
                key={club.title}
                className="card-hover group p-7 rounded-2xl relative overflow-hidden flex flex-col"
                style={{ border: "1.5px solid rgba(255,255,255,0.1)", minHeight: 260 }}
              >
                <div
                  className="absolute inset-0 z-0"
                  style={{
                    backgroundImage: `url(${club.bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 z-0" style={{ background: "rgba(0,0,0,0.72)" }} />
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(6px)" }}>
                    <Icon name={club.icon} fallback="Users" size={22} style={{ color: "#fff" }} />
                  </div>
                  <h3 className="font-cormorant text-xl font-semibold mb-2" style={{ color: "#fff" }}>{club.title}</h3>
                  <p className="font-golos text-sm leading-relaxed mb-4 flex-1" style={{ color: "rgba(255,255,255,0.65)" }}>{club.desc}</p>
                  <div className="flex items-center gap-1.5 mt-auto">
                    <Icon name="Users" size={12} style={{ color: "rgba(255,255,255,0.5)" }} />
                    <span className="font-golos text-xs font-semibold" style={{ color: "rgba(255,255,255,0.5)" }}>{club.members} участников</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center py-0" aria-hidden>
        <div className="h-px w-full max-w-5xl mx-12" style={{ background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.35), rgba(232,213,176,0.6), rgba(201,169,110,0.35), transparent)" }} />
      </div>

      {/* ── DIRECTIONS ── */}
      <section id="directions" className="py-24 md:py-32" style={{ background: "hsl(var(--section-alt))" }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>

              <h2 className="font-cormorant text-4xl md:text-5xl font-light leading-tight">
                Наши<br />курсы
              </h2>
            </div>
            <p className="font-golos text-sm max-w-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
              Раздел, где вы сможете познакомиться с офлайн и онлайн курсами для детей разных возрастов, а также для родителей, женщин, педагогов, психологов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {DIRECTIONS.map((dir) => (
              <div
                key={dir.title}
                className="card-hover group p-7 rounded-2xl relative overflow-hidden flex flex-col"
                style={dir.bg
                  ? { border: "1.5px solid rgba(255,255,255,0.1)", minHeight: 220 }
                  : { background: "#fff", border: "1.5px solid hsl(var(--border))", minHeight: 220 }
                }
              >
                {dir.bg && (
                  <>
                    <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${dir.bg})`, backgroundSize: "cover", backgroundPosition: "center" }} />
                    <div className="absolute inset-0 z-0" style={{ background: "rgba(0,0,0,0.72)" }} />
                  </>
                )}
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={dir.bg
                      ? { background: "rgba(255,255,255,0.1)", backdropFilter: "blur(6px)" }
                      : { background: "hsl(var(--blue) / 0.09)" }
                    }>
                    <Icon name={dir.icon} fallback="Sparkles" size={22} style={{ color: dir.bg ? "#fff" : "hsl(var(--blue))" }} />
                  </div>
                  <h3 className="font-cormorant text-xl font-semibold mb-2" style={{ color: dir.bg ? "#fff" : "inherit" }}>{dir.title}</h3>
                  <p className="font-golos text-sm leading-relaxed mb-4 flex-1" style={{ color: dir.bg ? "rgba(255,255,255,0.65)" : "hsl(var(--muted-foreground))" }}>{dir.desc}</p>
                  <span className="font-golos text-xs font-semibold" style={{ color: dir.bg ? "rgba(255,255,255,0.5)" : "hsl(var(--teal))" }}>{dir.count} программ</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center py-0" aria-hidden>
        <div className="h-px w-full max-w-5xl mx-12" style={{ background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.35), rgba(232,213,176,0.6), rgba(201,169,110,0.35), transparent)" }} />
      </div>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 md:py-32" style={{ background: "hsl(var(--background))" }}>
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

      <div className="flex items-center justify-center py-0" aria-hidden>
        <div className="h-px w-full max-w-5xl mx-12" style={{ background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.35), rgba(232,213,176,0.6), rgba(201,169,110,0.35), transparent)" }} />
      </div>

      {/* ── FOUNDERS ── */}
      <section id="founders" className="py-24 md:py-32" style={{ background: "hsl(var(--background))" }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-14">

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
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: founder.objectPosition }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(255,255,255,0.95) 0%, transparent 55%)" }} />

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

      <div className="flex items-center justify-center py-0" aria-hidden>
        <div className="h-px w-full max-w-5xl mx-12" style={{ background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.35), rgba(232,213,176,0.6), rgba(201,169,110,0.35), transparent)" }} />
      </div>

      {/* ── CTA BANNER ── */}
      <section className="py-20 relative overflow-hidden" style={{ background: "hsl(var(--section-dark))" }}>
        <div className="orbital animate-spin-slow" style={{ width: 500, height: 500, top: "50%", left: "-150px", marginTop: -250 }} />
        <div className="orbital animate-spin-rev" style={{ width: 300, height: 300, top: "50%", right: "-80px", marginTop: -150 }} />
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">

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

      <div className="flex items-center justify-center py-0" aria-hidden>
        <div className="h-px w-full max-w-5xl mx-12" style={{ background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.35), rgba(232,213,176,0.6), rgba(201,169,110,0.35), transparent)" }} />
      </div>

      {/* ── CONTACTS ── */}
      <section id="contacts" className="py-24 md:py-32" style={{ background: "hsl(var(--section-alt))" }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-xl">

              <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6">
                Свяжитесь<br />с нами
              </h2>
              <p className="font-golos text-sm leading-relaxed mb-8" style={{ color: "hsl(var(--muted-foreground))" }}>
                Готовы ответить на все вопросы о программах центра.
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
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "rgba(8,8,12,1)" }}>
        <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(232,213,176,0.4), rgba(201,169,110,0.6), rgba(232,213,176,0.4), transparent)" }} />

        <div className="container mx-auto px-6 md:px-12 py-12">
          <div className="grid md:grid-cols-3 gap-10 mb-10">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-7 h-7 flex-shrink-0 opacity-80">
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
                </div>
                <div className="leading-tight">
                  <div className="font-cormorant font-light tracking-[0.2em] uppercase text-sm leading-none" style={{ color: "rgb(232,213,176)" }}>Фуллерен</div>
                  <div className="font-golos text-[9px] tracking-[0.15em] uppercase mt-0.5" style={{ color: "rgba(232,213,176,0.45)" }}>Центр поддержки семьи</div>
                </div>
              </div>
              <p className="font-golos text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
                Образовательный центр квантовой педагогики и психологии. Наука, практика и поддержка семьи.
              </p>
            </div>

            {/* License */}
            <div>
              <div className="font-golos text-[10px] tracking-[0.15em] uppercase mb-3" style={{ color: "rgba(232,213,176,0.45)" }}>
                Документы
              </div>
              <div className="flex items-start gap-2">
                <div className="w-px h-10 mt-0.5 flex-shrink-0" style={{ background: "rgba(232,213,176,0.2)" }} />
                <div>
                  <p className="font-golos text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Образовательная лицензия
                  </p>
                  <p className="font-golos text-xs font-medium mt-0.5" style={{ color: "rgba(232,213,176,0.7)" }}>
                    №Л035-01261-30/03368646
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <div className="font-golos text-[10px] tracking-[0.15em] uppercase mb-3" style={{ color: "rgba(232,213,176,0.45)" }}>
                Мы в сети
              </div>
              <a
                href="https://dzen.ru/inspirecenter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-golos text-xs transition-all duration-300 group"
              >
                <span className="w-px h-3 flex-shrink-0 transition-all duration-300 group-hover:h-5" style={{ background: "rgba(232,213,176,0.4)" }} />
                <span className="transition-all duration-300 group-hover:translate-x-1"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(232,213,176)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}>
                  Канал Дзен
                </span>
              </a>
            </div>
          </div>

          <div className="h-px w-full mb-6" style={{ background: "rgba(232,213,176,0.07)" }} />

          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="font-golos text-[11px]" style={{ color: "rgba(255,255,255,0.2)" }}>
              © 2024 ЦКПиП Фуллерен. Все права защищены.
            </p>
            <p className="font-golos text-[11px]" style={{ color: "rgba(255,255,255,0.15)" }}>
              Лицензия №Л035-01261-30/03368646
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}