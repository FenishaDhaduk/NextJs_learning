import React from "react";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";

export default async function page({ params }) {
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${params.id}&lang=en`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0cc5fae45dmshb054da12f802a42p15914djsn6d48857e4ce3",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();

  const main_data = result[0].details;

  return (
    <div
      className={styles.card}
      style={{
        maxWidth: "26rem",
        position: "relative",
        top: "30%",
        left: "40%",
        height: "560px",
        marginTop: "40px",
      }}
    >
      <div className={styles.card_image}>
        <Image
          src={main_data.backgroundImage.url}
          alt={main_data.type}
          width={500}
          height={500}
        />
      </div>
      <div
        className={styles.card_data}
        style={{ padding: "7.2rem 1.2rem", height: "140px" }}
      >
        <h1>{main_data.type}</h1>
        <h2>{main_data.title}</h2>
        <p>{`${main_data.synopsis}`}</p>
      </div>
    </div>
  );
}
