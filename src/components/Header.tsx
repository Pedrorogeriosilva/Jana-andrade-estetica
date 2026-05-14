import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CtaButton } from "./CtaButton";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Procedimentos", href: "#procedimentos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Clínica", href: "#clinica" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 md:px-7 transition-all duration-500 ${
          scrolled
            ? "glass-rose shadow-soft w-[min(100%-2rem,80rem)] md:w-[min(100%-3rem,80rem)]"
            : "bg-transparent"
        }`}
      >
        <a href="#inicio" className="flex items-center gap-3 py-3">
          <img
            src={logo}
            alt="Estética Jana Andrade"
            className="h-10 w-10 rounded-full object-cover ring-1 ring-rose-light/60"
            width={40}
            height={40}
          />
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-serif text-lg md:text-xl text-foreground">Jana Andrade</span>
            <span className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
              Estética Premium
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm text-foreground/80 transition-colors hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <CtaButton
            size="sm"
            className="bg-gradient-rose-strong text-white shadow-glow hover:opacity-95"
          >
            Agendar Avaliação
          </CtaButton>
        </div>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden rounded-full bg-white/60 p-3 backdrop-blur ring-1 ring-rose-light/40"
        >
          <div className="flex flex-col gap-1">
            <span
              className={`h-0.5 w-5 bg-foreground transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-foreground transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mx-4 mt-3 rounded-3xl glass-rose p-6 shadow-soft"
          >
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-foreground/85 hover:bg-white/60 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-3">
                <CtaButton className="w-full bg-gradient-rose-strong text-white" size="md">
                  Agendar Avaliação
                </CtaButton>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
