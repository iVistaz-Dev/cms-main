import Image from "next/image"
import React from "react"

const RapidFramework = () => {
  return (
    <div className="flex flex-col items-center gap-5 mb-8 w-full md:w-3/4 max-w-screen-xl mx-auto px-4">
      <h2 className="text-3xl font-semibold text-cms-primary text-center">
        The RAPID Framework
      </h2>
      <div className="border-b-2 border-cms-primary-green w-20" />
      <p className="text-lg text-center">
        To address these challenges, we have developed the RAPID framework.
        RAPID stands for Robust, Agile, Pragmatic, Intense, and Diligent – all
        qualities required for successful implementation for sustainable impact
        at scale. This framework focuses on multiple areas to ensure a
        comprehensive approach to implementation.
      </p>

      <Image
        src="/scaleAccelerators/implementForScale/rapidFramework/image01.png"
        width={904}
        height={488}
        alt="RAPID Framework"
        className="mt-5 w-full h-auto hidden md:block"
      />

      <Image
        src="/scaleAccelerators/implementForScale/rapidFramework/image02.png"
        width={354}
        height={788}
        alt="RAPID Framework"
        className="mt-5 w-full h-auto block md:hidden"
      />
    </div>
  )
}

export default RapidFramework
