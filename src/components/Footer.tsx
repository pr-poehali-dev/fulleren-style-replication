const FullerenLogoMark = () => (
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

export default function Footer() {
  return (
    <footer style={{ background: "rgba(8,8,12,1)" }}>
      {/* Top gold line */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(232,213,176,0.4), rgba(201,169,110,0.6), rgba(232,213,176,0.4), transparent)" }} />

      <div className="container mx-auto px-6 md:px-12 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-7 h-7 flex-shrink-0 opacity-80">
                <FullerenLogoMark />
              </div>
              <div className="leading-tight">
                <div className="font-cormorant font-light tracking-[0.2em] uppercase text-sm leading-none"
                  style={{ color: "rgb(232,213,176)" }}>Фуллерен</div>
                <div className="font-golos text-[9px] tracking-[0.15em] uppercase mt-0.5"
                  style={{ color: "rgba(232,213,176,0.45)" }}>Центр поддержки семьи</div>
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
            <div className="flex flex-col gap-2">
              <a
                href="https://dzen.ru/inspirecenter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-golos text-xs transition-all duration-300 group"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                <span className="w-px h-3 transition-all duration-300 group-hover:h-5" style={{ background: "rgba(232,213,176,0.4)" }} />
                <span className="group-hover:translate-x-1 transition-transform duration-300" style={{ color: "rgba(255,255,255,0.4)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(232,213,176)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}>
                  Канал Дзен
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom line */}
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
  );
}
