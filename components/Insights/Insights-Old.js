"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import axios from "axios"
import Link from "next/link"
import { rightArrow } from "@/utils/icon"

const InsightsOld = () => {
    const [insightsOldData, setInsightsOldData] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)

    const fetchData = async (pageNumber = 1) => {
        setLoading(true)
        try {
            const response = await axios.get(
                `https://docs.cms.org.in/wp-json/wp/v2/posts?_embed&categories=16&status=publish&page=${pageNumber}`
            )

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
                        title: item.title.rendered,
                        slug: item.slug,
                        desc: item.excerpt.rendered.replace(/<[^>]+>/g, ""),
                        date: postDate,
                    }
                })

                setInsightsOldData((prevData) =>
                    pageNumber === 1 ? formattedData : [...prevData, ...formattedData]
                )
                if (response.data.length < 10) setHasMore(false)
            }
        } catch (error) {
            console.error("Error fetching data:", error)
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchData(1)
    }, [])

    const loadMore = () => {
        setPage((prevPage) => {
            const newPage = prevPage + 1
            fetchData(newPage)
            return newPage
        })
    }

    return (
        <div className="flex flex-col gap-10 mt-0 md:pt-16 w-full bg-cms-secondary-green">
            <div className="pb-10 flex flex-col justify-center max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {insightsOldData.map((item) => (
                        <li
                            key={item.id}
                            className="h-full border hover:shadow-lg"
                        >
                            <div className="w-full flex flex-col gap-3 bg-white h-full">
                                <Image
                                    src={item.imageUrl}
                                    width={450}
                                    height={260}
                                    alt=""
                                    className="w-full h-[250px] object-cover"
                                />
                                <div className=" flex justify-between">
                                    <p className="px-2">Blog</p>
                                </div>
                                <hr className="border-t border-gray-200" />
                                <div className="p-2 space-y-3 flex-grow flex flex-col">
                                    <h1
                                        className="text-lg text-cms-primary "
                                        dangerouslySetInnerHTML={{ __html: item.title }}
                                    />
                                    <p
                                        className="text-lg text-[#1A1A1A] flex-grow"
                                        dangerouslySetInnerHTML={{ __html: item.desc }}
                                    ></p>
                                    <Link
                                        href={`insights/${item.slug}`}
                                        className="underline text-lg text-cms-primary self-start flex items-center gap-2"
                                    >
                                        Learn more
                                        <span className="text-sm text-[#1A1A1A]">
                                            {rightArrow}
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                {/* Loading Spinner */}
                {loading && (
                    <div role="status" className="flex flex-col items-center gap-5 w-full pt-10">
                        <svg
                            aria-hidden="true"
                            className="w-8 h-8 mr-2 text-gray-200 animate-spin fill-blue-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08169 50.5908C9.08169 74.1591 26.4317 91.5091 50 91.5091C73.5683 91.5091 90.9183 74.1591 90.9183 50.5908C90.9183 27.0225 73.5683 9.67249 50 9.67249C26.4317 9.67249 9.08169 27.0225 9.08169 50.5908Z"
                                fill="currentColor"
                            />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5533C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.723 75.2124 7.41289C69.5422 4.10277 63.2754 1.94025 56.7455 1.05126C51.7664 0.367181 46.7056 0.446369 41.7642 1.27873C39.297 1.69443 37.819 4.19778 38.4562 6.62326C39.0933 9.04874 41.5655 10.4717 44.0164 10.1071C47.8827 9.50704 51.8201 9.48725 55.6761 10.0494C60.8783 10.7915 65.8864 12.6356 70.3969 15.5075C74.9075 18.3795 78.8164 22.2177 81.8893 26.811C84.4846 30.5466 86.5389 34.633 87.9387 38.9567C88.7451 41.3121 91.5422 40.9341 93.9676 39.0409Z"
                                fill="currentFill"
                            />
                        </svg>
                        <span className="text-xl">Loading...</span>
                    </div>
                )}

                {/* Load More Button */}
                {!loading && hasMore && (
                    <div className="flex justify-center pt-10">
                        <button
                            onClick={loadMore}
                            className="mt-5 mx-auto px-4 py-2 bg-cms-primary text-white rounded"
                        >
                            Load More
                        </button>
                    </div>
                )}

                {/* No More Posts Message */}
                {/* {!hasMore && !loading && (
                    <div className="flex justify-center pt-10">
                        <p className="text-lg font-semibold">No more posts to display.</p>
                    </div>
                )} */}
            </div>
        </div>
    )
}

export default InsightsOld
