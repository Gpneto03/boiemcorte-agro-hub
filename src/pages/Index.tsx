import logo from "@/assets/logo-boi-em-corte.png";

const MORINGA_URL = "https://boiemcorte.com.br/moringa";
const TIKTOK_URL = "https://www.tiktok.com/@boi_em_corte";

const CTAButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <a
    href={MORINGA_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-block text-display font-bold text-sm md:text-base tracking-wider bg-primary text-primary-foreground px-8 py-4 md:px-12 md:py-5 rounded-md hover:brightness-110 transition-all duration-300 hover:scale-[1.02] shadow-lg ${className}`}
  >
    {children}
  </a>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* HERO — DOR ACIMA DA DOBRA */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-up">
            O custo da alimentação está cada vez mais alto.
          </h1>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-xl animate-fade-up-delay-1">
            <p>
              A maior parte do custo da pecuária está na alimentação.
              E quem depende só de insumo externo fica sempre exposto ao mercado.
            </p>
            <p>
              Mas já existem sistemas mais eficientes sendo usados dentro da própria fazenda.
            </p>
          </div>
          <p className="text-lg md:text-xl font-display font-medium text-foreground italic animate-fade-up-delay-2">
            "Alguns produtores já estão reduzindo custo usando outra estratégia."
          </p>
          <div className="mt-4 animate-fade-up-delay-3">
            <CTAButton>VER COMO FUNCIONA NA PRÁTICA</CTAButton>
          </div>
        </div>
      </section>

      {/* BLOCO DE MARCA */}
      <section className="py-24 md:py-32 px-6 border-t border-border">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-5">
          <img
            src={logo}
            alt="Boi em Corte"
            className="w-24 h-24 md:w-32 md:h-32"
          />
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            BOI EM CORTE
          </h2>
          <p className="text-xl md:text-2xl font-display font-medium text-foreground/80">
            Pecuária na prática, com gestão e resultado.
          </p>
          <p className="text-base md:text-lg text-muted-foreground font-light max-w-md">
            Produza melhor, reduza custos e tome decisões mais inteligentes no campo.
          </p>
          <div className="w-16 h-0.5 bg-primary mt-4" />
        </div>
      </section>

      {/* BLOCO VISUAL */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {["AGRO", "ARROBA", "CUSTO", "RESULTADO"].map((word) => (
            <div key={word} className="flex items-center justify-center py-12 md:py-16 border border-border rounded-md">
              <span className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-foreground/10 hover:text-primary transition-colors duration-500 cursor-default select-none">
                {word}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 md:py-32 px-6 bg-secondary">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight">
            Quem já entendeu isso está saindo na frente.
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
