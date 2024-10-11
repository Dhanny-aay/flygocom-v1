import { Link } from "react-router-dom";
import bannerBg from "./assets/bannerbg.svg";
import dealer from "./assets/deal1.svg";

const Deals = () => {
  return (
    <>
      <div className=" py-16 w-full">
        {/* banner ad */}
        <div
          style={{
            backgroundImage: `url(${bannerBg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className=" w-full h-[500px] flex flex-col items-center justify-center"
        >
          <p className=" font-PoppinsBold font-bold text-white text-center text-[40px]">
            Join Our Travel Community
          </p>
          <p className=" font-LatoBold font-bold text-xl text-white after:mt-3">
            Join thousands of travelers on the next trip. Sign up to join the
            train.
          </p>
          <Link
            to="/travel-community"
            className=" py-6 w-[250px] bg-[#F36F1A] rounded-[20px] mt-6 text-center font-Roboto font-semibold text-base text-white"
          >
            Join now
          </Link>
        </div>
        <div className=" bg-[#1F3E68] py-16 w-full px-12">
          <p className=" text-center text-white font-PoppinsBold font-bold text-[34px]">
            Exclusive Flight Deals Just for You
          </p>
          <p className=" text-center mt-2 font-normal text-base font-Roboto text-white">
            Enjoy discounted trips and special offers
          </p>
          <div className=" w-full mt-8 grid grid-cols-4 gap-6">
            <div
              style={{
                boxShadow: "-4px -4px 10px 0px #1111111A",
              }}
              className="bg-[#FFFFFFFE] p-6 rounded-[8px] w-full"
            >
              <div
                style={{
                  backgroundImage: `url(${dealer})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className=" w-full h-[170px]"
              ></div>

              <p className=" mt-5 text-center font-Roboto text-[#11305A] text-base">
                10% Discount on all Trips to London
              </p>
              <Link to="/flight-deals">
                <button className=" py-3 w-full mt-2 border border-[#37B3FF] text-[#37B3FF] text-lg font-LatoRegular font-semibold rounded-[8px]">
                  See More
                </button>
              </Link>
            </div>
            <div
              style={{
                boxShadow: "-4px -4px 10px 0px #1111111A",
              }}
              className="bg-[#FFFFFFFE] p-6 rounded-[8px] w-full"
            >
              <div
                style={{
                  backgroundImage: `url(${dealer})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className=" w-full h-[170px]"
              ></div>

              <p className=" mt-5 text-center font-Roboto text-[#11305A] text-base">
                10% Discount on all Trips to London
              </p>
              <Link to="/flight-deals">
                <button className=" py-3 w-full mt-2 border border-[#37B3FF] text-[#37B3FF] text-lg font-LatoRegular font-semibold rounded-[8px]">
                  See More
                </button>
              </Link>
            </div>
            <div
              style={{
                boxShadow: "-4px -4px 10px 0px #1111111A",
              }}
              className="bg-[#FFFFFFFE] p-6 rounded-[8px] w-full"
            >
              <div
                style={{
                  backgroundImage: `url(${dealer})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className=" w-full h-[170px]"
              ></div>

              <p className=" mt-5 text-center font-Roboto text-[#11305A] text-base">
                10% Discount on all Trips to London
              </p>
              <Link to="/flight-deals">
                <button className=" py-3 w-full mt-2 border border-[#37B3FF] text-[#37B3FF] text-lg font-LatoRegular font-semibold rounded-[8px]">
                  See More
                </button>
              </Link>
            </div>
            <div
              style={{
                boxShadow: "-4px -4px 10px 0px #1111111A",
              }}
              className="bg-[#FFFFFFFE] p-6 rounded-[8px] w-full"
            >
              <div
                style={{
                  backgroundImage: `url(${dealer})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className=" w-full h-[170px]"
              ></div>

              <p className=" mt-5 text-center font-Roboto text-[#11305A] text-base">
                10% Discount on all Trips to London
              </p>
              <Link to="/flight-deals">
                <button className=" py-3 w-full mt-2 border border-[#37B3FF] text-[#37B3FF] text-lg font-LatoRegular font-semibold rounded-[8px]">
                  See More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deals;
