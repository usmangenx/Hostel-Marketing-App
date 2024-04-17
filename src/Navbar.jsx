import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center text-[#5f5f5f] max-w-[1240px] mx-auto h-[6rem]">
      <h1 className="w-full text-md p-3 font-bold font-poppins md:text-3xl">
        <Link to={"/"}>Ume Abeeha Hostel</Link>
      </h1>
      <ul className="flex">
        <Link
          className="p-3 text-sm font-medium  md:font-medium font-poppins"
          to={"/"}
        >
          Home
        </Link>
        <Link
          className="p-3 text-sm font-medium md:font-medium font-poppins"
          to={"/location"}
        >
          Location
        </Link>
        <Link
          className="p-3 text-sm font-medium md:font-medium font-poppins"
          to={"/contact"}
        >
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
