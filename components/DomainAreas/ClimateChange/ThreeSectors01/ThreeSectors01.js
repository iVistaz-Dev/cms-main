import React from "react"

const ThreeSectors01 = () => {
  return (
    <div className="flex flex-col gap-7 py-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-cms-primary text-3xl font-semibold">
          Three Sectors
        </h1>
        <p className="text-lg text-[#404040] mt-2">
          Our initiatives primarily focus on the following sectors:
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row gap-3 text-cms-primary text-2xl">
          <p>01.</p>
          <p>Agriculture & Food Systems:</p>
        </div>
        <p className="text-lg text-[#404040]">
          <span className="text-[#404040]">Challenges: </span> Agricultural
          systems are on the front lines of climate change, both creating and
          affected by it, contributing significantly to water usage and
          livestock carbon emissions. With increased weather variability,
          shifting growing seasons, and changing precipitation patterns, small
          and marginal farmers are disproportionately affected. They are the
          backbone of a country’s agriculture, and climate change endangers both
          food security and livelihoods.
        </p>

        <p className="text-lg text-[#404040]">
          <span className="text-[#404040]">Our Approach: </span> We work closely
          with small and marginal farmers to adopt climate-smart agricultural
          practices and sustainable farming techniques. We also support the
          creation of resilient food supply chains and value-added processes to
          reduce post-harvest losses. The practices that are promoted are
          planned in such a way that there is biodiversity conservation and
          resource regeneration.
        </p>

        {/* <p className="text-lg text-cms-primary">For example,</p> */}

        <p className="text-lg text-[#404040]">
          For example, our work through the GREEN Foundation, which works at the
          intersection of food, energy, and health systems using regenerative
          models that integrate agricultural practices, sustainable land use,
          and rural communities, focuses on promoting regenerative agriculture
          practices by small-holder farmers through a combination of inputs,
          practices, financing, and market demand.
        </p>

        <p className="text-lg text-[#404040]">
          Our work through Vrutti which has a strong grassroots presence and
          works closely in the livelihoods sector, enhancing people’s well-being
          through knowledge, innovations and transformative actions. Mobilising
          and institutionalising (institutions and clusters) small producers in
          order to build their collective agency and supply chain
          sustainability. Vrutti strongly believes that ‘Sustainable Livelihood
          Approaches’ can be a great lever to address poverty, marginalisation
          and inclusive development.
        </p>
      </div>
    </div>
  )
}

export default ThreeSectors01
