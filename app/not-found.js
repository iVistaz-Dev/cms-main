import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
  return (
    <>
      <div className="bg-cms-primary w-full h-24 fixed">
        <Header />
      </div>
      <div className="h-screen flex items-center justify-center">
        <div className="max-w-xl mx-auto flex flex-col items-center gap-3">
          <Image src="/404.jpg" width={1000} height={500} alt="404" />
          <p className="text-lg sm:text-xl md:text-2xl text-cms-primary">
            Something Went Wrong
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl text-cms-primary-black">
            Error 404 Page Not Found
          </p>
          <Link href="/">
            <button className="border border-cms-primary text-[#1A1A1A] mt-3 text-base sm:text-lg rounded px-4 sm:px-6 py-2 transition duration-300 ease-in-out hover:bg-cms-primary hover:text-white">
              GO TO HOME
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </>
  )
}
