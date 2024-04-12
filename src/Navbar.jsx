import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center text-[#5f5f5f] max-w-[1240px] mx-auto h-[6rem]">
      <h1 className="w-full text-3xl font-bold font-poppins">
        <Link to={"/"}>Ume Abeeha Hostel</Link>
      </h1>
      <ul className="flex">
        <Link className="p-3 font-medium font-poppins" to={"/"}>
          Home
        </Link>
        <Link className="p-3 font-medium font-poppins" to={"/location"}>
          Location
        </Link>
        <Link className="p-3 font-medium font-poppins" to={"/contact"}>
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
