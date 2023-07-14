import herostyle from "@/app/styles/herosection.module.css";
import style from "@/app/styles/common.module.css";
import Link from "next/link";
import { Mulish } from "next/font/google";

const mulish = Mulish({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Herosection() {
  return (
    <>
      <main className={herostyle.main_section}>
        <div className={style.container}>
          <div className={style.grid_two_section}>
            <div className={herostyle.hero_content}>
              <h1>
                <b>LET'S WATCH MOVIE TOGETHER</b>
              </h1>
              <p>
                &#128512; From award-winning dramas to blockbuster action
                movies, we&apos;ve got you covered. Browse our selection of the
                latest and greatest movies, and find your new favorite today.
              </p>
              <Link href="/movie">
                <button className={mulish.className}>Explore Movies</button>
              </Link>
            </div>
            <div className={herostyle.hero_image}></div>
          </div>
        </div>
      </main>
    </>
  );
}
