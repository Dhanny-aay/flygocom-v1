import { Link } from "react-router-dom";
import Navbar from "../component/navbar";
import search from "./assets/search.svg";
import blogImg from "./assets/blogImg.svg";
import play from "./assets/play.svg";

const Blog = () => {
  const blogs = [
    {
      name: "7 Countries you can travel to without Visa",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
      tag: "TRAVEL",
      date: "JUN 12, 2024",
      img: blogImg,
    },
    {
      name: "7 Countries you can travel to without Visa",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
      tag: "TRAVEL",
      date: "JUN 12, 2024",
      img: blogImg,
    },
    {
      name: "7 Countries you can travel to without Visa",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
      tag: "TRAVEL",
      date: "JUN 12, 2024",
      img: blogImg,
    },
    {
      name: "7 Countries you can travel to without Visa",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
      tag: "TRAVEL",
      date: "JUN 12, 2024",
      img: blogImg,
    },
    {
      name: "7 Countries you can travel to without Visa",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
      tag: "TRAVEL",
      date: "JUN 12, 2024",
      img: blogImg,
    },
  ];
  return (
    <>
      <Navbar />
      <div className="mt-20 w-full py-16 px-12 bg-[#f1f1f1]">
        <div className=" w-full flex items-center justify-between">
          <div className="w-[67%] relative">
            <input
              type="text"
              className=" w-full pl-14 pr-6 py-5 rounded-[40px]"
              placeholder="Search Topic"
              name=""
              id=""
            />
            <img src={search} className=" absolute left-6 top-5" alt="" />
          </div>
          <div className=" flex items-center justify-around w-[30%]">
            <Link className=" font-LatoRegular font-semibold text-lg text-[#082F49B2]">
              TRAVEL
            </Link>
            <Link className=" font-LatoRegular font-semibold text-lg text-[#082F49B2]">
              TOURS
            </Link>
            <Link className=" font-LatoRegular font-semibold text-lg text-[#082F49B2]">
              VISA
            </Link>
            <Link className=" font-LatoRegular font-semibold text-lg text-[#082F49B2]">
              OTHERS
            </Link>
          </div>
        </div>

        <div className=" grid grid-cols-3 mt-12 gap-6">
          {/* Top Reads */}
          <div className=" w-full p-5 bg-white">
            <p className=" text-[#11305A] font-Roboto font-medium text-2xl">
              Top Reads
            </p>
            <div className=" w-full mt-11 flex flex-col space-y-4">
              <div className=" py-4 border-b border-[#B5B5B5]">
                <p className=" text-[#11305A] font-LatoRegular font-medium text-xl">
                  7 Countries you can travel to without Visa
                </p>
                <span className=" flex items-center space-x-5 mt-2">
                  <p className=" font-Roboto text-[#082F498C] font-semibold text-sm">
                    TRAVEL
                  </p>
                  <p className=" font-Roboto text-[#082F498C] font-semibold text-sm">
                    JUN 12, 2024
                  </p>
                </span>
              </div>
              <div className=" py-4 border-b border-[#B5B5B5]">
                <p className=" text-[#11305A] font-LatoRegular font-medium text-xl">
                  All you need to know about Hiking
                </p>
                <span className=" flex items-center space-x-5 mt-2">
                  <p className=" font-Roboto text-[#082F498C] font-semibold text-sm">
                    TRAVEL
                  </p>
                  <p className=" font-Roboto text-[#082F498C] font-semibold text-sm">
                    JUN 12, 2024
                  </p>
                </span>
              </div>
              <div className=" py-4 border-b border-[#B5B5B5]">
                <p className=" text-[#11305A] font-LatoRegular font-medium text-xl">
                  All you need to know about Hiking
                </p>
                <span className=" flex items-center space-x-5 mt-2">
                  <p className=" font-Roboto text-[#082F498C] font-semibold text-sm">
                    TRAVEL
                  </p>
                  <p className=" font-Roboto text-[#082F498C] font-semibold text-sm">
                    JUN 12, 2024
                  </p>
                </span>
              </div>
              <div className=" py-4 border-b border-[#B5B5B5]">
                <p className=" text-[#11305A] font-LatoRegular font-medium text-xl">
                  Steps on how to get your Visa
                </p>
                <span className=" flex items-center space-x-5 mt-2">
                  <p className=" font-Roboto text-[#082F498C] font-semibold text-sm">
                    TRAVEL
                  </p>
                  <p className=" font-Roboto text-[#082F498C] font-semibold text-sm">
                    JUN 12, 2024
                  </p>
                </span>
              </div>
            </div>
          </div>

          {/* blogs */}
          {blogs.map((item, index) => (
            <div key={index} className="bg-[#fff] w-full">
              <div
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className=" w-full h-[290px]"
              ></div>
              <div className=" p-5">
                <p className=" text-[#11305A] font-Roboto font-medium text-2xl">
                  {item.name}
                </p>
                <p className=" mt-5 text-[#11305A] font-Roboto text-sm font-normal">
                  {item.desc}
                </p>

                <div className=" flex items-center justify-between mt-5">
                  <span className=" flex items-center space-x-5 mt-2">
                    <p className=" font-Roboto text-[#082F498C] font-semibold text-sm">
                      TRAVEL
                    </p>
                    <p className=" font-Roboto text-[#082F498C] font-semibold text-sm">
                      JUN 12, 2024
                    </p>
                  </span>

                  <button className=" border border-[#0074C9] font-LatoRegular font-semibold text-lg text-[#11305A] rounded-[8px] py-3 px-6">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className=" flex items-center justify-center mt-20">
          <div className=" flex items-center space-x-4">
            <button className=" w-12 h-12 bg-[#11305A] rounded-lg text-white font-LatoRegular font-semibold text-lg">
              1
            </button>
            <button className=" w-12 h-12 bg-[#FFFFFF] rounded-lg text-[#11305A] font-LatoRegular font-semibold text-lg">
              2
            </button>
            <button className=" w-12 h-12 bg-[#FFFFFF] rounded-lg text-[#11305A] font-LatoRegular font-semibold text-lg">
              3
            </button>
            <button className=" w-12 h-12 bg-[#FFFFFF] rounded-lg text-[#11305A] font-LatoRegular font-semibold text-lg">
              4
            </button>
            <button className=" w-12 h-12 bg-[#FFFFFF] rounded-lg text-[#11305A] font-LatoRegular font-semibold text-lg flex items-center justify-center">
              <img src={play} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className=" w-full bg-[#f1f1f1] py-10">
        <p className=" text-center text-[#11305A] font-LatoRegular font-normal text-lg">
          © 2024 Flygocom Blog
        </p>
      </div>
    </>
  );
};

export default Blog;
