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
              About
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link
              href="../movie"
              //   onClick={() => setOpenMenu(false)}
            >
              Movie
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link
              href="../contact"
              //   onClick={() => setOpenMenu(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
