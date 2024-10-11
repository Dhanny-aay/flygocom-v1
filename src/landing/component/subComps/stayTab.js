import calendar from "./assets/calendar-month-outline.svg";
import human from "./assets/human-male-female.svg";
import { useState } from "react";

const StayTab = () => {
  const [stayType, setStayType] = useState("Hotels");

  const handleStayTypeChange = (event) => {
    setStayType(event.target.value);
  };

  return (
    <>
      <div className=" w-full flex items-center space-x-4">
        <label className=" flex flex-col font-Roboto font-normal text-[#11305A] text-sm">
          Choose Trip Type
          <span className=" mt-2 border border-[#D7D7D7] px-4 py-[14px] w-[150px]  rounded-[5px]">
            <select
              className=" text-[#000000B2] font-Roboto font-normal text-sm w-full"
              value={stayType}
              onChange={handleStayTypeChange}
            >
              <option value="Hotels">Hotels</option>
              <option value="shortlets">Shortlets</option>
            </select>
          </span>
        </label>
        <label className=" flex flex-col font-Roboto font-normal text-[#11305A] text-sm">
          Guest
          <span className=" mt-2 border border-[#D7D7D7] px-4 py-[14px] w-[150px]  rounded-[5px]">
            <select className=" text-[#000000B2] font-Roboto font-normal text-sm w-full">
              <option value="">1 Guest</option>
              <option value="">2 Guest</option>
            </select>
          </span>
        </label>
      </div>

      <div className=" w-full grid grid-cols-4 gap-3 items-center mt-5">
        <span className=" w-full relative">
          <input
            type="text"
            placeholder="Location"
            className=" w-full  p-3 text-sm font-semibold font-Lato placeholder:text-xs text-[#d0d5dd] bg-[#fff] border border-[#D7D7D7] z-20 rounded-[5px]"
            name=""
            id=""
          />
          <img src={calendar} className=" right-3 top-[12px] absolute" alt="" />
        </span>

        <span className=" w-full relative">
          <input
            type="text"
            placeholder="Check in Date"
            className=" w-full p-3 text-sm font-semibold font-Lato placeholder:text-xs text-[#d0d5dd] bg-[#fff] border border-[#D7D7D7] z-20 rounded-[5px]"
            name=""
            id=""
          />
          <img src={calendar} className=" right-3 top-[12px] absolute" alt="" />
        </span>

        <span className=" w-full relative">
          <input
            type="text"
            placeholder="Check Out Date"
            className=" w-full p-3 text-sm font-semibold font-Lato placeholder:text-xs text-[#d0d5dd] bg-[#fff] border border-[#D7D7D7] z-20 rounded-[5px]"
            name=""
            id=""
          />
          <img src={calendar} className=" right-3 top-[12px] absolute" alt="" />
        </span>

        <button className=" py-4 px-5 rounded bg-gradient-to-b from-[#31C2FF] to-[#1989F2] shadow-sm font-Roboto font-bold text-sm text-white">
          Search
        </button>
      </div>
    </>
  );
};

export default StayTab;
