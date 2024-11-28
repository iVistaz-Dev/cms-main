const Support = () => {
  return (
    <div className="h-auto px-5 pt-10 md:pt-24 pb-32 bg-[url('/banner07.png')] bg-cover">
      <div className="flex flex-col items-center h-full gap-5 max-w-screen-lg mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-2xl md:text-4xl text-[#486601] font-semibold">
            Support the Shoonya Tree Growing Campaign
          </h1>
          <p className="text-lg md:text-xl text-shoonya-black italic">
            Join us in our mission to create a greener, healthier planet. Every
            contribution you make helps us plant more trees, restore ecosystems,
            and combat climate change.
          </p>
        </div>

        <p className="text-xl md:text-2xl text-[#333536] font-semibold mt-10 text-center">
          Your support makes a difference!
        </p>

        <div className="bg-white p-5 md:p-10 rounded-2xl">
          <p className="text-lg md:text-xl text-[#141414] font-semibold">
            Bank Account Details for Donations:
          </p>
          <div className="flex flex-col gap-2 mt-5">
            <p className="text-lg md:text-xl text-[#141414]">
              <span className="text-shoonya-purple">Account Name:</span> Impact
              Catalyst Foundation
            </p>

            <p className="text-lg md:text-xl text-[#141414]">
              <span className="text-shoonya-purple">CRN of the Account:</span>{" "}
              509161868
            </p>

            <p className="text-lg md:text-xl text-[#141414]">
              <span className="text-shoonya-purple">
                Account Type & Number:
              </span>{" "}
              Current Account & 0945298180
            </p>

            <p className="text-lg md:text-xl text-[#141414]">
              <span className="text-shoonya-purple">Bank Name:</span> Kotak
              Mahindra Bank Ltd
            </p>

            <p className="text-lg md:text-xl text-[#141414]">
              <span className="text-shoonya-purple">Branch:</span> Bangalore
              Lavelle Road
            </p>

            <p className="text-lg md:text-xl text-[#141414]">
              <span className="text-shoonya-purple">IFSC Code:</span>{" "}
              KKBK0000422
            </p>

            <p className="text-lg md:text-xl text-[#141414]">
              <span className="text-shoonya-purple">Swift Code:</span>{" "}
              KKBKINBBCPC
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-7 mt-5 text-center md:text-left">
          {/* <p className="text-lg md:text-xl text-[#141414]">
            <strong>How Your Donation Helps:</strong> Every ₹500 supports the
            growing of one tree.
          </p> */}

          <p className="text-lg md:text-xl text-[#141414] mt-10">
            Donations directly contribute to our tree-growing initiatives and
            community engagement programs. Your support also helps maintain our
            existing green spaces and educates communities on sustainable
            practices.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 mt-14 text-center">
          <h2 className="text-2xl md:text-4xl text-[#486601] italic font-semibold">
            Thank You for Your Support!
          </h2>
          <p className="text-lg md:text-xl text-shoonya-black">
            Together, we can make a significant impact on our environment.{" "}
            <br /> For any queries or to know more about the Shoonya Tree
            Growing Campaign, <br /> please contact us at{" "}
            <a
              href="mailto:vishrut.shoonya@catalysts.org"
              className="text-shoonya-purple"
            >
              vishrut.shoonya@catalysts.org
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Support
