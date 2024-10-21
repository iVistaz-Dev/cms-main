import ContactUs from "@/components/ContactUs/ContactUs"

export function generateMetadata() {
  return {
    title: "Contact Us",
    description: "Contact us through message and email",
    metadataBase: new URL("https://cms.org.in/contact-us"),
    openGraph: {
      url: "https://cms.org.in/contact-us",
      title: "Contact Us",
      description: "Contact us through message and email",
      images: [
        {
          url: "/social.png",
          width: 800,
          height: 600,
          alt: "CMS",
        },
      ],
    },
  }
}

const page = () => {
  return <ContactUs />
}

export default page
