import { Logo } from "@/assets/icons/IconsSvg";
import Button from "@/components/common/Button";
import { Link, NavLink } from "react-router";

const NavElement = [
  { path: "/", label: "" },
  { path: "/post-job", label: "Post a Job" },
  { path: "/log-in", label: "Log in" },
];
const NavItem = () => {
  return (
    <ul className="flex gap-8 items-center">
      {NavElement.map((item, index) => (
        <li
          key={index}
          className="text-textPrimary font-poppins hover:text-black transition duration-300"
        >
          <NavLink
            to={item.path}
            className={({ isActive }) => (isActive ? "font-semibold" : "")}
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  return (
    <div className="max-w-[1632px]">
      <div className="pt-12 fixed  w-full z-50 mx-auto px-[144px] ">
        <div className="flex pl-10 items-center justify-between bg-white p-5 rounded-full">
          <Link to="/">
            <Logo />
          </Link>

          <div className="flex items-center gap-8">
            <NavItem />
            <div>
              <Button className="!rounded-full !font-medium !text-base">
                Register as a Plumber
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
