import { ourPartnersData } from "@/utils/socialProtectiondata"
import Image from "next/image"

const OurPartners = () => {
  return (
    <div className="flex flex-col lg:flex-row md:me-16">
      <div className="bg-cms-primary-green text-white flex-shrink-0">
        <div className="w-full lg:w-[400px] px-16 py-10">
          <h1 className="text-3xl font-semibold mb-6">Our Partners</h1>
        </div>
      </div>
      <div className="flex-1 border-b py-5">
        <div className="px-5 w-full sm:w-10/12">
          <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {ourPartnersData.map((image, idx) => (
              <li key={idx}>
                <Image
                  src={image.imageUrl}
                  width={250}
                  height={125}
                  alt="logo"
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
