import Link from "next/link";
import style from "../contact/contact.module.css";
import { MdEmail, MdVoiceChat, MdForum } from "react-icons/md";

export default function Contactcard() {
  return (
    <div className={style.section}>
      <div className={style.container}>
        <div className={style.grid}>
          <div className={style.grid_card}>
            <i>
              {" "}
              <MdEmail />{" "}
            </i>
            <h2>Email</h2>
            <p>Monday to Friday Expected </p>
            <p className={style.last_para}>response time: 72 hours </p>
            <Link href="/">
              {" "}
              Send Email <span>-&gt;</span>
            </Link>
          </div>

          {/* second */}
          <div className={style.grid_card}>
            <i>
              {" "}
              <MdVoiceChat />{" "}
            </i>
            <h2>Live Chat</h2>
            <p>Weekdays: 9 AM — 6 PM ET</p>
            <p className={style.last_para}>Weekends: 9 AM — 5 PM ET </p>
            <Link href="/">
              {" "}
              Chat Now <span>-&gt;</span>
            </Link>
          </div>
          {/* third */}
          <div className={style.grid_card}>
            <i>
              {" "}
              <MdForum />{" "}
            </i>
            <h2>Community Forum</h2>
            <p>Monday to Friday Expected </p>
            <p className={style.last_para}>response time: 72 hours </p>
            <Link href="/" className={style.anchorLink}>
              {" "}
              Ask The Community <span>-&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
