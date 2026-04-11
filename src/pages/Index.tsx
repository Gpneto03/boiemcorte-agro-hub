import logo from "@/assets/logo-boi-em-corte.png";
import heroBg from "@/assets/hero-bg.jpg";

const MORINGA_URL = "https://boiemcorte.com.br/moringa";
const TIKTOK_URL = "https://www.tiktok.com/@boi_em_corte";

const CTAButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <a
    href={MORINGA_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-block text-display font-bold text-sm md:text-base tracking-wider bg-primary text-primary-foreground px-8 py-3 md:px-12 md:py-4 rounded-full hover:brightness-110 transition-all duration-300 hover:scale-[1.02] shadow-[0_4px_20px_hsl(145_60%_36%/0.4)] ${className}`}
  >
    {children}
  </a>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* HEADER */}
      <header className="relative z-20 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-3 py-3 px-4">
          <img src={logo} alt="Boi em Corte" className="w-10 h-10 md:w-12 md:h-12" />
          <span className="text-xl md:text-2xl font-display font-bold tracking-wider">BOI EM CORTE</span>
        </div>
        <div className="h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
      </header>

      {/* SLOGAN BAR */}
      <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 py-3 px-4 text-center border-b border-border/50">
        <p className="text-xs md:text-sm font-display font-semibold text-foreground tracking-wide">
          Pecuária na prática, com gestão e resultado.
        </p>
        <p className="text-[10px] md:text-xs text-muted-foreground font-light mt-0.5">
          Produza melhor, reduza custos e tome decisões mais inteligentes no campo.
        </p>
      </div>

      {/* HERO — ABOVE THE FOLD */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Pecuária brasileira"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/85 to-foreground/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-transparent to-foreground/40" />
          {/* Green accent gradient at bottom */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto w-full px-4 md:px-6 py-8 md:py-12">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
            {/* Left — Copy */}
            <div className="flex-1 space-y-4 md:space-y-6 animate-fade-up">
              <div className="inline-block bg-primary/20 border border-primary/30 rounded-full px-4 py-1">
                <span className="text-xs md:text-sm font-display font-semibold text-primary-foreground/90 tracking-wider">
                  ⚠️ ATENÇÃO PRODUTOR
                </span>
              </div>

              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.1] text-background">
                O custo da dieta está alto,
                <br />
                <span className="text-primary">e você não está sozinho!</span>
              </h1>

              <div className="space-y-3 text-background/80">
                <p className="text-sm md:text-base font-light leading-relaxed">
                  A <strong className="text-background font-semibold">margem de lucro</strong> vem apertando,
                  principalmente para quem trabalha com sistemas <strong className="text-background font-semibold">menores</strong>.
                </p>
                <p className="text-sm md:text-base font-light leading-relaxed">
                  Mas já tem produtor <strong className="text-primary font-semibold">virando esse jogo</strong>,
                  produzindo <strong className="text-primary font-semibold">proteína barata</strong> dentro da <strong className="text-background font-semibold">própria fazenda</strong>.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <span className="text-lg md:text-xl">👉</span>
                <p className="text-base md:text-lg font-display font-bold text-primary tracking-wide">
                  E o custo baixo é a melhor notícia!
                </p>
              </div>

              <div className="pt-2">
                <CTAButton>VER COMO FUNCIONA NA PRÁTICA</CTAButton>
              </div>
            </div>

            {/* Right — Stats cards */}
            <div className="flex-shrink-0 w-full lg:w-auto animate-fade-up-delay-1">
              <div className="grid grid-cols-3 lg:grid-cols-1 gap-3 lg:gap-4">
                {[
                  { number: "40%", label: "do custo vai para alimentação" },
                  { number: "3x", label: "mais eficiência com sistemas integrados" },
                  { number: "+200", label: "produtores já aplicam" },
                ].map((item) => (
                  <div
                    key={item.number}
                    className="bg-background/10 backdrop-blur-md border border-background/20 rounded-2xl p-3 md:p-4 text-center lg:text-left space-y-1 hover:bg-background/15 transition-colors"
                  >
                    <span className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-primary">
                      {item.number}
                    </span>
                    <p className="text-[10px] md:text-xs text-background/60 font-light leading-snug">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="h-1 bg-gradient-to-r from-primary via-primary/60 to-primary" />

      {/* BENEFÍCIOS */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-secondary/80 to-background">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-4xl font-bold leading-tight">
              Por que produtores estão mudando?
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: "💰", title: "Redução de custo", desc: "Diminua a dependência de insumos externos e proteja sua margem de lucro." },
              { icon: "🌱", title: "Autonomia na fazenda", desc: "Produza parte da alimentação do rebanho dentro da sua própria propriedade." },
              { icon: "📊", title: "Gestão inteligente", desc: "Tome decisões baseadas em dados e resultados reais do campo." },
              { icon: "✅", title: "Resultado comprovado", desc: "Estratégias testadas e validadas por produtores que já aplicam no dia a dia." },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative border border-border rounded-2xl p-5 md:p-6 space-y-3 bg-background hover:border-primary/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-2xl">{item.icon}</span>
                <h3 className="text-base md:text-lg font-display font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-foreground text-background rounded-2xl p-8 md:p-14 text-center space-y-6 overflow-hidden">
            {/* Gradient accents */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/60 to-primary" />
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

            <h2 className="relative text-2xl md:text-4xl font-bold leading-tight">
              Quem já entendeu isso está{" "}
              <span className="text-primary">saindo na frente.</span>
            </h2>
            <CTAButton className="relative text-base md:text-lg px-12 py-4 md:px-16 md:py-5">
              VER AGORA
            </CTAButton>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="py-10 px-6 border-t border-border bg-gradient-to-t from-primary/5 to-background">
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <a
            href={TIKTOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            @boi_em_corte
          </a>
          <p className="text-sm text-muted-foreground/60 font-display tracking-widest">
            PECUÁRIA SEM RODEIO
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
