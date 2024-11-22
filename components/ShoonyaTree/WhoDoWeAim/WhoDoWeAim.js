import { aimToImpactData } from "@/utils/shoonyaTreeData"
import Image from "next/image"

const WhoDoWeAim = () => {
  return (
    <div className="min-h-screen md:h-screen px-5 py-20 md:py-28 bg-[url('/banner10.png')] bg-cover bg-center">
      <div className="flex flex-col items-center h-full gap-5 max-w-screen-lg mx-auto">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl md:text-4xl text-[#486601] text-center font-semibold">
            Who do we aim to impact?
          </h1>
          <p className="text-lg md:text-xl text-shoonya-black italic text-center">
            Shoonya’s priority is the planet, the people, and their prosperity.
          </p>
        </div>

        <div className="flex justify-center mt-5 md:mt-20 w-full">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {aimToImpactData.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`${
                    index === aimToImpactData.length - 1 ? "border-none" : ""
                  }`}
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-[80px] h-[80px] sm:w-[96px] sm:h-[96px] flex justify-center items-center bg-[#A1B300] rounded-full">
                      <Image
                        src={item.iconUrl}
                        width={70}
                        height={70}
                        alt={item.title}
                        className="w-[65px] h-[65px]"
                      />
                    </div>
                    <div className="bg-white border border-[#707070] flex flex-col justify-center items-center py-2 px-4 sm:px-5 w-full rounded-3xl group">
                      <h2 className="text-lg sm:text-xl md:text-2xl text-shoonya-black text-center font-semibold">
                        {item.title}
                      </h2>
                      <p className="text-sm sm:text-base md:text-lg text-[#141414] text-center max-h-0 opacity-0 transition-all duration-300 ease-in-out group-hover:max-h-44 group-hover:opacity-100">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="mt-20 md:mt-auto bg-gradient-to-r from-[#7F3F97] to-[#9E54B9] py-4 px-5 sm:px-10 rounded-lg max-w-full sm:max-w-3xl">
          <p className="text-sm sm:text-base md:text-lg text-white font-semibold text-center italic">
            We aim to make our initiative as transparent as possible with clear,
            accountable methods for every contribution and outcome. You will be
            provided with visual proof and the resources to track your tree as
            it grows.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhoDoWeAim
