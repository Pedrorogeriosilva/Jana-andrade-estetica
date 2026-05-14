import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const features = [
  {
    icon: (
      <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.3 7.2 16.9l.9-5.4L4.2 7.7l5.4-.8z" />
    ),
    title: "Avaliação personalizada",
    desc: "Diagnóstico cuidadoso para entender o seu objetivo de beleza.",
  },
  {
    icon: <path d="M12 21s-8-4.5-8-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.5-8 11-8 11z" />,
    title: "Cuidado humanizado",
    desc: "Acolhimento em cada etapa, respeitando o seu tempo e conforto.",
  },
  {
    icon: <path d="M3 12h4l3-9 4 18 3-9h4" />,
    title: "Resultados visíveis",
    desc: "Protocolos com tecnologia atual e produtos de alta performance.",
  },
];

const stats = [
  { value: "+500", label: "Clientes encantadas" },
  { value: "5,0★", label: "Avaliação média" },
  { value: "+30", label: "Protocolos disponíveis" },
  { value: "100%", label: "Atendimento personalizado" },
];

export function Resultados() {
  return (
    <section id="resultados" className="relative py-24 md:py-32 bg-gradient-rose">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Resultados reais"
          title="Transformações que começam por dentro."
          description="Mais do que resultados estéticos, entregamos confiança, leveza e a sensação de se reconhecer no espelho."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
              <div className="h-full rounded-3xl glass p-8 shadow-soft">
                <div className="h-14 w-14 rounded-2xl bg-gradient-rose-strong flex items-center justify-center text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                    {f.icon}
                  </svg>
                </div>
                <h3 className="mt-6 font-serif text-2xl text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-3xl bg-rose-light/40 ring-1 ring-rose-light/40">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/80 backdrop-blur p-8 text-center">
                <p className="font-serif text-4xl md:text-5xl text-gradient-rose">{s.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
