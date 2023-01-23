import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="w-full h-full bg-[#181818] px-4">
        <div
          className="mx-auto h-[500px] px-4 flex justify-center items-center bg-cover bg-center 2xl:h-[700px] bg-footer-background"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <div className="text-center md:w-[60%]">
            <h1 className="text-[#E8C53B] text-3xl font-extrabold mb-6 xl:text-4xl 2xl:text-7xl">
              Outside of Work
            </h1>
            <p className="text-sm font-normal text-white xl:text-sm mb-5 2xl:text-2xl">
              Thank you for your time for visiting this portofolio website, if
              you interested to me and my skill, i would love to talk more about
              project or work that i can do. I will reply your email as soon as
              i read them.
            </p>
            <a
              href="mailto:bsealdi@gmail.com"
              className="text-white px-4 py-1 text-xs border-2 border-white underline xl:text-sm xl:px5 xl:py2 2xl:text-2xl 2xl:py-2 2xl:px-5"
            >
              EMAIL ME
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
