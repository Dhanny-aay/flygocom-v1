import Navbar from "../component/navbar";

const Faq = () => {
  const faq = [
    {
      question: "Can I book a flight without a passport within Nigeria?",
      answer:
        "Yes, it is possible to book a flight within Nigeria without a passport as long as you can provide other valid forms of identification such as a valid driver's license, National ID card, or a Voter's card. Booking without any valid means of identification is not obtainable.",
    },
    {
      question: "Can I book a flight without a passport within Nigeria?",
      answer:
        "Yes, it is possible to book a flight within Nigeria without a passport as long as you can provide other valid forms of identification such as a valid driver's license, National ID card, or a Voter's card. Booking without any valid means of identification is not obtainable.",
    },
    {
      question: "Can I book a flight without a passport within Nigeria?",
      answer:
        "Yes, it is possible to book a flight within Nigeria without a passport as long as you can provide other valid forms of identification such as a valid driver's license, National ID card, or a Voter's card. Booking without any valid means of identification is not obtainable.",
    },
    {
      question: "Can I book a flight without a passport within Nigeria?",
      answer:
        "Yes, it is possible to book a flight within Nigeria without a passport as long as you can provide other valid forms of identification such as a valid driver's license, National ID card, or a Voter's card. Booking without any valid means of identification is not obtainable.",
    },
  ];
  return (
    <>
      <div className=" w-full bg-[#f1f1f1]">
        <Navbar />
        <div className="mt-20 w-full py-16 md:px-12 px-5 bg-[#f1f1f1] min-h-[100vh]">
          <div className=" flex items-center justify-between">
            <p></p>
            <div className=" flex flex-row space-x-4 ml-auto">
              <button className=" bg-[#37B3FF] rounded-lg p-4 font-Roboto font-bold text-sm text-white">
                Search
              </button>
              <button className="border border-[#0074C9] rounded-lg p-4 font-Roboto font-bold text-sm text-[#11305A]">
                Ask a question
              </button>
            </div>
          </div>

          <div className=" w-full mt-16">
            <h2 className=" text-[#11305A] font-LatoBold font-bold text-xl">
              FAQs
            </h2>

            <div className=" mt-3">
              <div className=" flex flex-col space-y-3">
                {faq.map((item, index) => (
                  <div key={index} className=" bg-white px-5 py-3 w-full">
                    <p className=" font-Roboto font-semibold text-[#11305A] text-sm">
                      {item.question}
                    </p>
                    <span className=" w-full mt-3 text-[#082F49B2] font-semibold font-Roboto text-sm">
                      {item.answer}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full bg-[#f1f1f1] py-10">
          <p className=" text-center text-[#11305A] font-LatoRegular font-normal text-lg">
            © 2024 Flygocom Blog
          </p>
        </div>
      </div>
    </>
  );
};

export default Faq;
