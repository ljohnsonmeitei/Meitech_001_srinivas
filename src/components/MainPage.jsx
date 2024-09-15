import React from "react";
import Map from "./Map";
import "./styles/mainPage.css"

const MainPage = () => {
  return (
    <>
      <div
        className="hero-section w-full min-h-[80vh] m-auto px-5 py-[2rem] flex justify-center items-center"
      >
        <div className="content text-center flex flex-col items-center">
          <div className="font-lexend font-semibold text-[3rem] w-[70%] leading-[3.18rem] text-white">
            Find The Place To Bring Your Dreams To Life.
          </div>
          <div className="text-[1.1rem] mt-5 w-[78%] text-gray-300">
            Everything you need about finding your place to live will be here,
            where it will be easier for you.
          </div>
        </div>
      </div>
      <Map />
    </>
  );
};

export default MainPage;
