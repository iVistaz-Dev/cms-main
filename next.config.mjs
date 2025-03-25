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
      {
        source: "/domain-areas/social-protection",
        destination: "/",
        permanent: true,
      },
      {
        source: "/collaborative-initiatives",
        destination: "/collaborative-orchestrations",
        permanent: true,
      },
      {
        source: "/esg",
        destination: "https://esg.cms.org.in/",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
