import logo from "@/assets/logo-boi-em-corte.png";

const MORINGA_URL = "https://boiemcorte.com.br/moringa";
const TIKTOK_URL = "https://www.tiktok.com/@boi_em_corte";

const CTAButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <a
    href={MORINGA_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-block text-display font-bold text-sm md:text-base tracking-wider bg-primary text-primary-foreground px-8 py-3 md:px-12 md:py-4 rounded-full hover:brightness-110 transition-all duration-300 hover:scale-[1.02] shadow-lg ${className}`}
  >
    {children}
  </a>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* HERO ABOVE THE FOLD — Header + Dor + CTA tudo junto */}
      <section className="min-h-screen flex flex-col px-4 md:px-6 py-6 md:py-8">
        {/* Header inline */}
        <div className="flex items-center justify-center gap-3 mb-2 animate-fade-up">
          <img src={logo} alt="Boi em Corte" className="w-10 h-10 md:w-14 md:h-14" />
          <span className="text-xl md:text-2xl font-display font-bold tracking-wider">BOI EM CORTE</span>
        </div>
        <p className="text-xs md:text-sm font-display font-medium text-foreground/70 text-center mb-1">
          Pecuária na prática, com gestão e resultado.
        </p>
        <p className="text-xs md:text-sm text-muted-foreground font-light text-center mb-4 md:mb-6">
          Produza melhor, reduza custos e tome decisões mais inteligentes no campo.
        </p>

        {/* Conteúdo principal — desktop usa layout horizontal */}
        <div className="flex-1 flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto w-full">
          {/* Card Dor */}
          <div className="relative bg-foreground text-background rounded-2xl p-6 md:p-10 lg:p-12 flex flex-col justify-center animate-fade-up overflow-hidden lg:flex-1">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              O custo da alimentação está cada vez mais alto.
            </h1>
            <p className="text-sm md:text-base font-light leading-relaxed opacity-70 mb-2">
              A maior parte do custo da pecuária está na alimentação.
              E quem depende só de insumo externo fica sempre exposto ao mercado.
            </p>
            <p className="text-sm md:text-base font-light leading-relaxed opacity-70">
              Mas já existem sistemas mais eficientes sendo usados dentro da própria fazenda.
            </p>
          </div>

          {/* Coluna direita — frase + CTA + números */}
          <div className="flex flex-col gap-4 lg:flex-1 lg:justify-center animate-fade-up-delay-1">
            <p className="text-base md:text-lg font-display font-medium text-foreground italic text-center lg:text-left">
              "Alguns produtores já estão reduzindo custo usando outra estratégia."
            </p>
            <div className="text-center lg:text-left">
              <CTAButton>VER COMO FUNCIONA NA PRÁTICA</CTAButton>
            </div>

            {/* Números inline */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { number: "40%", label: "do custo vai para alimentação" },
                { number: "3x", label: "mais eficiência com sistemas integrados" },
                { number: "+200", label: "produtores já aplicam" },
              ].map((item) => (
                <div key={item.number} className="bg-secondary/60 border border-border rounded-xl p-3 md:p-4 text-center space-y-1">
                  <span className="text-xl md:text-2xl font-display font-bold text-primary">{item.number}</span>
                  <p className="text-[10px] md:text-xs text-muted-foreground font-light leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-secondary/50">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-2xl md:text-4xl font-bold text-center leading-tight">
            Por que produtores estão mudando?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { title: "Redução de custo", desc: "Diminua a dependência de insumos externos e proteja sua margem de lucro." },
              { title: "Autonomia na fazenda", desc: "Produza parte da alimentação do rebanho dentro da sua própria propriedade." },
              { title: "Gestão inteligente", desc: "Tome decisões baseadas em dados e resultados reais do campo." },
              { title: "Resultado comprovado", desc: "Estratégias testadas e validadas por produtores que já aplicam no dia a dia." },
            ].map((item) => (
              <div key={item.title} className="border border-border rounded-2xl p-5 md:p-6 space-y-2 hover:border-primary/50 transition-colors duration-300 bg-background">
                <h3 className="text-base md:text-lg font-display font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-foreground text-background rounded-2xl p-8 md:p-14 text-center space-y-6 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary" />
            <h2 className="text-2xl md:text-4xl font-bold leading-tight">
              Quem já entendeu isso está saindo na frente.
            </h2>
            <CTAButton className="text-base md:text-lg px-12 py-4 md:px-16 md:py-5">
              VER AGORA
            </CTAButton>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="py-10 px-6 border-t border-border">
        <div className="max-w-2xl mx-auto text-center space-y-3">
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
