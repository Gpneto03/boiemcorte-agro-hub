import logo from "@/assets/logo-boi-em-corte.png";

const MORINGA_URL = "https://boiemcorte.com.br/moringa";
const TIKTOK_URL = "https://www.tiktok.com/@boi_em_corte";

const CTAButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <a
    href={MORINGA_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-block text-display font-bold text-sm md:text-base tracking-wider bg-primary text-primary-foreground px-8 py-4 md:px-12 md:py-5 rounded-sm hover:brightness-110 transition-all duration-300 hover:scale-[1.02] ${className}`}
  >
    {children}
  </a>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl mx-auto">
          <img
            src={logo}
            alt="Boi em Corte"
            className="w-28 h-28 md:w-36 md:h-36 animate-fade-up invert"
          />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-up-delay-1">
            BOI EM CORTE
          </h1>
          <p className="text-xl md:text-3xl font-display font-medium text-foreground/90 animate-fade-up-delay-1">
            Pecuária na prática.
          </p>
          <p className="text-base md:text-lg text-muted-foreground font-light max-w-md animate-fade-up-delay-2">
            Sem teoria. Só o que funciona no campo.
          </p>
          <div className="mt-4 animate-fade-up-delay-3">
            <CTAButton>VER COMO REDUZIR O CUSTO DA ALIMENTAÇÃO</CTAButton>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 border-2 border-foreground/20 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-foreground/40 rounded-full" />
          </div>
        </div>
      </section>

      {/* POSICIONAMENTO */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Pecuária com gestão, prática e resultado.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
            Aprenda a produzir melhor, reduzir custos e tomar decisões mais inteligentes no campo.
          </p>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-8" />
        </div>
      </section>

      {/* BLOCO VISUAL */}
      <section className="py-20 md:py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-secondary/20" />
        <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {["AGRO", "ARROBA", "CUSTO", "RESULTADO"].map((word, i) => (
            <div key={word} className="flex items-center justify-center py-12 md:py-16">
              <span
                className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-foreground/10 hover:text-primary transition-colors duration-500 cursor-default select-none"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {word}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* MORINGA */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight">
            O custo da alimentação está cada vez mais alto.
          </h2>
          <div className="space-y-5 text-base md:text-lg text-muted-foreground font-light leading-relaxed text-left md:text-center">
            <p>
              A maior parte do custo da pecuária está na alimentação.
              E quem depende só de insumo externo fica sempre exposto ao mercado.
            </p>
            <p>
              Mas já existem sistemas mais eficientes sendo usados dentro da própria fazenda.
            </p>
          </div>
          <p className="text-lg md:text-xl font-display font-medium text-foreground/80 italic">
            "Alguns produtores já estão reduzindo custo usando outra estratégia."
          </p>
          <div className="pt-4">
            <CTAButton>VER COMO FUNCIONA NA PRÁTICA</CTAButton>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 md:py-32 px-6 bg-secondary/30">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight">
            Quem está na frente não depende só do mercado.
          </h2>
          <CTAButton className="text-base md:text-lg px-12 py-5 md:px-16 md:py-6">
            VER AGORA
          </CTAButton>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <a
            href={TIKTOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-muted-foreground hover:text-foreground transition-colors font-medium"
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
