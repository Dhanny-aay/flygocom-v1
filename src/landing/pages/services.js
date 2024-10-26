import Navbar from "../component/navbar";
import lata from "./assets/ata.svg";
import amadeus from "./assets/amadeus.svg";
import nantalogo from "./assets/nantalogo.svg";
import Footer from "../component/footer";
import Testimonial from "../component/testimonial";

const Services = () => {
  const service = [
    {
      name: "Flights",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor ",
    },
    {
      name: "Hotel/ Shortlets",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor ",
    },
    {
      name: "Bus/ Bus Charter Services",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor ",
    },
    {
      name: "Tourism",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor ",
    },
    {
      name: "Visa",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor ",
    },
  ];

  const other = [
    { name: "Logistics", desc: "Inter state and nationwide deliveries." },
    { name: "Trains", desc: "Book your train Rides within Lagos." },
    { name: "Rides", desc: "Inter state and nationwide transportation." },
    { name: "Aircraft Charter", desc: "" },
  ];
  return (
    <>
      <div className=" w-full bg-[#f1f1f1]">
        <Navbar />
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(12, 119, 220, 0.4) 18.34%, rgba(17, 17, 17, 0.4) 72.6%)",
            //   backgroundImage: `url(${heroBg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="h-[500px] relative w-full flex justify-center items-center flex-col"
        >
          <h1 className=" font-LatoBold  font-extrabold text-[64px] text-white">
            Flygocom
          </h1>
          <p className=" mt-3 text-[28px] font-LatoRegular font-medium text-white">
            Get everything you need for your trip on Flygocom.
          </p>
        </div>
        <div className=" w-full bg-white py-16 px-12">
          <h2 className=" font-medium text-[#0C77DC] font-PoppinsMedium text-[28px]">
            About Us
          </h2>
          <p className=" mt-4 text-[#11305A] font-normal text-sm font-LatoRegular">
            Flygocom was founded in 2022 ed ut perspiciatis unde omnis iste
            natus error sit voluptatem accusantium doloremque laudantium, totam
            rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor{" "}
          </p>
        </div>

        <div className=" w-full px-12 py-10">
          <div className=" w-full grid grid-cols-2 gap-10">
            <div className=" w-full bg-white p-10 border border-[#DCDDDEB2] rounded-lg flex flex-col items-center justify-center">
              <h2 className=" text-center text-[#0C77DC] font-PoppinsMedium font-medium text-[28px]">
                Our Mission
              </h2>
              <p className=" text-center mt-5 text-[#11305A] font-Roboto font-normal text-sm">
                Flygocom was founded in 2022 ed ut perspiciatis unde omnis iste
                natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas{" "}
              </p>
              <span className=" flex items-center space-x-5 mt-5">
                <button className=" w-6 h-6 rounded-full bg-[#D7F1FF]"></button>
                <button className=" w-6 h-6 rounded-full bg-[#D7F1FF]"></button>
                <button className=" w-6 h-6 rounded-full bg-[#D7F1FF]"></button>
                <button className=" w-6 h-6 rounded-full bg-[#D7F1FF]"></button>
              </span>
            </div>
            <div className=" w-full bg-white p-10 border border-[#DCDDDEB2] rounded-lg flex flex-col items-center justify-center">
              <h2 className=" text-center text-[#0C77DC] font-PoppinsMedium font-medium text-[28px]">
                Our Vision
              </h2>
              <p className=" text-center mt-5 text-[#11305A] font-Roboto font-normal text-sm">
                Flygocom was founded in 2022 ed ut perspiciatis unde omnis iste
                natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas{" "}
              </p>
              <span className=" flex items-center space-x-5 mt-5">
                <button className=" w-6 h-6 rounded-full bg-[#D7F1FF]"></button>
                <button className=" w-6 h-6 rounded-full bg-[#D7F1FF]"></button>
                <button className=" w-6 h-6 rounded-full bg-[#D7F1FF]"></button>
                <button className=" w-6 h-6 rounded-full bg-[#D7F1FF]"></button>
              </span>
            </div>
          </div>
        </div>

        <div className=" w-full bg-[#1F3E68] py-10 px-12">
          <h2 className=" font-PoppinsMedium font-medium text-[#FFFFFF] text-[28px]">
            Credentials
          </h2>
          <p className=" mt-4 text-white font-Roboto font-normal text-sm">
            Flygocom was founded in 2022 ed ut perspiciatis unde omnis iste
            natus error sit voluptatem accusantium doloremque laudantium, totam
            rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatr{" "}
          </p>
          <div className=" mt-4 flex items-center space-x-4">
            <img src={lata} alt="" />
            <img src={amadeus} alt="" />
            <img src={nantalogo} alt="" />
          </div>
        </div>
      </div>

      <div className=" w-full py-10 px-12 bg-[#f1f1f1]">
        <h2 className=" font-medium text-[#0C77DC] font-PoppinsMedium text-[28px]">
          Our Services
        </h2>
        <div className=" w-full mt-4 flex items-start justify-between">
          <div className=" w-[66%] flex flex-col space-y-6">
            {service.map((item, index) => (
              <div
                key={index}
                className=" bg-white p-5 rounded-xl flex justify-between items-start"
              >
                <div className=" bg-[#4773A0]  h-[218px] w-[30%]"></div>
                <div className=" w-[68%]">
                  <h2 className=" text-[#11305A] font-medium font-Roboto text-2xl">
                    {item.name}
                  </h2>
                  <p className=" mt-5 text-[#11305A] font-Roboto font-normal text-sm">
                    {item.desc}
                  </p>

                  <button className=" block ml-auto border border-[#0074C9] px-6 py-3 mt-5 rounded-lg font-LatoRegular font-semibold text-lg text-[#11305A]">
                    Book now
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className=" w-[30%] bg-white h-full p-5 rounded-xl">
            <h2 className=" text-[#11305A] mb-5 font-Roboto font-medium text-2xl">
              Other Services
            </h2>
            <div className=" w-full flex flex-col space-y-5 ">
              {other.map((item, index) => (
                <div className=" w-full" key={index}>
                  <div className=" w-full h-[200px] bg-[#f9f9] relative">
                    <span className=" absolute bottom-3 right-3 bg-[#50C5FF] text-[#FCFAFA] font-Roboto font-bold text-sm py-1 px-2 rounded-[4px] ">
                      Coming Soon
                    </span>
                  </div>
                  <h2 className=" mt-1 text-[#11305A] font-LatoBold font-bold text-xl">
                    {item.name}
                  </h2>
                  <p className=" mt-2 font-Roboto font-normal text-sm text-[#11305A]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* testimonials */}
      <Testimonial />
      <Footer />
    </>
  );
};

export default Services;
