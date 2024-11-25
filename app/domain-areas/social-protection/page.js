import Seo from "../../../components/Seo/Seo"
import Image from "next/image"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import RelatedResources from "@/components/RelatedResources/RelatedResourcesMy"
import WhySocialProtection from "@/components/DomainAreas/SocialProtection/WhySocialProtection/WhySocialProtection"
import TheChallenges from "@/components/DomainAreas/SocialProtection/TheChallenges/TheChallenges"
import OurApproach from "@/components/DomainAreas/SocialProtection/OurApproach/OurApproach"
import OurAim from "@/components/DomainAreas/SocialProtection/OurAim/OurAim"
import OurImpact from "@/components/DomainAreas/SocialProtection/OurImpact/OurImpact"
import OperatingModel from "@/components/DomainAreas/SocialProtection/OperatingModel/Operating Model"
import SamajikSuraksha from "@/components/DomainAreas/SocialProtection/SamajikSuraksha/SamajikSuraksha"
import OurPartners from "@/components/DomainAreas/SocialProtection/OurPartners/OurPartners"
import SocialProtectionSchemes from "@/components/DomainAreas/SocialProtection/SocialProtectionSchemes/SocialProtectionSchemes"
import Team from "@/components/AboutUs/Team/Team"
import OurTeam from "@/components/DomainAreas/SocialProtection/OurTeam/OurTeam"
import SuccessStories from "@/components/DomainAreas/SocialProtection/SuccessStories/SuccessStories"

export const tabs = [
  {
    id: 1,
    tab: "Overview",
    link: "overview",
  },
  {
    id: 2,
    tab: "Key Domains",
    link: "keyDomains",
  },
  {
    id: 3,
    tab: "Key Initiatives",
    link: "keyInitiatives",
  },
  {
    id: 4,
    tab: "Alliances and Platforms",
    link: "alliancesAndPlatforms",
  },
  {
    id: 5,
    tab: "Investing for Impact",
    link: "investingForImpact",
  },
  {
    id: 6,
    tab: "Related Resources",
    link: "relatedResources",
  },
]

const page = () => {
  const seoField = {
    title: "Strengthening health and community systems | Health",
    description:
      "We focus on strengthening health and community systems to achieve Universal Health Coverage, health equity quality primary care for all",
    path: "domain-areas/health",
    metaImage: "/social.png",
    pageType: "WebSite",
  }

  return (
    <>
      <div className="bg-[url('/domainAreas/social-protection/banner.png')] h-[420px] md:h-[640px] bg-center bg-cover pt-5 flex flex-col">
        <div className="w-full">
          <Seo {...seoField} />
          <Header />
        </div>
        <div className="md:ps-24 flex justify-center md:justify-start items-end h-full">
          <div className="flex justify-center items-center h-40 w-44  md:h-44 md:w-64 bg-white">
            <Image
              src="/domainAreas/social-protection/logo.png"
              height={256}
              width={170}
              alt="logo"
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* <Tab tabs={tabs} /> */}
      {/* <Overview desc={overviewDesc} /> */}
      <div className="max-w-screen-xl mx-auto my-5 md:my-10 px-4">
        <h1 className="text-[#1A1A1A] text-2xl sm:text-3xl font-semibold mb-4">
          Overview
        </h1>
        <p className="text-base sm:text-lg text-[#646464]">
          Social protection is a critical lifeline, yet for millions in India,
          accessing these essential services remains a formidable challenge.
          Ensuring that vulnerable communities have access to vital resources
          during difficult times is essential. It helps safeguard individuals
          from economic instability, health emergencies, and environmental
          risks.
        </p>
        <p className="text-base sm:text-lg text-[#646464] mt-5">
          Despite the existence of numerous programs by the government, a lack
          of cohesive delivery, limited awareness, and accessibility issues
          hinder their effectiveness. By addressing these challenges, we aim to
          streamline access to social protection, by setting up help desks and
          creating awareness around it. This makes it easier for underserved
          communities to benefit from the support systems designed for them.
          This approach is crucial for fostering long-term resilience and
          equitable growth.
        </p>
      </div>

      <WhySocialProtection />
      <TheChallenges />
      <OurApproach />
      <OurAim />
      <SocialProtectionSchemes />
      <OurImpact />
      <OperatingModel />
      <SuccessStories />
      <OurPartners />
      <OurTeam />
      <SamajikSuraksha />
      <RelatedResources />

      <div className="mt-auto">
        <Footer />
      </div>
    </>
  )
}

export default page
