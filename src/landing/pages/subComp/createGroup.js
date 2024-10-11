import { useState } from "react";
import FileUploader from "../../../utils/fileUploader";
import close from "./assets/close.svg";

const CreateGroup = ({ setCreateGroup }) => {
  const [bookFile, setBookFile] = useState(null);

  const handleBookFileSelect = (file) => {
    setBookFile(file);
  };

  return (
    <>
      <div className="w-full md:w-[120%] h-full bg-[#1212128d] z-[999] fixed top-0 md:-left-[20%] p-6 flex justify-center items-center">
        <div className="md:ml-[20%] h-[500px] bg-[#FFFFFF] p-6 rounded-[15px] w-full md:w-[600px]">
          <div className="w-full h-full bg-[#fff] overflow-auto">
            <span className=" w-full flex items-center justify-between">
              <p className=" text-2xl text-[#272D37] font-bold mt-6 font-LatoBold">
                Create New Travel Group
              </p>
              <img
                onClick={() => {
                  setCreateGroup(false);
                }}
                src={close}
                className=" w-4"
                alt=""
              />
            </span>

            <div className="">
              <label className=" w-full  text-[#272D37] flex flex-col font-LatoRegular font-semibold text-sm mt-6">
                Travel title
                <input
                  type="text"
                  placeholder="Enter name"
                  className=" w-full mt-2 py-3 px-4 border border-[#DAE0E6] rounded-[6px] font-Roboto text-[15px] font-normal placeholder:text-[#919BA7]"
                />
              </label>
              <label className=" w-full  text-[#272D37] flex flex-col font-LatoRegular font-semibold text-sm mt-6 ">
                Travel destination
                <input
                  type="text"
                  placeholder="Enter destination"
                  className=" w-full mt-2 py-3 px-4 border border-[#DAE0E6] rounded-[6px] font-Roboto text-[15px] font-normal placeholder:text-[#919BA7]"
                />
              </label>
              <label className=" w-full  text-[#272D37] flex flex-col font-LatoRegular font-semibold text-sm mt-6 ">
                Trip Description
                <textarea
                  type="text"
                  placeholder="Enter Trip Description"
                  className=" w-full mt-2 py-3 px-4 border border-[#DAE0E6] rounded-[6px] font-Roboto text-[15px] font-normal placeholder:text-[#919BA7]"
                />
              </label>

              <div className=" w-full mt-6 grid grid-cols-2 gap-6">
                <label className=" w-full  text-[#272D37] flex flex-col font-LatoRegular font-semibold text-sm ">
                  Gender
                  <span className=" w-full mt-2 py-3 px-4 border border-[#DAE0E6] rounded-[6px] font-Roboto text-[15px] font-normal placeholder:text-[#919BA7]">
                    <select name="" className=" w-full" id="">
                      <option value="">Select Gender</option>
                    </select>
                  </span>
                </label>
                <label className=" w-full  text-[#272D37] flex flex-col font-LatoRegular font-semibold text-sm ">
                  Travel date
                  <input
                    type="date"
                    placeholder="Choose date"
                    className=" w-full mt-2 py-3 px-4 border border-[#DAE0E6] rounded-[6px] font-Roboto text-[15px] font-normal placeholder:text-[#919BA7]"
                  />
                </label>
              </div>
              <div className=" w-full mt-6 grid grid-cols-2 gap-6">
                <label className=" w-full  text-[#272D37] flex flex-col font-LatoRegular font-semibold text-sm ">
                  Trip Duration
                  <input
                    type="date"
                    placeholder="Choose date"
                    className=" w-full mt-2 py-3 px-4 border border-[#DAE0E6] rounded-[6px] font-Roboto text-[15px] font-normal placeholder:text-[#919BA7]"
                  />
                </label>
                <label className=" w-full  text-[#272D37] flex flex-col font-LatoRegular font-semibold text-sm">
                  Trip Curator
                  <input
                    type="text"
                    placeholder="Enter name"
                    className=" w-full mt-2 py-3 px-4 border border-[#DAE0E6] rounded-[6px] font-Roboto text-[15px] font-normal placeholder:text-[#919BA7]"
                  />
                </label>
              </div>

              <FileUploader
                label="Upload Image of Destination"
                accept="image/png, image/jpeg"
                maxSize={2000000} // 2MB
                isImage={true}
                onFileSelect={handleBookFileSelect}
              />

              <div className=" w-full grid grid-cols-2 gap-3 mt-6">
                <button
                  onClick={() => {
                    setCreateGroup(false);
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
      </div>
    </>
  );
};

export default CreateGroup;
