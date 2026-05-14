import logo from "@/assets/logo.png";
import { WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/whatsapp";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Procedimentos", href: "#procedimentos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Clínica", href: "#clinica" },
];

export function Footer() {
  return (
    <footer className="relative bg-nude pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Estética Jana Andrade" className="h-12 w-12 rounded-full ring-1 ring-rose-light/60" width={48} height={48} />
            <div>
              <p className="font-serif text-xl">Jana Andrade</p>
              <p className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">Estética Premium</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm text-muted-foreground leading-relaxed">
            Tratamentos estéticos modernos e personalizados para mulheres que valorizam autocuidado, sofisticação e resultado real.
          </p>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-serif text-lg">Navegação</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-serif text-lg">Contato</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-primary">•</span>
              São Paulo · Zona Norte
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-primary">•</span>
              Seg–Sáb · 09h às 19h
            </li>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                WhatsApp: (11) 97983-3787
              </a>
            </li>
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                @esteticajanaandrade
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-rose-light/40 pt-6 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Estética Jana Andrade. Todos os direitos reservados.</p>
        <p>Feito com cuidado, para você se sentir radiante.</p>
      </div>
    </footer>
  );
}
