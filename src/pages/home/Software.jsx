import React from "react";
import Figma from "../../assets/img/software/figma.png";
import Sktech from "../../assets/img/software/sketch.png";
import Invisio from "../../assets/img/software/invisio.png";
import VSCode from "../../assets/img/software/vscode.png";
import AdobeXD from "../../assets/img/software/adobexd.png";
import PS from "../../assets/img/software/photoshop.png";
import Celtx from "../../assets/img/software/celtx.png";
import AI from "../../assets/img/software/illustrator.png";
import PR from "../../assets/img/software/premiere.png";

const Software = () => {
  return (
    <>
      <section name="software" className="w-full h-full bg-[#181818] py-14">
        <div className="max-w-screen-xl mx-auto h-auto flex flex-col justify-center">
          <div
            className="text-white flex flex-col items-center"
            data-aos="fade-up"
          >
            <i className="bx bx-x text-2xl my-3"></i>
            <div className="w-[2px] h-28 border bg-white"></div>
          </div>
          <div className="text-white text-xs flex flex-col items-center mt-5">
            <p
              className="mb-2 font-normal md:text-sm"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              software that good at
            </p>
            <div className="flex flex-col w-full md:px-32 lg:px-52 xl:px-72">
              <div
                className="flex justify-evenly items-center flex-wrap px-4 py-2 md:mb-4"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <img
                  src={Figma}
                  alt="figma"
                  className="w-10 h-10 md:w-12 md:h-12"
                />
                <img
                  src={Sktech}
                  alt="skecth"
                  className="w-8 h-8 md:w-10 md:h-10"
                />
                <img
                  src={Invisio}
                  alt="invisio"
                  className="w-10 h-10 md:w-12 md:h-12"
                />
                <img
                  src={VSCode}
                  alt="vscode"
                  className="w-8 h-8 md:w-10 md:h-10"
                />
              </div>
              <div
                className="flex justify-evenly gap-y-2 items-center flex-wrap py-2 lg:gap-x-12 pt-4 md:pt-0 md:mt-3"
                data-aos="fade-up"
                data-aos-delay="350"
              >
                <img
                  src={AdobeXD}
                  alt="xd"
                  className="w-8 h-8 md:w-10 md:h-10"
                />
                <img src={PS} alt="ps" className="w-8 h-8 md:w-10 md:h-10" />
                <img
                  src={Celtx}
                  alt="celtx"
                  className="w-20 h-8 md:w-24 md:h-10"
                />
                <img src={AI} alt="ai" className="w-8 h-8 md:w-10 md:h-10" />
                <img src={PR} alt="pr" className="w-8 h-8 md:w-10 md:h-10" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Software;
