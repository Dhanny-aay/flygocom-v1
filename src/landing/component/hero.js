import heroBg from "./assets/websitebanner.svg";
import comvex from "./assets/comVex.svg";
import takeOff from "./assets/flight.svg";
import takeOffac from "./assets/flightAct.svg";
import FlightTab from "./subComps/flightTab";
import buses from "./assets/buses.svg";
import busAc from "./assets/busesAc.svg";
import stayAc from "./assets/stayAc.svg";
import stay from "./assets/stay.svg";
import visa from "./assets/visa.svg";
import visaAc from "./assets/visaAc.svg";
import StayTab from "./subComps/stayTab";
import VisaTab from "./subComps/visaTab";
import BusTab from "./subComps/busTab";
import { useState } from "react";

const Hero = () => {
  const buttons = [
    {
      name: "Flights",
      img: takeOff,
      activeImg: takeOffac,
      comp: <FlightTab />,
    },
    { name: "Buses", img: buses, activeImg: busAc, comp: <BusTab /> },
    { name: "Stays", img: stay, activeImg: stayAc, comp: <StayTab /> },
    { name: "Visa", img: visa, activeImg: visaAc, comp: <VisaTab /> },
  ];

  const [activeButton, setActiveButton] = useState("Flights");

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className=" h-[700px] md:h-[500px] relative w-full flex justify-center items-center flex-col px-5"
      >
        <div className=" mt-8 w-full rounded-xl md:max-w-[640px] py-5 px-3 md:px-0 bg-[#0000004D] flex-col items-center justify-center flex text-center">
          <h1 className=" font-LatoBold  font-extrabold text-3xl md:text-[40px] text-white">
            LETS PLAN YOUR TRIP
          </h1>
          <p className=" mt-3 text-base md:text-xl font-Roboto font-normal text-white">
            Get everything you need for your trip on Flygocom.
          </p>
          <button className=" mt-3 block py-3 px-6 bg-[#1A8AF3] rounded-[5px] font-Roboto font-bold text-sm md:text-base text-white">
            See more
          </button>
        </div>
        <div className=" mt-7 bg-[#0000004D] rounded-xl p-3 flex items-center space-x-[6px]">
          <button className=" w-2 h-2 rounded-full bg-[#437EF7]"></button>
          <button className=" w-2 h-2 rounded-full bg-[#fff]"></button>
          <button className=" w-2 h-2 rounded-full bg-[#fff]"></button>
        </div>

        <div class="w-full md:px-12 px-5 absolute top-[650px]  md:absolute md:top-[425px] md:left-[50%] md:translate-x-[-50%]">
          {/* child component goes here  */}
          <div className=" w-full bg-white min-h-[257px] rounded-xl bg border border-[#EAEBF0] relative p-4 md:mt-0">
            <img src={comvex} className=" absolute right-0 z-10 top-0" alt="" />
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 z-20">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  className={`py-3 md:px-12 px-5 rounded-[5px] flex items-center justify-center z-20 space-x-[10px] ${
                    activeButton === button.name
                      ? "bg-gradient-to-b from-[#31C2FF] to-[#1989F2]"
                      : "bg-[#F5F5F5]"
                  }`}
                  onClick={() => handleClick(button.name)}
                >
                  <img
                    src={
                      activeButton === button.name
                        ? button.activeImg
                        : button.img
                    }
                    alt=""
                  />
                  <p
                    className={`font-Roboto font-medium text-base ${
                      activeButton === button.name
                        ? "text-[#FBFDFFFE]"
                        : "text-[#11305A]"
                    }`}
                  >
                    {button.name}
                  </p>
                </button>
              ))}
            </div>

            <div className=" mt-6 flex flex-col justify-center items-center w-full h-full z-20">
              {/* Render the component based on the active button */}
              {buttons.map((button, index) => {
                if (button.name === activeButton) {
                  return button.comp;
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
