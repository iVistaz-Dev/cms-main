import { ourApproachData } from "@/utils/socialProtectiondata"
import Image from "next/image"

const OurApproach = () => {
  return (
    <div className="flex flex-col lg:flex-row md:me-16">
      <div className="bg-cms-primary-green text-white flex-shrink-0">
        <div className="w-full lg:w-[400px] px-16 py-10">
          <h1 className="text-3xl font-semibold mb-6">Our Approach</h1>
        </div>
      </div>
      <div className="flex-1 border-b">
        <div className="w-full sm:w-10/12">
          <ul className="flex">
            {ourApproachData.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className={`w-[200px] h-[235px] flex flex-col gap-3 items-center px-4 pb-4 border border-t-0 ${
                    idx % 2 === 0 ? "bg-[#7253A3]" : "bg-cms-primary-green"
                  }`}
                >
                  <Image
                    src="/domainAreas/social-protection/triangle.svg"
                    width={32}
                    height={50}
                    alt={item.title}
                  />
                  <span className="text-lg text-white text-center">
                    {item.title}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default OurApproach
