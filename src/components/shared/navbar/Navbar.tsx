import Image from "next/image";
import Link from "next/link";
import { MenuItems } from "./MenuItems";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100  mx-auto shadow-lg lg:rounded lg:mt-3 z-50 lg:max-w-[1250px]  md:px-16 lg:px-12">
      <div className="navbar-start ">
        <div className="dropdown z-50">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <MenuItems
            classes={
              "menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 z-50 "
            }
          />
        </div>

        <div className="flex gap-1 navbar-center justify-center items-center">
          {/* --- Navbar Logo --- */}
          <div className=" order-2 md:order-1  p-1 mr-2 ">
            <Link href="/" className="">
              <Image
                alt="Logo for Navbar"
                src="https://shafik720.github.io/Responsive-website-with-vanilla-html-css---4-Cloth-Shop-/images/logo.png"
                width={120}
                height={120}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex lg:flex-1 lg:justify-end ">
        <MenuItems classes={"menu menu-horizontal px-1 z-50"} />
      </div>
    </div>
  );
};

export default Navbar;
