import Navbar from "../component/navbar";
import blogImg from "./assets/blglg.svg";

const DetailedBlog = () => {
  return (
    <>
      <Navbar />
      <div className="mt-20 w-full py-16 md:px-12 px-5 bg-[#f1f1f1]">
        <div className=" w-full bg-white">
          <div
            style={{
              backgroundImage: `url(${blogImg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className=" w-full h-[470px]"
          ></div>
        </div>
        <div className=" w-full bg-white px-6 py-12">
          <div className=" w-full flex flex-col items-center justify-center mt-10">
            <h1 className=" text-center font-Roboto font-medium text-2xl text-[#11305A]">
              7 Countries you can travel to without Visa
            </h1>
            <div className=" flex flex-row items-center space-x-5 mt-5">
              <p className=" font-Roboto font-semibold text-sm text-[#082F49B2]">
                ADMIN
              </p>
              <p className=" font-Roboto font-semibold text-sm text-[#082F49B2]">
                JUN 12, 2024
              </p>
            </div>

            <span className=" block w-full whitespace-pre-wrap mt-5 text-[#11305A] font-Roboto font-normal text-sm">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus
              error sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
              quia consequuntur magni dolores eos qui ratione voluptatem sequi
              nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor Sed ut perspiciatis unde omnis
              iste natus error sit voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
              sed quia consequuntur magni dolores eos qui ratione voluptatem
              sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
              dolor Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
              porro quisquam est, qui dolorem ipsum quia dolor Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor Sed ut perspiciatis unde omnis
              iste natus error sit voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
              sed quia consequuntur magni dolores eos qui ratione voluptatem
              sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
              dolor
            </span>
          </div>

          {/* commment */}
          <div className=" mt-12 flex flex-col items-center justify-center">
            <h2 className=" font-Roboto text-2xl font-medium text-center text-[#11305A]">
              Leave a Comment
            </h2>
            <div className=" w-full md:w-[480px]">
              <label
                htmlFor=""
                className=" mt-3 flex flex-col w-full font-Roboto font-normal text-sm text-[#082F49B2]"
              >
                Email
                <input
                  type="text"
                  className=" mt-2 border border-[#082F4980] py-2 px-3 rounded-lg bg-transparent placeholder:text-[#B0B2B4]"
                  name=""
                  id=""
                />
              </label>
              <label
                htmlFor=""
                className=" flex flex-col w-full font-Roboto font-normal text-sm text-[#082F49B2] mt-4"
              >
                Comment
                <textarea
                  type="text"
                  className=" mt-2 border border-[#082F4980] py-2 px-3 rounded-lg bg-transparent placeholder:text-[#B0B2B4]"
                  name=""
                  id=""
                />
              </label>
              <button className=" mt-3 bg-[#35C8FF] py-3 px-6 rounded-lg text-white font-Roboto text-base">
                Reply
              </button>
            </div>
          </div>
        </div>

        <div className=" w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className=" w-full h-[300px] border border-[#0C77DC] rounded-lg flex flex-col items-center justify-center">
            <p className=" text-lg text-[#11305A] text-center font-LatoRegular font-semibold">
              Book Flights to anywhere in the world
            </p>
            <button className=" mt-10 border border-[#0074C9] rounded-lg py-3 px-6 text-[#11305A] font-LatoBold font-semibold text-lg">
              Book now
            </button>
          </div>
          <div className=" w-full h-[300px] border border-[#0C77DC] rounded-lg flex flex-col items-center justify-center">
            <p className=" text-lg text-[#11305A] text-center font-LatoRegular font-semibold">
              Buses from Lagos to Benin Available
            </p>
            <button className=" mt-10 border border-[#0074C9] rounded-lg py-3 px-6 text-[#11305A] font-LatoBold font-semibold text-lg">
              Book now
            </button>
          </div>
          <div className=" w-full h-[300px] border border-[#0C77DC] rounded-lg flex flex-col items-center justify-center">
            <p className=" text-lg text-[#11305A] text-center font-LatoRegular font-semibold">
              5% Discoounts on all trips to Dubai this month.
            </p>
            <button className=" mt-10 border border-[#0074C9] rounded-lg py-3 px-6 text-[#11305A] font-LatoBold font-semibold text-lg">
              Book now
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

export default DetailedBlog;
