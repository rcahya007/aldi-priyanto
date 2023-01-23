import React from "react";
import LogoLebanese from "../../assets/img/ui-ux-design/lebanese/logo.png";
import HeroLebanese from "../../assets/img/ui-ux-design/lebanese/heroImage.png";

const Lebanese = () => {
  return (
    <>
      <section className="w-full h-full bg-[#181818] px-4 pb-5">
        <div
          className="h-[500px] bg-slate-300 mx-auto bg-cover bg-center relative md:flex md:h-[500px] 2xl:h-[700px] bg-lebanese-background"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <div className="px-4 flex flex-col justify-center md:w-[60%] 2xl:ml-14">
            <img
              src={LogoLebanese}
              alt="logo lebanese"
              className="w-14 md:absolute md:top-2 lg:w-20 md:-ml-2 2xl:w-28 2xl:top-6"
            />
            <div className="mt-48 md:mt-0 lg:mt-8">
              <p className="font-medium text-sm lg:text-base 2xl:text-2xl 2xl:font-bold">
                WEB DESIGNER
              </p>
              <h2 className="font-bold text-xl lg:my-3 lg:text-3xl 2xl:text-6xl 2xl:font-bold">
                LEBANESE GLOBAL <br />
                E-COMMERCE
              </h2>
              <p className="font-medium text-xs md:w-full lg:text-xs 2xl:text-xl 2xl:w-[600px]">
                Ishtari is a Lebanese e-commerce that operates in Lebanon and
                Ghana. Isthari provide supply chain of all housing products from
                a decoration to solar energy system that requires all kind of
                legal steps, installation, and maintenance. These kind of steps
                will troublesome users if the interface design is complicated.
              </p>
              <button className="border-black border-2 px-4 text-[10px] lg:text-xs lg:py-1 lg:px-3 md:font-semibold 2xl:text-xl 2xl:font-bold mt-3">
                VIEW CASE STUDY
              </button>
            </div>
          </div>
          <div className="absolute top-16 flex justify-center items-center w-full md:static 2xl:w-[70%]">
            <img
              src={HeroLebanese}
              alt="heroImage"
              className="w-72 md:w-[900px] 2xl:w-[1200px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Lebanese;
