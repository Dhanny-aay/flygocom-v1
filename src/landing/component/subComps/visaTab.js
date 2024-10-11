const VisaTab = () => {
  return (
    <>
      <div className=" w-full grid grid-cols-2 justify-center z-20 items-center gap-3 h-full">
        <button className=" w-full px-14 py-4 font-LatoRegular rounded-[5px] border border-[#1A8AF31A] bg-[#D7F1FF] text-[#0074C9] text-base font-semibold">
          Process Visa
        </button>
        <button className=" w-full px-14 py-4 font-LatoRegular bg-gradient-to-b from-[#31C2FF] to-[#1989F2] rounded-[5px] text-[#fff] text-base font-semibold">
          Get Visa Documents
        </button>
      </div>
    </>
  );
};

export default VisaTab;
