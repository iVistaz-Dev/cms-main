import Script from "next/script"
import "../styles/globals.css"
import Head from "next/head"

export const metadata = {
  title: "Integrated solutions to shape social equity | CMS",
  description:
    "We devise integrated solutions for complex problems to achieve social equity for vulnerable groups through partner collaboration.",
  metadataBase: new URL("https://cms.org.in"),
  openGraph: {
    url: "https://cms.org.in",
    title: "Integrated solutions to shape social equity | CMS",
    description:
      "We devise integrated solutions for complex problems to achieve social equity for vulnerable groups through partner collaboration.",
    images: [
      {
        url: "/social.png",
        width: 800,
        height: 600,
        alt: "CMS",
      },
    ],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.ico",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, nofollow" />
      </head>
      <body>
        <main className="flex flex-col min-h-screen">
          {/* <Header /> */}
          {children}
        </main>
        {/* Google Tag Manager */}
        {/* <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16667385703"
        ></Script>
        <Script
          id="gtm-init"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16667385703');
            `,
          }}
        /> */}
      </body>
    </html>
  )
}
