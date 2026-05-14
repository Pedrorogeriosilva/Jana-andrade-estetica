import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Sobre } from "@/components/Sobre";
import { Procedimentos } from "@/components/Procedimentos";
import { Resultados } from "@/components/Resultados";
import { Depoimentos } from "@/components/Depoimentos";
import { Clinica } from "@/components/Clinica";
import { Instagram } from "@/components/Instagram";
import { CtaFinal } from "@/components/CtaFinal";
import { Footer } from "@/components/Footer";
import { WhatsappFloat } from "@/components/WhatsappFloat";

const TITLE = "Estética Jana Andrade — Clínica de Estética Premium em SP";
const DESCRIPTION =
  "Tratamentos estéticos modernos e personalizados em São Paulo. Limpeza de pele, harmonização facial, botox, preenchimento, skinbooster, criolipólise e mais. Agende sua avaliação pelo WhatsApp.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Estética Jana Andrade",
  description: DESCRIPTION,
  image: "/og-image.jpg",
  telephone: "+55 11 97983-3787",
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  sameAs: ["https://www.instagram.com/esteticajanaandrade/"],
  priceRange: "$$",
  openingHours: "Mo-Sa 09:00-19:00",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Procedimentos />
        <Resultados />
        <Depoimentos />
        <Clinica />
        <Instagram />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  );
}
