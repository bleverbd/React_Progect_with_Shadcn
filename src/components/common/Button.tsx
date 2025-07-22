const Button = ({
  children = "Learn More",
  className = "",
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      className={`cursor-pointer px-8 py-3 outline outline-[#FF5532] bg-[#FF5532] text-white font-medium text-xl hover:bg-white hover:text-[#848585] transition duration-300 rounded-md shadow-[0px_20px_35px_0px_rgba(223,105,81,0.15)] ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
