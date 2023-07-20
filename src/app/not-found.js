import styles from "../app/styles/common.module.css";
import Link from "next/link";

const NotFound = () => {
  return (
    <section style={{ textAlign: "center", marginTop: "100px" }}>
      <div>
        <h1>404</h1>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">
          <button className={styles.button_css}>Go to Home Page</button>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
