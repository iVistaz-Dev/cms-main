import { linkedInIcon } from "@/utils/icon"
import { teamData } from "@/utils/socialProtectiondata"
import Image from "next/image"
import Link from "next/link"

const OurTeam = () => {
  return (
    <div className="flex flex-col items-center gap-7 mt-10">
      <h3 className="text-cms-primary-green text-3xl text-center">Our Team</h3>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16 px-5">
        {teamData.map((item) => (
          <li
            key={item.id}
            className="flex flex-col border-b-2 border-cms-primary"
          >
            <Image
              src={item.imageUrl}
              width={300}
              height={300}
              alt={item.name}
              className="w-full h-auto object-cover grayscale"
            />
            <div className="flex flex-col gap-4 h-full bg-white">
              <div className="bg-cms-primary-green py-4 text-white flex flex-col items-center">
                <h2 className=" text-center text-lg md:text-xl font-semibold">
                  {item.name}
                </h2>
                <p className="text-sm text-center">{item.desc}</p>
              </div>

              <div className="flex gap-3 mb-2">
                <Link
                  href={item.inUrl}
                  target="_blank"
                  className="p-1 bg-cms-secondary-gray"
                >
                  <span className="text-cms-primary text-2xl">
                    {linkedInIcon}
                  </span>
                </Link>
              </div>

              {/* <div className="flex gap-3 mb-2">
                {item.imageUrl !== "/aboutUs/team/image12.png" ? (
                  <Link
                    href={item.inUrl}
                    target="_blank"
                    className="p-1 bg-cms-secondary-gray"
                  >
                    <span className="text-cms-primary text-2xl">
                      {linkedInIcon}
                    </span>
                  </Link>
                ) : (
                  ""
                )}
              </div> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default OurTeam
