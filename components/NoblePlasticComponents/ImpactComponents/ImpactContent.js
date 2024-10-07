"use client"
import React from "react"
import CountUp from "react-countup"

const ImpactContent = () => {
  return (
    <>
      <div className="flex justify-center px-2 py-16 border-b-4 border-[#7F3F97] ">
        <div className="lg:w-[1140px] w-full lg:p-0 p-2">
          <div className="flex justify-center py-8">
            <div className="lg:w-[1140px] w-full lg:p-0 p-2">
              <p className="text-[40px] text-[#7F3F97] text-center mb-6">
                Our Impact
              </p>
              <div className="grid lg:grid-cols-12 grid-cols-1 gap-2">
                <div className="col-span-3 mt-16 bg-[#F0EAF5D9] pb-4 rounded-md flex flex-col justify-center">
                  <div className="flex items-center justify-center w-auto">
                    <img
                      src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/home/our-impact-inr.png"
                      className="-mt-12"
                      width={100}
                    />
                  </div>
                  <div className="mt-2">
                    <p className="font-semibold text-[24px] text-center">
                      <CountUp
                        delay={2}
                        end={90}
                        prefix="INR "
                        suffix="+ lakh"
                      />
                    </p>
                    <p className="text-[18px] mt-2 leading-6 text-center">
                      generated in wages for marginalised groups
                      <br />
                      <br />
                    </p>
                  </div>
                </div>

                <div className="col-span-3  mt-16 bg-[#F0EAF5D9] pb-4 rounded-md flex flex-col justify-center">
                  <div className="flex items-center justify-center w-auto">
                    <img
                      src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/home/our-impact-planet.png"
                      className="-mt-12"
                      width={100}
                    />
                  </div>
                  <div className="mt-2">
                    <p className="font-semibold text-[24px] text-center">
                      <CountUp delay={2} end={20500} suffix="+" />
                    </p>
                    <p className="text-[18px] mt-2 leading-6 text-center">
                      trees planted in Karnataka to achieve carbon neutrality
                      <br />
                      <br />
                    </p>
                  </div>
                </div>

                <div className="col-span-3  mt-16 bg-[#F0EAF5D9] pb-4 rounded-md flex flex-col justify-center">
                  <div className="flex items-center justify-center w-auto">
                    <img
                      src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/healthcare-outcome.png"
                      className="-mt-12"
                      width={100}
                    />
                  </div>
                  <div className="mt-2">
                    <p className="font-semibold text-[24px] text-center">
                      <CountUp
                        delay={2}
                        end={50}
                        prefix="INR "
                        suffix="+ lakh"
                      />
                    </p>
                    <p className="text-[18px] mt-2 leading-6 text-center">
                      invested in improving health outcomes
                      <br />
                      <br />
                    </p>
                  </div>
                </div>

                <div className="col-span-3  mt-16 bg-[#F0EAF5D9] pb-4 rounded-md flex flex-col justify-center">
                  <div className="flex items-center justify-center w-auto">
                    <img
                      src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/tonnes-of-plastics.png"
                      className="-mt-12"
                      width={100}
                    />
                  </div>
                  <div className="mt-2">
                    <p className="font-semibold text-[24px] text-center">
                      <CountUp delay={2} end={600} suffix="+ tonnes" />
                    </p>
                    <p className="text-[18px] mt-2 leading-6 text-center">
                      of plastic kept away from landfills & waterways via
                      repurposing and recycling
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 1 */}
      <div className="flex justify-center px-2 py-16 border-b-4 border-[#7F3F97] bg-[#D0EAE273]">
        <div className="lg:w-[1140px] w-full flex flex-col justify-center lg:p-0 p-2 gap-6">
          <div className="">
            <p className="lg:text-[40px] text-[30px] text-[#7F3F97] leading-10 text-center">
              Our Impact Extends Beyond These Figures{" "}
              <br className="lg:flex hidden" /> and Into the Communities We
              Serve
            </p>
          </div>
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-6">
            <div className="col-span-6 flex flex-col justify-center lg:order-1 order-2">
              <p className="lg:text-[18px] mt-4 leading-6 text-black">
                Married for 18 years now, 36-year-old Minta likes to believe in
                the strategic play of life.
              </p>
              <p className="lg:text-[18px] mt-4 leading-6 text-black">
                “Financial difficulty is something that I have always had to
                live with. I wanted to be a teacher, but my parents, having four
                children to take care of, forced me to drop out and get married
                even before I was ready,” she said.
              </p>
              <p className="lg:text-[18px] mt-4 leading-6 text-black">
                But today, Minta works in the sorting unit at Mohammadpur, and
                her daily responsibilities include sorting good hangers,
                removing stickers, packing the sorted hangers or breaking the
                rejected hangers. She earns approximately INR 11,000 per month.
              </p>
              <p className="lg:text-[18px] mt-4 leading-6 text-black">
                Minta adds that her work-life routine has given her life
                meaning, and she looks forward to coming to work every day.
                Further Minta shared, “Working in the hanger unit has given my
                family the strength to overcome our never-ending poverty. For
                the last two months, I have been able to provide my family with
                three meals a day. I am still in a lot of debt that I am working
                hard to pay off, but my husband has found some job that will
                allow us to make little more money for the family. However,
                unlike the old times, I do not feel helpless and worried about
                his lack of earnings anymore. I am confident that my hanger unit
                will support my family with their needs.
              </p>
            </div>
            <div className="col-span-6 lg:order-2 order-1 flex flex-col justify-center items-end">
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/impact/our-impact-1.png"
                className="object-cover lg:w-[90%]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* sectopn 2 */}
      <div className="flex justify-center px-2 py-16 border-b-4 border-[#7F3F97] bg-[#DCD0E58C] ">
        <div className="lg:w-[1140px] w-full flex flex-col justify-center lg:p-0 p-2 gap-6">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-6">
            <div className="col-span-6 flex flex-col justify-center items-start">
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/impact/our-impact-2.png"
                className="object-cover lg:w-[90%]"
              />
            </div>
            <div className="col-span-6 flex flex-col justify-center">
              <p className="lg:text-[18px] mt-4 leading-6 text-black">
                Having never believed in a stable job, Sanjay has changed over
                half a dozen jobs in the past.
              </p>
              <p className="lg:text-[18px] mt-4 leading-6 text-black">
                “No one treated us like humans. I was always treated like a
                bonded labourer until I started working in the hanger unit,” he
                said.
              </p>
              <p className="lg:text-[18px] mt-4 leading-6 text-black">
                36-year-old Sanjay Singh is a migrant resident of Mohammadpur,
                Gurgaon. Originally from a small town in Aligarh, Uttar Pradesh,
                Sanjay migrated to the national capital with his wife and two
                children.
              </p>
              <p className="lg:text-[18px] mt-4 leading-6 text-black">
                “The work culture at the hanger unit is unbelievable compared to
                my last workplace. Here, I am respected and treated as an equal.
                Being the line supervisor, I directly manage the immediate
                workforce. We are all like a family now,” he added. Sanjay
                joined the Hanger Unit and became one of the first hired
                labourers in the Fuzhio-run Hanger Sorting Unit in Mohammadpur.
                According to him, this livelihood opportunity at the Hanger
                Sorting Unit has come to him as “God’s Blessing” which has saved
                him from his “ongoing unemployment struggle” of the last two
                years.
              </p>
              <p className="lg:text-[18px] mt-4 leading-6 text-black">
                At the unit, Sanjay, being senior among the labourers, is given
                the role of supervising the work of his fellow workers. As part
                of his role, he helps other labourers with quality checks, data
                entry, loading-unloading work and more.
              </p>
              <p className="lg:text-[18px] mt-4 leading-6 text-black">
                For Sanjay, the last two years of unemployment have taught him
                many lessons on the personal front. Therefore, getting back to
                work and earning his family some income has brought some peace
                at his home. Now, he only wishes that this stability continues
                forever in his life.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* sectopn 3    */}
      <div className="flex justify-center px-2 py-16 border-b-4 border-[#7F3F97] bg-[#D0EAE273]">
        <div className="lg:w-[1140px] w-full flex flex-col justify-center lg:p-0 p-2 gap-6">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-6">
            <div className="col-span-6 flex flex-col justify-center lg:order-1 order-2">
              <p className="lg:text-[18px] mt-4 leading-6 text-black">
                A 24-year-old resident of Gulbarga colony, G. Satyavani, counts
                herself to be a successful mother of two children.
              </p>
              <p className="lg:text-[18px] mt-4 leading-6 text-black">
                “Originally from Bellandur, Tamil Nadu, she has spent 15 good
                years in Bangalore. Though she has always aspired to complete
                her education, she was forced to drop out when she was in grade
                7. She is modest, empathetic and likes to live in reality. She
                currently lives with her family of four—including her mother,
                her brother and her two children (one boy, who is 4 years old,
                and one girl, who is 2 years old) in Bommanahali, Bangalore.
              </p>
              <p className="lg:text-[18px] mt-4 leading-6 text-black">
                Speaking fondly about the work environment at the unit,
                Satyavani said, “Everybody in this job speaks nicely to me, even
                sir.”
              </p>
              <p className="lg:text-[18px] mt-4 leading-6 text-black">
                The schedule provides her with the stability to come in at 9:30
                am and leave by 6 pm. The lunch breaks are a bit more relaxed,
                so she’s able to step outside for some much-needed fresh air.
                She started out with easier tasks, and now her role has
                transitioned to checking the quality of the hangers, sorting the
                hangers and taking inventory, which she finds more difficult.
              </p>
              <p className="lg:text-[18px] mt-4 leading-6 text-black">
                Although this job has its flaws, as she confidently points out,
                she’s able to step up to the challenges that come along with it.
                This opportunity provides her with the ability to support her
                family and, most importantly, her children as a single mother.
              </p>
            </div>
            <div className="col-span-6 lg:order-2 order-1 flex flex-col justify-center items-end">
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/impact/our-impact-3.png"
                className="object-cover lg:w-[90%]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* sectopn 4 */}
      <div className="flex justify-center px-2 py-16 border-b-4 border-[#7F3F97] bg-[#DCD0E58C] ">
        <div className="lg:w-[1140px] w-full flex flex-col justify-center lg:p-0 p-2  gap-6">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-6">
            <div className="col-span-6 flex flex-col justify-center items-start">
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/impact/our-impact-4.png"
                className="object-cover lg:w-[90%]"
              />
            </div>
            <div className="col-span-6 flex flex-col justify-center">
              <p className="lg:text-[18px] mt-4 leading-6 text-black">
                Tucked away in a bustling, close-packed locality of Bommanahalli
                is the Hanger Sorting Unit set up by Noble Plastic in Bengaluru.
                This unit has a bunch of 10 enthusiastic individuals working
                through the day to sort the hangers, package them and send them
                for recycling. The unit starts functioning at 9 AM in the
                morning with two tables full of hangers to be sorted for the day
                and 4 women working at each table to sort them. The rest of the
                area is filled with stacked cartons filled with hangers that are
                either left to be sorted or are sorted and packed for recycling.
              </p>
              <p className="lg:text-[18px] mt-4 leading-6 text-black">
                “Amidst all the stacks of cartons sits Srinivas in the corner
                packing away boxes one after the other. Srinivas is responsible
                for packing of the hangers after they are sorted and also
                unpacking the hangers that come in for sorting at the unit.
                Additionally, Srinivas also works on baling film plastics, which
                essentially compresses loose plastic, making it easy for
                recycling. Srinivas has been working at the unit for 3 years
                now, right since its inception. He lives in the area nearby
                called the Gulbarga Colony. Migrated to the city a few years
                back in search of work, Srinivas struggles speaking in Hindi but
                is keen on learning Hindi and English. Srinivas also runs
                errands around the unit all day and trains the new employees at
                the unit, all this while bantering around and lightening the
                mood at the workplace. “I love to help out others with work
                here. Working here for so long, this has become like my extended
                family. It feels amazing to come here everyday and contribute to
                the team effort.”, says Srinivas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* sectopn 5 */}
      <div className="flex justify-center px-2 py-16 bg-[#D0EAE273]">
        <div className="lg:w-[1140px] w-full flex flex-col justify-center lg:p-0 p-2 gap-6">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-6">
            <div className="col-span-6 flex flex-col justify-center lg:order-1 order-2">
              <p className="lg:text-[18px] mt-4 leading-6 text-black">
                Planet, People and Purpose – Enriching the Planet and also the
                lives of people!
              </p>
              <p className="lg:text-[18px] mt-4 leading-6 text-black">
                Meher is all of 19 years old and with a spark in her eyes and
                smile on her face, she has been working everyday for the past
                two and a half years at the hanger sorting unit. “My day starts
                early in the morning and I report here everyday by 9 AM.”, says
                Meher. Meher along with 7 other women sit on the sorting tables
                to thoroughly check each hanger and segregate it based on the
                different sizes and the condition of the hangers. The broken
                ones go for recycling whereas the good ones go back to stores
                for reuse.” says Meher. “We know exactly what goes where. We
                also now train and help any new joinees. I really like the work
                environment, people here and look forward to coming to work
                everyday.”, Meher adds..
              </p>
              <p className="lg:text-[18px] mt-4 leading-6 text-black">
                Speaking fondly about the work environment at the unit,
                Satyavani said, “Everybody in this job speaks nicely to me, even
                sir.”It has been three years since Noble Plastics started its
                operations in the form of the hanger sorting unit in Bengaluru
                and Delhi in collaboration with various garment retail sector,
                it has been contributing not only in making the planet a better
                place for people but has also been giving purpose and meaning to
                the lives of many like Meher and Srinivas
              </p>
            </div>
            <div className="col-span-6 lg:order-2 order-1 flex flex-col justify-center items-end">
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/impact/our-impact-5.png"
                className="object-cover lg:w-[90%]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ImpactContent
