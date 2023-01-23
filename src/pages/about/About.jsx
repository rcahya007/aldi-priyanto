import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../components/Navbar";
import ButtonMvToTop from "../../components/ButtonMvToTop";
import Main from "../about/Main";
import Profile from "./Profile";
import Footer from "./Footer";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const listenToScroll = () => {
    let heightToHideFrom = 300;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHideFrom) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    document.title = "ALDI PRIYANTO | About";
  }, []);
  return (
    <div className="font-default">
      <Navbar />
      <Main />
      <Profile />
      <Footer />

      {isVisible && <ButtonMvToTop />}
    </div>
  );
};

export default About;
