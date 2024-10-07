"use client"

import Header from "@/components/Header/Header"
import { useEffect, useState } from "react"
import axios from "axios"
import NextSeo from "@/components/Seo/Seo"

// export async function generateMetadata({ params }) {
//   const myUrl = params.slug
//   let metadata = {
//     title: "",
//     description: "",
//     metadataBase: new URL("https://cms.org.in/seo-blogs"),
//     openGraph: {
//       url: {myUrl},
//       title: "",
//       description: "",
//       images: [
//         {
//           url: "/social.png",
//           width: 800,
//           height: 600,
//           alt: "CMS",
//         },
//       ],
//     },
//   }

//   try {
//     const response = await axios.get(
//       `https://docs.cms.org.in/wp-json/wp/v2/seo-blog?_embed&slug=${params.slug}`
//     )
//     const data = response.data[0] // Assuming that there's only one post with that slug

//     metadata.title = data.acf.meta_title || "Integrated solutions to shape social equity | CMS"
//     metadata.description = data.acf.meta_description || "We devise integrated solutions for complex problems to achieve social equity for vulnerable groups through partner collaboration."
//     metadata.openGraph.title = data.acf.meta_title || "Integrated solutions to shape social equity | CMS"
//     metadata.openGraph.description =
//       data.acf.meta_description || "We devise integrated solutions for complex problems to achieve social equity for vulnerable groups through partner collaboration."
//   } catch (error) {
//     console.error("Error fetching metadata:", error)
//   }

//   return metadata
// }

const Page = ({ params }) => {
  const [insightsData, setInsightsData] = useState([])

  const myUrl = params.slug

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://docs.cms.org.in/wp-json/wp/v2/seo-blog?_embed&slug=${params.slug}`
        )
        console.log(response.data)

        const formattedData = response.data.map((item) => ({
          id: item.id,
          //imageUrl: item["acf"]["post_desktop_images"]["url"],
          //category: item.categories.includes(1) ? "Blog" : "Blog", // Adjust based on actual categories
          title: item.title.rendered,
          content: item.content.rendered,
          desc: item.content.rendered.replace(/<[^>]+>/g, ""), // Remove HTML tags
          metaTitle: item.acf.meta_title,
          metaDesc: item.acf.meta_description,
        }))

        console.log(formattedData)

        setInsightsData(formattedData) // No need to append, just set the data directly
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [params.slug])

  return (
    <>
      {insightsData.map((item) => {
        return (
          <>
            <NextSeo
              title={item.metaTitle}
              description={item.metaDesc}
              path={myUrl}
              metaImage=""
            />
            <div
              className="flex flex-col justify-end h-[420px] md:h-[480px] w-full bg-center bg-cover py-10 md:py-16"
              style={{
                backgroundImage: `url("/insights/cmsBanner.png")`,
              }}
            >
              <Header />
              <div className="ps-2 md:ps-24">
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center sm:text-left"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
              </div>
            </div>

            {/* <div className="relative">
              <div
                className={`h-[420px] md:h-[480px] bg-cover bg-center pt-5 pb-14`}
                style={{
                  backgroundImage: `url(${item.imageUrl})`,
                }}
              >
                <div className="relative z-50">
                  <Header />
                </div>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative max-w-screen-xl mx-auto mt-20 sm:mt-24 md:mt-32 lg:mt-48 px-2 md:px-0">
                  <h1
                    className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center sm:text-left"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                </div>
              </div>
            </div> */}

            <div className="">
              <div className="w-10/12 mx-auto py-12">
                <p dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
            </div>
          </>
        )
      })}
    </>
  )
}

export default Page
