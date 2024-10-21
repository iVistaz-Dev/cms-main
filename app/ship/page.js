import React from "react"
import Ship from "../../components/ShipComponent/Ship"

export function generateMetadata() {
  return {
    title: "One-Stop Solution for Social Healthcare Enterprises | SHIP",
    description:
      "This platform offers an integrated solution for social healthcare enterprises to access non-clinical services like financing, procurement, maintenance, technology, etc. Read more.",
    metadataBase: new URL("https://www.cms.org.in/ship"),
    openGraph: {
      url: "https://www.cms.org.in/ship",
      title: "One-Stop Solution for Social Healthcare Enterprises | SHIP",
      description:
        "This platform offers an integrated solution for social healthcare enterprises to access non-clinical services like financing, procurement, maintenance, technology, etc. Read more.",
      images: [
        {
          url: "https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/ship/health-care.png",
          width: 800,
          height: 600,
          alt: "CMS",
        },
      ],
    },
  }
}

export default function page() {
  return (
    <>
      <Ship />
    </>
  )
}
