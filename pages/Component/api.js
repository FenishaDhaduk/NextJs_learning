// import React from 'react'

import Link from "next/link";

// getStaticProps use for fetch a data same as a work of useeffect in react js
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  // retun props use is complasary
  return {
    props: { items: data },
  };
};

export default function api({ items }) {
  return (
    <div>
      {items.slice(0, 5).map((item) => {
        return (
          <div style={{ display: "flex" }}>
            <h1>{item.id}</h1>
            <Link href={`/dynamicroutesrestapi/${item.id}`}>
              <h2>{item.title}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
