import MovieCard from "@/app/component/MovieCard";
import styles from "@/app/styles/common.module.css";

const movie = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const url = process.env.RAPID_KEY;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0cc5fae45dmshb054da12f802a42p15914djsn6d48857e4ce3",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const main_data = result.titles;

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1 style={{ color: "#fb0c0c" }}>Series & Movie</h1>

          <div className={styles.card_section}>
            {main_data.slice(6).map((curElem) => {
              return <MovieCard key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default movie;
