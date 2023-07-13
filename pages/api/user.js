// import React from 'react'

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: { data },
  };
};

function user({ data }) {
  return (
    <div>
      {data.map((item) => {
        return (
          <div>
            <h1>{item.id}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default user;
