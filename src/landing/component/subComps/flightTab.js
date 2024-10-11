import takeoff from "./assets/takeoff.svg";
import land from "./assets/land.svg";
import calendar from "./assets/calendar-month-outline.svg";
import human from "./assets/human-male-female.svg";
import drop from "./assets/drop.svg";
import { useState } from "react";
import MultiCityTab from "./multiCityTab";

const FlightTab = () => {
  const [tripType, setTripType] = useState("oneWay");
  const [selectPassenger, setSelectPassenger] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [totalPassengers, setTotalPassengers] = useState(1);

  const handleTripTypeChange = (event) => {
    setTripType(event.target.value);
  };

  //   toogle select passenger state
  const toggleSelectPassenger = () => {
    setSelectPassenger((prevSelectPassenger) => !prevSelectPassenger);
  };

  //function to increase or decrease passengers
  const incrementPassenger = (type) => {
    if (type === "adults") setAdults(adults + 1);
    else if (type === "children") setChildren(children + 1);
    else if (type === "infants") setInfants(infants + 1);
  };

  const decrementPassenger = (type) => {
    if (type === "adults" && adults > 1) setAdults(adults - 1);
    else if (type === "children" && children > 0) setChildren(children - 1);
    else if (type === "infants" && infants > 0) setInfants(infants - 1);
  };

  const handleDone = () => {
    const newTotalPassengers = adults + children + infants;
    setTotalPassengers(newTotalPassengers);
    setSelectPassenger(false);
  };

  return (
    <>
      <div className=" w-full flex items-center space-x-6">
        <label className=" flex flex-col font-Roboto font-normal text-[#11305A] text-sm">
          Choose Trip Type
          <span className=" mt-2 border border-[#D7D7D7] px-4 py-[14px] w-[150px]  rounded-[5px]">
            <select
              className=" text-[#000000B2] font-Roboto font-normal text-sm w-full"
              value={tripType}
              onChange={handleTripTypeChange}
            >
              <option value="oneWay">One-way</option>
              <option value="roundTrip">Round Trip</option>
              <option value="multiCity">Multi-City</option>
            </select>
          </span>
        </label>

        <label className=" flex flex-col font-Roboto font-normal text-[#11305A] text-sm">
          Class
          <span className=" mt-2 border border-[#D7D7D7] px-4 py-[14px] w-[150px]  rounded-[5px]">
            <select className="text-[#000000B2] font-Roboto font-normal text-sm w-ful">
              <option value="Economy">Economy</option>
              <option value="firstclass">First Class</option>
              <option value="bizclass">Buisness Class</option>
            </select>
          </span>
        </label>

        <div className=" relative">
          {/* Button for passengers */}
          <label className=" flex flex-col font-Roboto font-normal text-[#11305A] text-sm">
            Passenger
            <div
              onClick={toggleSelectPassenger}
              className=" px-4 text-center w-[150px] mt-2 flex items-center justify-between py-[14px] rounded-[5px] bg-white border border-[#D7D7D7] text-[#000000B2] font-normal text-base"
            >
              {/* Show total only if selectPassenger is true */}
              <p>{totalPassengers}</p>
              <img src={drop} alt="" />
            </div>
          </label>

          {/* Passenger dropdown */}
          {selectPassenger && (
            <div className=" absolute top-10 left-[50px] z-50 w-[250px] p-6 rounded-2xl bg-[#f8f8f8] space-y-6 flex flex-col">
              {/* Adults */}
              <div className="flex flex-row items-center justify-between">
                <span>
                  <p className="text-sm text-black font-semibold font-Lato">
                    Adults
                  </p>
                </span>
                <span className="flex items-center flex-row space-x-4">
                  <button
                    onClick={() => decrementPassenger("adults")}
                    className="w-5 h-5 rounded-[50%] flex justify-center items-center bg-[#082f4970] font-Lato text-white"
                  >
                    -
                  </button>
                  <p>{adults}</p>
                  <button
                    onClick={() => incrementPassenger("adults")}
                    className="w-5 h-5 rounded-[50%] flex justify-center items-center bg-[#31C2FF] font-Lato text-white"
                  >
                    +
                  </button>
                </span>
              </div>

              {/* Children */}
              <div className="flex flex-row items-center justify-between">
                <span>
                  <p className="text-sm text-black font-semibold font-Lato">
                    Children
                  </p>
                  <p className="font-Roboto text-xs text-[082F49B2]">
                    2 - 11 yrs
                  </p>
                </span>
                <span className="flex items-center flex-row space-x-4">
                  <button
                    onClick={() => decrementPassenger("children")}
                    className="w-5 h-5 rounded-[50%] flex justify-center items-center bg-[#082f4970] font-Lato text-white"
                  >
                    -
                  </button>
                  <p>{children}</p>
                  <button
                    onClick={() => incrementPassenger("children")}
                    className="w-5 h-5 rounded-[50%] flex justify-center items-center bg-[#31C2FF] font-Lato text-white"
                  >
                    +
                  </button>
                </span>
              </div>

              {/* Infants */}
              <div className="flex flex-row items-center justify-between">
                <span>
                  <p className="text-sm text-black font-semibold font-Lato">
                    Infants
                  </p>
                  <p className="font-Roboto text-xs text-[082F49B2]">
                    under 2 yrs
                  </p>
                </span>
                <span className="flex items-center flex-row space-x-4">
                  <button
                    onClick={() => decrementPassenger("infants")}
                    className="w-5 h-5 rounded-[50%] flex justify-center items-center bg-[#082f4970] font-Lato text-white"
                  >
                    -
                  </button>
                  <p>{infants}</p>
                  <button
                    onClick={() => incrementPassenger("infants")}
                    className="w-5 h-5 rounded-[50%] flex justify-center items-center bg-[#31C2FF] font-Lato text-white"
                  >
                    +
                  </button>
                </span>
              </div>

              <span className=" w-full flex justify-between items-center">
                <button
                  onClick={toggleSelectPassenger}
                  className=" py-2 w-[49%] border border-[#31C2FF] text-[#35C8FF] font-semibold text-sm font-Roboto rounded-lg text-center"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDone}
                  className="py-2 w-[49%] rounded-lg bg-gradient-to-b from-[#31C2FF] to-[#1989F2] shadow-sm font-Roboto font-bold text-sm text-white"
                >
                  Done
                </button>
              </span>
            </div>
          )}
        </div>
      </div>
      {tripType === "multiCity" && <MultiCityTab />}
      {/* Conditionally render MultiCityTab component */}
      {/* Render inputs only if tripType is not 'multiCity' */}
      {tripType !== "multiCity" && (
        <div
          className={`w-full grid gap-3 mt-5 z-20 items-center ${
            tripType === "roundTrip" ? "grid-cols-5" : "grid-cols-4"
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
            <img
              src={takeoff}
              className=" right-3 top-[12px] absolute"
              alt=""
            />
          </span>

          <span className=" w-full relative">
            <input
              type="text"
              placeholder="Destination"
              className=" w-full p-3 text-sm font-semibold font-LatoRegular placeholder:text-xs text-[#d0d5dd] bg-[#fff] border border-[#D7D7D7] z-20 rounded-[5px]"
              name=""
              id=""
            />
            <img src={land} className=" right-3 top-[12px] absolute" alt="" />
          </span>

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
              className=" right-3 top-[12px] absolute"
              alt=""
            />
          </span>

          {/* Inputs for the round trip type */}
          {tripType === "roundTrip" && (
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

          <button className=" py-4 px-5 rounded bg-gradient-to-b from-[#31C2FF] to-[#1989F2] shadow-sm font-Roboto font-semibold text-base text-white">
            Search
          </button>
        </div>
      )}
    </>
  );
};

export default FlightTab;
