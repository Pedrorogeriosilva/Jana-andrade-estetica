import { motion } from "framer-motion";
import { CtaButton } from "./CtaButton";
import heroImg from "@/assets/hero-clinic.png";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden pt-28 md:pt-36 pb-16 md:pb-24 bg-gradient-rose"
    >
      {/* decorative blobs */}
      <motion.div
        aria-hidden
        className="absolute -top-24 -left-24 h-[480px] w-[480px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--rose-deep) 55%, transparent), transparent)",
        }}
        animate={{ y: [0, 18, 0], x: [0, 8, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-32 -right-32 h-[520px] w-[520px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--rose-light) 70%, transparent), transparent)",
        }}
        animate={{ y: [0, -22, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-12 gap-12 px-6">
        {/* text */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 self-start rounded-full bg-white/60 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.28em] text-foreground ring-1 ring-rose-light/50"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Atendimento personalizado · SP
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.98] text-foreground"
          >
            Realce sua beleza com <span className="italic text-gradient-rose">sofisticação</span>,
            autoestima e cuidado personalizado.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-7 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Tratamentos estéticos modernos para mulheres que desejam se sentir ainda mais confiantes
            e radiantes. Uma experiência acolhedora, discreta e exclusiva.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <CtaButton
              size="lg"
              className="bg-gradient-rose-strong text-white shadow-glow hover:opacity-95"
            >
              Agendar pelo WhatsApp
            </CtaButton>
            <CtaButton variant="outline" size="lg" href="#procedimentos">
              Ver procedimentos
            </CtaButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-10 flex items-center gap-6"
          >
            <div className="flex -space-x-2">
              {(["P", "G", "K", "A"] as const).map((initial, i) => (
                <div
                  key={initial}
                  className="h-9 w-9 rounded-full ring-2 ring-white flex items-center justify-center text-xs font-serif text-white"
                  style={{
                    background: `linear-gradient(135deg, var(--rose-deep), var(--rose-light))`,
                    transform: `rotate(${i * 8}deg)`,
                  }}
                  aria-hidden
                >
                  {initial}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current" aria-hidden>
                    <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9 4.8 17.6l1-5.8L1.5 7.7l5.9-.9z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                +500 clientes encantadas · 5,0 estrelas
              </p>
            </div>
          </motion.div>
        </div>

        {/* image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-soft">
            <img
              src={heroImg}
              alt="Ambiente premium da clínica Estética Jana Andrade"
              className="h-full w-full object-cover"
              width={1536}
              height={1920}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
          </div>

          {/* floating cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 md:-left-10 top-10 glass rounded-2xl px-4 py-3 shadow-soft"
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Resultado
            </p>
            <p className="font-serif text-lg text-foreground">+98% satisfação</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-3 md:-right-8 bottom-12 glass rounded-2xl px-4 py-3 shadow-soft flex items-center gap-3"
          >
            <span className="h-9 w-9 rounded-full bg-gradient-rose-strong flex items-center justify-center text-white text-sm font-serif">
              J
            </span>
            <div>
              <p className="text-xs text-muted-foreground">Atendimento</p>
              <p className="text-sm font-medium">100% personalizado</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
