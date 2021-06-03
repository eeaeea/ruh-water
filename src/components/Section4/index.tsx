import styles from "./styles.module.scss";

export default function Section4() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerContent}>
          <div className={styles.containerHeader}>
            <span>BRANDS</span>
            <h1>We work with thousands of the world’s<br /> leading brands</h1>
          </div>
          <div className={styles.containerCompanys}></div>
          <span>
            You're going to be in good company. We work with<br /> world's leading
            brands.
          </span>
        </div>
      </div>
    </>
  );
}
