import Navbar from "../component/navbar";
import noSearch from "./assets/the_search.svg";
import whatsapp from "./assets/whatsapp.svg";

const ErrorMsg = () => {
  return (
    <>
      <div className=" w-full bg-[#f1f1f1]">
        <Navbar />
        <div className=" min-h-[100svh] mt-20 w-full py-16 px-12 bg-[#f1f1f1] flex flex-col items-center justify-center">
          <img src={noSearch} alt="" />
          <h2 className=" mt-11 text-center font-LatoBold font-extrabold text-[#082F49B2] text-[30px]">
            Your search is currently unavailable
          </h2>
          <p className=" mt-5 text-center text-[#082F49B2] font-LatoRegular font-semibold text-lg">
            Don’t worry we’ll get you back on track. You can{" "}
            <span className=" text-[#0074C9] cursor-pointer">modify</span> your
            search to generate better results.
          </p>

          <div className=" bg-[#FFFFFF] md:w-[900px] flex items-center justify-between w-full py-4 px-10 mt-16">
            <p className=" text-[#11305A] font-LatoRegular font-semibold text-lg">
              Can’t find your what you’re looking for?{" "}
              <span className=" text-[#0C77DC]">Call</span> or reach out to us
              on Whatsapp
            </p>
            <button className=" p-3 border-[3px] border-[#34DC53] rounded-lg flex items-center space-x-4">
              <p className=" font-LatoRegular font-semibold text-[#11305A] text-lg">
                Send message
              </p>
              <img src={whatsapp} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorMsg;
