"use client"

import { rightArrow } from "@/utils/icon"
import Image from "next/image"
import { useEffect, useState } from "react"
import axios from "axios"
import Link from "next/link"
import { blogsTabs } from "@/utils/data"

const Insights = () => {
  const [activeTab, setActiveTab] = useState(blogsTabs[0].path)
  const [insightsData, setInsightsData] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    // Load the active tab from localStorage if available
    const savedTab = sessionStorage.getItem("activeTab")
    if (savedTab) {
      setActiveTab(savedTab)
    } else {
      setActiveTab(blogsTabs[0].path)
    }
  }, [])

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

  const handleTabClick = (tabPath) => {
    // Reset page and data if the tab changes or remains the same
    setActiveTab(tabPath)
    sessionStorage.setItem("activeTab", tabPath) // Save the selected tab to localStorage
    setPage(1)
    setInsightsData([])
    setHasMore(true)

    // Fetch data for the clicked tab
    fetchDataForCategory(tabPath, 1)
  }

  // Fetch data related to the selected category
  const fetchDataForCategory = async (category, pageNumber = 1) => {
    setLoading(true)
    try {
      const response = await axios.get(
        `https://docs.cms.org.in/wp-json/wp/v2/posts?_embed&categories=${category}&status=publish&page=${pageNumber}`
      )

      console.log(response)

      let categoryName
      switch (category) {
        case "16":
          categoryName = "Blog"
          break
        case "59":
          categoryName = "Design for Success"
          break
        case "69":
          categoryName = "Livelihood"
          break
        case "71":
          categoryName = "Health"
          break
        case "17":
          categoryName = "Leveraging Assets"
          break
        case "72":
          categoryName = "Wellbeing for Workforce"
          break
        case "7":
          categoryName = "Enabling Specialists"
          break
        case "64":
          categoryName = "Community Engagement"
          break
        case "80":
          categoryName = "Shoonya"
          break
        case "26":
          categoryName = "Our Incubatees"
          break
        case "6":
          categoryName = "Our Teams"
          break
        case "63":
          categoryName = "TechTonic"
          break
        case "78":
          categoryName = "Transforming Investments monitor for results"
          break
        case "60":
          categoryName = "Monitor for Results"
          break
        case "86":
          categoryName = "CLV"
          break
        case "62":
          categoryName = "Evidence for Change"
          break
        case "77":
          categoryName = "Climate"
          break
        case "87":
          categoryName = "CSI2019"
          break
        default:
          categoryName = "Blogs"
          break
      }

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

        console.log("formattedData", formattedData)
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
                className={`flex justify-between items-center relative py-5 pr-5 text-lg w-full text-left overflow-hidden group pl-24 ${activeTab === item.path
                  ? "text-white bg-cms-primary-green"
                  : "text-cms-primary-black"
                  }`}
              >
                <span className="relative z-10 group-hover:text-white">
                  {item.tab}
                </span>
                <span
                  className={`relative z-10 ${activeTab === item.path
                    ? "block"
                    : "group-hover:block hidden"
                    } text-white text-xl`}
                >
                  {rightArrow}
                </span>
                <span
                  className={`absolute inset-0 bg-cms-primary-green transform ${activeTab === item.path
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
            className={`float-right transform transition-transform ease-in-out duration-300 ${dropdownOpen ? "rotate-180" : ""
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
                  className={`flex justify-between items-center relative py-5 pr-5 text-lg w-full text-left overflow-hidden group px-5 ${activeTab === item.path
                    ? "text-white bg-cms-primary-green"
                    : "text-cms-primary-black"
                    }`}
                >
                  <span className="relative z-10 group-hover:text-white">
                    {item.tab}
                  </span>
                  <span
                    className={`relative z-10 group-hover:block hidden ${activeTab === item.path ? "text-white" : ""
                      } text-xl`}
                  >
                    {rightArrow}
                  </span>
                  <span
                    className={`absolute inset-0 bg-cms-primary-green transform ${activeTab === item.path
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
              <svg
                aria-hidden="true"
                className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2053 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2053 0 50.5908C0 22.9763 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9763 100 50.5908ZM9.08164 50.5908C9.08164 73.4198 27.171 91.5091 50 91.5091C72.829 91.5091 90.9184 73.4198 90.9184 50.5908C90.9184 27.7618 72.829 9.6725 50 9.6725C27.171 9.6725 9.08164 27.7618 9.08164 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5538C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7236 75.2124 7.55334C69.5422 4.38306 63.2754 2.51562 56.7733 2.08023C51.7669 1.73056 46.6976 2.10224 41.7597 3.17624C39.2615 3.73872 37.813 6.25798 38.4501 8.68344C39.0872 11.1089 41.5725 12.5221 44.0499 12.0858C47.9244 11.3175 51.8852 11.1689 55.7673 11.652C60.8784 12.3089 65.7863 14.1343 70.102 16.987C74.4177 19.8397 78.0519 23.6471 80.7781 28.1735C83.0664 31.843 84.7082 35.8024 85.6173 39.8994C86.2038 42.3378 89.5422 43.9898 91.9676 43.3527Z"
                  fill="currentFill"
                />
              </svg>
              <p>Loading...</p>
            </div>
          )}
          {hasMore && (
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