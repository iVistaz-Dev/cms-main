import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import RelatedResources from "@/components/RelatedResources/RelatedResources"
import PartneredWithExperts from "@/components/ScaleAccelerators/EvidenceForChange/PartneredWithExperts/PartneredWithExperts"
import { workIncludeData } from "@/utils/data"
import Image from "next/image"
import React from "react"

export const tabs = [
  {
    id: 1,
    tab: "Overview",
    link: "overview",
  },
  {
    id: 2,
    tab: "Our Partners",
    link: "ourPartners",
  },
  {
    id: 3,
    tab: "Our Work",
    link: "ourWork",
  },
  {
    id: 4,
    tab: "Related Resources",
    link: "",
  },
]

export function generateMetadata() {
  return {
    title:
      "Transforming investment through impact evaluations | Evidence for Change",
    description:
      "We do research and evaluation by conducting impact assessments in multiple domains, with a variety of partners, using multidisciplinary learning systems",
    metadataBase: new URL("https://cms.org.in/solutions/evidence-for-change"),
    openGraph: {
      url: "https://cms.org.in/solutions/evidence-for-change",
      title:
        "Transforming investment through impact evaluations | Evidence for Change",
      description:
        "We do research and evaluation by conducting impact assessments in multiple domains, with a variety of partners, using multidisciplinary learning systems",
      images: [
        {
          url: "/social.png",
          width: 800,
          height: 600,
          alt: "CMS",
        },
      ],
    },
  }
}

const page = () => {
  return (
    <>
      {/* <NextSeo
        title="Transforming investment through impact evaluations | Evidence for Change"
        description="We do research and evaluation by conducting impact assessments in multiple domains, with a variety of partners, using multidisciplinary learning systems"
        path="https://cms.org.in/solutions/evidence-for-change"
        metaImage=""
      /> */}
      <div className="bg-[url('/scaleAccelerators/evidenceForChange/banner.png')] h-[420px] md:h-[640px] bg-center bg-cover pt-5 flex flex-col">
        <div className="w-full">
          <Header />
        </div>
        {/* <div className="md:ps-24 flex justify-center md:justify-start mt-14 sm:mt-24 md:mt-32 lg:mt-48 px-2 md:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
            Evidence for Change
          </h1>
        </div> */}
        <div className="md:ps-24 flex flex-col items-center md:items-start justify-end h-full gap-10 md:gap-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
            Evidence for Change
          </h1>
          <div className="">
            <Image
              src="/scaleAccelerators/evidenceForChange/logo.png"
              height={142}
              width={153}
              alt="logo"
            />
          </div>
        </div>
      </div>

      {/* <Tab tabs={tabs} /> */}

      <div className="max-w-screen-xl mx-auto mt-5 md:mt-14 mb-8 px-5">
        <div className="space-y-4 text-cms-primary-black text-base md:text-lg w-full md:w-4/5">
          <p>
            Evidence for Change specialises in facilitating theories of change,
            alternate analysis, results frameworks, and tools; building evidence
            through pluralistic methodologies, participatory learning, and
            action; and establishing efficient monitoring, evaluation, and
            learning systems through a multidisciplinary approach.
          </p>
          <p>
            We specialise in designing and conducting research and evaluation in
            multiple domains, with a variety of partners, through a
            collaborative process.
          </p>
          <p>
            We deliver quality impact evaluations through rigorous experimental,
            quasi-experimental, mixed-method, and qualitative methods, both
            nationally and internationally. Our focus areas include conducting
            impact assessments, programme evaluations, summative and performance
            evaluations, action research, exploratory and formative assessments,
            literature reviews, sectoral studies, and organisational
            assessments, amongst others.
          </p>
        </div>
      </div>

      <PartneredWithExperts />

      <div className="max-w-screen-xl mx-auto text-lg text-[#1A1A1A] mb-8 px-5">
        <p>
          We have carried out over 100 project/programme evaluations and
          organisational assessments, using methods and approaches that help
          communities and programme staff reflect, assess, learn, and apply
          strategies. The team has strong experience in using evidence to
          contribute to shaping public and organisational policies and improving
          programme strategies.
        </p>
      </div>

      <div className="max-w-screen-xl mx-auto w-full flex flex-col md:flex-row justify-between items-center mb-16 px-5">
        <div className="flex-shrink-0 mb-5 md:mb-0">
          <Image
            src="/scaleAccelerators/evidenceForChange/image01.png"
            width={444}
            height={320}
            alt="Evaluation Image"
            className="w-full h-auto"
          />
        </div>

        <div className="w-full md:w-[500px] text-lg text-[#1A1A1A] md:ms-16">
          <p>
            Recently, the team (CMS and 3ie), working with the Government,
            concluded the evaluation of the National Rural Livelihood Project’s
            (NRLP) programme working on women's empowerment and decision-making
            within the household through access to credit. We studied the impact
            of the programme and the institutional support that SHG provides to
            women with the aim of providing a sustainable livelihood and
            financial inclusion. We measured the decision-making capacity of
            women based on the responses recorded to 26 questions that covered a
            variety of scenarios within households, such as food, children,
            education, assets, and finance.
          </p>
        </div>
      </div>

      <div className="bg-cms-primary mb-10">
        <div className="max-w-screen-xl mx-auto px-5 md:px-20 flex flex-col gap-5 items-center py-10">
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-white text-2xl md:text-3xl font-semibold text-center">
              Other examples of our work include
            </h3>
            <div className="border-b border-white w-16 md:w-20" />
          </div>
          <ul className="flex flex-col gap-5 text-white w-full md:w-10/12">
            {workIncludeData.map((item) => {
              return (
                <li
                  key={item.id}
                  className={`${
                    workIncludeData.length !== item.id
                      ? "border-b border-dashed"
                      : ""
                  } pb-4`}
                >
                  <div className="flex flex-col md:flex-row items-center gap-5">
                    <Image
                      src={item.iconUrl}
                      width={100}
                      height={100}
                      alt=""
                      className={`${
                        item.id % 2 === 0 ? "md:order-2" : "md:order-1"
                      }`}
                    />
                    <p
                      className={`text-lg text-center md:text-left ${
                        item.id % 2 === 0 ? "md:order-1" : "md:order-2"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <RelatedResources />

      <div className="mt-auto">
        <Footer />
      </div>
    </>
  )
}

export default page
