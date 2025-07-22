import { ButtokNowBtnIcon } from "@/assets/icons/IconsSvg";

const BookNowButton = ({
  children = "Book Now",
  className = "",
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      className={` group cursor-pointer px-6 py-3 hover:outline hover:outline-[#666666] bg-[#FF5532] text-white font-medium text-xl hover:bg-white hover:text-[#848585] transition duration-300 rounded-md shadow-[0px_20px_35px_0px_rgba(223,105,81,0.15)] ${className}`}
    >
      <div className="flex gap-3 items-center">
        {children}
        <ButtokNowBtnIcon className="fill-white group-hover:fill-textPrimary transition duration-300" />
      </div>
    </button>
  );
};

export default BookNowButton;
