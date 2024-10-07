import React from "react";
import Banner from "./Banner";
import AccordionPage from "./AccordionPage";
import AboutShoonya from "./AboutShoonya";
import Link from "next/link";

const BigBasketContent = () => {
  return (
    <div>
      {/* Banner */}
      <Banner />

      {/* Shoonya NetZero */}
      <div className="bg-gray-100">
        <div className="lg:w-2/5 container mx-auto ">
          <p
            className="text-2xl lg:text-4xl font-semibold text-center lg:pt-24 py-10"
            data-aos="fade-up"
          >
            Shoonya Net Zero: <br />
            Transforming Tomorrow,<br /> One Tree at a Time
          </p>

          <p className="text-lg text-center lg:py-10 p-5" data-aos="fade-down">
            Welcome to the heart of sustainability at CMS – the Shoonya
            Initiative. In collaboration with bigbasket, we are excited to share
            how every star you redeem contributes to our mission of a greener
            and more sustainable future.
          </p>

          <img
            className="flex mx-auto lg:w-[650px] w-80 shadow-lg"
            src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/big_basket/big_basket_inside_img.png"
            alt=""
            data-aos="zoom-in"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-16">
            <img
              src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/big_basket/planting_tree.png"
              alt="planting_tree"
              className="w-full"
              data-aos="zoom-in"
            />
            <img
              className="bg-[#98D5C5] p-5 rounded-xl lg:w-[250px] w-60 mx-auto my-auto"
              src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/big_basket/count.png"
              alt="trees_count"
              data-aos="zoom-in"
            />
          </div>
        </div>
      </div>

      {/* About Shoonya */}
      <AboutShoonya />

      {/* FAQs - Your Questions Answered: */}
      <AccordionPage />

      {/* Photo Gallery */}
      <div className="container mx-auto py-14" data-aos="zoom-in">
        <h1 className="text-3xl font-bold text-center mb-8">Photo Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:w-9/12 mx-auto">
          <div>
            <img
              src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/big_basket/gallery/gallery_img_1.png"
              alt="gallery_img_1"
              className="w-full h-auto"
            />
          </div>
          <div>
            <img
              src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/big_basket/gallery/gallery_img_2.png"
              alt=""
              className="w-full h-auto"
            />
          </div>
          <div>
            <img
              src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/big_basket/gallery/gallery_img_3.png"
              alt=""
              className="w-full h-auto"
            />
          </div>
          <div>
            <img
              src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/big_basket/gallery/gallery_img_4.png"
              alt=""
              className="w-full h-auto"
            />
          </div>
          <div>
            <img
              src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/big_basket/gallery/gallery_img_5.png"
              alt=""
              className="w-full h-auto"
            />
          </div>
          <div>
            <img
              src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/big_basket/gallery/gallery_img_6.png"
              alt=""
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Share on Social Media */}
      <div
        className="flex justify-center items-center py-10 bg-[#E4EFED]"
        data-aos="zoom-in"
      >
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="text-center md:text-end">
            <h2 className="text-xl font-semibold">Share on Social Media</h2>
            <p className="text-gray-600 mt-2">
              We encourage you to share your contributions
            </p>
            <p className="text-gray-600 mt-2">on social media and tag us.</p>
            <div className="flex justify-center md:justify-end space-x-4 mt-4">
              <Link
                className=""
                href="https://www.linkedin.com/company/solvists/?originalSubdomain=in"
              >
                <img
                  src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/big_basket/linkedin.svg"
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </Link>

              <Link
                className=""
                href="https://x.com/i/flow/login?redirect_after_login=%2FSolvists"
              >
                <img
                  src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/big_basket/x.svg"
                  alt="X"
                  className="w-6 h-6"
                />
              </Link>
            </div>
          </div>
          <div className="relative w-48 md:w-96 md:h-96 rounded-full overflow-hidden">
            <img
              src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/big_basket/photo_2024-07-29+14.42.04.jpeg"
              alt="Social Media"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigBasketContent;
