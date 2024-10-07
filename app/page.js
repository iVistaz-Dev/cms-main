import Header from "@/components/Header/Header"
import EmpoweringChange from "@/components/Home/EmpoweringChange/EmpoweringChange"
import FocusArea from "@/components/Home/FocusArea/FocusArea"
import Impact from "@/components/Home/Impact/Impact"
import Solutions from "@/components/Home/Solutions/Solutions"
import Footer from "@/components/Footer/Footer"

export default function Home() {
  return (
    <>
      <div className="bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/banner-comp.jpeg')] flex flex-col justify-center md:justify-end h-[275px] md:[720px] bg-center bg-cover py-10 md:py-16 sm:h-[500px] md:h-[500px]">
        <Header />
        <div className="ps-2 md:ps-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center sm:text-left">
            Scaling Impact for a <br className="hidden sm:block" /> Sustainable
            Future
          </h1>
        </div>
      </div>

      {/* <CurrentPath /> */}

      <div className="py-5 md:py-12 flex justify-center">
        <div className="text-center md:mb-5 px-3 sm:px-4 md:px-6 lg:px-8 max-w-screen-lg">
          <h2 className="text-cms-primary-black text-base sm:text-lg md:text-xl">
            We are a social investment catalyst that partners with change agents
            to solve complex societal problems, leveraging our 30 years of
            experience and resources. We are committed to transforming social
            enterprises and impactful initiatives aligned with Sustainable
            Development Goals.
          </h2>
        </div>
      </div>

      <EmpoweringChange />
      <Solutions />
      <Impact />
      <FocusArea />
      {/* <HomePartners /> */}

      <div className="mt-auto">
        <Footer />
      </div>
    </>
  )
}
