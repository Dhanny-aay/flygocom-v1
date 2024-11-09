import takeoff from "./assets/takeoff.svg";
import land from "./assets/land.svg";
import plus from "./assets/plus.svg";
import calendar from "./assets/calendar-month-outline.svg";
import human from "./assets/human-male-female.svg";
import { useState } from "react";

const MultiCityTab = () => {
  const [flightCount, setFlightCount] = useState(2); // State to track the number of flights, initialized with 1 flight by default

  const addFlight = () => {
    setFlightCount((prevCount) => prevCount + 1); // Increment flight count when the "Flight" button is clicked
  };

  // Function to render flight input fields
  const renderFlights = () => {
    let flights = [];
    for (let i = 0; i < flightCount; i++) {
      flights.push(
        <div
          key={i}
          className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 z-20 items-center mt-5"
        >
          <span className=" w-full relative">
            <input
              type="text"
              placeholder="From"
              className="w-full p-3 text-sm font-semibold font-LatoRegular placeholder:text-xs text-[#d0d5dd] bg-[#fff] border border-[#D7D7D7] rounded-lg"
              name=""
              id=""
            />
            <img src={takeoff} className="right-3 top-[12px] absolute" alt="" />
          </span>

          <span className=" w-full relative">
            <input
              type="text"
              placeholder="Destination"
              className="w-full p-3 text-sm font-semibold font-LatoRegular placeholder:text-xs text-[#d0d5dd] bg-[#fff] border border-[#D7D7D7] rounded-lg"
              name=""
              id=""
            />
            <img src={land} className="right-3 top-[12px] absolute" alt="" />
          </span>

          <span className=" w-full relative">
            <input
              type="text"
              placeholder="Date"
              className="w-full p-3 text-sm font-semibold font-LatoRegular placeholder:text-xs text-[#d0d5dd] bg-[#fff] border border-[#D7D7D7] rounded-lg"
              name=""
              id=""
            />
            <img
              src={calendar}
              className="right-3 top-[12px] absolute"
              alt=""
            />
          </span>

          <button className="py-3 px-5 rounded bg-gradient-to-b from-[#31C2FF] to-[#1989F2] shadow-sm font-Roboto font-bold text-sm text-white">
            Search
          </button>
        </div>
      );
    }
    return flights;
  };

  return (
    <>
      {/* Render flight input fields */}
      {renderFlights()}

      {/* Button to add more flights */}
      {/* <button
        className="py-3 mt-5 px-8 rounded bg-gradient-to-b from-[#31C2FF] to-[#1989F2] shadow-sm font-Roboto font-bold text-sm text-white flex items-center space-x-3"
        onClick={addFlight}
      >
        <img src={plus} alt="" />
        <p className="">Add Flight</p>
      </button> */}
    </>
  );
};

export default MultiCityTab;
