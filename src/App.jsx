import Footer from "./Footer";
import Navbar from "./Navbar";

export default function App() {
  const openWhatsAppChat = () => {
    const phoneNumber = "03486383567";
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };
  return (
    <>
      <Navbar />

      <div className="mx-auto max-w-[1240px] md:relative md:pt-20">
        <img
          src="https://i.ibb.co/0y2w0MQ/Firefly-20240329201155.png"
          alt="Hostel Image"
          className="w-full h-auto md:blur-[3px] border border-gray-600"
        />
        <div className="md:absolute md:inset-0 flex flex-col items-center justify-center text-center text-[#5f5f5f]">
          <h1 className="font-extrabold font-poppins text-md md:text-4xl bg-white p-3 rounded-md bg-opacity-80 mt-9 md:mt-40">
            Welcome to Ume Abeeha Hostel
          </h1>
          <p className="font-medium font-poppins text-sm md:text-4xl md:mt-10 bg-white p-3 rounded-md md:bg-opacity-80">
            Your Home Away From Home in Islamabad!
          </p>
          <p className="font-medium font-poppins text-sm md:text-4xl md:mt-10 bg-white p-3 rounded-md md:bg-opacity-80">
            A Hostel For Boys & Girls
          </p>
          <button
            onClick={openWhatsAppChat}
            className="font-medium font-poppins text-sm mt-5 md:text-[#5f5f5f] text-white md:text-4xl md:mt-10  bg-[#5f5f5f] md:bg-white hover:bg-opacity-100 p-3 rounded-md md:bg-opacity-80"
          >
            Contact Now!
          </button>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center md:mt-30 mx-auto max-w-[940px] h-[450px] md:relative ">
        <h1 className="text-xl md:text-3xl text-[#5f5f5f] font-poppins font-bold">
          Message For Parents
        </h1>
        <p1 className="md:mt-10 mt-3 text-md p-10 md:text-2xl text-[#5f5f5f] text-balance font-poppins font-normal">
          At Ume Abeeha Hostel, we prioritize your child safety, security, and
          well-being. <br /> With round-the-clock security and a supportive
          social environment, we ensure a nurturing home away from home.
          <br /> Plus, our commitment to sustainability means we are mindful of
          our environmental impact. <br /> Rest assured, your child is in good
          hands at Ume Abeeha Hostel.
        </p1>
      </div>
      <div className="flex justify-center flex-col text-[#5f5f5f] items-center mx-auto max-w-[940px] h-[400px] ">
        <h1 className="text-xl md:text-3xl font-poppins font-bold">
          Facilities
        </h1>
        <ul className="md:mt-5 list-disc mt-10 text-md text-[#5f5f5f] md:text-2xl text-pretty font-poppins font-medium">
          <li>Full Furnished Accommodation</li>
          <li>High Speed Internet</li>
          <li>Hygienic Food</li>
          <li>Mineral Water</li>
          <li>Instant Electric Geyser </li>
          <li>Laundry </li>
          <li>Daily Cleaning </li>
          <li>Electricity Backup </li>
          <li>Transport </li>
          <li>Playground for Girls </li>
          <li>Free First Aid Services </li>
          <li>Pray Room </li>
          <li>Security </li>
        </ul>
      </div>
      <Footer />
    </>
  );
}
