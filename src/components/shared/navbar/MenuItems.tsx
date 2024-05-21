import Link from "next/link";

export const MenuItems = ({ classes }: { classes: string }) => {
  return (
    <ul className={classes}>
      <li className="bg-orange-400 rounded font-semibold text-white hover:text-black">
        <Link href={"/flash-sale"}>Flash Sale</Link>
      </li>
      <li>
        <details>
          <summary>Category</summary>
          <ul className="p-2">
            <li>
              <Link href={"/products/mens-wear"}> Men's </Link>
            </li>
            <li>
            <Link href={"/products/women-clothing"}> Women's </Link>
            </li>
            <li>
              <Link href={"/products/kids-wear"}> Kid's </Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link href={"/products/all"}>All Products</Link>
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
