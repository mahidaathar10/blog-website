import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <ul className="flex justify-center items-center text-center bg-blue-950 py-3 text-white font-semibold ">
        <li className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/allpage">Blog</Link>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
