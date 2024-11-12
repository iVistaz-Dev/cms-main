import Image from "next/image";
import React from "react";

const VlifeRoles = () => {
  return (
    <>
      <div className="container mx-auto text-center">
        <div data-aos="flip-down" data-aos-duration="400">
          <h2 className="text-[40px] font-bold text-[#7F3F97] mt-10">
            V-Life’s Role
          </h2>
          <p className="text-2xl mt-5 p-3">
            V-Life plays a critical role in enabling credit to FPOs by offering
            customized financial products, facilitating access to formal
            financial institutions, and providing comprehensive support
            services:
          </p>
        </div>
        <div data-aos="flip-up" data-aos-duration="400">
          <h2 className="text-2xl font-bold text-[#7F3F97] mt-10">
            Working Capital Loans
          </h2>

          <p className="text-xl font-light mt-4 p-3">
            FPOs need working capital to purchase inputs, manage inventory, and
            cover operational expenses. V-Life facilitates working capital loans
            that are tailored to the cash flow cycles of FPOs, ensuring that
            they have the necessary funds to operate smoothly.
          </p>
        </div>

        <p className="border-b border-dashed mt-7 border-black"></p>

        <div data-aos="flip-down" data-aos-duration="400">
          <h2 className="text-2xl font-bold text-[#7F3F97] mt-5">
            Infrastructure Financing
          </h2>
          <p className="text-xl font-light mt-4 p-3">
            For FPOs looking to invest in infrastructure such as storage
            facilities, processing units, or transportation, V-Life provides
            long-term loans with flexible repayment terms. These loans enable
            FPOs to enhance their value-addition capabilities and improve market
            access.
          </p>
        </div>
        <p className="border-b border-dashed mt-7 border-black"></p>
        <div data-aos="flip-up" data-aos-duration="400">
          <h2 className="text-2xl font-bold text-[#7F3F97] mt-5">
            {" "}
            Revolving Credit Lines
          </h2>
          <p className="text-xl font-light mt-4 p-3">
            Similar to individual farmers, FPOs can benefit from revolving
            credit lines that provide them with ongoing access to funds. This
            flexibility allows FPOs to manage cash flows effectively and respond
            to changing market conditions.
          </p>
        </div>
      </div>

    </>
  );
};

export default VlifeRoles;
