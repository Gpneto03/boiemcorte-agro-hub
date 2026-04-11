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
      {/* HEADER / MARCA */}
      <header className="bg-foreground text-background py-5 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-4">
          <img src={logo} alt="Boi em Corte" className="w-10 h-10 md:w-12 md:h-12 invert" />
          <span className="text-2xl md:text-3xl font-display font-bold tracking-wider">BOI EM CORTE</span>
        </div>
      </header>

      {/* HERO — DOR ACIMA DA DOBRA */}
      <section className="min-h-[85vh] flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <div className="border-2 border-foreground rounded-lg p-8 md:p-12 space-y-6 animate-fade-up">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              O custo da alimentação está cada vez mais alto.
            </h1>
            <div className="w-16 h-0.5 bg-primary mx-auto" />
            <div className="space-y-4 text-base md:text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                A maior parte do custo da pecuária está na alimentação.
                E quem depende só de insumo externo fica sempre exposto ao mercado.
              </p>
              <p>
                Mas já existem sistemas mais eficientes sendo usados dentro da própria fazenda.
              </p>
            </div>
          </div>
          <p className="text-lg md:text-xl font-display font-medium text-foreground italic animate-fade-up-delay-1">
            "Alguns produtores já estão reduzindo custo usando outra estratégia."
          </p>
          <div className="mt-2 animate-fade-up-delay-2">
            <CTAButton>VER COMO FUNCIONA NA PRÁTICA</CTAButton>
          </div>
        </div>
      </section>

      {/* BLOCO DE POSICIONAMENTO */}
      <section className="bg-foreground text-background py-20 md:py-28 px-6">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-5">
          <img src={logo} alt="Boi em Corte" className="w-20 h-20 md:w-28 md:h-28 invert" />
          <p className="text-xl md:text-2xl font-display font-medium">
            Pecuária na prática, com gestão e resultado.
          </p>
          <p className="text-base md:text-lg font-light opacity-70 max-w-md">
            Produza melhor, reduza custos e tome decisões mais inteligentes no campo.
          </p>
        </div>
      </section>

      {/* BLOCO VISUAL */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {["AGRO", "ARROBA", "CUSTO", "RESULTADO"].map((word) => (
            <div key={word} className="flex items-center justify-center py-12 md:py-16 border-2 border-foreground rounded-lg hover:bg-foreground hover:text-background transition-all duration-500 cursor-default">
              <span className="text-2xl md:text-4xl lg:text-5xl font-display font-bold select-none">
                {word}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-foreground text-background py-24 md:py-32 px-6">
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
