import React from "react";
import LogoNowdots from "../../assets/img/organizationMedia/nowdots/logo.png";

const Nowdots = () => {
  return (
    <>
      <section name="nowdots" className="h-full w-full bg-[#181818] pb-5 px-4">
        <div
          className="h-screen w-full lg:bg-cover lg:bg-center lg:bg-no-repeat ease-in-out duration-1000 px-4 py-4 flex mx-auto items-center relative sm:bg-cover md:h-full xl:h-[500px] 2xl:bg-top 2xl:h-[700px] bg-nowdots-background"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <div className="2xl:ml-14">
            <img
              src={LogoNowdots}
              alt="logo Nowdots"
              className="w-28 absolute top-0 mt-6 md:mt-3 xl:mt-8 2xl:w-52 2xl:mt-16"
            />
            <p className="font-medium text-sm my-2 md:mt-16 md:mb-4 2xl:text-2xl 2xl:font-semibold 2xl:mt-32">
              CREATIVE DIRECTOR & EDITOR
            </p>
            <h2 className="font-bold text-2xl my-2 md:w-[40%] lg:w-72 md:my-0 md:leading-[24px] xl:w-[300px] 2xl:text-5xl 2xl:w-[550px]">
              INDONESIAN INTERNET MEDIA, NEWS, AND ENTERTAINMENT
            </h2>
            <p className="font-medium text-xs my-2 md:w-56 lg:w-52 xl:w-60 2xl:text-xl 2xl:w-[450px]">
              Activate a global team and enable them to work from home. More
              than ever before, companies are remote-first and employees are
              looking for flexible working options. To simplify this for
              companies, employees can be hired through us without establishing
              an office abroad.
            </p>
            <button className="text-xs font-semibold border-2 border-black px-3 py-1 my-4 lg:my-2 2xl:py-2 2xl:px-3 2xl:text-xl">
              VIEW CASE STUDY
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nowdots;
