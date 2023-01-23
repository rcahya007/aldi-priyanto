import React from "react";
import Advertising from "../../assets/img/graphicDesign/advertising design.png";
import Corporate from "../../assets/img/graphicDesign/Corporate Identity Design.png";
import SosialMedia from "../../assets/img/graphicDesign/Social Media Manager.png";

const Main = () => {
  return (
    <>
      <section className="h-full w-full bg-[#181818]">
        <div className="max-w-screen-xl h-auto xl:h-screen flex flex-col justify-center mx-auto bg-[#181818] px-4 py-28 lg:py-24">
          <div
            className="flex items-center flex-col text-center lg:mb-4"
            data-aos="fade-down"
          >
            <h1 className="text-6xl text-transparent font-black md:text-7xl lg:text-8xl xl:text-9xl heading">
              GRAPHIC DESIGN
            </h1>
            <p className="text-white font-normal text-[11px] py-3 md:w-[40%] lg:w-[30%]">
              I can design your company identity and manage your social media’s
              feed with the high quality of contents, and if you’d like, I will
              also do the marketing and ads of your products. You just sit and
              relax while focusing on selling.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-y-10 lg:flex-row lg:justify-center lg:gap-x-7">
            <div
              className="text-center flex flex-col items-center text-white lg:w-[30%]"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src={Advertising}
                alt="webapps"
                className="w-32 md:w-[20%] lg:h-40 lg:w-auto"
              />
              <p className="text-sm font-bold py-3 w-fit">Advertising Design</p>
              <p className="text-xs font-normal pb-3 md:w-[40%] lg:w-[80%]">
                This is where problem solving meets visual impact. I’ll unite
                products and users, design, and experiences.
              </p>
            </div>
            <div
              className="flex flex-col items-center text-center text-white lg:w-[30%]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src={Corporate}
                alt="mobileApps"
                className="w-20 md:w-[10%] lg:h-40 lg:w-auto"
              />
              <p className="text-sm font-bold py-3">
                Corporate Identity Design
              </p>
              <p className="text-xs font-normal pb-3 md:w-[40%] lg:w-[80%]">
                Using iOS, Android and an expert vision, I’ll take your
                application to the next level.
              </p>
            </div>
            <div
              className="flex flex-col items-center text-center text-white lg:w-[30%]"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img
                src={SosialMedia}
                alt="system design"
                className="w-32 md:w-[15%] lg:h-40 lg:w-auto"
              />
              <p className="text-sm font-bold py-3">Social Media Manager</p>
              <p className="text-xs font-normal pb-3 md:w-[40%] lg:w-[80%]">
                I will operate your business or media social media’s feed to the
                next level.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
