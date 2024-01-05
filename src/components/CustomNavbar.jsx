"use client";

import { Logoutuser } from "@/app/services/Loginsevice";
import UserContext from "@/context/userContext";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext } from "react";
import { toast } from "react-toastify";

function CustomNavbar() {
  const pathname = usePathname();
  const userfetchdata = useContext(UserContext);
  const router = useRouter()

  const currentuserlogout = async()=>{
    try {
      const data = await Logoutuser();
      console.log("logout", data);
      userfetchdata.setUser(undefined)
      router.push("/")
      toast.error(data.message);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <nav className="bg-blue-600 h-16 py-2 px-36 flex justify-between items-center text-white">
        <div className="brand">
          <h1 className="text-2xl font-semibold">
            <a href="#!">Work Manager</a>
          </h1>
        </div>
        <div>
          {userfetchdata?.user?.name && (
            <>
              <ul className="flex space-x-5">
                <li>
                  <Link
                    href={"/"}
                    className={`hover:text-blue-300  link ${
                      pathname === "/" ? "active" : ""
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/addTask"}
                    scroll={false}
                    className="hover:text-blue-200"
                  >
                    Add Task
                  </Link>
                </li>
                <li>
                  <Link href={"/show-tasks"}>Show Tasks</Link>
                </li>
              </ul>
            </>
          )}
        </div>
        <div>
          <ul className="flex space-x-3">

          {userfetchdata?.user?.name && (
            <>
              <li>
              <Link href={""}>{userfetchdata?.user?.name}</Link>
              </li>
              <li>
                <button onClick={currentuserlogout}>Logout</button>
              </li>
            </>
          )}
            {!userfetchdata?.user?.name &&(
              <>
                <li>
                  <Link href={"/login"}>Login</Link>
                </li>
                <li>
                  <Link href={"/SignUp"}>Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default CustomNavbar;
