import React from "react";
import TheWorld from "../../assets/img/graphicDesign/design/the_world.png";
import BestPizza from "../../assets/img/graphicDesign/design/best_pizza.png";
import DringFanta from "../../assets/img/graphicDesign/design/drink_fanta.png";
import Pizza from "../../assets/img/graphicDesign/design/pizza.png";
import FoodMenu from "../../assets/img/graphicDesign/design/food_menu.png";
import NewYork from "../../assets/img/graphicDesign/design/new_york.png";
import Tokyo from "../../assets/img/graphicDesign/design/tokyo.png";
import Moscow from "../../assets/img/graphicDesign/design/moscow.png";
import Ikea from "../../assets/img/graphicDesign/design/ikea.png";
import Tahilalats from "../../assets/img/graphicDesign/design/tahilalats.png";

const DesignMockUp = () => {
  return (
    <>
      <section className="w-full h-full bg-[#181818]">
        <div className="bg-[#181818] h-full py-14 max-w-screen-xl mx-auto">
          <div className="px-4 grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-10">
            <div
              className="flex justify-center items-center"
              data-aos="fade-up"
            >
              <img src={TheWorld} alt="the world" className="md:w-[90%]" />
            </div>
            <div
              className="flex justify-center items-center"
              data-aos="fade-up"
            >
              <img src={BestPizza} alt="the world" className="md:w-[90%]" />
            </div>
            <div
              className="flex justify-center items-center"
              data-aos="fade-up"
            >
              <img src={DringFanta} alt="the world" className="md:w-[90%]" />
            </div>
            <div
              className="flex justify-center items-center"
              data-aos="fade-up"
            >
              <img src={Pizza} alt="the world" className="md:w-[90%]" />
            </div>
            <div
              className="flex justify-center items-center"
              data-aos="fade-up"
            >
              <img src={FoodMenu} alt="the world" className="md:w-[90%]" />
            </div>
            <div
              className="flex justify-center items-center"
              data-aos="fade-up"
            >
              <img src={NewYork} alt="the world" className="md:w-[90%]" />
            </div>
            <div
              className="flex justify-center items-center"
              data-aos="fade-up"
            >
              <img src={Tokyo} alt="the world" className="md:w-[90%]" />
            </div>
            <div
              className="flex justify-center items-center"
              data-aos="fade-up"
            >
              <img src={Moscow} alt="the world" className="md:w-[90%]" />
            </div>
            <div
              className="flex justify-center items-center"
              data-aos="fade-up"
            >
              <img src={Ikea} alt="the world" className="md:w-[90%]" />
            </div>
            <div
              className="flex justify-center items-center"
              data-aos="fade-up"
            >
              <img src={Tahilalats} alt="the world" className="md:w-[90%]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DesignMockUp;
