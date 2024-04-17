import Navbar from "./Navbar";

export default function App() {
  return (
    <>
      <Navbar />

      <div className="mx-auto max-w-[1240px] md:relative md:pt-20">
        <img
          src="https://i.ibb.co/0y2w0MQ/Firefly-20240329201155.png"
          alt="Hostel Image"
          className="w-full h-auto blur-[3px] border border-gray-600"
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
          <button className="font-bold font-poppins text-sm md:text-4xl md:mt-10  bg-white hover:bg-opacity-100 p-3 rounded-md md:bg-opacity-80">
            Contact Now!
          </button>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center md:mt-30 mx-auto max-w-[940px] h-[400px] md:relative ">
        <h1 className="text-xl md:text-3xl font-poppins font-bold">Message For Parents</h1>
        <p1 className="mt-10 text-md p-5 md:text-2xl font-poppins font-medium">
          At Ume Abeeha Hostel, we prioritize your child safety, security, and
          well-being. With round-the-clock security and a supportive social
          environment, we ensure a nurturing home away from home. Plus, our
          commitment to sustainability means we are mindful of our environmental
          impact. Rest assured, your child is in good hands at Ume Abeeha
          Hostel.
        </p1>
      </div>
    </>
  );
}
