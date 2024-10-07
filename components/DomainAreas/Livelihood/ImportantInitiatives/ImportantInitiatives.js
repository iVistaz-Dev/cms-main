import { ethosData, weWorkInitiativesData } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

const ImportantInitiatives = () => {
  return (
    <div className="flex me-16">
      <div className="bg-cms-primary text-white ps-16 pe-10 py-10 w-[707px]">
        <h1 className="text-3xl font-semibold mb-6">Our Ethos</h1>
        <p className="text-lg">
          Strengthening small producers and their livelihoods at a national
          scale lies at the heart of our mission, and our work is built on a set
          of core beliefs and learnings:
        </p>
      </div>
      <div className="border-y">
        <ul className="flex flex-col justify-center h-full py-5 gap-5 ps-20 pe-16">
          {weWorkInitiativesData.map((item) => {
            return (
              <li key={item.id}>
                <div className="flex flex-col gap-3 items-center">
                  <Image src={item.iconUrl} width={76} height={76} alt="" />
                  <p>{item.desc}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default ImportantInitiatives
