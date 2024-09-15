import React from "react";
import Map from "./Map";

const MainPage = () => {
  return (
    <>
      <div
        className="w-[92%] m-auto py-[2rem] flex justify-center items-center h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/bg.jpg')` }}
      >
        <div className="text-center flex flex-col items-center">
          <div className="font-lexend font-semibold text-[2.8rem] w-[70%] leading-[3.18rem]">
            Find The Place To Bring Your Dreams To Life.
          </div>
          <div className="text-customGray mt-4 w-[78%]">
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
