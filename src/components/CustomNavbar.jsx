"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function CustomNavbar() {
  const pathname = usePathname()
  return (
    <>
      <nav className="bg-blue-600 h-16 py-2 px-36 flex justify-between items-center text-white">
        <div className="brand">
          <h1 className="text-2xl font-semibold">
            <a href="#!">Work Manager</a>
          </h1>
        </div>
        <div>
          <ul className="flex space-x-5">
            <li>
             <Link href={"/"} className={`hover:text-blue-300  link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
            </li>
            <li>
             <Link href={"addTask/"} scroll={false} className="hover:text-blue-200">Add Task</Link>
            </li>
            <li><Link href={"show-tasks/"}>Show Tasks</Link></li>
          </ul>
        </div>
        <div>
        <ul className="flex space-x-3">
        <li>
          <Link href={"/login"}>Login</Link>
        </li>
        <li>
          <Link href={"/SignUp"}>Sign Up</Link>
        </li>
        </ul>
        
        </div>
      </nav>
    </>
  );
}

export default CustomNavbar;
