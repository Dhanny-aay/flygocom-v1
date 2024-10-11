import Deals from "../component/deals";
import Hero from "../component/hero";
import Navbar from "../component/navbar";
import coupon from "./assets/coupon with gift box.svg";
import serve1 from "./assets/serve1.svg";
import serve2 from "./assets/serve2.svg";
import serve3 from "./assets/serve3.svg";
import serve4 from "./assets/serve4.svg";
import serve5 from "./assets/serve5.svg";
import serve6 from "./assets/serve6.svg";
import serve7 from "./assets/serve7.svg";
import serve8 from "./assets/serve8.svg";
import serve9 from "./assets/serve9.svg";
import bus from "./assets/bus.jpg";
import lag from "./assets/lag.svg";
import lag1 from "./assets/lag1.svg";
import lag2 from "./assets/lag2.svg";
import paintball from "./assets/paintball.svg";
import Destination from "../component/destination";
import Testimonial from "../component/testimonial";
import Footer from "../component/footer";

const Landing = () => {
  const service = [
    { name: "Flights", img: serve1 },
    { name: "Buses", img: serve2 },
    { name: "Hotels/Shortlets", img: serve3 },
    { name: "Visa", img: serve4 },
    { name: "Rides", img: serve5 },
    { name: "Logistics", img: serve6 },
    { name: "Tourism", img: serve7 },
    { name: "Aircraft Charter", img: serve8 },
    { name: "Trains", img: serve9 },
  ];

  return (
    <>
      <Navbar />
      <Hero />
      {/* Unlock Rewards */}
      <div className=" w-full py-16 px-12 mt-44 flex flex-col items-center">
        <div className=" flex items-center space-x-6">
          <img src={coupon} alt="coupon" className="" />
          <span className=" flex flex-col">
            <h2 className=" text-[#11305A] font-PoppinsBold font-bold text-[28px]">
              Unlock Rewards
            </h2>
            <p className=" font-LatoRegular font-normal text-base text-[#11305A]">
              Sign up to redeem Flygocom points on all our services
            </p>
          </span>
        </div>

        <div className=" w-full scrollbar-hide overflow-x-auto">
          <div className=" w-full flex items-start mt-8 mb-8 space-x-6">
            {service.map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundImage: `url(${item.img})`,

                  backgroundSize: "cover",
                }}
                className=" bg-white h-[260px] rounded-[10px] shadow-sm"
              >
                <div className=" w-[80px] md:w-[230px] h-full relative">
                  <div className=" bottom-3 px-3 absolute w-full">
                    <button className=" w-full bg-[#01215E] rounded-[10px] py-3 font-Roboto font-normal text-base text-[#FFFFFF]">
                      {item.name}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Deals />
      {/* FREE POS & Tracking Solutions */}
      <div className=" w-full py-16 px-12">
        <div className=" w-full flex flex-row bg-[#f1f1f1] rounded-[16px] h-[380px]">
          <div
            style={{
              backgroundImage: `url(${bus})`,
              backgroundSize: "cover",
            }}
            className=" w-[50%] h-full rounded-l-[16px]"
          ></div>
          <div className=" w-[50%] h-full flex flex-col items-center justify-center">
            <p className=" font-PoppinsBold font-bold text-[#11305A] text-[28px]">
              Transform your Bus Services with
            </p>
            <button className=" bg-gradient-to-b from-[#37B3FF] to-[#0081FE] py-[10px] px-5 rounded-[10px] font-PoppinsBold font-bold text-2xl text-white mt-3">
              FREE POS & Tracking Solutions
            </button>
            <p className=" text-center mt-5 text-[#082F49B2] font-LatoRegular font-semibold text-lg">
              Enjoy effortless ticketing and real-time monitoring on
              <span className="md:block">
                all your trips. Terms and conditions apply!
              </span>
            </p>
            <button className=" py-5 px-6 bg-[#F36F1A] rounded-[20px] mt-7 text-center font-Roboto font-semibold text-base text-white">
              Partner with us
            </button>
          </div>
        </div>
      </div>
      {/* Let’s Curate Your Experience */}
      <div className="w-full py-16 px-12">
        <p className=" text-center text-[#11305A] font-PoppinsBold font-bold text-[40px]">
          Let’s Curate Your Experience
        </p>

        <div className="grid grid-cols-3 gap-5 w-full mt-8">
          <div
            style={{
              backgroundImage: `url(${lag})`,
              backgroundSize: "cover",
            }}
            className="w-full h-[550px] rounded-[18px] bg-[#f1f1f1] relative"
          >
            <button className=" absolute top-6 right-6 px-4 py-3 bg-white rounded-[6px] text-[#11305A] font-PoppinsSemiBold font-semibold text-base">
              Hiking
            </button>
            {/* details */}
            <div className=" absolute bottom-6 left-6">
              <p className=" font-semibold font-PoppinsSemiBold text-2xl text-white">
                Lagos
              </p>
              <p className=" font-medium font-PoppinsMedium text-lg text-white">
                Oriental Gardens
              </p>
              <span className=" flex items-center space-x-4">
                <p className=" font-medium font-PoppinsMedium text-base text-white">
                  16, Aug 2024
                </p>
                <p className=" font-medium font-PoppinsMedium text-base text-white">
                  3:00 pm
                </p>
              </span>
            </div>
          </div>
          <div className=" w-full h-full grid grid-cols-1 gap-5">
            <div
              style={{
                backgroundImage: `url(${lag1})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className=" w-full h-full bg-[#f1f1f1] rounded-[18px] relative"
            >
              <button className=" absolute top-6 right-6 px-4 py-3 bg-white rounded-[6px] text-[#11305A] font-PoppinsSemiBold font-semibold text-base">
                Paint and Sip
              </button>
              {/* details */}
              <div className=" absolute bottom-6 left-6">
                <p className=" font-semibold font-PoppinsSemiBold text-2xl text-white">
                  Lagos
                </p>
                <p className=" font-medium font-PoppinsMedium text-lg text-white">
                  Oriental Gardens
                </p>
                <span className=" flex items-center space-x-4">
                  <p className=" font-medium font-PoppinsMedium text-base text-white">
                    16, Aug 2024
                  </p>
                  <p className=" font-medium font-PoppinsMedium text-base text-white">
                    3:00 pm
                  </p>
                </span>
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url(${lag2})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className=" w-full h-full bg-[#f1f1f1] rounded-[18px] relative"
            >
              <button className=" absolute top-6 right-6 px-4 py-3 bg-white rounded-[6px] text-[#11305A] font-PoppinsSemiBold font-semibold text-base">
                VR Games
              </button>
              {/* details */}
              <div className=" absolute bottom-6 left-6">
                <p className=" font-semibold font-PoppinsSemiBold text-2xl text-white">
                  Lagos
                </p>
                <p className=" font-medium font-PoppinsMedium text-lg text-white">
                  Oriental Gardens
                </p>
                <span className=" flex items-center space-x-4">
                  <p className=" font-medium font-PoppinsMedium text-base text-white">
                    16, Aug 2024
                  </p>
                  <p className=" font-medium font-PoppinsMedium text-base text-white">
                    3:00 pm
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${paintball})`,
              backgroundSize: "cover",
            }}
            className="w-full h-[550px] rounded-[18px] bg-[#f1f1f1] relative"
          >
            <button className=" absolute top-6 right-6 px-4 py-3 bg-white rounded-[6px] text-[#11305A] font-PoppinsSemiBold font-semibold text-base">
              Paintball
            </button>
            {/* details */}
            <div className=" absolute bottom-6 left-6">
              <p className=" font-semibold font-PoppinsSemiBold text-2xl text-white">
                Lagos
              </p>
              <p className=" font-medium font-PoppinsMedium text-lg text-white">
                Oriental Gardens
              </p>
              <span className=" flex items-center space-x-4">
                <p className=" font-medium font-PoppinsMedium text-base text-white">
                  16, Aug 2024
                </p>
                <p className=" font-medium font-PoppinsMedium text-base text-white">
                  3:00 pm
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* destination */}
      <Destination />
      {/* testimonials */}
      <Testimonial />
      <Footer />
    </>
  );
};

export default Landing;
