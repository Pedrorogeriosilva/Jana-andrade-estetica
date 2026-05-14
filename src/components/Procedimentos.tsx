import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { WHATSAPP_URL } from "@/lib/whatsapp";

import limpeza from "@/assets/proc-limpeza.jpg";
import corporal from "@/assets/proc-corporal.jpg";
import crio from "@/assets/proc-crio.png";
import cilios from "@/assets/proc-cilios.png";
import pos from "@/assets/proc-pos.jpg";
import massagem from "@/assets/proc-massagem.jpg";
import detox from "@/assets/proc-skinbooster.jpg";
import depilacao from "@/assets/proc-depilacao.png";
import jatoplasma from "@/assets/jatoplasma.png";

const procedimentos = [
  { title: "Limpeza de Pele", desc: "Pele renovada, hidratada e luminosa.", img: limpeza },
  { title: "Estética Corporal", desc: "Corpo modelado, firme e revigorado.", img: corporal },
  { title: "Criolipólise", desc: "Redução de medidas com tecnologia avançada.", img: crio },
  { title: "Massagem Modeladora", desc: "Modelagem e bem-estar em cada toque.", img: massagem },
  { title: "Pós-operatório", desc: "Recuperação acolhedora e segura.", img: pos },
  { title: "Extensão de Cílios", desc: "Olhar marcante com naturalidade.", img: cilios },
  { title: "Detox", desc: "Drenagem e detox para leveza e bem-estar.", img: detox },
  { title: "Depilação", desc: "Remoção de pelo de forma segura e eficaz.", img: depilacao },
  { title: "Jato de Plasma", desc: "Remoção de verrugas de forma segura", img: jatoplasma },

];

export function Procedimentos() {
  return (
    <section
      id="procedimentos"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, var(--nude) 0%, #fff 100%)" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Procedimentos"
          title="Protocolos premium que transformam autoestima."
          description="Tratamentos faciais e corporais com técnica refinada, pensados para realçar a sua melhor versão."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {procedimentos.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) * 0.08}>
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="group block relative overflow-hidden rounded-3xl bg-white shadow-[0_10px_30px_-15px_rgba(199,154,175,0.4)] ring-1 ring-rose-light/30"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <motion.img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent p-5 pt-20">
                  <h3 className="font-serif text-2xl text-white">{p.title}</h3>
                  <p className="mt-1 text-sm text-white/80">{p.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/90">
                    Saiba mais
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
