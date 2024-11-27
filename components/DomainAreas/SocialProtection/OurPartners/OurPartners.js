import { ourPartnersData } from "@/utils/socialProtectiondata"
import Image from "next/image"

const OurPartners = () => {
  return (
    <div className="flex flex-col lg:flex-row md:me-16">
      {/* Left Section (Heading) */}
      <div className="bg-cms-primary-green text-white flex-shrink-0">
        <div className="w-full lg:w-[400px] px-8 sm:px-16 py-8 sm:py-10">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">
            Our Partners
          </h1>
        </div>
      </div>

      {/* Right Section (Partner Logos) */}
      <div className="flex-1 border-b py-5">
        <div className="px-5 sm:px-10 lg:px-20 w-full mx-auto">
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
            {ourPartnersData.map((image, idx) => (
              <li key={idx} className="flex justify-center items-center">
                <Image
                  src={image.imageUrl}
                  width={200}
                  height={100}
                  alt={`Partner Logo ${idx + 1}`}
                  className="w-auto h-auto max-w-full max-h-[100px]"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default OurPartners
