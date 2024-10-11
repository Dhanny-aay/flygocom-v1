import google from "./assets/googlePlay.svg";
import apple from "./assets/apple.svg";
import welcome from "./assets/welcome.svg";
import mail from "./assets/Mail.svg";
import lata from "./assets/Iata_logo_225.svg.svg";
import amd from "./assets/Amadeus_(CRS)_Logo.svg.svg";
import nanta from "./assets/nantalogo.svg";
import fb from "./assets/Facebook.svg";
import x from "./assets/TwitterX.svg";
import yt from "./assets/YouTube.svg";
import ig from "./assets/Instagram.svg";
import phone from "./assets/phone1.svg";
import loca from "./assets/loca.svg";

const Footer = () => {
  return (
    <>
      <div className=" w-full py-16 px-12 bg-[#1F3E68] h-[580px] relative">
        <div
          style={{
            position: "absolute",
            top: "-280px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          class="w-full px-12"
        >
          {/* child component goes here  */}
          <div className=" w-full bg-white py-12 rounded-xl  border border-[#EAEBF0] relative px-4 flex items-center justify-center space-x-8">
            {/* component 1 */}
            <div className="">
              <p className="text-[#11305A] font-LatoBold font-bold text-[28px]">
                Flygocom Mobile App{" "}
                <span className=" block ">Coming Soon!</span>
              </p>
              <div className=" flex flex-row items-center">
                <span className=" flex flex-col space-y-4">
                  <img src={google} alt="" />
                  <img src={apple} alt="" />
                </span>
                <img src={welcome} alt="" />
              </div>
            </div>
            {/* component 2 */}
            <div className="">
              <p className=" text-[#11305A] font-LatoBold font-bold text-2xl">
                Join the waitlist
              </p>
              <p className=" mt-8 text-[#11305A] font-LatoRegular font-semibold text-lg">
                Subscribe to our newsletter to join the waitlist and stay
                <span className=" block">updated on the latest news.</span>
              </p>
              <div className=" mt-6 flex items-center space-x-3">
                <input
                  type="text"
                  className=" py-5 w-[395px] border border-[#082F4980] px-3"
                  placeholder="Enter your email address"
                />
                <button className=" py-6 px-10 bg-[#F36F1A] font-Roboto font-semibold text-base text-white">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" absolute w-full bottom-0 left-0">
          <div className=" pb-8 px-12 flex items-start space-x-36">
            <div className="">
              <p className=" text-[#D7F1FF] font-LatoBold font-bold text-2xl">
                Flygocom Travel and Tours Limited
              </p>
              <div className=" mt-3 space-x-11 flex items-start">
                <div className=" space-y-3">
                  <p className=" text-[#FCFAFA] font-Roboto font-semibold text-lg">
                    Contact us
                  </p>
                  <span className=" items-center flex space-x-2">
                    <img src={mail} alt="" />
                    <p className=" font-LatoRegular font-semibold text-white text-base">
                      flygocom@gmail.com
                    </p>
                  </span>
                  <span className=" items-center flex space-x-2">
                    <img src={loca} alt="" />
                    <p className=" font-LatoRegular font-semibold text-white text-base">
                      ABC Way, Lagos
                    </p>
                  </span>
                  <span className=" items-center flex space-x-2">
                    <img src={phone} alt="" />
                    <p className=" font-LatoRegular font-semibold text-white text-base">
                      08132579742
                    </p>
                  </span>
                </div>
                <div className=" space-y-3">
                  <p className=" text-[#FCFAFA] font-Roboto font-semibold text-lg">
                    About
                  </p>

                  <p className=" font-LatoRegular font-semibold text-white text-base">
                    Our services
                  </p>
                  <p className=" font-LatoRegular font-semibold text-white text-base">
                    Blog
                  </p>

                  <p className=" font-LatoRegular font-semibold text-white text-base">
                    FAQs
                  </p>
                </div>
              </div>

              <div className=" flex items-center space-x-4 mt-7">
                <img src={fb} alt="" />
                <img src={x} alt="" />
                <img src={yt} alt="" />
                <img src={ig} alt="" />
              </div>
            </div>
            <div className="">
              <p className=" text-[#D7F1FF] font-LatoBold font-bold text-2xl">
                Become a partner with Flygocom
              </p>
              <p className=" text-[#FCFAFA] font-Roboto font-semibold text-lg mt-3">
                Market your services to the biggest audience in Africa
              </p>
              <button className=" mt-6 bg-[#F36F1A] rounded-[8px] px-6 py-4 font-Roboto font-semibold text-lg text-[#FCFAFA]">
                Partner with us
              </button>

              <span className=" flex space-x-3 mt-6 items-center">
                <img src={lata} alt="" />
                <img src={amd} alt="" />
                <img src={nanta} alt="" />
              </span>
            </div>
          </div>
          <p className=" mb-4 text-center font-normal text-[#FFFFFF] font-Roboto text-sm">
            © 2024 Flygocom Travel and Tours Limited
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
