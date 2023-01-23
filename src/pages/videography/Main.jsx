import React from "react";
import Director from "../../assets/img/videography/director.png";
import ScriptWriter from "../../assets/img/videography/script writer.png";
import Editor from "../../assets/img/videography/editor.png";

const Main = () => {
  return (
    <>
      <section className="h-full w-full bg-[#181818]">
        <div className="max-w-screen-xl h-auto xl:h-screen flex flex-col justify-center mx-auto bg-[#181818] px-4 py-28 lg:py-24">
          <div
            className="flex items-center flex-col text-center lg:mb-4"
            data-aos="fade-down"
          >
            <h1 className="text-4xl text-transparent font-black md:text-6xl lg:text-8xl xl:text-9xl heading">
              VIDEOGRAPHY
            </h1>
            <p className="text-white font-normal text-[11px] py-3 md:w-[40%] lg:w-[30%]">
              I will accompany the whole project’s process from pre-production
              to the finishing stage. I do write the script(s), direct, and edit
              the video/short film. Sometimes I do manage the crew to make sure
              everything and everybody stay in the same track.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-y-10 lg:flex-row lg:justify-center lg:gap-x-7">
            <div
              className="text-center flex flex-col items-center text-white lg:w-[30%]"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img
                src={Director}
                alt="webapps"
                className="w-28 md:w-[15%] lg:h-40 lg:w-auto"
              />
              <p className="text-sm font-bold py-3 w-fit">Director</p>
              <p className="text-xs font-normal pb-3 md:w-[40%] lg:w-[80%]">
                I direct the project as the client/producer requested. Following
                the brief with small creative touch of my own idea, I will make
                the best video/short film you ever seen.
              </p>
            </div>
            <div
              className="flex flex-col items-center text-center text-white lg:w-[30%]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src={ScriptWriter}
                alt="mobileApps"
                className="w-36 md:w-[20%] lg:h-40 lg:w-auto"
              />
              <p className="text-sm font-bold py-3">Script Writer</p>
              <p className="text-xs font-normal pb-3 md:w-[40%] lg:w-[80%]">
                I write and accompany the stage of script writing from the
                logline to perfect draft. I’m flexible to work with writers
                group to creating the great story and characters.
              </p>
            </div>
            <div
              className="flex flex-col items-center text-center text-white lg:w-[30%]"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <img
                src={Editor}
                alt="system design"
                className="w-40 md:w-[20%] lg:h-40 lg:w-auto"
              />
              <p className="text-sm font-bold py-3">Editor</p>
              <p className="text-xs font-normal pb-3 md:w-[40%] lg:w-[80%]">
                With Premiere Pro as a main software, I will make your
                video/short film as best as you can imagine in your mind.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
