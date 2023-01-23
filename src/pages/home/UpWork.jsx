import React from "react";
import LogoUpWork from "../../assets/img/organizationMedia/upwork/logo.png";
import BgUpWork from "../../assets/img/organizationMedia/upwork/heroImage.png";

const UpWork = () => {
  return (
    <>
      <section name="upwork" className="w-full h-full bg-[#181818] pb-5 px-4">
        <div
          className="bg-[#E5E5E5] flex justify-center items-center mx-auto flex-col-reverse relative md:flex-row py-8 h-screen md:h-[500px] 2xl:h-full"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <div className="px-4 py-2 md:w-1/2 2xl:ml-14">
            <img
              src={LogoUpWork}
              alt="LogoUpWork"
              className="w-20 ml-[-5px] absolute top-0 xl:w-36 2xl:w-48 2xl:mt-10"
            />
            <p className="font-medium text-xs mb-2 md:mt-10 md:text-xs lg:mt-3 xl:text-base 2xl:text-2xl 2xl:font-semibold">
              UI/UX DESIGNER FREELANCE
            </p>
            <h2 className="font-bold text-xl my-2 text-left md:text-2xl xl:text-4xl 2xl:text-5xl 2xl:w-[900px]">
              DESIGNED MORE THAN 20+ WEBSITES AND 6 APPS WITH CLIENTS FROM
              AROUND THE WORLD
            </h2>
            <p className="font-normal text-xs my-2 xl:text-xs lg:w-[80%] 2xl:text-xl 2xl:w-[50%]">
              One of my hobbies is make the clients satisfied and happy. I will
              design, develop, and deliver your dreams according to
              specification that you give.
            </p>
            <button className="font-semibold text-[10px] border-2 border-black px-3 py-1 xl:text-xs 2xl:text-xl 2xl:py-2 2xl:px-4 2xl:mt-3">
              VIEW CASE STUDY
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={BgUpWork}
              alt="UpworkHeroImage"
              className="mt-12 w-[75%] md:mt-0 md:w-full 2xl:w-[1100px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default UpWork;
