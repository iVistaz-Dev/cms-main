import ContactPage from "@/components/ShoonyaTree/ContactPage/ContactPage"

export function generateMetadata() {
  return {
    title: "Shoonya's Roots of Change-Native Tree Growth initiative",
    description: "Contact Us",
    metadataBase: new URL("https://cms.org.in/shoonya-roots-of-change"),
    openGraph: {
      url: "https://cms.org.in/shoonya-roots-of-change",
      title: "Shoonya's Roots of Change-Native Tree Growth initiative",
      description: "Contact Us",
      images: [
        {
          url: "https://cms.org.in/tree.png",
          width: 800,
          height: 600,
          alt: "Shoonya Tree",
        },
      ],
    },
  }
}

export default function page() {
  return <ContactPage />
}
