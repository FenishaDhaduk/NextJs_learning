"use client";

import { Logoutuser } from "@/app/services/Loginsevice";
import UserContext from "@/context/userContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext } from "react";
import { toast } from "react-toastify";

function CustomNavbar() {
  const pathname = usePathname();
  const userfetchdata = useContext(UserContext);
  const router = useRouter();

  const currentuserlogout = async () => {
    try {
      const data = await Logoutuser();
      console.log("logout", data);
      userfetchdata.setUser(undefined);
      router.push("/");
      toast.error(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav className="bg-white h-16 pt-5 pb-5 flex justify-between items-center fixed w-full top-0 z-50">
        <div className="flex items-center pl-[30px] pr-[30px] m-0 min-w-0 w-[100%] max-w-[1230px] ml-auto mr-auto">
          <a className="m-0 min-w-0 cursor-pointer pr-30px font-black decoration-none">
            <h1 className="m-0 min-w-0 max-w-[100%] h-auto flex">
              {" "}
              Startup Leading
            </h1>
          </a>
          <div className="flex m-0 min-w-0 mr-auto ml-auto">
            {userfetchdata?.user?.name && (
              <>
                <ul className="flex space-x-5">
                  <li>
                    <Link
                      href={"/"}
                      className={`hover:text-[#8D448B]  link ${
                        pathname === "/" ? "active" : ""
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => userfetchdata?.setEditTask(false)}
                      href={"/addTask"}
                      scroll={false}
                      className="hover:text-[#8D448B]"
                    >
                      Add Task
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-[#8D448B]" href={"/show-tasks"}>
                      Show Tasks
                    </Link>
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
                    <Link className="hover:text-[#8D448B]" href={""}>
                      {userfetchdata?.user?.name}
                    </Link>
                  </li>
                  <li>
                    <button
                      className="hover:text-[#8D448B]"
                      onClick={currentuserlogout}
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
              {!userfetchdata?.user?.name && (
                <>
                  <li>
                    <Link className="hover:text-[#8D448B]" href={"/login"}>
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-[#8D448B] font-[16px] font-bold" href="/SignUp">Register Now </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default CustomNavbar;
