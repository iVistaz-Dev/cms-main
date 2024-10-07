import Image from "next/image"
import React from "react"

const ImplementForScale = () => {
  return (
    <div className="bg-cms-primary py-12 space-y-10 mb-16">
      <div className="flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full lg:w-auto">
          <Image
            src="/scaleAccelerators/implementForScale/image01.png"
            width={584}
            height={437}
            alt=""
            className="w-full max-w-lg"
          />
        </div>
        <div className="w-full lg:w-[536px] flex flex-col gap-4 text-white lg:me-36 mt-8 lg:mt-0">
          <h3 className="text-xl sm:text-2xl font-semibold">
            Why Worry About Implementation?
          </h3>
          <p className="text-base sm:text-lg">
            It is a common misconception to assume that the effectiveness of an
            innovation guarantees its uptake into routine usage. Countless
            examples exist where highly effective programmes yield poor results
            when scaled. This discrepancy between knowledge and action is a
            significant challenge that needs to be addressed. One reason for
            this is the gap between what we know and what we do. Even if an
            innovation or intervention has been proven to be highly effective in
            small-scale studies or pilot programmes, there is no guarantee that
            it will be successfully implemented when scaled up. Establishing the
            effectiveness of an innovation is not enough; it needs to be
            effectively implemented to achieve the desired outcomes.
          </p>
          <p className="text-base sm:text-lg">
            The success of implementation and innovation uptake depends largely
            on contextual factors rather than just the effectiveness of the
            innovation itself. Understanding these factors is crucial for
            achieving desired outcomes.
          </p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto text-white space-y-3 px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl sm:text-2xl font-semibold">
          What is the Cost of Implementation Failure?
        </h3>
        <p className="text-base sm:text-lg">
          Implementation failure has both direct and indirect costs. It is not
          just about the money spent on the project but also about the time and
          effort that go into its implementation. According to a study by the
          Harvard Business Review, an average of 27% of projects incur cost
          overruns, and more than 70% incur schedule overruns. These delays and
          cost overruns can have serious consequences for individuals involved
          in the project, leading to tension and frustration and decreasing
          morale and productivity. The consequences of implementation failures
          can be far-reaching, impacting not only the organisation but also the
          individuals directly involved.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 ps-4 sm:ps-6 lg:ps-24 mt-8 lg:mt-0">
        <div className="w-full lg:w-auto order-2 lg:order-1 mt-8 lg:mt-0">
          <Image
            src="/scaleAccelerators/implementForScale/image02.png"
            width={584}
            height={437}
            alt=""
            className="w-full max-w-lg"
          />
        </div>
        <div className="w-full lg:w-[600px] flex flex-col gap-4 text-white order-1 lg:order-2">
          <h3 className="text-xl sm:text-2xl font-semibold">
            Factors Affecting Successful Implementations
          </h3>
          <p className="text-base sm:text-lg">
            Implementation is not just about the innovation itself but also
            about the arrangements and environment surrounding it. Even if an
            intervention is effective in a controlled setting, its success in
            the real world depends largely on the contextual factors that come
            into play. These factors include the external environment, teams and
            capacities, and the culture and systems in place.
          </p>
          <p className="text-base sm:text-lg">
            To ensure successful implementation and results, we need to address
            these factors effectively.
          </p>
          <p className="text-base sm:text-lg">
            So, what can be done to ensure successful implementation and
            results? One key aspect is intervention design. The innovation or
            intervention needs to be designed in a way that takes into account
            the contextual factors that influence its implementation. This
            includes considering the external environment, such as blueprints
            and action plans, as well as the teams and capacities involved.
            Having trained and certified team members, along with guided
            mentoring, can make a significant difference in the success of
            implementation. Additionally, the culture and systems within the
            organisation need to enable and promote the repeat processes that
            are necessary for successful implementation.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ImplementForScale
