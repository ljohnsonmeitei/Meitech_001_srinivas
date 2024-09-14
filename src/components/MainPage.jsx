import React from "react";
import Map from "./Map";

const MainPage = () => {
  return (
    <>
      <div className="w-[92%] m-auto py-[2rem] flex justify-between items-center">
        <div className="w-[35%]">
          <div className="font-lexend font-semibold text-[2.8rem] w-[70%] leading-[3.18rem]">
            Find The Place To Bring Your Dreams To Life.
          </div>
          <div className="text-customGray mt-8 w-[78%]">
            Everything you need about finding your place to live will be here,
            where it will be easier for you.
          </div>
        </div>
        <div className=" w-[60%]">
          <div className="flex flex-col w-full">
            {/* <div className="pl-4 text-orange-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search for the location"
              className="flex-grow px-4 py-2 text-gray-600 rounded-full focus:outline-none"
            />
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full flex items-center">
              Search
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h8m-4-4v8"
                />
              </svg>
            </button> */}
            
          </div>
        </div>
        
      </div>
      <Map />
    </>
  );
};

export default MainPage;
