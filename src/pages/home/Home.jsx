import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Languange from "./Languange";
import Organization from "./Organization";
import Main from "./Main";
import Software from "./Software";

import AOS from "aos";
import "aos/dist/aos.css";
import TheHerp from "./TheHerp";
import UpWork from "./UpWork";
import Eaopobbe from "./Eaopobbe";
import Workmotion from "./Workmotion";
import Nowdots from "./Nowdots";
import Footer from "./Footer";
import { useState } from "react";
import ButtonMvToTop from "../../components/ButtonMvToTop";

const Home = () => {
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
    document.title = "ALDI PRIYANTO | HOME";
  }, []);
  return (
    <div className="font-default">
      <Navbar />
      <Main />
      <Organization />
      <Software />
      <Languange />
      <TheHerp />
      <UpWork />
      <Eaopobbe />
      <Workmotion />
      <Nowdots />
      <Footer />

      {isVisible && <ButtonMvToTop />}
    </div>
  );
};

export default Home;
