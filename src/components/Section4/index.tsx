import styles from "./styles.module.scss";

export default function Section4() {
  return (
    <>
      <div id="section4" className={styles.container}>
        <div className={styles.containerContent}>
          <div className={styles.containerHeader}>
            <span>PARCEIROS</span>
            <h1>
              Empresas parceiras
              <br /> da RuhWather
            </h1>
          </div>
          <div className={styles.containerCompanys}>
            <img src="/images/parceiro-1.png" alt="" />
            <img src="/images/parceiro-2.png" alt="" />
            <img src="/images/parceiro-3.png" alt="" />
            <img src="/images/parceiro-6.png" alt="" />
          </div>
          <span>
            Você estará em boa companhia. Trabalhamos com
            <br />
            PARCEIROS líderes mundiais.
          </span>
        </div>
      </div>
    </>
  );
}
