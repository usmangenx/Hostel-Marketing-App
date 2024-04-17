import Footer from "./Footer";
import Navbar from "./Navbar";

const Location = () => {
  const openGoogleMaps = () => {
    const latitude = "33.544662";
    const longitude = "73.180670";
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(url, "_blank");
  };
  return (
    <div className="">
      <Navbar />
      <div className="flex  mt-10 flex-col items-center  max-w-[1240px] mx-auto h-[50rem]">
        <h1 className="font-bold text-[#5f5f5f] text-3xl font-poppins mt-8">
          Location
        </h1>
        <p className="text-md text-[#5f5f5f] font-poppins p-5 font-medium mt-9">
          Ume Abeeha Hostel, Behind Safe CNG Filling Station, Kahuta Road,
          Kakpul, Islamabad
        </p>
        <h1 className="font-bold text-3xl text-[#5f5f5f] font-poppins mt-20">
          Location On Google Map
        </h1>
        <button
          className="font-medium font-poppins text-sm mt-20 text-white md:text-4xl md:mt-10  bg-[#5f5f5f] hover:bg-opacity-100 p-3 rounded-md md:bg-opacity-80"
          onClick={openGoogleMaps}
        >
          Get Location
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Location;
