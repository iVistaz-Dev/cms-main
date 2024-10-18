import { growEngageFacilitateData } from "@/utils/shoonyaTreeData"
import Image from "next/image"

const GrowEngageFacilitate = () => {
  return (
    <div className="h-auto px-5 md:pb-16 pt-24 justify-center">
      <div className="flex flex-col items-center justify-between gap-10 md:gap-16 max-w-screen-lg mx-auto">
        <div className="gap-3 md:gap-5 flex items-center italic flex-wrap justify-center">
          <span className="text-xl md:text-4xl text-[#486601]">Grow</span>
          <div className="border-b-2 border-[#FF9A50] w-10 md:w-24" />
          <span className="text-xl md:text-4xl text-[#FF6450]">Engage</span>
          <div className="border-b-2 border-[#626262] w-10 md:w-24" />
          <span className="text-xl md:text-4xl text-[#020202]">Facilitate</span>
        </div>

        <ul className="flex flex-col gap-10 md:gap-14 w-full">
          {growEngageFacilitateData.map((item, index) => (
            <li key={index}>
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
                <div
                  className={`${index % 2 !== 0 ? "md:order-0" : "md:order-1"}`}
                >
                  <Image
                    src={item.imageUrl}
                    width={200}
                    height={200}
                    className="w-[150px] md:w-[251px]"
                    alt={item.title}
                  />
                </div>
                <div
                  className={`flex flex-col items-center gap-4 w-full md:w-[425px] `}
                >
                  <h3
                    className={`text-[${item.textColor}] text-xl md:text-2xl font-semibold text-center`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-center text-base md:text-lg">
                    {item.desc}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default GrowEngageFacilitate
