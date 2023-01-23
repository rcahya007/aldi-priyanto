import React from "react";
import English from "../../assets/img/language/inggris.png";
import Indonesia from "../../assets/img/language/indonesia.png";
import Russian from "../../assets/img/language/russian.png";
import German from "../../assets/img/language/german.png";

const Languange = () => {
  return (
    <>
      <section name="languages" className="w-full h-full bg-[#181818] py-14">
        <div className="max-w-screen-xl mx-auto h-auto flex flex-col justify-center bg-[#181818]">
          <div
            className="text-white flex flex-col items-center"
            data-aos="fade-up"
          >
            <i className="bx bx-x text-2xl my-3"></i>
            <div className="w-[2px] h-28 border bg-white mb-4"></div>
          </div>
          <div className="text-white text-xs flex flex-col items-center mt-5 md:mt-3">
            <p
              className="mb-2 font-normal md:text-sm"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              languages that i speak
            </p>
            <div
              className="flex flex-col w-full md:px-32 lg:px-52 xl:px-72"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <div className="flex justify-evenly items-center flex-wrap px-4 py-2 md:mx-2 mx-2 mt-3">
                <img
                  src={English}
                  alt="inggris"
                  className="w-10 h-10 md:w-12 md:h-12"
                />
                <img
                  src={Indonesia}
                  alt="indonesia"
                  className="w-10 h-10 md:w-12 md:h-12"
                />
                <img
                  src={Russian}
                  alt="russian"
                  className="w-10 h-10 md:w-12 md:h-12"
                />
                <img
                  src={German}
                  alt="german"
                  className="w-10 h-10 md:w-12 md:h-12"
                />
              </div>
            </div>
            <div
              className="text-white flex flex-col items-center mt-4"
              data-aos="fade-up"
              data-aos-delay="350"
            >
              <i className="bx bx-x text-2xl my-3"></i>
              <div className="w-[2px] h-28 border bg-white"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Languange;
