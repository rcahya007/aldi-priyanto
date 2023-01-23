import React from "react";
import HeroImage from "../../assets/img/heroImage.png";

const Main = () => {
  return (
    <>
      <section className="w-full h-full px-5 md:h-full md:px-5 bg-[#181818]">
        <div className="md:flex md:items-center xl:justify-start max-w-screen-xl mx-auto md:relative md:justify-center h-screen items-center flex">
          <div
            className="2xl:mt-32 text-white md:absolute md:mt-0 md:z-[1] absolute flex justify-center flex-col mt-5 md:px-8 xl:items-start lg:pl-20 xl:pl-28 "
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h1 className="font-black text-base w-3/5 z-[1] md:text-4xl md:w-4/6 md:pt-5 lg:text-5xl lg:pt-0 lg:my-0 lg:mb-2 xl:text-6xl xl:w-[800px] my-4">
              Aldi is a creative designer that who loves to make an ideas to
              reality
            </h1>
            <div className="h-8 md:w-[85px] w-10 border-t-2 mb-12 md:mb-0 lg:w-28 lg:mb-0 xl:w-44 lg:mt-2 2xl:border-t-4 2xl:w-36 2xl:mt-5"></div>
            <p className="text-xs mt-6 md:text-sm md:mt-0 text-[#A5A5A5] font-normal w-10/12 lg:mt-0 xl:text-xl 2xl:text-2xl">
              I do product design (ui/ux & system), videography <br />
              (production & editor), and graphic design at WorkMotion
            </p>
            <div className="font-medium mt-5 italic text-[#C5C90D] text-xs underline md:text-sm lg:mt-4 xl:text-xl 2xl:text-2xl">
              see work history
            </div>
            <div className="flex gap-4 xl:gap-6 mt-5 items-center md:mt-5">
              <a
                className="border-b-[1px] border-b-transparent hover:border-b-[1px] hover:border-b-white hover:-translate-y-1 duration-300"
                href="https://www.linkedin.com/in/aldipriyanto1999/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="text-xl xl:text-2xl 2xl:text-4xl bx bxl-linkedin"></i>
              </a>
              <a
                className="border-b-[1px] border-b-transparent hover:border-b-[1px] hover:border-b-white hover:-translate-y-1 duration-300"
                href="https://www.behance.net/aldipriyanto"
                target="_blank"
                rel="noreferrer"
              >
                <i className="text-xl xl:text-2xl 2xl:text-5xl bx bxl-behance"></i>
              </a>
              <a
                className="border-b-[1px] border-b-transparent hover:border-b-[1px] hover:border-b-white hover:-translate-y-1 duration-300"
                href="mailto:bsealdi@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <i className="text-xl xl:text-2xl 2xl:text-4xl bx bx-envelope"></i>
              </a>
              <a
                className="border-b-[1px] border-b-transparent hover:border-b-[1px] hover:border-b-white hover:-translate-y-1 duration-300"
                href="https://www.facebook.com/bsealdi"
                target="_blank"
                rel="noreferrer"
              >
                <i className="text-xl xl:text-2xl 2xl:text-4xl bx bxl-facebook-circle"></i>
              </a>
              <a
                className="border-b-[1px] border-b-transparent hover:border-b-[1px] hover:border-b-white hover:-translate-y-1 duration-300"
                href="https://twitter.com/aldiswann"
                target="_blank"
                rel="noreferrer"
              >
                <i className="text-xl xl:text-2xl 2xl:text-4xl bx bxl-twitter"></i>
              </a>
              <a
                className="border-b-[1px] border-b-transparent hover:border-b-[1px] hover:border-b-white hover:-translate-y-1 duration-300"
                href="https://www.instagram.com/aldiswann/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="text-xl xl:text-2xl 2xl:text-4xl bx bxl-instagram-alt"></i>
              </a>
            </div>
          </div>
          <div
            className="flex justify-end w-full 2xl:absolute md:mr-8 md:mt-0 xl:mr-24 2xl:pr-10"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <img
              src={HeroImage}
              alt="landingProfile"
              className="w-40 md:w-64 xl:w-[350px] lg:w-[300px] lg:mr-16 relative -top-16 md:top-0"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
