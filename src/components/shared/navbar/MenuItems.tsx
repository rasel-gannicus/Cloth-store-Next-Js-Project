import Link from "next/link";
import { ReactNode } from "react";

export const MenuItems = ({ classes }: { classes: string }) => {
  return (
    <ul className={classes}>
      <li className="bg-orange-400 rounded font-semibold text-white hover:text-black">
        <Link href={"/flash-sale"}>Flash Sale</Link>
      </li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Item 3</a>
      </li>
      <li>
        <details>
          <summary>
            <div className="w-5 h-5 rounded-full flex gap-2">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                className="rounded-full"
              />
              <p className="md:hidden">Profile</p>
            </div>
          </summary>
          <ul className="p-2">
            <li className=" my-2">
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <hr className="mx-auto" />
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  );
};
