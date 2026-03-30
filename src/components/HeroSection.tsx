const HERO_IMAGE = "https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/files/4e6db7fc-54e4-43f6-95a3-6cafda6eb9fe.jpg";

interface HeroSectionProps {
  scrollTo: (id: string) => void;
}

export default function HeroSection({ scrollTo }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={HERO_IMAGE} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(8,10,30,0.85) 0%, rgba(8,10,30,0.6) 50%, rgba(8,10,30,0.75) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 50%, hsl(var(--teal) / 0.08) 0%, transparent 60%)" }} />
      </div>

      <div className="orbital animate-spin-slow" style={{ width: 700, height: 700, top: "50%", right: "-200px", marginTop: -350 }} />
      <div className="orbital animate-spin-rev" style={{ width: 400, height: 400, top: "20%", left: "-100px" }} />

      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-24">
        <div className="max-w-2xl">
          <div className="mb-6 flex items-center gap-3 animate-fade-in-up" style={{ opacity: 0 }}>
            <div className="h-px w-8" style={{ background: "hsl(var(--teal))" }} />
            <span className="font-golos text-xs tracking-[0.2em] uppercase" style={{ color: "hsl(var(--teal))" }}>
              Центр квантовой педагогики и психологии
            </span>
          </div>

          <h1
            className="font-cormorant font-light leading-[1.05] mb-8 animate-fade-in-up"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", color: "#fff", opacity: 0, animationDelay: "0.1s" }}
          >
            Раскройте<br />
            <em className="gradient-text not-italic">потенциал</em>
            <br />каждого
          </h1>

          <p className="font-golos text-base leading-relaxed mb-10 max-w-md animate-fade-in-up"
            style={{ color: "rgba(255,255,255,0.6)", opacity: 0, animationDelay: "0.2s" }}>
            Научно-образовательный центр, объединяющий передовые исследования в области нейронауки, психологии и педагогики для трансформации личности
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ opacity: 0, animationDelay: "0.3s" }}>
            <button
              onClick={() => scrollTo("directions")}
              className="px-8 py-3.5 rounded-full font-golos font-semibold text-sm transition-all duration-300 hover:scale-105"
              style={{ background: "hsl(var(--teal))", color: "#fff", boxShadow: "0 4px 24px hsl(var(--teal) / 0.4)" }}
            >
              Наши программы
            </button>
            <button
              onClick={() => scrollTo("contacts")}
              className="px-8 py-3.5 rounded-full font-golos font-semibold text-sm transition-all duration-300 hover:bg-white/10"
              style={{ border: "1.5px solid rgba(255,255,255,0.25)", color: "#fff" }}
            >
              Связаться с нами
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
  );
}
