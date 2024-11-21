import InsightDetails from "@/components/Insights/InsightDetails";
import Footer from "@/components/Footer/Footer";
import axios from "axios";
import configData from "@/config";

async function fetchPostData(slug) {
  try {
    const response = await axios.get(
      `https://docs.cms.org.in/wp-json/wp/v2/posts?_embed&slug=${slug}`
    );

    if (Array.isArray(response.data) && response.data.length > 0) {
      const postData = response.data[0];
      return {
        metaTitle:
          postData.acf?.meta_title ||
          "Integrated solutions to shape social equity | CMS",
        metaDescription:
          postData.acf?.meta_description ||
          "We devise integrated solutions for complex problems to achieve social equity for vulnerable groups through partner collaboration.",
        canonical: `${configData.websiteMainUrl}insights/${slug}`,
      };
    }
    console.warn("No ACF data found for the given slug");
  } catch (error) {
    console.error("Error fetching post data:", error.message);
  }

  return {
    metaTitle: "Default Meta Title",
    metaDescription: "Default meta description",
    canonical: `${configData.websiteMainUrl}/insights/${slug}`,
  };
}

const Page = async ({ params }) => {
  const { slug } = params;
  const { metaTitle, metaDescription, canonical } = await fetchPostData(slug);

  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/images/cac_favicon-150x150.png" />
        <link rel="canonical" href={canonical} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:site_name" content="CMS" />
        <meta property="og:image" content="/images/og_image.png" />
        <meta name="twitter:card" content="summary_large_image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebSite",
              name: "CMS",
              url: canonical,
              potentialAction: {
                "@type": "SearchAction",
                target: `${configData.websiteMainUrl}insights/${slug}{search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <InsightDetails myUrl={slug} />
      <div className="mt-auto">
        <Footer />
      </div>
    </>
  );
};

export default Page;
