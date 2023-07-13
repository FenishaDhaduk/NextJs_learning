// import React from 'react'
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

// url : blog/anynumber

export default function pageno() {
  const router = useRouter();
  const pageNumber = router.query.pageno;

  const customLoader = ({ src, width, quality }) => {
    const url = `${src}?w=${width}h=${height}&q=${quality || 75}`;
    console.log("url", url);

    return url;
  };
  return (
    <div>
      <h1>My blog {pageNumber} content</h1>
      <Head>
        <title>pageno</title>
      </Head>
      {/* <Link href="../Component/next">Next Page</Link> */}
      {/* if we add online a link of image than add hostname in  */}
      <div style={{ display: "flex" }}>
        <Image
          src="https://images.unsplash.com/photo-1688890239467-c43da335fe7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Picture of the author"
          width={400}
          height={400}
        />
        &nbsp;
        <Image
          src="https://images.unsplash.com/photo-1688890239467-c43da335fe7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Picture of the author"
          layout="fixed"
          width={400}
          height={400}
        />
        &nbsp;
        <Image
          src="https://images.unsplash.com/photo-1688890239467-c43da335fe7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Picture of the author"
          layout="fill"
          objectFit="none"
          // objectPosition="right"
          // loading="lazy"
          onLoadingComplete={(imageDimension) =>
            console.log(imageDimension, 1111)
          }
          // width={400}
          // height={400}
          // loader={customLoader}
        />
        &nbsp;
        {/* <Image
          src="https://media.istockphoto.com/id/121199853/photo/closeup-of-guy-working-on-a-laptop-indoor.jpg?s=2048x2048&w=is&k=20&c=AUgs2Itt-Kr87a75MNiX1D_jwA7EpvSe03NPnipTMKI="
          alt="Picture of the author"
          // layout="responsive"
          width={200}
          height={200}
        />
        &nbsp;
        <Image
          src="https://media.istockphoto.com/id/121199853/photo/closeup-of-guy-working-on-a-laptop-indoor.jpg?s=2048x2048&w=is&k=20&c=AUgs2Itt-Kr87a75MNiX1D_jwA7EpvSe03NPnipTMKI="
          width={300}
          height={300}
          alt="User profile picture"
          quality={80}
          loader={customLoader}
        /> */}
      </div>

      <div></div>
    </div>
  );
}
