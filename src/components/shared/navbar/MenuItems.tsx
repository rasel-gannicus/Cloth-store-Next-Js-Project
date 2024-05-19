import Link from "next/link";


export const MenuItems = ({ classes }) => {
  return (
    <ul className={classes}>
      <li className="md:me-5">
        <Link href="/supplies" className='bg-gray-200 font-medium'>
        All Supplies
        </Link>
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
              <Link href='/dashboard'>Dashboard</Link>
            </li>
            <hr className="mx-auto" />
            <li>
              <Link href='/login'>Login</Link>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  );
};
