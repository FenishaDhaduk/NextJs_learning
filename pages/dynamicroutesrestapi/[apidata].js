import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  //   console.log("data", data);
  const paths = data.map((president) => {
    return {
      // apidata name same as a save a file name
      params: { apidata: `${president.id}` }, // Change the parameter name to "apidata"
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.apidata;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  // retun props use is complasary
  return {
    props: { items: data },
  };
};

export default function apidata({ items }) {
  return (
    <div>
      <h1>{items.id}</h1>
      <h2>{items.title}</h2>
      <h3>{items.body}</h3>
    </div>
  );
}
