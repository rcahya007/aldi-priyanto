import React from "react";

const Footer = () => {
  return (
    <>
      <section className="h-full w-full bg-[#181818] py-10">
        <div
          className="h-full max-w-screen-xl bg-[#181818] text-white border-t-2 border-white pt-20 xl:mx-auto mx-4"
          data-aos="fade-up"
        >
          <div className="px-4 md:grid md:grid-cols-2 md:grid-rows-[minmax(50px,_50px)_auto] md:px-28 md:gap-x-11 lg:grid-cols-3">
            <h1 className="text-4xl mb-5 font-black" data-aos="fade-up">
              Contact
            </h1>
            <div
              className="md:col-start-1 lg:col-start-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-lg mb-2 font-black">Let’s Work Together</h3>
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:bsealdi@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-fit items-center border-b-[1px] border-b-transparent hover:border-b-[1px] hover:border-b-white hover:-translate-y-1 duration-300"
                >
                  <i className="bx bx-envelope mr-2 text-lg"></i>
                  <p>bsealdi@gmail.com</p>
                </a>
                <a
                  className="flex w-fit items-center border-b-[1px] border-b-transparent hover:border-b-[1px] hover:border-b-white hover:-translate-y-1 duration-300"
                  href="https://www.linkedin.com/in/aldipriyanto1999/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-linkedin-square mr-2 text-lg"></i>
                  <p>LinkedIn</p>
                </a>
                <a
                  className="flex w-fit items-center border-b-[1px] border-b-transparent hover:border-b-[1px] hover:border-b-white hover:-translate-y-1 duration-300"
                  href="https://www.facebook.com/bsealdi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-facebook-circle mr-2 text-lg"></i>
                  <p>Facebook</p>
                </a>
                <a
                  className="flex w-fit items-center border-b-[1px] border-b-transparent hover:border-b-[1px] hover:border-b-white hover:-translate-y-1 duration-300"
                  href="https://twitter.com/aldiswann"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-twitter mr-2 text-lg"></i>
                  <p>Twitter</p>
                </a>
                <a
                  className="flex w-fit items-center border-b-[1px] border-b-transparent hover:border-b-[1px] hover:border-b-white hover:-translate-y-1 duration-300"
                  href="https://www.instagram.com/aldiswann/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-instagram mr-2 text-lg"></i>
                  <p>Instagram</p>
                </a>
              </div>
            </div>
            <div
              className="mt-5 md:mt-0 md:col-start-2 md:row-start-1 md:row-span-2 lg:col-start-3"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <h3 className="text-lg mb-2 font-black">Experience</h3>
              <div className="flex flex-col gap-2">
                <p>Product Designer</p>
                <p>UI/UX Designer</p>
                <p>UI Designer</p>
                <p>Graphic Designer</p>
                <p>Director</p>
                <p>Video Editor</p>
                <p>Script Writer</p>
                <p>Lightning Specialist</p>
                <p>Cameraman</p>
                <p>Social Media Manager</p>
                <p>Campaign</p>
                <p>Advertising Design</p>
              </div>
              <div className="my-5 hover:-translate-y-1 duration-300 w-fit">
                <a
                  href="https://drive.google.com/file/d/1ommiWf-9G3lzofQA6EA7EOIbuDk-XzWC/view"
                  className="italic underline text-[#C5C90D] text-lg font-semibold"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
