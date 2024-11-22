import Image from "next/image"
import StartWithShoonyaItems from "./StartWithShoonyaItems/StartWithShoonyaItems"
import { benefitsOfStartingWithShoonya } from "@/utils/shoonyaTreeData"

const StartWithShoonya = () => {
  return (
    <div className="h-auto px-5 pb-40 bg-[url('/banner02.png')] bg-cover overflow-hidden">
      <div className="flex flex-col items-center justify-between h-full gap-10 md:gap-14 max-w-screen-lg mx-auto">
        <div className="border-b border-dashed border-shoonya-green w-full" />

        <div className="flex flex-col items-center gap-3 md:gap-4">
          <h1 className="text-2xl md:text-4xl text-[#486601] text-center font-semibold mt-3">
            What happens when you start with Shoonya?
          </h1>
        </div>

        <div className="w-full overflow-x-hidden">
          <StartWithShoonyaItems />
        </div>

        <div className="flex flex-col items-center gap-3 md:gap-4 mt-14">
          <h1 className="text-2xl md:text-4xl text-[#486601] text-center font-semibold mt-3">
            What are the benefits of starting with Shoonya?
          </h1>
        </div>

        <div className="flex justify-center mt-5">
          <ul className="flex flex-wrap lg:flex-nowrap gap-6 justify-center md:justify-start">
            {benefitsOfStartingWithShoonya.map((item, index) => (
              <li
                key={index}
                className={`${
                  index === benefitsOfStartingWithShoonya.length - 1
                    ? "border-none"
                    : "md:border-r md:border-solid md:border-[#CDD1AA]"
                } w-full sm:w-72 md:w-1/2 lg:w-72`}
              >
                <div className="flex flex-col items-center gap-4 px-4 md:px-8">
                  <h2 className="text-base sm:text-lg md:text-xl text-[#020202] text-center font-semibold">
                    {item.title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-[#020202] text-center">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default StartWithShoonya
