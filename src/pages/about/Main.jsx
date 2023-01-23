import React from "react";

const Main = () => {
  return (
    <>
      <section className="h-full w-full bg-[#181818]">
        <div className="max-w-screen-xl h-screen flex flex-col justify-center mx-auto bg-[#181818] px-4 py-28 lg:py-24">
          <div
            className="flex items-center flex-col text-center lg:mb-4"
            data-aos="fade-down"
          >
            <h1 className="text-3xl font-black md:text-4xl md:w-[60%] lg:text-5xl lg:w-[90%] text-white">
              Aldi is a creative designer that who loves to make an
              <span className="text-transparent heading-about-ideas">
                {" "}
                ideas{" "}
              </span>
              to
              <span className="text-transparent heading-about-reality">
                {" "}
                reality
              </span>
              .
            </h1>
          </div>
          <div className="mt-8 flex flex-col gap-y-10 lg:flex-row lg:justify-center lg:gap-x-7"></div>
        </div>
      </section>
    </>
  );
};

export default Main;
