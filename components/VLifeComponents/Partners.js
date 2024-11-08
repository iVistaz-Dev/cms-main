import { CarouselPartners } from "@/utils/data";
import Image from "next/image";
import React from "react";
import PartnersCarousel from "../../components/VLifeComponents/Carouselpartners"

const Partners = () => {
  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-[40px] font-bold text-[#00AF8B] text-center mt-10">
          Partners
        </h2>
        {/* Wrapping all items in a single flex container for horizontal alignment */}
        <div className="lg:block hidden">
           <div className="flex container mx-auto space-x-9 justify-center my-10">
          {CarouselPartners.map((items, index) => (
            <Image key={index} src={items.ImageUrl} width={200} height={200} alt={`Partner ${index + 1}`} />
          ))}
        </div>  
        </div>
       
        <PartnersCarousel />
      </div>
    </>
  );
};

export default Partners;
