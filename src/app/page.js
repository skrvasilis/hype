import styles from "./page.module.scss";

export default function Home() {
  return (
    <section className={styles.banner}>
      <div className={styles.logo}>
    <h1>HYPE</h1>
    <p className={styles.subtitle}>Marketing studio</p>
    </div>
  </section>
  );
}
