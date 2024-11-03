import close from "./assets/close.svg";

const JoinGroup = ({ setJoinGroup }) => {
  return (
    <>
      <div className="w-full md:w-[120%] h-full bg-[#1212128d] z-[999] fixed top-0 md:-left-[20%] p-6 flex justify-center items-center">
        <div className="md:ml-[20%] h-[500px] bg-[#FFFFFF] p-6 rounded-[15px] w-full md:w-[600px]">
          <div className="w-full h-full bg-[#fff] overflow-auto">
            <span className=" w-full flex items-center justify-between">
              <p className=" text-xl md:text-2xl text-[#272D37] font-bold mt-6 font-LatoBold">
                Paris Summer Crew
              </p>
              <img
                onClick={() => {
                  setJoinGroup(false);
                }}
                src={close}
                className=" w-4"
                alt=""
              />
            </span>
            <p className=" font-normal font-Roboto text-sm text-[#11305A]">
              Raymond started this community
            </p>
            <div className=" flex flex-col md:flex-row space-y-3 md:space-y-0 md:items-center justify-between mt-2">
              <p className=" text-[#082F49B2] font-Roboto font-normal text-sm">
                8 people have joined.
              </p>
              <p className=" text-[#082F49B2] font-Roboto font-normal text-sm">
                Max. 15 participants
              </p>
            </div>
            <label className=" w-full  text-[#272D37] flex flex-col font-LatoRegular font-semibold text-sm mt-6">
              Name
              <input
                type="text"
                placeholder="Enter name"
                className=" w-full mt-2 py-3 px-4 border border-[#DAE0E6] rounded-[6px] font-Roboto text-[15px] font-normal placeholder:text-[#919BA7]"
              />
            </label>
            <label className=" w-full  text-[#272D37] flex flex-col font-LatoRegular font-semibold text-sm mt-6">
              Email
              <input
                type="email"
                placeholder="Enter Email"
                className=" w-full mt-2 py-3 px-4 border border-[#DAE0E6] rounded-[6px] font-Roboto text-[15px] font-normal placeholder:text-[#919BA7]"
              />
            </label>
            <div className=" grid grid-cols-2 gap-6 mt-6">
              <label className=" w-full  text-[#272D37] flex flex-col font-LatoRegular font-semibold text-sm ">
                Contact Number
                <input
                  type="number"
                  placeholder="Enter Number"
                  className=" w-full mt-2 py-3 px-4 border border-[#DAE0E6] rounded-[6px] font-Roboto text-[15px] font-normal placeholder:text-[#919BA7]"
                />
              </label>
              <label className=" w-full  text-[#272D37] flex flex-col font-LatoRegular font-semibold text-sm ">
                Gender
                <span className=" w-full mt-2 py-3 px-4 border border-[#DAE0E6] rounded-[6px] font-Roboto text-[15px] font-normal placeholder:text-[#919BA7]">
                  <select name="" className=" w-full" id="">
                    <option value="">Select Gender</option>
                  </select>
                </span>
              </label>
            </div>
            <div className=" grid grid-cols-2 gap-6 mt-6">
              <label className=" w-full  text-[#272D37] flex flex-col font-LatoRegular font-semibold text-sm ">
                Travel date
                <input
                  type="date"
                  placeholder="Choose date"
                  className=" w-full mt-2 py-3 px-4 border border-[#DAE0E6] rounded-[6px] font-Roboto text-[15px] font-normal placeholder:text-[#919BA7]"
                />
              </label>
              <label className=" w-full  text-[#272D37] flex flex-col font-LatoRegular font-semibold text-sm ">
                Return date
                <input
                  type="date"
                  placeholder="Choose date"
                  className=" w-full mt-2 py-3 px-4 border border-[#DAE0E6] rounded-[6px] font-Roboto text-[15px] font-normal placeholder:text-[#919BA7]"
                />
              </label>
            </div>

            <div className=" w-full grid grid-cols-2 gap-3 mt-6">
              <button
                onClick={() => {
                  setJoinGroup(false);
                }}
                className=" py-3 w-full border border-[#DAE0E6] rounded-[6px] text-[#272D37] font-Roboto font-semibold text-sm"
              >
                Cancel
              </button>
              <button className=" py-3 w-full bg-gradient-to-b from-[#37B3FF] to-[#0081FE] rounded-[6px] text-[#fff] font-Roboto font-semibold text-sm">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinGroup;
