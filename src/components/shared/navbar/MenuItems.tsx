import Image from "next/image";
import Link from "next/link";

export const MenuItems = ({ classes }: { classes: string }) => {
  return (
    <ul className={classes}>
      <li className="bg-orange-400 rounded font-semibold text-black hover:text-black">
        <Link href={"/flash-sale"}>Flash Sale</Link>
      </li>
      <li>
        <details>
          <summary>Category</summary>
          <ul className="p-2">
            <li>
              <Link href={"/products/mens-wear"}> Men&apos;s </Link>
            </li>
            <li>
            <Link href={"/products/women-clothing"}> Women&apos;s </Link>
            </li>
            <li>
              <Link href={"/products/kids-wear"}> Kid&apos;s </Link>
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
              <Image
                alt="Tailwind CSS Navbar component"
                src="https://i.ibb.co/WVwLvtn/Fj-U2lkc-WYAg-NG6d.jpg"
                className="rounded-full"
                width={100}
                height={100}
              />
              <p className="md:hidden">Profile</p>
            </div>
          </summary>
          <ul className="p-2 text-black">
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
