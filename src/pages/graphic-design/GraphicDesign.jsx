import React, { useEffect, useState } from "react";
import ButtonMvToTop from "../../components/ButtonMvToTop";
import Navbar from "../../components/Navbar";
import Main from "../graphic-design/Main";
import AOS from "aos";
import "aos/dist/aos.css";
import DesignMockUp from "./DesignMockUp";

const GraphicDesign = () => {
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
    document.title = "ALDI PRIYANTO | Graphic Design";
  }, []);
  return (
    <div className="font-default">
      <Navbar />
      <Main />
      <DesignMockUp />

      {isVisible && <ButtonMvToTop />}
    </div>
  );
};

export default GraphicDesign;
