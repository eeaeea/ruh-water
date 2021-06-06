import styles from "./styles.module.scss";

export default function Section5() {
  return (
    <>
      <div id="section5" className={styles.container}>
        <div className={styles.containerContent}>
          <div>
            <span>COMECE CONOSCO</span>
            <h1>Como podemos aprimorar sua lavoura?</h1>
            <p>
              Sabemos a melhor solução para todas as suas ideias de negócios e
              podemos ajudá-lo a resolver todos os problemas de negócios
            </p>
            <button>COMECE AGORA!</button>
          </div>

          <img src="/images/environmental_study.svg" alt="" />
        </div>
      </div>
    </>
  );
}
