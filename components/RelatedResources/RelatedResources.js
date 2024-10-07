'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { leftArrow, rightArrow } from '@/utils/icon'
import Link from 'next/link'

const RelatedResources = () => {
  const router = useRouter()
  const [extractedPath, setExtractedPath] = useState('')
  const [insightsData, setInsightsData] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [slugId, setSlugId] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fullPath = window.location.pathname
      const segment = 'domain-areas/'
      const index = fullPath.indexOf(segment)

      if (index !== -1) {
        setExtractedPath(fullPath.substring(index + segment.length))
      }
    }
  }, [router])

  useEffect(() => {
    if (extractedPath === 'livelihood') {
      setSlugId('69')
    } else if (extractedPath === 'health') {
      setSlugId('71')
    } else if (extractedPath === 'climate-change') {
      setSlugId('77')
    } else if (extractedPath === 'workforce-wellbeing') {
      setSlugId('72')
    }
  }, [extractedPath])

  const fetchData = async (pageNumber = 1) => {
    setLoading(true)
    try {
      if (slugId) {
        const response = await axios.get(
          `https://docs.cms.org.in/wp-json/wp/v2/posts?_embed&categories=${slugId}`
        )
        console.log('Fetched data categories:', response.data)

        if (response.data.length === 0) {
          console.log('No more posts to fetch')
        } else {
          const formattedData = response.data.map((item) => ({
            id: item.id,
            imageUrl: item._embedded['wp:featuredmedia'][0].source_url,
            category: item.categories.includes(1) ? 'Blog' : 'Blog', // Adjust based on actual categories
            title: item.title.rendered,
            slug: item.slug,
            desc: item.excerpt.rendered.replace(/<[^>]+>/g, ''), // Remove HTML tags
          }))
          setInsightsData(formattedData)
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (slugId) {
      fetchData(page)
    }
  }, [page, slugId])

  const handleNext = () => {
    if (currentIndex + 3 < insightsData.length) {
      setCurrentIndex(currentIndex + 3)
    }
  }

  const handlePrevious = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3)
    }
  }

  return (
    <>
      {insightsData.length > 0 && (
        <div className="bg-[#00AE8E]">
          <div className="max-w-screen-xl mx-auto py-10 px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <h3 className="text-white text-2xl md:text-3xl font-semibold mb-4 md:mb-0">
                Related Resources{' '}
              </h3>
              {insightsData.length > 3 && (
                <div className="flex gap-3 text-lg md:text-xl text-white">
                  <span onClick={handlePrevious} className="cursor-pointer">
                    {leftArrow}
                  </span>
                  <span onClick={handleNext} className="cursor-pointer">
                    {rightArrow}
                  </span>
                </div>
              )}
            </div>

            <ul className="flex flex-wrap gap-5 mt-10">
              {insightsData
                .slice(currentIndex, currentIndex + 3)
                .map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="w-full sm:w-[352px] flex flex-col"
                    >
                      <div className="flex flex-col gap-3 text-white text-base sm:text-lg bg-[#004B49] md:bg-transparent p-4 rounded flex-grow">
                        <Image
                          src={item.imageUrl}
                          width={352}
                          height={200}
                          alt=""
                          className="w-[352px] h-[200px] rounded"
                        />
                        <p>
                          {extractedPath.charAt(0).toUpperCase() +
                            extractedPath.slice(1)}
                        </p>

                        <hr className="border-white" />
                        <p className="font-semibold">{item.title}</p>
                        <p
                          className="flex-grow"
                          dangerouslySetInnerHTML={{ __html: item.desc }}
                        />
                        <div className="mt-auto">
                          <Link
                            href={`/insights/${item.slug}`}
                            className="px-4 py-2 bg-transparent border border-white rounded text-sm sm:text-base w-full"
                          >
                            Know more
                          </Link>
                        </div>
                      </div>
                    </li>
                  )
                })}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default RelatedResources
