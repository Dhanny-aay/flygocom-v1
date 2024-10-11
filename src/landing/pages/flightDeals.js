import Navbar from "../component/navbar";
import dealBg from "./assets/dealBg.svg";
import down from "./assets/arrow-narrow-down.svg";
import singaImg from "./assets/singaImg.svg";
import loca from "./assets/loca.svg";
import globe from "./assets/globe.svg";
import wallet from "./assets/wallet.svg";
import headset from "./assets/headset.svg";
import Testimonial from "../component/testimonial";
import Footer from "../component/footer";

const FlightDeals = () => {
  const deals = [
    {
      name: "Singapore Cruise",
      place: "Singapore",
      price: "$7,000.00",
      img: singaImg,
    },
    {
      name: "Singapore Cruise",
      place: "Singapore",
      price: "$7,000.00",
      img: singaImg,
    },
    {
      name: "Singapore Cruise",
      place: "Singapore",
      price: "$7,000.00",
      img: singaImg,
    },
    {
      name: "Singapore Cruise",
      place: "Singapore",
      price: "$7,000.00",
      img: singaImg,
    },
    {
      name: "Singapore Cruise",
      place: "Singapore",
      price: "$7,000.00",
      img: singaImg,
    },
    {
      name: "Singapore Cruise",
      place: "Singapore",
      price: "$7,000.00",
      img: singaImg,
    },
    {
      name: "Singapore Cruise",
      place: "Singapore",
      price: "$7,000.00",
      img: singaImg,
    },
    {
      name: "Singapore Cruise",
      place: "Singapore",
      price: "$7,000.00",
      img: singaImg,
    },
    {
      name: "Singapore Cruise",
      place: "Singapore",
      price: "$7,000.00",
      img: singaImg,
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
      <Navbar />
      <div
        style={{
          backgroundImage: `url(${dealBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className=" h-[500px] relative w-full flex justify-center items-center flex-col"
      >
        <div className=" mt-8 w-full rounded-xl max-w-[640px] py-5 bg-[#0000004D] flex-col items-center justify-center flex text-center">
          <h1 className=" font-LatoBold  font-extrabold text-[40px] text-white">
            Memorable Travel Experience
          </h1>
          <p className=" mt-3 text-xl font-Roboto font-normal text-white md:max-w-[500px]">
            Find amazing Vacation & Holiday packages from all over the world.
          </p>
          <button className=" mt-3 flex items-center space-x-3 py-3 px-6 bg-[#1A8AF3] rounded-[5px] font-Roboto font-bold text-base text-white">
            <p>Explore our Packages</p>
            <img src={down} alt="" />
          </button>
        </div>
      </div>

      {/* discover weekly */}
      <div className="w-full py-16 px-12 flex flex-col items-center">
        <p className=" font-LatoBold font-bold text-black text-center text-[28px]">
          Discover Weekly Deals on Travel Packages
        </p>
        <p className=" font-Roboto font-normal text-base text-black mt-2">
          Enjoy discounted trips and special offers
        </p>
        <div className=" w-full grid-cols-3 grid mt-8 gap-6">
          {deals.map((item, index) => (
            <div
              key={index}
              className=" w-full border border-[#D9D9D9] rounded-[15px]"
            >
              <div
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className=" w-full h-[230px] rounded-t-[15px]"
              ></div>
              <div className=" w-full p-6">
                <p className=" font-LatoBold font-bold text-2xl text-black">
                  {item.name}
                </p>
                <span className=" flex items-center space-x-3 mt-3">
                  <img src={loca} alt="" />
                  <p className=" font-Roboto font-normal text-base text-black">
                    {item.place}
                  </p>
                </span>

                <div className=" flex items-center justify-between mt-3">
                  <p className=" text-black font-LatoBold font-bold text-[28px]">
                    {item.price}
                  </p>
                  <button className="bg-gradient-to-b from-[#37B3FF] to-[#0081FE] py-[11px] px-7 rounded-[10px] font-Roboto font-semibold text-xl text-white mt-3">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className=" mx-auto block mt-8 border border-[#0C77DC] text-[#0C77DC] font-LatoRegular font-semibold text-lg rounded-[8px] w-[200px] py-4">
          View more
        </button>
      </div>

      {/* why choose us */}
      <div className="w-full py-16 px-12 flex flex-col items-center">
        <p className=" font-LatoBold font-bold text-black text-center text-[28px]">
          Why Choose Us
        </p>
        <p className=" font-Roboto font-normal text-base text-black mt-2">
          Our legacy of excellence is a key reason why people choose us, but
          here are a few more.
        </p>
        <div className=" w-full mt-8 grid grid-cols-3 gap-6">
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

export default FlightDeals;
