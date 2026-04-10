import Icon from "@/components/ui/icon";

const DIRECTIONS = [
  { icon: "Brain", title: "Квантовая психология", desc: "Современные методы работы с сознанием, мышлением и эмоциональным интеллектом", count: 11, bg: "https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/bucket/48d26136-c533-4c2a-978b-a2c70e3cfbff.png" },
  { icon: "GraduationCap", title: "Инновационная педагогика", desc: "Передовые подходы к обучению и воспитанию детей и взрослых", count: 9, bg: "https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/bucket/2a47d22c-3843-4ffa-ab00-9e0b6df80822.png" },
  { icon: "Heart", title: "Арт-терапия", desc: "Исцеление и развитие через творчество, рисунок, музыку и движение", count: 7, bg: "https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/bucket/808eee28-63fb-4c22-9341-db1d76e18e40.png" },
  { icon: "Users", title: "Семейные практики", desc: "Гармония в семье, детско-родительские отношения, системные расстановки", count: 8, bg: "https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/bucket/8064f6c5-0140-494c-9653-5ff4fcbee61c.jpg" },
  { icon: "Sparkles", title: "Коучинг", desc: "Личностный рост, раскрытие потенциала и достижение жизненных целей", count: 6, bg: "https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/bucket/5efdd7f9-fc3f-48cf-b3e7-9324838045c0.png" },
  { icon: "Atom", title: "Квантовые технологии", desc: "Передовые научные методы саморазвития и трансформации личности", count: 5, bg: "https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/bucket/8aa13d10-72a9-4f3f-99de-6c6a095a1ba3.png" },
  { icon: "BookOpen", title: "Медитация и осознанность", desc: "Практики управления вниманием, снижения стресса и глубокого самопознания", count: 4, bg: "https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/bucket/d8ce199e-0b41-4efd-a7d1-ee84d8f75640.png" },
];

const MEETUPS = [
  { icon: "Mic", title: "СДВГ, РАС и другие неврологические расстройства ребёнка: психика, мозг, тело.", desc: "Приглашаем родителей на встречи со специалистами квантовой психологии, нейропсихологии, микробиологии, которые рассмотрят проблему неврологического расстройства ребёнка с трёх сторон: психика, мозг, тело.", date: "10 и 17 апреля в 18:00", format: "живая встреча", url: "https://www.fullerenclub.ru/vstrechadetiovz.html", bg: "https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/bucket/72fd8e60-d0ef-47fd-9d56-a1368875f9f0.jpg" },
  { icon: "MessageCircle", title: "Сохранить и приумножить ресурс привлекательности", desc: "Встреча для женщин в рамках курса «Искра». Мы не будем говорить, что женщина должна, мы поговорим о том, как избавиться от этого «должна».", date: "4 апреля в 12:00", format: "Очно", url: "https://www.fullerenclub.ru/vstrechaiskra.html", bg: "https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/bucket/5b571cfc-8d26-4054-923e-01b51e09be56.png" },
  // { icon: "Sunrise", title: "Утренние практики", desc: "Еженедельные сессии по квантовым медитациям и телесным практикам в малых группах. Идеально для начала недели.", date: "По понедельникам", format: "Очно / Онлайн", bg: "https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/bucket/bb53d7fe-1679-482b-8b1e-625eccaf437e.png" },
  { icon: "Globe", title: "Рождение педагогического Вдохновения.", desc: "Для учителей, которые на грани выгорания, для педагогов, которые в поисках Вдохновения, для организаторов образовательных учреждений, которые ищут идеи для Творческого Вдохновения своего коллектива.", date: "4 апреля в 19:00 МСК", format: "Онлайн", url: "https://www.fullerenclub.ru/pedagogica.html", bg: "https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/bucket/eab79b53-e3b9-4283-84b9-ef1c2da76180.png" },
];

export default function MeetupsSection() {
  return (
    <>
      {/* ── MEETUPS ── */}
      <section id="meetups" className="py-24 md:py-32" style={{ background: "hsl(var(--section-alt))" }}>
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
                    {meetup.url && (
                      <a
                        href={meetup.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-2 font-golos text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-300 hover:opacity-80"
                        style={{ background: "linear-gradient(130deg, #c9a96e, #e8d5b0)", color: "#1a1a1a" }}
                      >
                        Подробнее
                        <Icon name="ArrowRight" size={11} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIRECTIONS ── (hidden) */}
      <section id="directions" className="hidden py-24 md:py-32" style={{ background: "hsl(var(--section-alt))" }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light leading-tight">
                Наши курсы
              </h2>
            </div>
            <p className="font-golos text-sm md:max-w-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
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

      {/* ── CTA BANNER ── */}
      <section className="py-20 md:py-28" style={{ background: "#fff" }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="font-cormorant text-6xl leading-none mb-6" style={{
              background: "linear-gradient(130deg, #e8d5b0 0%, #c9a96e 60%, #e8d5b0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>"</div>
            <blockquote className="font-cormorant text-2xl md:text-4xl font-light leading-snug mb-8" style={{ color: "hsl(var(--foreground))" }}>
              Дети нам отражают, что мы родители не хотим учиться у жизни
            </blockquote>
            <div className="w-16 h-px mb-6 mx-auto" style={{ background: "linear-gradient(90deg, transparent, #c9a96e, transparent)" }} />
            <p className="font-cormorant italic text-lg" style={{ color: "hsl(var(--muted-foreground))" }}>
              из интервью Ефремовой Марии Викторовны
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
