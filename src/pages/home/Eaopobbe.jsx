import React from "react";
import LogoEaopobbe from "../../assets/img/organizationMedia/eaopobbe/logo.png";
import BgEaopobbe from "../../assets/img/organizationMedia/eaopobbe/heroImage.png";

const Eaopobbe = () => {
  return (
    <>
      <section name="eaopobbe" className="w-full h-full bg-[#181818] pb-5 px-4">
        <div
          className="bg-cover flex justify-center md:justify-between items-center mx-auto flex-col-reverse relative md:flex-row h-screen md:h-[500px] 2xl:h-[700px] bg-eaopobbe-background 2xl:justify-between"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <div className="px-4 py-1 md:w-1/2 2xl:ml-14">
            <img
              src={LogoEaopobbe}
              alt="Logo UpWork"
              className="w-32 absolute top-0 mt-5 xl:w-40 2xl:w-72 2xl:mt-16"
            />
            <p className="font-medium text-xs mb-2 md:mt-10 md:text-xs lg:mt-3 xl:text-lg 2xl:text-2xl 2xl:font-semibold">
              UI/UX DESIGNER
            </p>
            <h2 className="font-bold text-xl my-2 text-left md:text-2xl leading-5 xl:text-[40px] xl:leading-none xl:my-4 2xl:text-5xl">
              IMPROVING ONLINE HEALTH CARE SYSTEM
            </h2>
            <p className="font-normal text-xs my-2 xl:w-[60%] xl:text-sm xl:my-4 lg:w-[80%] 2xl:text-xl">
              Health care system shoud be easy to use for everyone, young to old
              deserve to enjoy the online health care system, with simple and
              advanced User Interface, everyone can use the app without taking
              many times and FAST
            </p>
            <button className="font-semibold text-[10px] border-2 border-black px-3 py-1 xl:text-xs 2xl:text-xl 2xl:py-2 2xl:px-3">
              VIEW CASE STUDY
            </button>
          </div>
          <div className="w-[250px] md:w-[600px] flex justify-center pr-2 items-center 2xl:mr-64 2xl:w-[700px]">
            <img
              src={BgEaopobbe}
              alt="HeroImage"
              className="md:w-[80%] 2xl:w-[800px] 2xl:mt-16 md:flex md:items-center brightness-100 xl:mt-12"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Eaopobbe;
