import styles from "./styles.module.scss";

export default function Section4() {
  return (
    <>
      <div id="section4" className={styles.container}>
        <h1>Parceiros</h1>

        <div className={styles.containerContent}>
          <img src="/images/parceiro-6.png" alt="" />
          <img src="/images/parceiro-1.png" alt="" />
          <img src="/images/parceiro-2.png" alt="" />
          <img src="/images/parceiro-3.png" alt="" />
        </div>
      </div>
    </>
  );
}
