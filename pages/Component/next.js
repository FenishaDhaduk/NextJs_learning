// import React from 'react'
import { useRouter } from "next/router";
import style from "../../styles/Home.module.css";
import Head from "next/head";
export default function next() {
  const router = useRouter();
  return (
    <>
      <div className={style.description}>Next page</div>
      <Head>
        <title>nextpage</title>
      </Head>
      <button onClick={() => router.push("../blog/pageno")}>
        Back to Pagenopage
      </button>
    </>
  );
}
