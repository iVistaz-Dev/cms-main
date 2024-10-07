"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useRef, useEffect } from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { Accordion } from "flowbite-react"
import { goneCommunity } from "../../utils/data"
import Contact from "../../components/G1Components/Contact"

const G1Content = React.forwardRef((props, ref) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  const responsives = {
    // superLargeDesktop: {
    //   // the naming can be any, depends on you.
    //   breakpoint: { max: 4000, min: 3000 },
    //   items: 1,
    // },
    // desktop: {
    //   breakpoint: { max: 3000, min: 1024 },
    //   items: 1,
    // },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  }

  const section1Ref = useRef(null)
  const scrollToSection1 = () => {
    console.log("hello")
    section1Ref.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <div className=" flex justify-center bg-white p-4 lg:p-6 ">
        <div className="grid gap-16 flex-col justify-center w-full align-middle text-center mt-16">
          <div className="flex justify-center w-10/12 mx-auto">
            <p
              className="lg:text-2xl text-lg text-[#5c5c5c] leading-relaxed lg:w-[80%] w-full"
              data-aos="fade-up"
            >
              For many, the dream of financial security is hindered by low
              credit scores, a lack of essential documents, and high interest
              rates. These challenges often seem insurmountable, trapping
              families in a vicious cycle of vulnerability and hardship.
            </p>
          </div>

          <div className="flex-col justify-center items-center align-middle">
            <div className="flex justify-center" data-aos="fade-down">
              <Image
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/g1-image/g1-you-hold-the-key.png"
                alt=""
                width={600}
                height={200}
                className="lg:w-[90%] w-full lg:block hidden"
              />
              <Image
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/g1-image/g1-you-hold-the-key-mobile.png"
                alt=""
                width={600}
                height={200}
                className="w-[70%] lg:hidden block"
              />
            </div>

            <div
              className="flex justify-center items-center mt-10 lg:hidden "
              data-aos="fade-down"
            >
              <p
                className="lg:text-3xl text-2xl text-[#7F3F97] font-semibold leading-relaxed lg:w-[80%] w-full"
                data-aos="fade-up"
              >
                You hold the key to change.
              </p>
            </div>
            <div className="flex justify-center items-center mt-4 lg:hidden">
              <p
                className="lg:text-3xl text-lg text-[#5c5c5c] lg:w-[80%] w-full"
                data-aos="fade-down"
              >
                Through G1 you can help every vulnerable Indian join the path to
                progress. By lending a portion of your surplus income to
                families in need, you not only provide them with a lifeline but
                also receive your contribution back in a year. Together we can
                break these barriers to financial resilience, one family at a
                time.
              </p>
            </div>

            <div className="flex justify-center items-center mt-10">
              <button
                className="text-white bg-[#02AF8B] text-xl py-2 px-6 rounded-md"
                onClick={scrollToSection1}
                data-aos="zoom-in"
              >
                Drive Change with Us
              </button>
            </div>

            <div
              className="flex justify-center items-center mt-10 text-[#7F3F97] lg:text-4xl text-2xl font-semibold"
              data-aos="fade-up"
            >
              A Circle of Support, A Circle of Growth
            </div>

            <p className="text-lg text-[#5c5c5c] mt-3" data-aos="fade-down">
              Each investment enables families to start businesses, clear debts,{" "}
              <br className="lg:block hidden" />
              and build sustainable futures.
            </p>

            <Image
              src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/g1-image/circle-of-support.png"
              alt=""
              width={600}
              height={200}
              className="lg:w-[100%] w-full lg:block hidden"
              data-aos="fade-up"
            />
          </div>

          <div className="lg:hidden">
            <div className="">
              <Carousel
                responsive={responsives}
                showDots={false}
                // infinite={true}
                autoPlay={true}
                // autoPlaySpeed={1800}
                //   customTransition="all .5"
                dotListClass="border-red-500 border"
                // removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
                className="lg:h-[490px] w-[400px] p-2 overflow-hidden"
              >
                <div>
                  <img
                    src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/g1-image/circle-1.png"
                    className="w-[400px]"
                  />
                </div>
                <div>
                  <img
                    src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/g1-image/circle-2.png"
                    className="w-[400px]"
                  />
                </div>
                <div>
                  <img
                    src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/g1-image/circle-3.png"
                    className="w-[400px]"
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-[#249F79] flex w-100 justify-center items-center"
        data-aos="fade-up"
      >
        <div className="lg:w-[1140px] w-full flex-col justify-center align-middle items-center text-center p-10 text-white grid gap-16">
          <div>
            <p className="lg:text-6xl text-3xl text-center">
              Join the Movement of Change
            </p>
          </div>
          <p className="lg:text-2xl text-lg leading-10">
            Giving can be easier than you imagine, with a significant and
            meaningful impact. This is more than investing; it’s elevating
            lives, together.
          </p>

          <div className="flex justify-center text-xl">
            <button
              className="text-[#02AF8B] bg-[white] block py-2 px-6 rounded-md"
              onClick={scrollToSection1}
            >
              Invest with G1
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-row" data-aos="zoom-in">
        <div className="w-full py-12 lg:py-0">
          <Carousel
            responsive={responsive}
            showDots={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1800}
            //   customTransition="all .5"
            //   dotListClass="border-red-500 border"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            className="lg:h-[490px] w-50"
          >
            {goneCommunity.map((items, index) => (
              <div className="grid lg:grid-cols-2 gap-4">
                <div className="text-4xl justify-center items-center flex flex-col gap-4">
                  <h3 className="text-[#249F79] text-6xl">Communities</h3>
                  <p className="text-[#5C5C5C] text-5xl border-b-2 border-[#249F79]">
                    we work with
                  </p>

                  <p>{items.title}</p>
                  <p className="text-[#5C5C5C] text-5xl">from across India</p>
                </div>
                <div
                  className="shadow-md rounded-lg lg:w-[90%] ml-1 pb-6 mb-4"
                  key={index}
                  data-aos="zoom-in"
                >
                  <img src={items.imagUrl} className="w-full" />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div
        className="lg:bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/g1-image/cms-backed-experience.png')] bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/g1-image/cms-backed-experience.png')] lg:h-[500px] h-[80vh] bg-cover bg-center flex justify-center lg:items-center"
        data-aos="zoom-in"
      >
        <div className="lg:w-[1140px] grid grid-cols-1 lg:grid-cols-12 w-full align-middle text-center">
          <div className="lg:col-span-5 flex gap-4 items-center justify-center">
            <img
              src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/g1-image/cms-logo.svg"
              alt="..."
              className="object-contain w-[50%]"
            />
          </div>
          <div className="lg:col-span-7 text-white flex flex-col justify-center items-center lg:items-start lg:text-left gap-7">
            <p className="text-3xl font-semibold">
              Backed by Experience, <br />
              Driven by Compassion
            </p>
            <p className="text-lg lg:w-[80%]">
              G1 is an initiative of the Catalyst Group, leveraging over 30
              years of expertise, impactful partnerships, and a deep commitment
              to health and well-being. Our knowledge in the social development
              sector uniquely positions us to ensure that your support reaches
              those who need it most when they are most in need.
            </p>
          </div>
        </div>
      </div>

      <div className=" lg:h-auto h-auto bg-cover bg-center flex-col justify-center text-center items-center py-16">
        <p className=" text-4xl font-semibold text-[#7F3F97] pb-16">FAQs</p>
        <div className=" grid grid-cols-1 lg:grid-cols-12 w-full align-middle text-center">
          <div
            className="lg:col-span-5 flex gap-4 items-center justify-center"
            data-aos="fade-right"
          >
            <img
              src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/g1-image/fqs.png"
              alt="..."
              className="object-contain w-full"
            />
          </div>
          <div
            className="lg:col-span-7 text-white flex flex-col justify-center items-center lg:items-start lg:text-left gap-7 p-4"
            data-aos="fade-left"
          >
            <Accordion className="w-full">
              <Accordion.Panel>
                <Accordion.Title className="bg-[#7F3F97] hover:bg-[#7F3F97] text-white lg:text-xl text-[18px]">
                  Will I get my money back?
                </Accordion.Title>
                <Accordion.Content className="text-[#5C5C5C] lg:text-[20px] text-[16px]">
                  <p className="mb-2 text-gray-500 dark:text-gray-400 text-lg">
                    Your investment is locked in for 2 years. If you stay put
                    for more than 2 years, the SROI will be exponential!
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="bg-[#7F3F97] hover:bg-[#7F3F97] text-white lg:text-xl text-[18px]">
                  How is SROI calculated?
                </Accordion.Title>
                <Accordion.Content className="text-[#5C5C5C] lg:text-[20px] text-[16px]">
                  <p className="mb-2 text-gray-500 dark:text-gray-400 text-lg">
                    SROI (Social Return on Investments) are calculated through
                    industry-approved methodology and will be verified by a
                    trusted third party as we scale G1.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="bg-[#7F3F97] hover:bg-[#7F3F97] text-white lg:text-xl text-[18px]">
                  Will I know the journey of my investment?
                </Accordion.Title>
                <Accordion.Content className="text-[#5C5C5C] lg:text-[20px] text-[16px]">
                  <p className="mb-2 text-gray-500 dark:text-gray-400 text-lg">
                    Tracability of your investment at the individual family
                    level is unavailable, as G1 is a pool of money. Your
                    investment joins the exsisting fund, and is deployed to
                    vulnerable families at large. Impact is also calculated at a
                    community level.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="bg-[#7F3F97] hover:bg-[#7F3F97] text-white lg:text-xl text-[18px]">
                  In what forms can I make the payments?
                </Accordion.Title>
                <Accordion.Content className="text-[#5C5C5C] lg:text-[20px] text-[16px]">
                  <p className="mb-2 text-gray-500 dark:text-gray-400 text-lg">
                    Currently, you can make payments via cheque and/or direct
                    bank transfer to Catalyst Group entities. For more details,
                    please reach out at (email)
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="bg-[#7F3F97] hover:bg-[#7F3F97] text-white lg:text-xl text-[18px]">
                  Is my money insured?
                </Accordion.Title>
                <Accordion.Content className="text-[#5C5C5C] lg:text-[20px] text-[16px]">
                  <p className="mb-2 text-gray-500 dark:text-gray-400 text-lg">
                    Like all investments, G1 is also carries moderate risks.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        </div>
      </div>

      <div
        className="bg-[#02AF8B] flex justify-center "
        ref={ref}
        data-aos="fade-down"
      >
        <div
          className="lg:w-[1140px] w-full flex-col justify-center align-middle items-center text-center p-10 text-white grid gap-16"
          ref={section1Ref}
        >
          <Contact />
        </div>
      </div>

      <div className="text-center p-16 w-10/12 mx-auto">
        <p className="text-4xl text-[#5C5C5C] font-bold">Get in touch</p>
        <p className="text-black text-[24px] mt-2">
          <span className="text-[#00AF8B] text-[24px]"> Email: </span>
          <Link href="mailto:contactus@catalysts.org">
            contactus@catalysts.org
          </Link>
        </p>
      </div>
    </>
  )
})

export default G1Content
