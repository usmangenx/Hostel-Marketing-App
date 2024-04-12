import Navbar from "./Navbar";

export default function App() {
  return (
    <>
      <Navbar />

      <div className="mx-auto max-w-[1240px] relative pt-10">
        <img
          src="https://i.ibb.co/0y2w0MQ/Firefly-20240329201155.png"
          alt="Hostel Image"
          className="w-full h-auto blur-[3px] border border-gray-600"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#5f5f5f]">
          <h1 className="font-extrabold font-poppins text-4xl bg-white p-2 rounded-md bg-opacity-80">
            Welcome to Ume Abeeha Hostel
          </h1>
          <p className="font-medium font-poppins text-2xl mt-8 bg-white p-2 rounded-md bg-opacity-80">
            Your Home Away From Home in Islamabad!
          </p>
          <button className="font-bold font-poppins text-2xl mt-8  bg-white hover:bg-opacity-100 p-3 rounded-md bg-opacity-80">
            Contact Now!
          </button>
        </div>
      </div>
    </>
  );
}
