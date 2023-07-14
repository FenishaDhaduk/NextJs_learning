import styles from "@/app/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
// import Nav from "@/app/components/Nav";

const header = () => {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href="/">
          <Image src="next.svg" alt="my logo image" width={150} height={40} />
        </Link>
      </div>
      {/* <Nav /> */}
    </header>
  );
};

export default header;
