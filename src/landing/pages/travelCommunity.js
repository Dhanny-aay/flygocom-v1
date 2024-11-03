import Navbar from "../component/navbar";
import pikaso from "./assets/pikaso.svg";
import down from "./assets/arrow-narrow-down.svg";
import commu from "./assets/commu.svg";
import parti from "./assets/parti.svg";
import calend from "./assets/calend.svg";
import Testimonial from "../component/testimonial";
import Footer from "../component/footer";
import globe from "./assets/globe.svg";
import wallet from "./assets/wallet.svg";
import headset from "./assets/headset.svg";
import { useState } from "react";
import CreateGroup from "./subComp/createGroup";
import JoinGroup from "./subComp/joinGroup";

const TravelCommunity = () => {
  const [createGroup, setCreateGroup] = useState(false);
  const [joinGroup, setJoinGroup] = useState(false);
  const comms = [
    {
      name: "Blue Lake Beach",
      desc: "Enjoy the sizzling atmosphere of the maldives this summer",
      parti: "20 Participants",
      calend: "August 20th, 2024",
      gender: "All Gender",
      price: "₦350,000",
      img: commu,
    },
    {
      name: "Blue Lake Beach",
      desc: "Enjoy the sizzling atmosphere of the maldives this summer",
      parti: "20 Participants",
      calend: "August 20th, 2024",
      gender: "All Gender",
      price: "₦350,000",
      img: commu,
    },
    {
      name: "Blue Lake Beach",
      desc: "Enjoy the sizzling atmosphere of the maldives this summer",
      parti: "20 Participants",
      calend: "August 20th, 2024",
      gender: "All Gender",
      price: "₦350,000",
      img: commu,
    },
    {
      name: "Blue Lake Beach",
      desc: "Enjoy the sizzling atmosphere of the maldives this summer",
      parti: "20 Participants",
      calend: "August 20th, 2024",
      gender: "All Gender",
      price: "₦350,000",
      img: commu,
    },
  ];

  const choice = [
    {
      name: "Over 200 Destinations",
      desc: "Explore the world with ease and convenience, knowing that every aspect of your journey is covered.",
      img: globe,
    },
    {
      name: "Best Price",
      desc: "We ensure you get the most value for your money. Travel more, spend less, and enjoy the best deals with FlyGoCom.",
      img: wallet,
    },
    {
      name: "Top-notch support",
      desc: "Our dedicated team is available around the clock to assist you with any questions or issues.",
      img: headset,
    },
  ];
  return (
    <>
      {createGroup && <CreateGroup setCreateGroup={setCreateGroup} />}
      {joinGroup && <JoinGroup setJoinGroup={setJoinGroup} />}
      <Navbar />
      <div
        style={{
          backgroundImage: `url(${pikaso})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className=" h-[600px] md:h-[500px] relative w-full flex justify-center items-center flex-col px-5"
      >
        <div className=" mt-8 w-full rounded-xl max-w-[640px]  py-5 px-3 md:px-0 bg-[#0000004D] flex-col items-center justify-center flex text-center">
          <h1 className=" font-LatoBold md:leading-[48px] font-extrabold text-3xl md:text-[40px] text-white">
            Welcome to the Flygocom Travel Community
          </h1>
          <p className=" mt-3 text-base md:text-xl font-Roboto font-normal text-white md:max-w-[500px]">
            Explore the World Together—Travel with Groups or Create Your Own
            Adventures for Others to Join
          </p>
          <div className=" flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3">
            <button className=" w-full md:w-auto mt-3 flex items-center space-x-3 py-3 px-6 bg-[#1A8AF3] rounded-[12px] font-Roboto font-bold text-base text-white">
              <p>Explore Communities</p>
              <img src={down} alt="" />
            </button>
            <button
              onClick={() => {
                setCreateGroup(true);
              }}
              className=" w-full md:w-auto mt-3 flex items-center py-3 px-6 bg-[#FFFFFF] rounded-[12px] font-Roboto font-bold text-base text-[#1A8AF3]"
            >
              <p>Create New Travel group</p>
            </button>
          </div>
        </div>
      </div>
      {/* Discover Weekly Deals*/}
      <div className="w-full py-16 md:px-12 px-5 flex flex-col items-center">
        <p className=" font-LatoBold font-bold text-black text-center text-2xl md:text-[28px]">
          Discover Weekly Deals on Travel Packages
        </p>
        <p className=" font-Roboto font-normal text-sm md:text-base text-black mt-2">
          Enjoy discounted trips and special offers
        </p>

        <div className=" w-full mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {comms.map((item, index) => (
            <div
              key={index}
              className=" bg-[#f5f5f5] flex flex-col md:flex-row gap-3 items-start justify-between w-full p-3"
            >
              <div
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className=" w-full md:w-1/2 h-[200px]"
              ></div>
              <div className=" w-full md:w-1/2">
                <p className=" text-[#11305A] font-LatoBold font-bold text-lg">
                  {item.name}
                </p>
                <p className=" mt-3 text-[#11305A] font-Roboto text-sm font-normal">
                  {item.desc}
                </p>
                <div className=" flex items-center  w-full justify-between mt-3">
                  <span className=" flex items-center space-x-1">
                    <img src={parti} alt="" />
                    <p className=" text-[#11305A] font-LatoBold font-bold text-xs  mt-1">
                      {item.parti}
                    </p>
                  </span>
                  <span className=" flex items-center space-x-1">
                    <img src={calend} alt="" />
                    <p className=" text-[#11305A] font-LatoBold font-bold text-xs  mt-1">
                      {item.calend}
                    </p>
                  </span>
                </div>
                <div className=" flex items-center  w-full justify-between mt-3">
                  <p className=" text-[#11305A] font-LatoBold font-bold text-xl">
                    {item.price}{" "}
                    <span className=" font-medium text-xs">/Person</span>
                  </p>
                  <button className=" text-[#37B3FF] border-[#37B3FF] border font-LatoBold font-semibold text-xs py-2 px-4 rounded-[8px]">
                    {item.gender}
                  </button>
                </div>
                <button
                  onClick={() => {
                    setJoinGroup(true);
                  }}
                  className=" w-full py-[10px] bg-[#37B3FF] rounded-[8px] mt-3 font-Roboto font-bold text-sm text-white"
                >
                  Join Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className=" mx-auto block mt-8 border border-[#0C77DC] text-[#0C77DC] font-LatoRegular font-semibold text-lg rounded-[8px] w-[200px] py-4">
          View more
        </button>
      </div>

      {/* why choose us */}
      <div className="w-full py-16 md:px-12 px-5 flex flex-col items-center">
        <p className=" font-LatoBold font-bold text-black text-center text-[28px]">
          Why Choose Us
        </p>
        <p className=" font-Roboto font-normal text-base text-black mt-2 text-center">
          Our legacy of excellence is a key reason why people choose us, but
          here are a few more.
        </p>
        <div className=" w-full mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {choice.map((item, index) => (
            <div
              key={index}
              className=" border border-[#EAEBF0] rounded-[20px] p-8"
            >
              <img src={item.img} alt="" />
              <p className=" mt-4 text-[#000000] font-LatoBold font-bold text-2xl">
                {item.name}
              </p>
              <p className=" mt-2 font-Roboto font-normal text-base text-[#000000B2]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* testimonials */}
      <Testimonial />
      <Footer />
    </>
  );
};

export default TravelCommunity;
