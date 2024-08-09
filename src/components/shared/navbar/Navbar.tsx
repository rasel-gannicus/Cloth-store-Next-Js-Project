import Image from "next/image";
import Link from "next/link";
import { MenuItems } from "./MenuItems";
import logo from "@/assets/img/logo 123.png";
import { CircleUser, Menu, Package2, Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <header className="absolute left-0 right-0 z-50 top-0 flex h-16 items-center gap-4  px-4 md:px-6">
      <nav className="hidden  flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 text-white">
        {/* <Link href="/" className="flex justify-center items-center gap-3">
          <Image
            alt="Logo for Navbar"
            src={logo}
            className="rounded-sm max-w-80 w-10 "
          />
        </Link> */}
        <Link href="#" className=" transition-colors hover:text-foreground">
          Home
        </Link>
        <Link href="#" className=" transition-colors hover:text-foreground">
          Orders
        </Link>
        <Link href="#" className=" transition-colors hover:text-foreground">
          Products
        </Link>
        <Link href="#" className=" transition-colors hover:text-foreground">
          Contact
        </Link>
        <Link href="#" className=" transition-colors hover:text-foreground">
          Analytics
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium ">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link href="#" className="hover:text-foreground">
              Dashboard
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground "
            >
              Orders
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Products
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Customers
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Analytics
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Navbar;

{
  <div className="navbar absolute top-0  text-white   mx-auto   z-50   md:px-16 lg:px-2">
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
            "menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 z-50"
          }
        />
      </div>

      <div className="flex gap-1 navbar-center justify-center items-center">
        {/* --- Navbar Logo --- */}
        <div className=" order-2 md:order-1  p-1 mr-2 ">
          <Link href="/" className="flex justify-center items-center gap-3">
            <Image
              alt="Logo for Navbar"
              src={logo}
              width={60}
              height={60}
              className="rounded-sm"
            />
            <p className="font-bold text-2xl">Cotton Club</p>
          </Link>
        </div>
      </div>
    </div>

    <div className="navbar-center hidden lg:flex lg:flex-1 lg:justify-end ">
      <MenuItems classes={"menu menu-horizontal px-1 z-50"} />
    </div>
  </div>;
}
