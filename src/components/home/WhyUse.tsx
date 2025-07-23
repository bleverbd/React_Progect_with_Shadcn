import { ImagesProvider } from "@/lib/ImagesProvider";
import Button from "../common/Button";
import Container from "../common/Container";
import SlotCounter from "react-slot-counter";

const WhyUse = () => {
  return (
    <div className="bg-bgPrimary relative">
      <Container className="py-[120px] flex justify-between gap-20 items-center">
        <div>
          <h1 className="text-[#012B45] font-medium text-[40px]">Why Use Us</h1>
          <p className="text-textPrimary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            tenetur aut, impedit reprehenderit iusto provident quae expedita
            asperiores atque laudantium neque, sint similique voluptate tempore
            quasi qui fugiat ipsum exercitationem. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Provident, ut. Optio, minima iure
            voluptates distinctio rem voluptate quod commodi, dolorem velit
            exercitationem quasi sint sequi repellat quidem ad, accusantium
            eligendi.
            <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
            doloremque, cum ducimus tempora ea molestias perspiciatis et magnam
            eius modi commodi quis alias laudantium itaque. Repellendus
            voluptatibus modi ex deleniti.
          </p>

          <Button className="mt-8"> Learn More</Button>
        </div>

        <div className=" absolute top-1/2 left-11/24 transform -translate-x-1/2 -translate-y-1/2  rounded-[10px] bg-white shadow-[0px_16px_48px_0px_rgba(0,0,0,0.05)] p-6 w-fit space-y-5">
          <div>
            <SlotCounter
              value="266+"
              valueClassName="text-[#132238] font-2xl font-semibold"
              animateOnVisible={{
                triggerOnce: false,
                rootMargin: "0px 0px -100px 0px",
              }}
            />
            <p className="text-sm text-[#424E60]"> Plumbers</p>
            <hr className="border boder-b-[#E6E8EB] mt-4" />
          </div>
          <div>
            <SlotCounter
              value="15k+"
              valueClassName="text-[#132238] font-2xl font-semibold"
              animateOnVisible={{
                triggerOnce: false,
                rootMargin: "0px 0px -100px 0px",
              }}
            />
            <p className="text-sm text-[#424E60]">Regular Client</p>
            <hr className="border boder-b-[#E6E8EB] mt-4" />
          </div>
          <div>
            <SlotCounter
              value="2k+"
              valueClassName="text-[#132238] font-2xl font-semibold"
              animateOnVisible={{
                triggerOnce: false,
                rootMargin: "0px 0px -100px 0px",
              }}
            />
            <p className="text-sm text-[#424E60]"> Order</p>
            <hr className="border boder-b-[#E6E8EB] mt-4" />
          </div>
          <div>
            <SlotCounter
              value="1.5k+"
              valueClassName="text-[#132238] font-2xl font-semibold"
              animateOnVisible={{
                triggerOnce: false,
                rootMargin: "0px 0px -100px 0px",
              }}
            />
            <p className="text-sm text-[#424E60]"> Reviews</p>
            <hr className="border boder-b-[#E6E8EB] mt-4" />
          </div>
        </div>

        <div className=" overflow-hidden shrink-0">
          <img
            className="w-[859px] h-[555px] rounded-md object-cover"
            src={ImagesProvider.whyusebg}
            alt="whyusebg"
          />
        </div>
      </Container>
    </div>
  );
};

export default WhyUse;
