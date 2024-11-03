import calendar from "./assets/calendar-month-outline.svg";
import bus from "./assets/bus.svg";
import { useState } from "react";
import busStop from "./assets/bus-stop.svg";
import seat from "./assets/seat-passenger.svg";
import human from "./assets/human-male-female.svg";

const BusTab = () => {
  const [tripType, setTripType] = useState("bookBus");

  const handleTripTypeChange = (event) => {
    setTripType(event.target.value);
  };

  return (
    <div className=" z-20">
      <div className=" w-full flex items-center space-x-4 ">
        <label className=" flex flex-col font-Roboto font-normal text-[#11305A] text-sm">
          Choose Trip Type
          <span className=" mt-2 border border-[#D7D7D7] px-4 py-[14px] w-[150px]  rounded-[5px]">
            <select
              className=" text-[#000000B2] font-Roboto font-normal text-sm w-full"
              value={tripType}
              onChange={handleTripTypeChange}
            >
              <option value="bookBus">Book Bus</option>
              <option value="charterBus">Charter Bus</option>
            </select>
          </span>
        </label>
        <label className=" flex flex-col font-Roboto font-normal text-[#11305A] text-sm">
          Passenger
          <span className=" mt-2 border border-[#D7D7D7] px-4 py-[14px] w-[150px]  rounded-[5px]">
            <select className=" text-[#000000B2] font-Roboto font-normal text-sm w-full">
              <option value="bookBus">1 Passenger</option>
              <option value="charterBus">2 Passenger</option>
            </select>
          </span>
        </label>
      </div>

      <div
        className={`w-full grid gap-3 grid-cols-1 mt-5 z-20 items-center ${
          tripType === "charterBus" ? "md:grid-cols-5" : "md:grid-cols-4"
        }`}
      >
        <span className=" w-full relative">
          <input
            type="text"
            placeholder="From"
            className=" w-full p-3 text-sm font-semibold font-LatoRegular placeholder:text-xs text-[#d0d5dd] bg-[#fff] border border-[#D7D7D7] z-20 rounded-[5px]"
            name=""
            id=""
          />
          <img src={bus} className=" right-3 top-[12px] absolute" alt="" />
        </span>

        <span className=" w-full relative">
          <input
            type="text"
            placeholder="To"
            className=" w-full p-3 text-sm font-semibold font-LatoRegular placeholder:text-xs text-[#d0d5dd] bg-[#fff] border border-[#D7D7D7] z-20 rounded-[5px]"
            name=""
            id=""
          />
          <img src={busStop} className=" right-3 top-[12px] absolute" alt="" />
        </span>

        <span className=" w-full relative">
          <input
            type="text"
            placeholder="Date"
            className=" w-full p-3 text-sm font-semibold font-LatoRegular placeholder:text-xs text-[#d0d5dd] bg-[#fff] border border-[#D7D7D7] z-20 rounded-[5px]"
            name=""
            id=""
          />
          <img src={calendar} className=" right-3 top-[12px] absolute" alt="" />
        </span>

        {/* Inputs for the charterBus type */}
        {tripType === "charterBus" && (
          <span className=" w-full relative">
            <input
              type="text"
              placeholder="Date"
              className=" w-full p-3 text-sm font-semibold font-LatoRegular placeholder:text-xs text-[#d0d5dd] bg-[#fff] border border-[#D7D7D7] z-20 rounded-[5px]"
              name=""
              id=""
            />
            <img
              src={calendar}
              className="right-3 top-[12px] absolute"
              alt=""
            />
          </span>
        )}

        {/* {tripType === "charterBus" && (
          <span className=" w-full relative">
            <input
              type="text"
              placeholder="Passenger"
              className=" w-full p-3 text-sm font-semibold font-LatoRegular placeholder:text-xs text-[#d0d5dd] bg-[#fff] border border-[#D7D7D7] z-20 rounded-[5px]"
              name=""
              id=""
            />
            <img
              src={human}
              className=" right-3 top-[12px] absolute"
              alt=""
            />
          </span>
        )} */}

        {/* {tripType === "bookBus" && (
          <span className=" w-full relative">
            <input
              type="text"
              placeholder="Seats"
              className=" w-full p-3 text-sm font-semibold font-LatoRegular placeholder:text-xs text-[#d0d5dd] bg-[#fff] border border-[#D7D7D7] z-20 rounded-[5px]"
              name=""
              id=""
            />
            <img src={seat} className=" right-3 top-[12px] absolute" alt="" />
          </span>
        )} */}

        <button className=" py-4 px-5 rounded bg-gradient-to-b from-[#31C2FF] to-[#1989F2] shadow-sm font-Roboto font-bold text-sm text-white">
          Search
        </button>
      </div>
    </div>
  );
};

export default BusTab;
