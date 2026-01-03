import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "../Link/Link";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About Us" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/blog", name: "Blog" },
  ];

  return (
    <>
      <nav className="">
        <div
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl  bg-yellow-400 p-4"
        >
          {open === true ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>

        <ul
          className={`md:flex flex-row justify-center absolute md:static w-full bg-green-400 px-8 p-4 font-semibold text-xl
            ${open ? "top-16" : "-top-60"}
            `}
        >
          {routes.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
