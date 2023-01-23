import React, { useEffect, useState } from "react";
import ButtonMvToTop from "../../components/ButtonMvToTop";
import Navbar from "../../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Main from "./Main";
import TheHerp from "../home/TheHerp";
import UpWork from "../home/UpWork";
import Eaopobbe from "../home/Eaopobbe";
import Workmotion from "../home/Workmotion";
import Lebanese from "./Lebanese";

const UiUxDesign = () => {
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
    document.title = "ALDI PRIYANTO | UI-UX Design";
  }, []);
  return (
    <div className="font-default">
      <Navbar />
      <Main />
      <TheHerp />
      <UpWork />
      <Eaopobbe />
      <Workmotion />
      <Lebanese />

      {isVisible && <ButtonMvToTop />}
    </div>
  );
};

export default UiUxDesign;
