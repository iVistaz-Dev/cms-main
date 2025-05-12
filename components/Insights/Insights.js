"use client"

import { rightArrow } from "@/utils/icon"
import Image from "next/image"
import { useEffect, useState } from "react"
import axios from "axios"
import Link from "next/link"
import { blogsTabs } from "@/utils/data"
import { FallingLines } from "react-loader-spinner"
import config from "@/config"

const Insights = () => {
  const [activeTab, setActiveTab] = useState(blogsTabs[0].path)
  const [insightsData, setInsightsData] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [heading, setHeading] = useState("")
  const [description, setDescription] = useState("")

  useEffect(() => {
    // Load the active tab from sessionStorage if available
    const savedTab = sessionStorage.getItem("activeTab")
    const initialTab = savedTab || blogsTabs[0].path // Default to first tab if no saved tab
    setActiveTab(initialTab)
    fetchDataForCategory(initialTab, 1) // Fetch data for the initial tab
  }, [])

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

  const handleTabClick = (tabPath) => {
    // Reset page and data if the tab changes or remains the same
    setActiveTab(tabPath)
    sessionStorage.setItem("activeTab", tabPath) // Save the selected tab to localStorage
    setPage(1)
    setInsightsData([])
    setHasMore(true)
    setHeading("")
    setDescription("")

    // Fetch data for the clicked tab
    fetchDataForCategory(tabPath, 1)
  }

  // Fetch data related to the selected category
  const fetchDataForCategory = async (category, pageNumber = 1) => {
    setLoading(true)
    try {
      // const response = await axios.get(
      //   `https://docs.cms.org.in/wp-json/wp/v2/posts?_embed&categories=${category}&status=publish&page=${pageNumber}`
      // )

      const domain =
        typeof window !== "undefined" ? window.location.hostname : ""

      let server

      // console.log(domain)

      if (
        domain === config.LIVE_SITE_URL ||
        domain === config.LIVE_SITE_URL_WWW
      ) {
        server = config.LIVE_PRODUCTION_SERVER_ID
      } else if (
        domain === config.STAGING_SITE_URL ||
        domain === config.LOCAL_SITE_URL
      ) {
        server = config.STAG_PRODUCTION_SERVER_ID
      } else {
        server = config.STAG_PRODUCTION_SERVER_ID
      }

      // const url = `https://docs.cms.org.in/wp-json/wp/v2/posts?_embed&categories=${category}&status=publish&page=${pageNumber}&production_mode[]=${server}`
      //const url = `https://docs.cms.org.in/wp-json/wp/v2/posts?_embed&categories=${category}&status=publish&page=${pageNumber}&production-mode[]=${server}`
      // console.log("URL", url)
      // console.log("Domain:", domain, "Server ID:", server)

      const response = await axios.get(url)

      // console.log(response)

      let categoryName
      let heading
      let description
      switch (category) {
        case "16":
          categoryName = "Blog"
          heading = "Blog"
          description = ""
          break
        case "59":
          categoryName = "Design for Success"
          heading = "Design for Success"
          description =
            "Discover how our human-centric designs blend agile methodologies and strategic planning to tackle societal challenges. Dive into our blogs to see the impact of our work!"
          break
        case "69":
          categoryName = "Livelihood"
          heading = "Livelihood"
          description =
            "Discover more insights and stories on enhancing livelihoods—read our blogs detailing our work with small producers across various sectors."
          break
        case "71":
          categoryName = "Health"
          heading = "Health"
          description =
            "Explore our blogs, where we share insights and stories on advancing health and well-being in vulnerable communities."
          break
        // case "17":
        //   categoryName = "Leveraging Assets"
        //   heading = "Leveraging Assets"
        //   description = ""
        //   break
        case "72":
          categoryName = "Wellbeing for Workforce"
          heading = "Wellbeing for Workforce"
          description =
            "Discover more about our initiatives and read inspiring stories from the field by exploring our blogs on worker wellbeing."
          break
        // case "7":
        //   categoryName = "Enabling Specialists"
        //   heading = "Enabling Specialists"
        //   description = ""
        //   break
        case "64":
          categoryName = "Community Engagement"
          heading = "Community Engagement"
          description = "Explore our latest blogs on Community Engagement"
          break
        case "80":
          categoryName = "Shoonya"
          heading = "Shoonya"
          description =
            "Discover more about how we're enabling transformations in the value chains for sustainability—read our blogs on Shoonya's impactful work and achievements."
          break
        case "26":
          categoryName = "Our Incubatees"
          heading = "Our Incubatees"
          description = ""
          break
        case "6":
          categoryName = "Our Teams"
          heading = "Our Teams"
          description = ""
          break
        case "63":
          categoryName = "TechTonic"
          heading = "TechTonic"
          description = ""
          break
        // case "78":
        //   categoryName = "Transforming Investments monitor for results"
        //   heading = "Transforming Investments monitor for results"
        //   description = ""
        //   break
        // case "60":
        //   categoryName = "Monitor for Results"
        //   heading = "Monitor for Results"
        //   description = ""
        //   break
        case "86":
          categoryName = "CLV"
          heading = "Catalyst Livelihood Ventures"
          description =
            "Explore the impact of our partnerships with smallholder farmers—read our latest blogs to see how Catalyst Livelihood Ventures is enhancing livelihoods and improving agricultural practices."
          break
        case "62":
          categoryName = "Evidence for Action"
          heading = "Evidence for Action"
          description =
            "Explore our blogs to gain insights into our work on facilitating theories of change, alternative analysis, results frameworks, and innovative tools."
          break
        case "77":
          categoryName = "Climate"
          heading = "Climate"
          description =
            "Explore our blogs to see we are working towards powering resilient, carbon-neutral systems and strengthening climate action."
          break
        case "87":
          categoryName = "CSI2019"
          heading = "CSI2019"
          description =
            "Explore our blog for the latest insights on Catalysing Social Impact (CSI)"
          break
        default:
          categoryName = "Blogs"
          heading = "Blogs"
          description = ""
          break
      }

      setHeading(heading)
      setDescription(description)

      if (response.data.length === 0) {
        setHasMore(false)
      } else {
        const formattedData = response.data.map((item) => {
          const postDate = new Date(item.date).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })

          return {
            id: item.id,
            imageUrl: item._embedded["wp:featuredmedia"][0].source_url,
            category: categoryName,
            title: item.title.rendered,
            slug: item.slug,
            desc: item.excerpt.rendered.replace(/<[^>]+>/g, ""),
            date: postDate, // Added date here
          }
        })

        // console.log("formattedData", formattedData)
        setInsightsData((prevData) =>
          pageNumber === 1 ? formattedData : [...prevData, ...formattedData]
        )
        if (response.data.length < 10) setHasMore(false)
      }
    } catch (error) {
      console.error("Error fetching data:", error)
    }
    setLoading(false)
  }

  // Fetch data when the page loads or the tab changes
  useEffect(() => {
    fetchDataForCategory(activeTab, 1)
  }, [activeTab])

  const loadMore = () => {
    setPage((prevPage) => {
      const newPage = prevPage + 1
      fetchDataForCategory(activeTab, newPage)
      return newPage
    })
  }
  return (
    <div className="flex flex-col lg:flex-row gap-10 mt-0 md:mt-16">
      {/* Blog Topics Sidebar for large screens */}
      <div className="hidden lg:block bg-cms-secondary-green w-[400px]">
        <ul className="w-full flex flex-col">
          <li className="py-5 text-white text-xl font-semibold bg-cms-primary pl-24">
            Blog Topics
          </li>
          {blogsTabs.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleTabClick(item.path)}
                className={`flex justify-between items-center relative py-5 pr-5 text-lg w-full text-left overflow-hidden group pl-24 ${
                  activeTab === item.path
                    ? "text-white bg-cms-primary-green"
                    : "text-cms-primary-black"
                }`}
              >
                <span className="relative z-10 group-hover:text-white">
                  {item.tab}
                </span>
                <span
                  className={`relative z-10 ${
                    activeTab === item.path
                      ? "block"
                      : "group-hover:block hidden"
                  } text-white text-xl`}
                >
                  {rightArrow}
                </span>
                <span
                  className={`absolute inset-0 bg-cms-primary-green transform ${
                    activeTab === item.path
                      ? "scale-x-100"
                      : "scale-x-0 origin-left"
                  } transition-transform duration-300 ease-out group-hover:scale-x-100`}
                ></span>
              </button>
              <div className="border-b border-dashed border-cms-primary-green ml-24" />
            </li>
          ))}
        </ul>
      </div>

      {/* Blog Topics Dropdown for small screens */}
      {/* Similar modification in dropdown as well */}
      <div className="lg:hidden">
        <button
          onClick={toggleDropdown}
          className="bg-cms-primary text-white w-full py-5 text-xl font-semibold text-left px-5"
        >
          Blog Topics
          <span
            className={`float-right transform transition-transform ease-in-out duration-300 ${
              dropdownOpen ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>

        {dropdownOpen && (
          <ul className="w-full flex flex-col bg-cms-secondary-green">
            {blogsTabs.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    handleTabClick(item.path)
                    setDropdownOpen(false) // Close dropdown after selecting
                  }}
                  className={`flex justify-between items-center relative py-5 pr-5 text-lg w-full text-left overflow-hidden group px-5 ${
                    activeTab === item.path
                      ? "text-white bg-cms-primary-green"
                      : "text-cms-primary-black"
                  }`}
                >
                  <span className="relative z-10 group-hover:text-white">
                    {item.tab}
                  </span>
                  <span
                    className={`relative z-10 group-hover:block hidden ${
                      activeTab === item.path ? "text-white" : ""
                    } text-xl`}
                  >
                    {rightArrow}
                  </span>
                  <span
                    className={`absolute inset-0 bg-cms-primary-green transform ${
                      activeTab === item.path
                        ? "scale-x-100"
                        : "scale-x-0 origin-left"
                    } transition-transform duration-300 ease-out group-hover:scale-x-100`}
                  ></span>
                </button>
                <div className="border-b border-dashed border-cms-primary-green mx-5" />
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Insights Section */}
      <div className="w-full">
        <div className="pb-10 flex flex-col justify-center max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 mb-7">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-cms-primary">
              {heading}
            </h1>
            <p className="text-lg text-cms-light-black">{description}</p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
            {insightsData.map((item) => (
              <li
                key={item.id}
                className="h-full border p-2 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="w-full flex flex-col gap-3 bg-white h-full">
                  <Image
                    src={item.imageUrl}
                    width={450}
                    height={260}
                    alt=""
                    className="w-full h-[250px] object-cover"
                  />
                  <div className="px-2 flex justify-between">
                    <p>{item.category}</p>
                    <p className="text-sm text-gray-600">{item.date}</p>
                  </div>
                  <hr className="border-t border-cms-primary-green" />
                  <div className="p-2 space-y-3 flex-grow flex flex-col">
                    <h1
                      className="text-xl text-cms-secondary-black font-semibold"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                    <p
                      className="text-cms-secondary-black flex-grow"
                      dangerouslySetInnerHTML={{ __html: item.desc }}
                    ></p>
                    <Link
                      href={`insights/${item.slug}`}
                      className="bg-cms-primary-green py-2 px-4 text-lg text-white self-start flex items-center gap-2 group"
                    >
                      Learn more
                      <span className="text-sm transform transition-transform duration-300 group-hover:translate-x-1">
                        {rightArrow}
                      </span>
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Loading and Load More Button */}
          {loading && (
            <div
              role="status"
              className="flex flex-col items-center gap-5 w-full pt-10"
            >
              <FallingLines
                color="#7F3F98"
                width="100"
                visible={true}
                ariaLabel="falling-lines-loading"
              />
            </div>
          )}

          {hasMore && !loading && (
            <div className="flex justify-center mt-10">
              <button
                onClick={loadMore}
                className="bg-cms-primary-green text-white px-5 py-2 text-xl"
                disabled={loading}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Insights
