import { Link } from "react-router-dom";
import logo from "@/assets/logo-boi-em-corte.png";
import ebookCover from "@/assets/ebook-moringa.png";
import { TrendingUp, Sun, DollarSign, BookOpen, CheckCircle2, ArrowLeft } from "lucide-react";

const CHECKOUT_URL = "https://pay.hotmart.com/C105350002W";

const CTAButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <a
    href={CHECKOUT_URL}
    className={`inline-block text-display font-bold text-sm md:text-base tracking-wider bg-primary text-primary-foreground px-8 py-3 md:px-12 md:py-4 rounded-full hover:brightness-110 transition-all duration-300 hover:scale-[1.02] shadow-[0_4px_20px_hsl(145_60%_36%/0.4)] animate-pulse-subtle ${className}`}
  >
    {children}
  </a>
);

const Moringa = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* HEADER */}
      <header className="relative z-20 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-2 py-4 md:py-5 px-4">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Boi em Corte" className="w-10 h-10 md:w-12 md:h-12" />
            <span className="text-xl md:text-2xl font-display font-bold tracking-[0.2em]">BOI EM CORTE</span>
          </Link>
          <div className="flex items-center gap-2 md:gap-3">
            <div className="hidden md:block w-8 h-[1px] bg-gradient-to-r from-transparent to-primary" />
            <p className="text-base md:text-lg font-display font-medium text-primary tracking-[0.25em]">
              GUIA PRÁTICO DA MORINGA
            </p>
            <div className="hidden md:block w-8 h-[1px] bg-gradient-to-l from-transparent to-primary" />
          </div>
        </div>
        <div className="h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
      </header>

      {/* HERO */}
      <section className="relative py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-secondary via-background to-secondary/60 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            <div className="flex-1 space-y-5 animate-fade-up">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-xs md:text-sm font-display font-bold text-primary tracking-wider">
                  GUIA COMPLETO
                </span>
              </div>

              <h1 className="text-2xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.1]">
                O guia prático completo para implantar e usar moringa e{" "}
                <span className="text-primary">reduzir em até 70% o custo com proteína</span>{" "}
                da dieta animal
              </h1>

              <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                Sem depender de insumos caros que consomem o seu lucro.
              </p>

              <CTAButton>QUERO MEU GUIA AGORA</CTAButton>
            </div>

            <div className="flex-shrink-0 w-64 md:w-80 animate-fade-up-delay-1 animate-pulse-subtle">
              <img
                src={ebookCover}
                alt="Guia Prático do Uso da Moringa na Pecuária Brasileira"
                className="w-full drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="h-1 bg-gradient-to-r from-primary via-primary/60 to-primary" />
      <section className="py-10 md:py-14 px-4 md:px-6 bg-gradient-to-b from-background to-secondary/40">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {[
            { number: "70%", label: "Redução no custo da proteína" },
            { number: "4 Toneladas", label: "Proteína produzida por hectare/ano" },
            { number: "120", label: "Animais suplementados com 1 hectare" },
          ].map((item) => (
            <div
              key={item.number}
              className="border border-border rounded-2xl p-5 md:p-6 text-center space-y-2 hover:border-primary/50 transition-colors bg-background"
            >
              <span className="text-3xl md:text-4xl font-display font-bold text-primary">
                {item.number}
              </span>
              <p className="text-sm text-muted-foreground font-light leading-snug">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-secondary/40 to-secondary/60">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-4xl font-bold leading-tight">
              O custo da proteína está{" "}
              <span className="text-primary">consumindo sua margem.</span>
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="max-w-3xl mx-auto space-y-4 text-sm md:text-base text-muted-foreground font-light leading-relaxed">
            <p>
              Você acordou essa semana e calculou o que vai gastar com suplemento proteico esse ano? Se o número te incomodou, você não está sozinho.
            </p>
            <p>
              Todo ano é o mesmo ciclo: a seca chega, o pasto piora, o concentrado sobe — e sua margem desaparece antes do boi sair.{" "}
              <strong className="text-foreground font-semibold">O problema não é o mercado. O problema é depender dele.</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 pt-4">
            {[
              {
                icon: TrendingUp,
                title: "Preço instável",
                desc: "O farelo de soja oscila com o dólar e o mercado externo. Você planeja uma margem e ela desaparece com uma cotação.",
              },
              {
                icon: Sun,
                title: "Seca sem saída",
                desc: "Na seca, o pasto vai abaixo de 8% de proteína. O gado perde peso. E o custo com suplemento explode exatamente quando a margem está mais apertada.",
              },
              {
                icon: DollarSign,
                title: "Dependência externa",
                desc: "Comprar proteína de fora da fazenda é perder controle do custo. Você fica refém do mercado — quando deveria ser dono da sua produção.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative border border-border rounded-2xl p-5 md:p-6 space-y-3 bg-background hover:border-primary/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base md:text-lg font-display font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-secondary/60 to-secondary/30">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-4xl font-bold leading-tight">
              Do plantio ao cocho.{" "}
              <span className="text-primary">Passo a passo.</span>
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <p className="max-w-3xl mx-auto text-center text-sm md:text-base text-muted-foreground font-light leading-relaxed">
            Este não é um guia teórico. É um <strong className="text-foreground font-semibold">manual de campo</strong> — com números reais e regras práticas para quem quer resultado desde o primeiro corte, não uma leitura para admirar na estante.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 pt-4">
            {[
              "Como plantar moringa no seu clima e solo",
              "Adubação, espaçamento e manejo de cortes",
              "Como secar, processar e misturar na dieta",
              "Cálculos de custo e substituição proteica",
              "Resultados reais de produtores que já aplicam",
              "Planejamento para escalar a produção",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-border hover:border-primary/30 transition-colors bg-background">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-foreground text-background rounded-2xl p-8 md:p-14 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/60 to-primary" />
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

            <div className="relative flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 space-y-4 text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                  Pare de perder margem com proteína cara.{" "}
                  <span className="text-primary">Comece a produzir a sua.</span>
                </h2>
                <p className="text-sm md:text-base text-background/70 font-light">
                  Acesse o guia completo e descubra como a moringa pode transformar a sua pecuária.
                </p>
                <CTAButton className="text-base md:text-lg px-12 py-4 md:px-16 md:py-5">
                  GARANTIR MEU GUIA
                </CTAButton>
              </div>
              <img
                src={ebookCover}
                alt="Guia Prático da Moringa"
                className="w-40 md:w-52 drop-shadow-2xl flex-shrink-0 animate-pulse-subtle"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 border-t border-border bg-gradient-to-t from-primary/5 to-background">
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Voltar para a página principal
          </Link>
          <p className="text-sm text-muted-foreground/60 font-display tracking-widest">
            PECUÁRIA SEM RODEIO
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Moringa;
