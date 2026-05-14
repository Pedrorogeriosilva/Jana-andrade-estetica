import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { CtaButton } from "./CtaButton";
import aboutImg from "@/assets/about-jana.jpeg";

const pillars = [
  { title: "Acolhimento", desc: "Cada cliente é recebida com escuta atenta e cuidado humano." },
  { title: "Profissionalismo", desc: "Técnica em Estética pelo SENAC SP e formação contínua." },
  { title: "Resultado real", desc: "Protocolos pensados para potencializar sua beleza natural." },
  { title: "Discrição", desc: "Ambiente reservado, seguro e instagramável." },
];

export function Sobre() {
  return (
    <section id="sobre" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-5 relative">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft">
              <img
                src={aboutImg}
                alt="Jana Andrade na clínica de estética"
                loading="lazy"
                className="h-200 w-full object-cover"
                width={1024}
                height={1280}
              />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="absolute -bottom-6 -right-2 md:-right-6 glass rounded-2xl p-5 shadow-soft max-w-[220px]">
              <p className="font-serif text-3xl text-gradient-rose leading-none">12+</p>
              <p className="text-xs text-muted-foreground mt-1">anos cuidando da autoestima feminina</p>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <SectionHeading
            align="left"
            eyebrow="Sobre a clínica"
            title="Um espaço criado para a mulher que valoriza autocuidado."
            description="A Estética Jana Andrade é mais do que uma clínica — é um refúgio. Aqui, cada protocolo é desenhado de forma personalizada, unindo técnica avançada, produtos premium e um atendimento profundamente humano. Técnica em Estética pelo SENAC SP, especialista em pós-operatório e cursando Biomedicina."
          />

          <Reveal delay={0.15}>
            <ul className="mt-8 space-y-3">
              {[
                "🌸 Técnica em Estética — SENAC SP (2012) ✨",
                "🌸 Especialista em Pós-operatório ✨",
                "🌸 Cursando Biomedicina ✨",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-rose-light/50 bg-white/70 px-5 py-3 text-sm md:text-base text-foreground backdrop-blur"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="group rounded-2xl border border-rose-light/40 bg-white/70 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-soft">
                  <div className="h-9 w-9 rounded-full bg-gradient-rose-strong flex items-center justify-center text-white font-serif text-sm mb-4">
                    {i + 1}
                  </div>
                  <h3 className="font-serif text-xl text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mt-10">
              <CtaButton size="lg" className="bg-foreground text-background">
                Conhecer a clínica
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
