interface HeroSectionProps {
  scrollTo: (id: string) => void;
}

export default function HeroSection({ scrollTo }: HeroSectionProps) {
  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/a9a7d0f1-5306-49d9-b225-64fb5cd5fe59/bucket/16d29147-af1f-494a-ad66-5570977b1b4b.jpg"
            alt="quantum background"
            className="w-full h-full object-cover"
          />
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
                onClick={() => scrollTo("interview")}
                className="px-8 py-3.5 rounded-full font-golos font-medium text-sm transition-all duration-300"
                style={{ border: "1.5px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.75)", backdropFilter: "blur(8px)" }}
              >
                Интервью основателя
              </button>
            </div>

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
    </>
  );
}
