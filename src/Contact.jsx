import Footer from "./Footer";
import Navbar from "./Navbar";

const Contact = () => {
  const openWhatsAppChat = () => {
    const phoneNumber = "03486383567";
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };
  return (
    <div>
      <Navbar />
      <div className="flex  mt-10 flex-col items-center  max-w-[1240px] mx-auto h-[50rem]">
        <h1 className="font-bold text-[#5f5f5f] text-3xl font-poppins mt-8">
          Contact Details
        </h1>
        <h1 className="font-bold text-[#5f5f5f] text-xl font-poppins mt-8">
          Email
        </h1>
        <p className="text-xl text-[#5f5f5f] font-poppins p-5 font-medium mt-3">
          umeabeehahsahostel@gmail.com
        </p>
        <h1 className="font-bold text-[#5f5f5f] text-xl font-poppins mt-8">
          Phone No & WhatsApp
        </h1>
        <p className="text-xl text-[#5f5f5f] font-poppins p-5 font-medium mt-3">
          03486383567
        </p>
        <h1 className="font-bold text-[#5f5f5f] text-xl font-poppins mt-8">
          For Direct WhatsApp
        </h1>
        <button
          onClick={openWhatsAppChat}
          className="font-medium font-poppins text-sm mt-10 text-white md:text-4xl md:mt-10  bg-[#5f5f5f] hover:bg-opacity-100 p-3 rounded-md md:bg-opacity-80"
        >
          CLick Here!
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
