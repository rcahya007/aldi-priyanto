import React from "react";
import Photo from "../../assets/img/about/profile.png";

const Profile = () => {
  return (
    <>
      <section className="h-full w-full bg-[#181818] py-10">
        <div className="h-full mx-auto bg-[#181818] py-10 max-w-screen-xl">
          <div
            className="text-white flex flex-col items-center"
            data-aos="fade-up"
          >
            <i className="bx bx-x text-2xl my-3"></i>
            <div className="w-[2px] h-28 border bg-white"></div>
          </div>
          <div className="pt-10 px-4 lg:grid lg:grid-cols-3 lg:px-6">
            <div
              className="flex flex-col items-center mb-10 gap-5 text-white"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img src={Photo} alt="profile" className="w-52 xl:w-60" />
              <p className="font-normal text-xs lg:w-52 xl:text-sm text-center">
                This isn’t my wife, It’s just my friend and her brother.
              </p>
            </div>
            <div
              className="flex flex-col gap-5 text-white py-10 md:px-36 text-justify lg:grid lg:px-0 lg:py-0 lg:grid-flow-row lg:auto-rows-max"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-lg font-black lg:row-span-1">
                About Aldi Priyanto
              </h3>
              <p className="text-sm">
                Aldi Priyanto is a Surabaya - Moscow based designer with over 7
                years experience. He’s worked on a variety organizations ranging
                from small non-profits to large tech companies with ambitious
                goals. He has a unique talent at seeing the big picture
                potential in a product or brand and then bringing it to reality.
              </p>
              <p className="text-sm">
                Each company Aldi has worked for has carried a strong mission
                behind the work—ranging from media and entertainment, to medical
                technology. He tries to keep that same ethos for doing good in
                his personal life as well. He strongly believes that design and
                storytelling is a powerful medium to create change.
              </p>
              <p className="text-sm">
                Aldi is comfortable working on a range of projects from
                designing native apps to collaborating on set with a production
                crew. Whether he’s behind the camera, illustrating on paper, or
                crafting prototypes on his laptop, Aldi always brings a quality
                of work and creativity that is hard to match.
              </p>
              <p className="text-sm">
                Outside of work Aldi finds inspiration through movies, musics,
                and books. His hunger and curiosity for life drives him to
                experience everything and document all that it has to offer.
                This thirst for life is evident in all of his work. Aldi doesn’t
                find a strong line between creativity, work, and play.
              </p>
            </div>
            <div
              className="md:px-36 lg:grid lg:px-0 lg:pl-16"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="text-white my-5 lg:mt-0">
                <h3 className="text-lg font-black mb-2">
                  Product Design Capabilities
                </h3>
                <ol className="list-decimal list-inside text-sm">
                  <li>UI/UX Designer</li>
                  <li>UX Researcher</li>
                  <li>Webstites</li>
                  <li>iOS and Android Apps</li>
                  <li>Strategy</li>
                  <li>Research</li>
                  <li>E-Commerce Design</li>
                </ol>
              </div>
              <div className="text-white my-5">
                <h3 className="text-lg font-black mb-2">
                  Videography Capabilities
                </h3>
                <ol className="list-decimal list-inside text-sm">
                  <li>Editor</li>
                  <li>Script Writer</li>
                  <li>Director</li>
                  <li>Cameraman</li>
                  <li>Lightning Specialist</li>
                  <li>Photography</li>
                </ol>
              </div>
              <div className="text-white my-5">
                <h3 className="text-lg font-black mb-2">
                  Graphic Design Capabilities
                </h3>
                <ol className="list-decimal list-inside text-sm">
                  <li>Graphic Design</li>
                  <li>Advertising Design</li>
                  <li>Advertising Campaign</li>
                  <li>Brand Design</li>
                  <li>Corporate Identity Design</li>
                  <li>Social Media Manager</li>
                  <li>Project Planner</li>
                </ol>
              </div>
              <div className="text-white my-5">
                <h3 className="text-lg font-black mb-2">
                  Languages Capabilities
                </h3>
                <ol className="list-decimal list-inside text-sm">
                  <li>Indonesian</li>
                  <li>English</li>
                  <li>Russian</li>
                  <li>German</li>
                </ol>
              </div>
              <div className="text-white my-5">
                <h3 className="text-lg font-black mb-2">
                  Clients & Collaborations
                </h3>
                <ol className="list-decimal list-inside text-sm">
                  <li>TheHerp Entertainments</li>
                  <li>Ishtari</li>
                  <li>Upwork</li>
                  <li>Zdorovie.ru</li>
                  <li>Pskov State University</li>
                  <li>METRO MOSCOW</li>
                  <li>Acomics.ru</li>
                  <li>Mathack.ru</li>
                  <li>MyCube</li>
                  <li>Alfabet</li>
                  <li>WorkMotion Software</li>
                  <li>VKontakte</li>
                  <li>Fiverr</li>
                  <li>Atlas World NFT</li>
                  <li>NOWDOTS GROUP</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
