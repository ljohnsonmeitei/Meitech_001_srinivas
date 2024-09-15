import React from "react";
import { useNavigate } from "react-router-dom";

function Topbar() {
  const navigate =useNavigate();
  const signInClick = () => {
    navigate('/signIn');
  };  
  return (
    <nav className="px-12 py-[1.2rem] flex justify-between items-center shadow">
      <div className="font-semibold text-[1.1rem] flex gap-3 items-center">
        <svg
          width="33"
          height="33"
          viewBox="0 0 36 36"
          fill="none"gi
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V8C32 21.2548 21.2548 32 8 32H4C1.79086 32 0 30.2091 0 28V4Z"
            fill="#F59E0B"
          />
          <path
            d="M4 8C4 5.79086 5.79086 4 8 4H32C34.2091 4 36 5.79086 36 8V12C36 25.2548 25.2548 36 12 36H8C5.79086 36 4 34.2091 4 32V8Z"
            fill="#4BE4C9"
          />
        </svg>
        <div>Leave It Local</div>
      </div>
      <div className="flex gap-10">
        <button className="text-[#047857] text-[0.95rem] font-semibold hover:brightness-150 transition-all duration-300">
          About Us
        </button>
        <button className="text-[#047857] text-[0.95rem] font-semibold hover:brightness-150 transition-all duration-300">
          Article
        </button>
        <button className="text-[#047857] text-[0.95rem] font-semibold hover:brightness-150 transition-all duration-300">
          Property
        </button>
        <button className="text-[#047857] text-[0.95rem] font-semibold hover:brightness-150 transition-all duration-300"
        onClick={signInClick}>
          Sign In
        </button>
      </div>
    </nav>
  );
}

export default Topbar;
