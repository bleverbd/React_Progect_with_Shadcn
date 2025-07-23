import Navbar from "@/layouts/shared/Navbar";
import { ImagesProvider } from "@/lib/ImagesProvider";

const Hero = () => {
  return (
    <div>
        <Navbar/>
      <div className=" overflow-hidden">
        <img
          className="w-full h-[892px] object-cover bg-gray-300 bg-[position:0px_-92.32px] bg-[length:100%]"
          src={ImagesProvider.herobg}
          alt="Hero Bg"
        />
      </div>
    </div>
  );
};

export default Hero;
