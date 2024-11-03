import { useState } from "react";
import africa from "./assets/africa.svg";

const Destination = () => {
  const destination = [
    {
      about:
        "Rich in cultural heritage Australia stands out as  a choice destination for you.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: africa,
      continent: "Australia",
    },
    {
      about:
        "Rich in cultural heritage Australia stands out as  a choice destination for you.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: africa,
      continent: "Australia",
    },
    {
      about:
        "Rich in cultural heritage Australia stands out as  a choice destination for you.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: africa,
      continent: "Australia",
    },
    {
      about:
        "Rich in cultural heritage Australia stands out as  a choice destination for you.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: africa,
      continent: "Australia",
    },
    {
      about:
        "Rich in cultural heritage Africa stands out as  a choice destination for you.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: africa,
      continent: "Africa",
    },
    {
      about:
        "Rich in cultural heritage Africa stands out as  a choice destination for you.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: africa,
      continent: "Africa",
    },
    {
      about:
        "Rich in cultural heritage Africa stands out as  a choice destination for you.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: africa,
      continent: "Africa",
    },
    {
      about:
        "Rich in cultural heritage Africa stands out as  a choice destination for you.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: africa,
      continent: "Africa",
    },
    {
      about:
        "Rich in cultural heritage Asia stands out as  a choice destination for you.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: africa,
      continent: "Asia",
    },
    {
      about:
        "Rich in cultural heritage Asia stands out as  a choice destination for you.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: africa,
      continent: "Asia",
    },
    {
      about:
        "Rich in cultural heritage Asia stands out as  a choice destination for you.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: africa,
      continent: "Asia",
    },
    {
      about:
        "Rich in cultural heritage Asia stands out as  a choice destination for you.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: africa,
      continent: "Asia",
    },
    {
      about:
        "Rich in cultural heritage Europe stands out as  a choice destination for you.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: africa,
      continent: "Europe",
    },
    {
      about:
        "Rich in cultural heritage Europe stands out as  a choice destination for you.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: africa,
      continent: "Europe",
    },
    {
      about:
        "Rich in cultural heritage Europe stands out as  a choice destination for you.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: africa,
      continent: "Europe",
    },
    {
      about:
        "Rich in cultural heritage Europe stands out as  a choice destination for you.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: africa,
      continent: "Europe",
    },
  ];

  const [selectedContinent, setSelectedContinent] = useState("Australia");

  // Extract unique continents for filtering
  const continents = [...new Set(destination.map((item) => item.continent))];

  // Filter destinations based on selected continent
  const filteredDestinations = selectedContinent
    ? destination.filter((item) => item.continent === selectedContinent)
    : destination;

  return (
    <>
      <div className=" w-full py-16 md:px-12 px-5">
        <p className=" text-center text-[#11305A] font-PoppinsBold font-bold text-3xl md:text-[40px]">
          Top Destinations
        </p>
        <div className="flex flex-row justify-center items-center space-x-3 md:space-x-12 lg:space-x-24 mt-12">
          {continents.map((continent) => (
            <button
              key={continent}
              onClick={() => setSelectedContinent(continent)}
              className={`font-LatoBold font-bold text-xl ${
                selectedContinent === continent
                  ? "text-[#F36F1A]"
                  : "text-[#11305A]"
              }`}
            >
              {continent}
            </button>
          ))}
        </div>

        <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {filteredDestinations.map((item, index) => (
            <div
              key={index}
              className={`flex justify-between items-center ${
                index === 1 || index === 3
                  ? " flex-col md:flex-row-reverse"
                  : " flex-col md:flex-row"
              }`}
            >
              <p className=" w-full md:w-[49%] text-[#11305A] font-Roboto font-normal text-sm py-4 md:py-7">
                {item.about}
              </p>
              <div
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                }}
                className=" w-full h-[200px] md:w-[49%] md:h-full"
              ></div>
            </div>
          ))}
        </div>

        <button className=" mx-auto block mt-8 border border-[#0C77DC] text-[#0C77DC] font-LatoRegular font-semibold text-lg rounded-[8px] w-[200px] py-4">
          Book Tour
        </button>
      </div>
    </>
  );
};

export default Destination;
