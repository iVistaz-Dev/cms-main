import React from 'react'

const OurWork = () => {
    return (
        <>
            <div className='flex justify-center py-16'>
                <div className='lg:w-[1140px] w-full flex flex-col justify-center gap-6'>
                    <div className=''>
                        <p className="lg:text-[40px] text-[30px] text-[#7F3F97] leading-10 text-center">
                            Here Are the Ways <br className='lg:hidden flex' />through Which
                        </p>
                        <p className="lg:text-[40px] text-[30px] text-[#05AC8D] leading-10 text-center">
                            We Create Impact
                        </p>
                    </div>
                    <div className='grid lg:grid-cols-12 grid-cols-1 pt-6'>
                        <div className='col-span-6 px-10'>
                            <img src='https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/work/hanger-repurposing.png' className='object-cover' />
                        </div>
                        <div className='col-span-6 flex flex-col justify-center  lg:p-10 p-8 lg:gap-6 gap-4'>
                            <p className=" mt-4 leading-6 text-[#05AC8D] text-[24px] font-bold">
                                Hanger Repurposing & Recycling
                            </p>
                            <span className='border border-[#7F3F97]'></span>
                            <p className="lg:text-[18px] mt-4 leading-6 ">
                                Our model provides multiple benefits to People—by creating jobs and a sustainable livelihood; Planet—through reduced plastic use and tree plantation; and Stakeholders—by ensuring prosperity of everybody involved in the whole process.
                            </p>
                        </div>
                    </div>

                    <span className='border border-[#C7C7C7] m-4'></span>

                    <div className='grid lg:grid-cols-12 grid-cols-1'>
                        <div className='col-span-6 flex flex-col justify-center lg:order-1 order-2 lg:p-10 p-8 lg:gap-6 gap-4'>
                            <p className=" mt-4 leading-6 text-[#05AC8D] text-[24px] font-bold">
                                Film Plastic Recycling
                            </p>
                            <span className='border border-[#7F3F97]'></span>
                            <p className="lg:text-[18px] mt-4 leading-6">
                                We collect and recycle films and other plastics found in apparel stores, factories and warehouses. The end products are channelled into the production of films and other materials that are useful for brands.
                            </p>
                        </div>
                        <div className='col-span-6 lg:order-2 order-1 px-10'>
                            <img src='https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/work/flim-plastic-1.png' className='object-cover' />
                        </div>
                    </div>

                    <span className='border border-[#C7C7C7] m-4'></span>

                    <div className='grid lg:grid-cols-12 grid-cols-1'>
                        <div className='col-span-6 px-10'>
                            <img src='https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/nobleplasics/work/pyrolysis.png' className='object-cover' />
                        </div>
                        <div className='col-span-6 flex flex-col justify-center  lg:p-10 p-8 lg:gap-6 gap-4'>
                            <p className=" mt-4 leading-6 text-[#05AC8D] text-[24px] font-bold">
                                Pyrolysis
                            </p>
                            <span className='border border-[#7F3F97]'></span>
                            <p className="lg:text-[18px] mt-4 leading-6 ">
                                Through Pyrolysis, we convert single-use plastics (SUPs) into fuel for energy generation. Noble Plastics orchestrates this entire process by facilitating connections between generators of non-recyclable waste and pyrolysis recyclers, who ensure these wastes are properly used.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default OurWork
