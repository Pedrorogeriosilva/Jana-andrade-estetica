import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { CtaButton } from "./CtaButton";
import { INSTAGRAM_URL } from "@/lib/whatsapp";

import c1 from "@/assets/clinic-1.jpg";
import c2 from "@/assets/clinic-2.jpg";
import p1 from "@/assets/proc-skinbooster.jpg";
import p2 from "@/assets/proc-harmonizacao.jpg";
import p3 from "@/assets/proc-corporal.jpg";
import p4 from "@/assets/proc-pos.jpg";

const posts = [c1, p1, p2, c2, p3, p4];

export function Instagram() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-rose">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Instagram"
          title="@esteticajanaandrade"
          description="Acompanhe os bastidores da clínica, dicas de autocuidado e as últimas novidades em estética."
        />

        <div className="mt-14 grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
          {posts.map((src, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <motion.a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="group relative block aspect-square overflow-hidden rounded-2xl shadow-soft"
              >
                <img
                  src={src}
                  alt={`Post Instagram ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-colors group-hover:bg-foreground/40">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="h-6 w-6 text-white opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CtaButton href={INSTAGRAM_URL} size="lg" className="bg-foreground text-background">
            Seguir no Instagram
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
