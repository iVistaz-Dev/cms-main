import { aimToImpactData } from "@/utils/shoonyaTreeData"
import Image from "next/image"

const WhoDoWeAim = () => {
  return (
    <div className="h-auto px-5 py-20 md:py-28 bg-[url('/banner05.png')] bg-cover">
      <div className="flex flex-col items-center h-full gap-5 max-w-screen-lg mx-auto">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl md:text-4xl text-[#486601] text-center font-semibold">
            Who do we aim to impact?
          </h1>
          <p className="text-lg md:text-xl text-shoonya-black italic text-center">
            Shoonya’s priority is the planet, the people, and their prosperity.
          </p>
        </div>

        <div className="flex justify-center mt-10">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aimToImpactData.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`${
                    index === aimToImpactData.length - 1
                      ? "border-none"
                      : "md:border-r border-none md:border-dashed md:border-[#486601]"
                  }`}
                >
                  <div className="flex flex-col items-center gap-4 pr-0 md:pr-10">
                    <Image
                      src={item.iconUrl}
                      width={39}
                      height={39}
                      alt={item.title}
                      className="w-[39px] h-[39px]"
                    />
                    <h2 className="text-xl md:text-2xl text-shoonya-black text-center font-semibold">
                      {item.title}
                    </h2>
                    <p className="text-base md:text-lg text-[#141414] text-center">
                      {item.desc}
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>

        <p className="text-base md:text-lg text-shoonya-purple font-semibold text-center italic mt-10">
          We aim to make our initiative as transparent as possible with clear,
          accountable methods for every contribution and outcome.{" "}
          <br className="hidden md:inline" />
          You will be provided with visual proof and the resources to track your
          tree as it grows.
        </p>
      </div>
    </div>
  )
}

export default WhoDoWeAim
