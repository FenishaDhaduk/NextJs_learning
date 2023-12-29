import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-slate-700 h-40 mt-auto">
        <div className="flex p-5 justify-around">
          <div className="text-white flex text-center flex-col justify-center">
            <h1 className="text-3xl">Welcome to Work manager</h1>
            <p>
              Qui do occaecat pariatur Lorem et nostrud laboris veniam veniam
              laborum cupidatat elit in.
            </p>
          </div>
          <div>
          <ul className="text-white text-center">
          <li><Link href={"#"}>Linkedin</Link></li>
          <li><Link href={"#"}>YouTube</Link></li>
          <li><Link href={"#"}>Instagram</Link></li>
          </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
