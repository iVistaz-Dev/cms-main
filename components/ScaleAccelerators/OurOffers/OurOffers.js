import Image from "next/image"
import React from "react"

const OurOffers = () => {
  return (
    <div className="flex flex-col items-center gap-5 mt-10 mb-8 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold text-cms-primary text-center">
        Our Offers
      </h2>
      <div className="border-b-2 border-cms-primary-green w-20 mx-auto" />
      <p className="text-lg text-center mt-4">
        To support organisations in achieving successful implementation, we
        offer a range of services and tools. These include proof of concepts to
        test and validate innovative ideas, capacity-building programmes to
        equip teams with the necessary skills and knowledge, performance
        management tools and approaches, technical support, and state-of-the-art
        technologies. Additionally, our marketing and communication expertise
        can help organisations effectively position and promote their
        innovations and mobilise capital to provide financial support for
        implementation efforts.
      </p>

      <div className="bg-[#ECDFF2] rounded-2xl flex flex-col gap-3 items-center p-6 sm:p-10 my-5">
        <h2 className="text-3xl font-semibold text-cms-primary text-center">
          Stages of Intervention
        </h2>
        <div className="border-b-2 border-cms-primary-green w-20 mx-auto" />
        <p className="text-lg text-center w-full sm:w-3/4 mt-3">
          We can support organisations at various stages based on the
          requirements of the implementing organisation. It starts with
          comprehensive planning, followed by piloting the intervention to gauge
          its effectiveness and make necessary refinements. Once the pilot is
          successful, we scale up the implementation to reach a wider audience.
          Sustaining the intervention involves ongoing monitoring, evaluation,
          and adjustments to ensure long-term impact.
        </p>

        <Image
          src="/scaleAccelerators/implementForScale/ourOffers/image01.png"
          width={558}
          height={472}
          alt=""
          className="w-full max-w-md mt-5"
        />
      </div>

      <h2 className="text-3xl font-semibold text-[#1A1A1A] text-center">
        Conclusion
      </h2>
      <p className="text-lg text-center text-[#1A1A1A] mt-4">
        Implementing innovative ideas and interventions for sustainable impact
        at scale is a complex endeavour. However, by following a comprehensive
        framework like RAPID, organisations can increase their chances of
        success by understanding the reasons behind implementation failures,
        addressing the costs associated with these failures, and implementing
        the key factors of successful execution. Organisations can unlock the
        power of effective implementation. Through our comprehensive range of
        offerings and support, we strive to support organisations in their
        implementation journey and help them achieve the desired results.
      </p>
    </div>
  )
}

export default OurOffers
