import styles from "./styles.module.scss";

export default function Section4() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerContent}>
          <div className={styles.containerHeader}>
            <span>MARCAS</span>
            <h1>
              Trabalhamos com milhares
              <br /> de marcas líderes
            </h1>
          </div>
          <div className={styles.containerCompanys}>
            <img src="/images/company1.png" alt="" />
            <img src="/images/company2.png" alt="" />
            <img src="/images/company3.png" alt="" />
            <img src="/images/company4.png" alt="" />
            <img src="/images/company5.png" alt="" />
            <img src="/images/company6.png" alt="" />
            <img src="/images/company7.png" alt="" />
            <img src="/images/company8.png" alt="" />
            <img src="/images/company9.png" alt="" />
            <img src="/images/company10.png" alt="" />
          </div>
          <span>
            Você estará em boa companhia. Trabalhamos com
            <br />
            marcas líderes mundiais.
          </span>
        </div>
      </div>
    </>
  );
}
