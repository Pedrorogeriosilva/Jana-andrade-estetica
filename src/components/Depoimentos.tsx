import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const depoimentos = [
  {
    name: "Mariana S.",
    text: "Atendimento impecável e resultado natural. Saio sempre da clínica com a autoestima renovada — virou meu refúgio mensal.",
  },
  {
    name: "Camila R.",
    text: "A Jana é cuidadosa em cada detalhe. O ambiente é lindo, o protocolo é personalizado e o resultado fala por si.",
  },
  {
    name: "Bianca T.",
    text: "Indico de olhos fechados! Procedimento de pós-operatório foi divisor de águas na minha recuperação. Profissional excepcional.",
  },
  {
    name: "Letícia M.",
    text: "Nunca me senti tão bonita e bem cuidada. A Estética Jana Andrade entende a mulher de verdade.",
  },
  {
    name: "Aline P.",
    text: "Pele renovada, leveza no rosto e um carinho enorme em cada visita. Recomendo a todas as minhas amigas.",
  },
];

export function Depoimentos() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % depoimentos.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Quem vive, recomenda."
          description="A maior prova do nosso cuidado está nas palavras de quem já passou pela experiência Jana Andrade."
        />

        <div className="mt-16 mx-auto max-w-3xl">
          <div className="relative h-[280px] md:h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 rounded-3xl glass-rose p-8 md:p-12 shadow-soft"
              >
                <div className="flex items-center gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current" aria-hidden>
                      <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9 4.8 17.6l1-5.8L1.5 7.7l5.9-.9z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-5 font-serif italic text-2xl md:text-3xl leading-snug text-foreground">
                  “{depoimentos[index].text}”
                </p>
                <p className="mt-6 text-sm uppercase tracking-[0.25em] text-muted-foreground">
                  — {depoimentos[index].name}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <Reveal>
            <div className="mt-8 flex justify-center gap-2">
              {depoimentos.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Depoimento ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-primary" : "w-2 bg-rose-light/60"
                  }`}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
