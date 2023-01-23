import React from "react";

const ButtonMvToTop = () => {
  const moveToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <button
      onClick={moveToTop}
      id="moveTop"
      className="bg-white p-2 fixed bottom-[5%] right-[5%] rounded-lg cursor-pointer duration-300 border-[1px] border-black hover:-translate-y-3 hover:shadow-white hover:shadow-xl"
    >
      <i className="bx bxs-chevrons-up text-2xl text-black"></i>
    </button>
  );
};

export default ButtonMvToTop;
