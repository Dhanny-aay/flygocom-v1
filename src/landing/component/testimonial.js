import quotes from "./assets/quotes.svg";
const Testimonial = () => {
  return (
    <>
      <div className=" bg-[#f1f1f1] h-[800px] w-full py-16 px-12">
        <p className=" text-center text-[#11305A] font-PoppinsBold font-bold text-[40px] capitalize">
          Here’s What Our Customers Say About us
        </p>
        <div className=" mt-8 w-full grid grid-cols-4 gap-12">
          <div className=" bg-white border border-[#DCDDDEB2] rounded-[8px] p-6 flex flex-col items-center justify-center">
            <img src={quotes} alt="" />
            <p className=" mt-4 font-Roboto font-normal text-[#082F49B2] text-sm text-center">
              I use Flygocom for all my travel needs and i must say, they exceed
              my expectation every single time
            </p>
            <p className=" mt-4 font-semibold text-[#11305A] font-LatoRegular text-lg">
              Joel Ayo
            </p>
          </div>
          <div className=" bg-white border border-[#DCDDDEB2] rounded-[8px] p-6 flex flex-col items-center justify-center">
            <img src={quotes} alt="" />
            <p className=" mt-4 font-Roboto font-normal text-[#082F49B2] text-sm text-center">
              I use Flygocom for all my travel needs and i must say, they exceed
              my expectation every single time
            </p>
            <p className=" mt-4 font-semibold text-[#11305A] font-LatoRegular text-lg">
              Joel Ayo
            </p>
          </div>
          <div className=" bg-white border border-[#DCDDDEB2] rounded-[8px] p-6 flex flex-col items-center justify-center">
            <img src={quotes} alt="" />
            <p className=" mt-4 font-Roboto font-normal text-[#082F49B2] text-sm text-center">
              I use Flygocom for all my travel needs and i must say, they exceed
              my expectation every single time
            </p>
            <p className=" mt-4 font-semibold text-[#11305A] font-LatoRegular text-lg">
              Joel Ayo
            </p>
          </div>
          <div className=" bg-white border border-[#DCDDDEB2] rounded-[8px] p-6 flex flex-col items-center justify-center">
            <img src={quotes} alt="" />
            <p className=" mt-4 font-Roboto font-normal text-[#082F49B2] text-sm text-center">
              I use Flygocom for all my travel needs and i must say, they exceed
              my expectation every single time
            </p>
            <p className=" mt-4 font-semibold text-[#11305A] font-LatoRegular text-lg">
              Joel Ayo
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
