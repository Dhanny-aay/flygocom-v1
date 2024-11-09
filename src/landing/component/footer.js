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
      <div className=" w-full py-16 md:px-12 px-5 bg-[#1F3E68] md:h-[580px] relative">
        <div class="w-full md:px-12 md:absolute md:top-[-280px] md:left-[50%] md:translate-x-[-50%]">
          {/* child component goes here  */}
          <div className=" w-full bg-white py-5 md:py-12 rounded-xl  border border-[#EAEBF0] relative px-5 flex flex-col md:flex-row items-center justify-center md:space-x-8 space-y-8 md:space-y-0">
            {/* component 1 */}
            <div className="  space-y-3 md:space-y-0">
              <p className="text-[#11305A] font-LatoBold font-bold text-2xl md:text-[28px]">
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
              <p className=" mt-3 md:mt-8 text-[#11305A] font-LatoRegular font-normal text-lg">
                Subscribe to our newsletter to join the waitlist and stay
                <span className=" block">updated on the latest news.</span>
              </p>
              <div className=" mt-6 flex flex-col md:flex-row items-center md:space-x-3 space-y-3 md:space-y-0">
                <input
                  type="text"
                  className=" py-3 w-full md:w-[395px] border rounded-[20px] border-[#082F4980] px-5"
                  placeholder="Enter your email address"
                />
                <button className=" py-3 px-6 bg-[#F36F1A] rounded-[20px] mt-7 text-center font-Roboto font-normal text-base text-white w-full md:w-auto">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" md:absolute w-full bottom-0 left-0">
          <div className=" pb-8 md:px-12 flex flex-col md:flex-row mt-12 md:mt-0 items-start md:justify-between">
            <div className="">
              <p className=" text-[#D7F1FF] font-LatoBold font-bold text-2xl">
                Flygocom Travel and Tours Limited
              </p>
              <div className=" mt-3 md:justify-between flex flex-col md:flex-row space-y-6 md:space-y-0 items-start">
                <div className=" space-y-3">
                  <p className=" text-[#FCFAFA] font-Roboto font-semibold text-lg md:text-xl">
                    Contact us
                  </p>
                  <span className=" items-center flex space-x-2">
                    <img src={mail} alt="" />
                    <p className=" font-LatoRegular font-normal text-white text-base">
                      flygocom@gmail.com
                    </p>
                  </span>
                  <span className=" items-center flex space-x-2">
                    <img src={loca} alt="" />
                    <p className=" font-LatoRegular font-normal text-white text-base">
                      ABC Way, Lagos
                    </p>
                  </span>
                  <span className=" items-center flex space-x-2">
                    <img src={phone} alt="" />
                    <p className=" font-LatoRegular font-normal text-white text-base">
                      08132579742
                    </p>
                  </span>
                </div>
                <div className=" space-y-3">
                  <p className=" text-[#FCFAFA] font-Roboto font-semibold text-lg md:text-xl">
                    About
                  </p>

                  <p className=" font-LatoRegular font-normal text-white text-base">
                    Our services
                  </p>
                  <p className=" font-LatoRegular font-normal text-white text-base">
                    Blog
                  </p>

                  <p className=" font-LatoRegular font-normal text-white text-base">
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
            <div className=" mt-12 md:mt-0">
              <p className=" text-[#D7F1FF] font-LatoBold font-bold text-2xl">
                Become a partner with Flygocom
              </p>
              <p className=" text-[#FCFAFA] font-Roboto font-normal text-lg mt-3">
                Market your services to the biggest audience in Africa
              </p>
              <button className=" mt-6 bg-[#F36F1A] rounded-[8px] px-5 py-3 font-Roboto font-normal text-base md:text-lg text-[#FCFAFA]">
                Partner with us
              </button>

              <span className=" flex justify-between md:justify-normal md:space-x-3 mt-12 md:mt-6 items-center">
                <img src={lata} alt="" />
                <img src={amd} alt="" />
                <img src={nanta} alt="" />
              </span>
            </div>
          </div>
          <p className=" mt-6 md:mt-0 text-center font-normal text-[#FFFFFF] font-Roboto text-sm">
            © 2024 Flygocom Travel and Tours Limited
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
