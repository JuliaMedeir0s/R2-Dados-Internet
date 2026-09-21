import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const GTM_ID = "GTM-NLJ7KGFK";

export const metadata: Metadata = {
  metadataBase: new URL("https://r2dados.com"),
  title: "R2 Internet",
  description:
    "Internet de fibra óptica de alta velocidade para sua casa e sua empresa. Conexão estável, Wi-Fi total e suporte humanizado.",
  openGraph: {
    siteName: "R2 Internet",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} h-full antialiased`}
    >
      {/* next/script fora do <body>: o docs do Next 16 (guides/scripts.md)
          coloca o Script como irmão do <body>, sem <head> manual. */}
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
      {/* `suppressHydrationWarning` no <body>: extensões de navegador (ClickUp,
          ColorZilla e afins) injetam classe e atributo no <body> antes do React
          hidratar. Sem isso o React acha divergência nesse nó e desiste de
          hidratar a árvore inteira — o site renderiza mas nada responde a
          clique. Vale pro visitante real, não só pra máquina de quem
          desenvolve. */}
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            title="Google Tag Manager"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
