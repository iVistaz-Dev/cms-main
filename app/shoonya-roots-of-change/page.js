import HomePage from "@/components/ShoonyaTree/HomePage/HomePage"

export function generateMetadata() {
  return {
    title: "Shoonya's Roots of Change-Native Tree Growth initiative",
    description:
      "Be part of Shoonya's tree growth initiative focused on native tree growth and reforestation in fragile eco-zones for long-term environmental impact.",
    metadataBase: new URL("https://cms.org.in/shoonya-roots-of-change"),
    openGraph: {
      url: "https://cms.org.in/shoonya-roots-of-change",
      title: "Shoonya's Roots of Change-Native Tree Growth initiative",
      description:
        "Be part of Shoonya's tree growth initiative focused on native tree growth and reforestation in fragile eco-zones for long-term environmental impact.",
      images: [
        {
          url: "/socialShare.png",
          width: 800,
          height: 600,
          alt: "CMS",
        },
      ],
    },
  }
}

export default function page() {
  return <HomePage />
}
