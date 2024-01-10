"use client";

import Image from "next/image";

// import Image from "@/components/image";
import bannerImg from "@/assets/home.png";

const Home = () => {
  return (
    <div className="grid grid-cols-12 bg-[#c2d7f5] relative z-0 top-[64px]">
      <div className="flex col-span-8 col-start-4">
        <div className="mt-8">
          <h3 className="text-[50px] mt-8 max-w-[540px] mb-[20px]">Great software is built with amazing developers</h3>
          <p className="text-[18px] max-w-[410px] leading-9">
            We help build and manage a team of world-class developers to bring
            your vision to life
          </p>
        </div>
        <div
          style={{
            display: "flex",
            mixBlendMode: "darken",
            position: "relative",
            maxWidth: "none",
          }}
        >
          <Image src={bannerImg} />
        </div>
      </div>
    </div>
  );
};

export default Home;



