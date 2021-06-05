import styles from "./styles.module.scss";

export default function Section4() {
  return (
    <>
      <div id="section4" className={styles.container}>
        <span>PARCEIROS</span>
        <h1>
          We work with thousands of the world’s
          <br /> leading brands
        </h1>

        <div className={styles.containerContent}>
          <img src="/images/parceiro-6.png" alt="" />
          <img src="/images/parceiro-1.png" alt="" />
          <img src="/images/parceiro-2.png" alt="" />
          <img src="/images/parceiro-3.png" alt="" />
        </div>

        <p>
          Você estará em boa companhia.
          <br /> Trabalhamos com Parceiros líderes mundiais.
        </p>
      </div>
    </>
  );
}
