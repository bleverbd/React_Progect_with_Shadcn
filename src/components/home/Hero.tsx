import { LocationIcon } from "@/assets/icons/IconsSvg";
import Navbar from "@/layouts/shared/Navbar";
import { ImagesProvider } from "@/lib/ImagesProvider";

const Hero = () => {
  return (
    <div>
      <Navbar />
      <div className=" relative">
        <div className="overflow-hidden">
          <img
            className="w-full h-[892px] object-cover  bg-gray-300 bg-[position:0px_-92.32px] bg-[length:100%]"
            src={ImagesProvider.herobg}
            alt="Hero Bg"
          />
        </div>

        <div className="absolute  top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2">
          <div>
            <h1 className="text-[#484848] font-semibold text-5xl text-center">
              Find Trusted <br />
              <span className="text-[#FF5532]"> Plumbers</span> Near You
            </h1>

            <p className="text-textPrimary text-lg text-center mt-3">
              Search by service type and location in seconds.
            </p>
          </div>

          <div className=" flex gap-5  items-center rounded-md mt-4 bg-[rgba(63,62,62,0.2)] backdrop-blur-[18px] p-5">
            <div>
              <input
                className="outline-none text-white font-normal text-lg"
                type="search"
                placeholder="What do you need?"
              />
            </div>
            <div>
              <hr className=" border border-r-white rotate-90 w-7" />
            </div>

            <div className="flex items-center gap-2">
              <LocationIcon />
              <input
                className=" outline-none text-white font-normal text-lg"
                type="search"
                placeholder="1234"
              />
            </div>

            <div>
              <button className="cursor-pointer px-8 py-2 outline outline-[#FF5532] bg-[#FF5532] text-white font-medium text-xl transition duration-300 rounded-full shadow-[0px_20px_35px_0px_rgba(223,105,81,0.15)]">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
