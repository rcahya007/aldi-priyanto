import React from "react";
import BgTheHerp from "../../assets/img/organizationMedia/theHerp/theHerp.png";
import LogoTheHerp from "../../assets/img/organizationMedia/theHerp/theHerpLogo.png";

const TheHerp = () => {
  return (
    <>
      <section name="theHerp" className="w-full h-full bg-[#181818] px-4 pb-5">
        <div
          className="mx-auto h-screen flex flex-col text-white relative bg-[#181818] justify-center md:justify-start md:h-[500px] xl:h-full"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <img
            src={BgTheHerp}
            alt="HeroImagetheHerp"
            className="w-full h-full md:h-full bg-contain brightness-75 absolute z-[-1]"
          />
          <div className="px-4 md:w-[350px] lg:w-[500px] 2xl:w-[650px] 2xl:ml-14">
            <div className="mt-5 md:mb-14 lg:mb-20 xl:mb-28 absolute top-0 md:mt-3 lg:mt-4 xl:mt-4 2xl:mt-20">
              <img
                src={LogoTheHerp}
                alt="theherp Logo"
                className="w-24 xl:w-36 2xl:w-48"
              />
            </div>
            <p className="font-medium text-sm xl:text-xl mt-8 md:mt-36 md:text-xs lg:text-base lg:mt-40 2xl:text-2xl 2xl:mt-56">
              CO-FOUNDER & CHIEF DESIGN
            </p>
            <p className="font-bold text-3xl md:text-2xl my-3 lg:text-4xl 2xl:text-5xl">
              MEDIA ENTERTAINMENT FOR GAMING AND MOVIES INDUSTRY
            </p>
            <p className="font-normal text-xs text-justify xl:text-sm lg:w-[90%] md:text-[11px] md:w-[250px] 2xl:text-xl 2xl:w-[500px]">
              Co-founded the organization at 15 years old with partner in
              school, created the Logo and designed the website so gaming and
              movies community can read the newest articles or talk about it
            </p>
            <button className="font-semibold text-xs md:text-[10px] border-2 px-5 py-2 mt-4 md:px-4 md:py-2 md:my-4 lg:text-xs cursor-pointer lg:mb-10 xl:mb-32 2xl:text-lg">
              VIEW CASE STUDY
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TheHerp;
