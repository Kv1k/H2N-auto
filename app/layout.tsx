import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/Navigation/ResponsiveNav";

const barlow_Condensed = Barlow_Condensed({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Garage Automobile Le Crès - Réparation Boîte de Vitesses",
  description:
    "Garage automobile à Le Crès, spécialisé dans la réparation et le remplacement de boîtes de vitesses. Contactez-nous pour un diagnostic précis et un service de qualité.",
  keywords:
    "garage automobile Le Crès, réparation boîte de vitesses, remplacement boîte de vitesses, entretien automobile, garage Le Crès",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Métadonnées SEO */}
        <meta name="description" content="Garage automobile à Le Crès, spécialisé dans la réparation et le remplacement de boîtes de vitesses." />
        <meta name="keywords" content="garage automobile Le Crès, réparation boîte de vitesses, carrosserie, remplacement boîte de vitesses, entretien automobile, garage Le Crès" />
        <meta name="robots" content="index, follow" />
        
        {/* Données structurées pour le garage automobile */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              name: "H2N Automobile",
              address: {
                "@type": "PostalAddress",
                streetAddress: "5 Rue du Genévrier, 34920 Le Crès",
                addressLocality: "Le Crès",
                postalCode: "34920",
                addressCountry: "France",
              },
              description: "Garage automobile spécialisé dans la réparation des boîtes de vitesses.",
              telephone: "+33 4 67 70 28 08", 
              openingHours: "Mo-Fr 09:00-18:00",
            }),
          }}
        />

        {/* Open Graph pour les réseaux sociaux */}
        <meta property="og:title" content="Garage Automobile Le Crès - Réparation Boîte de Vitesses" />
        <meta
          property="og:description"
          content="Garage automobile à Le Crès, spécialisé dans la réparation et le remplacement de boîtes de vitesses. Contactez-nous pour un diagnostic précis et un service de qualité."
        />
        <meta property="og:url" content="https://h2n-auto.fr" />
        <meta property="og:type" content="website" />

        

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Ajouter ici des icônes pour des tailles spécifiques, si nécessaire */}
        <link rel="apple-touch-icon" href="/apple-touch-icon-iphone-60x60.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-ipad-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-iphone-retina-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-ipad-retina-152x152.png"/>

      </head>
      <body className={barlow_Condensed.className}>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
