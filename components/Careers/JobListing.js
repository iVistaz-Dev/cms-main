"use client"

import axios from "axios"
import Link from "next/link"
import React, { useEffect, useState } from "react"

// const jobPositions = [
//   {
//     id: 1,
//     title: "Marketing and Communications Lead",
//     bgColor: "bg-cms-primary",
//     points: [
//       "Develop and promote branding initiatives consistent with corporate business goals and objectives",
//       "Creating and managing all marketing materials and collateral in line with brand direction",
//       "Implementing online marketing activities including social media, SEO/SEM, demand generation, lead generation, etc.",
//     ],
//     link: "https://catalyst.keka.com/careers/jobdetails/36543",
//   },
//   {
//     id: 2,
//     title: "Quantitative Research Associate",
//     bgColor: "bg-[#9250AC]",
//     points: [
//       "Selecting appropriate research design for impact evaluations. Such design may include experimental, quasi-experimental, or other techniques. They may be short-, medium-, or long-term",
//       "Designing questionnaires for primary data collection, incorporating feedback from various stakeholders",
//     ],
//     link: "https://catalyst.keka.com/careers/JobDetails/9666",
//   },
// ]

const JobListing = () => {
  const [isOpening, setIsOpening] = useState(false)
  const [openings, setOpenings] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://docs.cms.org.in/wp-json/wp/v2/career_openings_now?_embed&status=publish"
        )
        console.log(response)

        if (response.data.length === 0) {
          setIsOpening(false)
        } else {
          const formattedData = response.data.map((item) => {
            return {
              id: item.id,
              title: item.title.rendered,
              desc: item.content.rendered,
              link: item.acf.career_custom_url,
            }
          })

          console.log(formattedData)
          setOpenings([...formattedData])
          setIsOpening(true)
        }
      } catch (error) {
        console.log("Error fetching Data:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {openings.map((job) => (
          <div
            key={job.id}
            className="flex flex-col md:flex-row bg-white shadow-lg m-4 w-full md:w-5/6 lg:w-3/4"
          >
            <div
              className={`bg-cms-primary text-white p-6 w-full md:w-1/3 relative`}
            >
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <div className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-l-[10px] border-l-current"></div>
            </div>
            <div className="flex px-8 py-10 flex-col gap-4 w-full md:w-2/3">
              <div className="flex flex-wrap">
                <div className="flex flex-col items-start space-y-2 w-full p-2">
                  {/* <div className="w-7 border-b-2 border-cms-primary-green" /> */}
                  <div className="content-container">
                    <p dangerouslySetInnerHTML={{ __html: job.desc }}></p>
                  </div>
                </div>
                {/* {job.points.map((point, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start space-y-2 w-full md:w-1/3 p-2"
                >
                  <div className="w-7 border-b-2 border-cms-primary-green" />
                  <p>{point}</p>
                </div>
              ))} */}
              </div>
              {job.link && (
                <Link href={job.link} target="_blank">
                  <button className="mt-4 px-4 py-2 self-start border border-cms-primary text-cms-primary hover:bg-purple-100">
                    More Details
                  </button>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
      {!isOpening && (
        <h2 className="text-center text-3xl text-cms-primary font-semibold my-8">
          Currently No Openings
        </h2>
      )}
    </>
  )
}

export default JobListing
