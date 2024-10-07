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
  // const title = "One-Stop Solution for Social Healthcare Enterprises | SHIP"
  // const desc =
  //   "This platform offers an integrated solution for social healthcare enterprises to access non-clinical services like financing, procurement, maintenance, technology, etc. Read more."
  // const image =
  //   "https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/ship/health-care.png"

  return (
    <>
      {/* <head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href="https://www.cms.org.in/ship" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content="https://cms.org.in/ship" />
        <meta property="og:site_name" content="CMS.ORG.IN" />
        <meta
          property="article:modified_time"
          content="2024-05-15T06:00:37+00:00"
        />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
      </head> */}
      <Ship />
    </>
  )
}
