import React from "react";
import WebApps from "../../assets/img/ui-ux-design/1.png";
import MobileApss from "../../assets/img/ui-ux-design/2.png";
import SystemDesign from "../../assets/img/ui-ux-design/3.png";

const Main = () => {
  return (
    <>
      <section className="h-full w-full bg-[#181818]">
        <div className="max-w-screen-xl h-auto xl:h-screen flex flex-col justify-center mx-auto bg-[#181818] px-4 py-28 lg:py-24">
          <div
            className="flex items-center flex-col text-center lg:mb-4"
            data-aos="fade-down"
          >
            <h1 className="text-7xl text-transparent font-black lg:text-8xl xl:text-9xl heading">
              UI/UX DESIGN
            </h1>
            <p className="text-white font-normal text-xs py-3 md:w-[40%] lg:w-[30%]">
              I concept, design, and deliver best-in-class your digital
              products. Beyond visuals and user interfaces, I craft user
              journeys that bring delight to people and solve complicated
              problems.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-y-10 lg:flex-row lg:justify-center lg:gap-x-7">
            <div
              className="text-center flex flex-col items-center text-white lg:w-[30%]"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src={WebApps}
                alt="webapps"
                className="w-40 md:w-[30%] lg:h-40 lg:w-auto"
              />
              <p className="text-sm font-bold py-3 w-fit">
                Web Apps & Corporate Sites
              </p>
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
                src={MobileApss}
                alt="mobileApps"
                className="w-48 md:w-[30%] lg:h-40 lg:w-auto"
              />
              <p className="text-sm font-bold py-3">Mobile App Design</p>
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
                src={SystemDesign}
                alt="system design"
                className="w-40 md:w-[30%] lg:h-40 lg:w-auto"
              />
              <p className="text-sm font-bold py-3">System Design</p>
              <p className="text-xs font-normal pb-3 md:w-[40%] lg:w-[80%]">
                Combined the architecture, product design, modules, interfaces,
                and data to create the products with specified requirements
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
