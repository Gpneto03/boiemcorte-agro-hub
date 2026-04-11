import logo from "@/assets/logo-boi-em-corte.png";

const MORINGA_URL = "https://boiemcorte.com.br/moringa";
const TIKTOK_URL = "https://www.tiktok.com/@boi_em_corte";

const CTAButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <a
    href={MORINGA_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-block text-display font-bold text-sm md:text-base tracking-wider bg-primary text-primary-foreground px-8 py-4 md:px-12 md:py-5 rounded-full hover:brightness-110 transition-all duration-300 hover:scale-[1.02] shadow-lg ${className}`}
  >
    {children}
  </a>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* HEADER COM SLOGAN */}
      <header className="pt-10 pb-6 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-3 animate-fade-up">
          <img src={logo} alt="Boi em Corte" className="w-16 h-16 md:w-20 md:h-20" />
          <span className="text-2xl md:text-3xl font-display font-bold tracking-wider">BOI EM CORTE</span>
          <div className="w-10 h-0.5 bg-primary" />
          <p className="text-base md:text-lg font-display font-medium text-foreground/80 text-center">
            Pecuária na prática, com gestão e resultado.
          </p>
          <p className="text-sm md:text-base text-muted-foreground font-light text-center max-w-md">
            Produza melhor, reduza custos e tome decisões mais inteligentes no campo.
          </p>
        </div>
      </header>

      {/* HERO — DOR */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-foreground text-background rounded-2xl p-8 md:p-14 space-y-6 animate-fade-up overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              O custo da alimentação está cada vez mais alto.
            </h1>
            <div className="space-y-4 text-base md:text-lg font-light leading-relaxed opacity-70">
              <p>
                A maior parte do custo da pecuária está na alimentação.
                E quem depende só de insumo externo fica sempre exposto ao mercado.
              </p>
              <p>
                Mas já existem sistemas mais eficientes sendo usados dentro da própria fazenda.
              </p>
            </div>
          </div>
          <div className="text-center mt-10 space-y-6 animate-fade-up-delay-1">
            <p className="text-lg md:text-xl font-display font-medium text-foreground italic">
              "Alguns produtores já estão reduzindo custo usando outra estratégia."
            </p>
            <CTAButton>VER COMO FUNCIONA NA PRÁTICA</CTAButton>
          </div>
        </div>
      </section>

      {/* NÚMEROS / PROVA SOCIAL */}
      <section className="py-16 md:py-24 px-6 bg-secondary/50">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { number: "40%", label: "do custo total vai para alimentação do rebanho" },
            { number: "3x", label: "mais eficiência com sistemas integrados na fazenda" },
            { number: "+200", label: "produtores já aplicam essa estratégia" },
          ].map((item) => (
            <div key={item.number} className="bg-background border border-border rounded-2xl p-8 text-center space-y-3">
              <span className="text-4xl md:text-5xl font-display font-bold text-primary">{item.number}</span>
              <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-2xl md:text-4xl font-bold text-center leading-tight">
            Por que produtores estão mudando?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Redução de custo", desc: "Diminua a dependência de insumos externos e proteja sua margem de lucro." },
              { title: "Autonomia na fazenda", desc: "Produza parte da alimentação do rebanho dentro da sua própria propriedade." },
              { title: "Gestão inteligente", desc: "Tome decisões baseadas em dados e resultados reais do campo." },
              { title: "Resultado comprovado", desc: "Estratégias testadas e validadas por produtores que já aplicam no dia a dia." },
            ].map((item) => (
              <div key={item.title} className="border border-border rounded-2xl p-6 md:p-8 space-y-3 hover:border-primary/50 transition-colors duration-300">
                <h3 className="text-lg md:text-xl font-display font-bold">{item.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-foreground text-background rounded-2xl p-10 md:p-16 text-center space-y-8 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary" />
            <h2 className="text-2xl md:text-4xl font-bold leading-tight">
              Quem já entendeu isso está saindo na frente.
            </h2>
            <CTAButton className="text-base md:text-lg px-12 py-5 md:px-16 md:py-6">
              VER AGORA
            </CTAButton>
          </div>
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
