import Link from "next/link";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className="">
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <Link
              href="/"
              //   onClick={() => setOpenMenu(false)}
            >
              Home
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link
              href="../about"
              //   onClick={() => setOpenMenu(false)}
            >
              about
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link
              href="../movie"
              //   onClick={() => setOpenMenu(false)}
            >
              movie
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link
              href="../contact"
              //   onClick={() => setOpenMenu(false)}
            >
              contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
