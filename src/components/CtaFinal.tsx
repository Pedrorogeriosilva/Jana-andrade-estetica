import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { CtaButton } from "./CtaButton";

export function CtaFinal() {
  return (
    <section id="contato" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-foreground" />
      <motion.div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--rose-deep) 65%, transparent), transparent)",
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-32 -right-20 h-[500px] w-[500px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--rose-light) 50%, transparent), transparent)",
        }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-black/80 ring-1 ring-white/20 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-light animate-pulse" />
            Localização
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-6 font-serif text-5xl md:text-7xl leading-[1] text-black">
            Onde a sua <span className="italic text-gradient-rose">transformação</span> acontece.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="rounded-3xl bg-white/5 ring-1 ring-white/15 backdrop-blur p-8 text-left">
              <p className="text-xs uppercase tracking-[0.3em] text-black/60">Endereço</p>
              <p className="mt-3 font-serif text-2xl text-black leading-snug">Rua Salete, 355</p>
              <p className="mt-1 text-sm text-black/70">São Paulo · Zona Norte</p>
              <p className="mt-4 text-sm text-black/70">Seg–Sáb · 09h às 19h</p>
              <p className="mt-3 font-serif text-2xl text-black leading-snug">Atendimento a domicílio disponível</p>
            </div>

            <div className="rounded-3xl bg-white/5 ring-1 ring-white/15 backdrop-blur p-4 text-left">
              <p className="px-4 pt-4 text-xs uppercase tracking-[0.3em] text-black/60">Mapa</p>
              <div className="mt-4 overflow-hidden rounded-2xl ring-1 ring-white/10">
                <iframe
                  title="Mapa Rua Salete 355, Sao Paulo"
                  src="https://www.google.com/maps?q=Rua%20Salete%2C%20355%2C%20Sao%20Paulo%2C%20SP&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-64 w-full md:h-[260px]"
                />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-full"
              style={{ boxShadow: "0 0 60px -10px var(--rose-deep)" }}
            >
              <CtaButton size="lg" className="bg-gradient-rose-strong text-black">
                Agendar pelo WhatsApp
              </CtaButton>
            </motion.div>
            <p className="text-sm text-black/60">Resposta em poucos minutos</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
