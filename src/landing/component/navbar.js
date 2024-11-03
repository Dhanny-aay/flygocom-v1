import { useState } from "react";
import logo from "./assets/logo.svg";
import drop from "./assets/drop.svg";
import support from "./assets/support.svg";
import phone from "./assets/phone.svg";

const Navbar = () => {
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [supportDropdownOpen, setSupportDropdownOpen] = useState(false);

  const toggleMoreDropdown = () => {
    setMoreDropdownOpen(!moreDropdownOpen);
    if (supportDropdownOpen) {
      setSupportDropdownOpen(false);
    }
  };

  const toggleSupportDropdown = () => {
    setSupportDropdownOpen(!supportDropdownOpen);
    if (moreDropdownOpen) {
      setMoreDropdownOpen(false);
    }
  };

  return (
    <>
      <div className=" py-4 md:px-12 px-5 w-full flex items-center justify-between fixed top-0 left-0 z-50 bg-[#0000001a] backdrop-blur">
        <div className=" flex items-center space-x-12">
          <img src={logo} className="" alt="" />
          <div className="hidden lg:flex flex-row space-x-6">
            <p className=" font-Roboto text-[#0C77DC] text-base font-semibold">
              Flights
            </p>
            <p className=" font-Roboto text-[#FFFFFF] text-base font-normal">
              Buses
            </p>
            <p className=" font-Roboto text-[#FFFFFF] text-base font-normal">
              Stays
            </p>
            <p className=" font-Roboto text-[#FFFFFF] text-base font-normal">
              Visa
            </p>
            <p className=" font-Roboto text-[#FFFFFF] text-base font-normal">
              Flights
            </p>
            <span className=" relative flex flex-row space-x-2 items-center">
              <p
                className=" font-Roboto text-[#FFFFFF] text-base font-normal cursor-pointer"
                onClick={toggleMoreDropdown}
              >
                More
              </p>
              <img
                src={drop}
                onClick={toggleMoreDropdown}
                className=" cursor-pointer"
                alt=""
              />
              {/* Dropdown for more */}
              {moreDropdownOpen && (
                <div className="bg-[#f8f8f8] space-y-1 swing-in-top-fwd p-4 absolute top-10 rounded-lg">
                  <p className="py-2 w-[150px] font-Roboto text-sm font-normal text-[#11305A]">
                    Tours
                  </p>
                  <p className="py-2 w-[150px] font-Roboto text-sm font-normal text-[#11305A]">
                    Airport pickup/dropoff
                  </p>
                  <p className="py-2 w-[150px] font-Roboto text-sm font-normal text-[#11305A]">
                    Partner with us
                  </p>
                  <p className="py-2 w-[150px] font-Roboto text-sm font-normal text-[#11305A]">
                    Affiliates
                  </p>
                  <p className="py-2 w-[150px] font-Roboto text-sm font-normal text-[#11305A]">
                    FAQs
                  </p>
                </div>
              )}
            </span>
          </div>
        </div>
        <div className=" hidden md:flex items-center space-x-8">
          <span className=" relative flex flex-row space-x-2 items-center">
            <p
              className=" font-Roboto text-[#FFFFFF] text-base font-normal cursor-pointer"
              onClick={toggleSupportDropdown}
            >
              Support
            </p>
            <img
              src={support}
              onClick={toggleSupportDropdown}
              className=" cursor-pointer"
              alt=""
            />
            {/* Dropdown for support */}
            {supportDropdownOpen && (
              <div className="bg-[#f8f8f8] space-y-1 swing-in-top-fwd p-4 absolute rounded-lg top-10">
                <p className="py-2 w-[150px] font-Roboto text-sm font-normal text-[#11305A]">
                  Live chat
                </p>
                <p className="py-2 w-[150px] font-Roboto text-sm font-normal text-[#11305A]">
                  Email
                </p>
                <p className="py-2 w-[150px] font-Roboto text-sm font-normal text-[#11305A]">
                  Whatsapp
                </p>
                <span className="relative flex flex-row space-x-2 items-center">
                  <img src={phone} alt="Phone" />
                  <p className="font-Roboto text-[#11305A] text-sm font-normal">
                    08132579742
                  </p>
                </span>
              </div>
            )}
          </span>
          <p className=" font-Roboto text-[#FFFFFF] text-base font-normal">
            Manage Booking
          </p>
          <button className=" block py-3 px-6 bg-[#0081FE] rounded-[5px] font-Roboto font-bold text-base text-white">
            Sign in
          </button>
        </div>

        <div className="menu-icon md:block lg:hidden">
          <input className="menu-icon__cheeckbox" type="checkbox" />
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
