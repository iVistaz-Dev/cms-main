import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import NextSeo from "@/components/Seo/Seo"
import Insights from "@/components/Insights/Insights"

export function generateMetadata() {
  return {
    title: "Blogs and insights on sustainable impact",
    description:
      "Our blogs detail our various partnerships that facilitate sustainable change",
    metadataBase: new URL("https://cms.org.in/insights"),
    openGraph: {
      url: "https://cms.org.in/insights",
      title: "Blogs and insights on sustainable impact",
      description:
        "Our blogs detail our various partnerships that facilitate sustainable change",
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
  return (
    <>
      <div className="bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/cms-website/public/insights/banner.png')] flex flex-col justify-center md:justify-end h-[420px] md:h-[480px] bg-cover bg-center py-10 md:py-16">
        <Header />
        <div className="ps-2 md:ps-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center sm:text-left">
            Insights
          </h1>
        </div>
      </div>

      <Insights />

      <Footer />
    </>
  )
}

export default page
