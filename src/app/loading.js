import style from "../app/styles/common.module.css";

export default function loading() {
  return (
    <section className={style.loading_section}>
      <div className={style.loading}></div>
    </section>
  );
}
