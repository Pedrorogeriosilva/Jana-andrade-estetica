import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import c1 from "@/assets/clinic-1.jpg";
import c2 from "@/assets/hero-clinic.png";
import c3 from "@/assets/clinic-3.jpg";
import c4 from "@/assets/clinic-4.jpg";
import c5 from "@/assets/clinic-5.jpg";
import c6 from "@/assets/clinic-6.jpg";

// comentario

const items = [
  { src: c1, span: "row-span-2", alt: "Recepção da clínica" },
  { src: c2, span: "", alt: "Sala de atendimento" },
  { src: c5, span: "", alt: "Detalhes premium" },
  { src: c4, span: "row-span-2", alt: "Lounge da clínica" },
  { src: c3, span: "", alt: "Produtos premium" },
  { src: c6, span: "", alt: "Detalhes florais" },
];

export function Clinica() {
  return (
    <section id="clinica" className="relative py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="A clínica"
          title="Um ambiente pensado para você se sentir em casa."
          description="Cada detalhe foi cuidadosamente escolhido para criar uma experiência sensorial completa: leveza, conforto e sofisticação."
        />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] md:auto-rows-[240px] gap-4">
          {items.map((it, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08} className={it.span}>
              <div className="group relative h-full w-full overflow-hidden rounded-3xl shadow-soft">
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
