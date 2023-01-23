import React from "react";
import LogoWorkmotion from "../../assets/img/organizationMedia/workmotion/logo.png";
import BgWorkmotion from "../../assets/img/organizationMedia/workmotion/heroImage.png";

const Workmotion = () => {
  return (
    <>
      <section
        name="workmotion"
        className="w-full h-full bg-[#181818] pb-5 px-4"
      >
        <div
          className="bg-cover bg-center flex flex-col-reverse relative justify-center mx-auto md:flex-row h-screen items-center md:h-[500px] 2xl:h-[700px] 2xl:justify-between bg-workmotion-background"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <div className="px-4 py-4 text-white xl:w-[80%] md:pt-10 2xl:w-[780px] 2xl:ml-14">
            <img
              src={LogoWorkmotion}
              alt="logo workMotion"
              className="w-24 absolute top-9 2xl:w-60"
            />
            <p className="font-medium text-sm md:mt-9 md:mb-0 md:text-xs 2xl:text-2xl 2xl:font-semibold">
              PRODUCT DESIGNER
            </p>
            <h2 className="font-bold text-xl my-1 leading-5 md:text-xl md:mt-1 lg:text-3xl 2xl:text-5xl">
              GLOBAL HUMAN RESOURCE SOLUTIONS
            </h2>
            <p className="font-normal text-[10px] md:text-[10px] lg:w-[88%] lg:my-4 2xl:text-xl">
              Activate a global team and enable them to work from home. More
              than ever before, companies are remote-first and employees are
              looking for flexible working options. To simplify this for
              companies, employees can be hired through us without establishing
              an office abroad.
            </p>
            <button className="border-2 border-white px-3 py-1 text-[10px] my-3 2xl:text-lg 2xl:py-2 2xl:px-4">
              VIEW CASE STUDY
            </button>
          </div>
          <div className="">
            <img
              src={BgWorkmotion}
              alt="heroImageWorkMotion"
              className="w-[85%] mt-20 mx-auto md:w-full 2xl:w-[1000px] md:mt-0 md:px-4 lg:my-10 xl:w-[85%] 2xl:mr-32"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Workmotion;
