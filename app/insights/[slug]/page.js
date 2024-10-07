import Footer from "@/components/Footer/Footer"
import InsightDetails from "@/components/Insights/InsightDetails"
import axios from "axios"

export async function generateMetadata({ params }) {
  let metadata = {
    title: "",
    description: "",
    metadataBase: new URL(`https://cms.org.in/insights/${params.slug}`),
    openGraph: {
      url: `https://cms.org.in/insights/${params.slug}`,
      title: "",
      description: "",
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

  try {
    const response = await axios.get(
      `https://docs.cms.org.in/wp-json/wp/v2/posts?_embed&slug=${params.slug}`
    )

    // Ensure response.data is an array and has at least one item
    if (Array.isArray(response.data) && response.data.length > 0) {
      const data = response.data[0] // Assuming you want the first item

      //console.log("Data fetched:", data)

      // Ensure that `acf` exists on the data
      if (data.acf) {
        metadata.title =
          data.acf.meta_title ||
          "Integrated solutions to shape social equity | CMS"
        metadata.description =
          data.acf.meta_description ||
          "We devise integrated solutions for complex problems to achieve social equity for vulnerable groups through partner collaboration."
        metadata.openGraph.title =
          data.acf.meta_title ||
          "Integrated solutions to shape social equity | CMS"
        metadata.openGraph.description =
          data.acf.meta_description ||
          "We devise integrated solutions for complex problems to achieve social equity for vulnerable groups through partner collaboration."
      } else {
        console.warn("ACF data not found on the fetched post")
      }
    } else {
      console.warn("No posts found for the given slug")
    }
  } catch (error) {
    console.error("Error fetching metadata:", error)
  }

  return metadata
}

const page = ({ params }) => {
  const myUrl = params.slug

  return (
    <>
      <InsightDetails myUrl={myUrl} />
      <div className="mt-auto">
        <Footer />
      </div>
    </>
  )
}

export default page
