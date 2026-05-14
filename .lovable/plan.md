## Visão geral

Landing page única em português do Brasil para a clínica **Estética Jana Andrade**, com estética feminina premium inspirada na logo enviada (rosé, nude, preto elegante). Foco total em conversão para WhatsApp — todos os CTAs apontam para `https://wa.me/5511979833787?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20informações`. Sem backend, sem email, sem painel.

## Identidade visual

- **Paleta** (definida em `src/styles.css` com tokens em oklch):
  - Rosé elegante `#C79AAF`, rosé claro `#DDB5C6`, nude `#F7E9EE`, preto `#111111`, branco suave `#FFFDFD`, cinza `#6B6B6B`
  - Tokens semânticos: `--primary` (rosé), `--accent` (rosé claro), `--background` (nude/branco), `--foreground` (preto), gradientes e sombras suaves
- **Tipografia**: serif elegante para títulos (**Playfair Display** ou **Cormorant Garamond**) + sans clean para corpo (**Inter** ou **Manrope**), via Google Fonts
- **Logo**: a imagem enviada (`user-uploads://image.png`) é copiada para `src/assets/logo.png` e usada no header e footer
- **Estilo**: glassmorphism leve, gradientes suaves rosé→nude, sombras delicadas, bordas arredondadas (radius generoso), bastante respiro

## Estrutura de rotas

Por ser uma landing single-page de marketing, mantemos uma única rota `/` com seções ancoradas (hash scroll suave) — mas o `head()` do `index.tsx` recebe SEO completo (title, description, og:title, og:description, og:image, JSON-LD `LocalBusiness`/`HealthAndBeautyBusiness`).

Estrutura de arquivos:

```text
src/
  routes/
    index.tsx              (landing completa)
    __root.tsx             (já existe — apenas ajusta meta padrão)
  components/
    Header.tsx             (transparent → glass on scroll)
    Hero.tsx
    Sobre.tsx
    Procedimentos.tsx
    Resultados.tsx
    Depoimentos.tsx
    Clinica.tsx            (galeria masonry)
    Instagram.tsx
    CtaFinal.tsx
    Footer.tsx
    WhatsappFloat.tsx      (botão flutuante sempre visível)
    ui/SectionTitle.tsx
    ui/RevealOnScroll.tsx  (wrapper Framer Motion)
  lib/
    whatsapp.ts            (constante com URL do WhatsApp)
  assets/
    logo.png
    (imagens geradas por IA: hero, ambiente clínica, procedimentos)
  styles.css               (tokens + fontes + utilitários)
```

## Seções da página

1. **Header** — transparente no topo, vira glass (`backdrop-blur` + leve borda) ao scroll. Menu: Início, Sobre, Procedimentos, Resultados, Clínica, Contato. Botão "Agendar Avaliação" com glow rosé.
2. **Hero** — headline serif grande "Realce sua beleza com sofisticação, autoestima e cuidado personalizado.", subtítulo, CTA principal "Agendar pelo WhatsApp", selo de atendimento personalizado, mini avaliação 5★. Imagem da clínica/ambiente com elementos flutuantes (motion floating). Fundo gradiente nude→branco com blob rosé desfocado.
3. **Sobre** — grid 2 colunas, foto + texto acolhedor sobre a Jana (técnica em estética SENAC SP, especialista em pós-operatório, cursando biomedicina — dados visíveis no Instagram enviado). Cards com pilares: Acolhimento, Profissionalismo, Resultado, Cuidado.
4. **Procedimentos** — grid de cards (Limpeza de Pele, Harmonização Facial, Botox, Preenchimento, Skinbooster, Estética Corporal, Massagem Modeladora, Criolipólise, Esculpe Detox, Pós-operatório, Cílios). Cada card: imagem, título serif, descrição curta, hover com elevação e overlay rosé, botão "Saiba Mais" → WhatsApp.
5. **Resultados** — seção visual com molduras sofisticadas mostrando "Resultados Reais". Layout limpo com ícones de transformação e depoimentos curtos (sem fotos reais antes/depois para evitar problemas éticos — espaços marcados para a Jana adicionar fotos reais depois, conforme padrão CFBM).
6. **Depoimentos** — carousel suave (Embla, já presente nos UI components) com cards de avaliações 5★.
7. **Clínica** — galeria masonry com imagens do ambiente, instagramável, com reveal animations.
8. **Instagram** — preview elegante de @esteticajanaandrade, grid 3×2 com posts visuais mockados, CTA "Seguir no Instagram".
9. **CTA Final** — fundo gradiente rosé com glow, headline "Seu momento de autocuidado começa agora.", botão "Falar no WhatsApp" com pulse animation.
10. **Footer** — logo, redes sociais, WhatsApp, localização (SP — Zona Norte), horários, links rápidos.
11. **Botão WhatsApp flutuante** — sempre visível mobile/desktop, canto inferior direito, com pulse suave.

## Animações (Framer Motion)

- `RevealOnScroll`: fade-up + slight scale ao entrar na viewport (`whileInView`, `once: true`)
- Hero: stagger nos elementos textuais, floating contínuo nas imagens decorativas
- Cards de procedimentos: hover com `y: -8` e shadow elevada
- Header: transição de background ao scroll (Framer `useScroll`)
- CTA final: pulse infinito sutil no botão
- Microinterações: `whileTap`, `whileHover` em todos botões/links

## Imagens

Geradas com IA (modelo `standard`) e salvas em `src/assets/`:
- `hero-clinic.jpg` (ambiente premium feminino, rosé/nude)
- `about-jana.jpg` (ambiente acolhedor de atendimento)
- 8 imagens de procedimentos (closeups elegantes femininos)
- 6 imagens da clínica para galeria masonry
- 6 imagens estilo Instagram

A logo enviada é copiada de `user-uploads://image.png` para `src/assets/logo.png`.

## SEO

- `<title>`: "Estética Jana Andrade — Clínica de Estética Premium em SP"
- `<meta description>`: foco em autoestima + tratamentos personalizados + Zona Norte SP
- Open Graph completo com `og:image` da hero
- JSON-LD `HealthAndBeautyBusiness` com nome, endereço (SP), telefone, redes sociais
- Tags semânticas: `<header>`, `<main>`, `<section>` com `aria-label`, único `<h1>` na hero
- Alt texts descritivos em todas imagens
- Lazy loading nas imagens fora da hero

## Stack & dependências

- React + TanStack Start (já configurado)
- Tailwind CSS v4 (já configurado)
- **Adicionar**: `framer-motion` via `bun add`
- shadcn/ui já presente — usaremos Button, Card, Carousel, Sheet (menu mobile)
- Google Fonts via `<link>` no `__root.tsx` head

## Conversão & UX

- 6+ CTAs distribuídos: header, hero, cada card de procedimento, CTA final, footer, botão flutuante
- Mobile: menu Sheet lateral, botão WhatsApp flutuante grande, CTAs full-width
- Performance: imagens otimizadas (`.jpg`), lazy loading, animações com `will-change` controlado
- Acessibilidade: contraste adequado, foco visível, `prefers-reduced-motion` respeitado

## Fora de escopo (conforme solicitado)

- Backend, email, painel admin, Lovable Cloud — nada disso será habilitado
- Antes/depois com fotos reais — substituído por seção "Resultados Reais" estilizada (questão ética + Conselho)
