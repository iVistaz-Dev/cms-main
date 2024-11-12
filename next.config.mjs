/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["docs.cms.org.in", "s3.ap-south-1.amazonaws.com"],
  },
  async redirects() {
    return [
      {
        source: "/blog_details/",
        destination: "/insights/",
        permanent: true,
      },
      {
        source: "/blog_details/:slug",
        destination: "/insights/:slug",
        permanent: true,
      },
      {
        source: "/seo-blogs/:slug",
        destination: "/blogs/:slug",
        permanent: true,
      },
      // {
      //   source: "/v-life",
      //   destination: "/",
      //   permanent: false,
      // },
    ]
  },
}

export default nextConfig
