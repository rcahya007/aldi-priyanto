import React from "react";
import TheHerp from "../../assets/img/organizationSmall/TheHerp.png";
import UpWork from "../../assets/img/organizationSmall/upwork.png";
import Third from "../../assets/img/organizationSmall/thrid.png";
import Workmotion from "../../assets/img/organizationSmall/workMotion.png";
import Alfabet from "../../assets/img/organizationSmall/Alfabet.png";
import Cart from "../../assets/img/oraganizationBig/cart.png";
import Pskov from "../../assets/img/oraganizationBig/pskov.png";
import M from "../../assets/img/oraganizationBig/m.png";
import Nowdots from "../../assets/img/oraganizationBig/NOWDOTS.png";
import Vk from "../../assets/img/oraganizationBig/vk.png";
import Fiver from "../../assets/img/oraganizationBig/fiverr.png";

const Organization = () => {
  return (
    <>
      <section
        name="organitzation"
        className="w-full h-full bg-[#181818] py-14"
      >
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
              className="mb-1 font-normal md:text-sm"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              organization that i have worked with
            </p>
            <div className="flex flex-col w-full">
              <div
                className="flex justify-center gap-x-6 gap-y-2 items-center flex-wrap px-4 py-2"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <img src={TheHerp} alt="theherp" className="w-16 h-5" />
                <img src={UpWork} alt="upwork" className="w-20 h-9" />
                <img src={Third} alt="third" className="w-24 h-5" />
                <img src={Workmotion} alt="workmotion" className="w-24 h-6" />
                <img src={Alfabet} alt="alfabet" className="w-20 h-4" />
              </div>
              <div
                className="flex justify-center gap-x-6 gap-y-2 items-center flex-wrap px-4 py-2 lg:gap-x-12 pt-4 md:pt-0"
                data-aos="fade-up"
                data-aos-delay="350"
              >
                <img
                  src={Cart}
                  alt="cart"
                  className="w-16 h-16 lg:w-24 lg:h-24"
                />
                <img
                  src={Pskov}
                  alt="pskov"
                  className="w-16 h-16 lg:w-24 lg:h-24"
                />
                <img src={M} alt="m" className="w-11 h-11 lg:w-16 lg:h-16" />
                <img
                  src={Nowdots}
                  alt="nowdots"
                  className="w-32 h-5 lg:w-36 lg:h-6"
                />
                <img src={Vk} alt="vk" className="w-9 h-9 lg:w-12 lg:h-12" />
                <img
                  src={Fiver}
                  alt="fiver"
                  className="w-24 h-10 lg:w-26 lg:h-12"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Organization;
