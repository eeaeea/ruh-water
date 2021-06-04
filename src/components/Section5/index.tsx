import styles from "./styles.module.scss";

export default function Section5() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerContent}>
          <div>
            <span>COMECE CONOSCO</span>
            <h1>Comece a trabalhar mais rápido hoje</h1>
            <p>
              Sabemos a melhor solução para todas as suas ideias de negócios e
              podemos ajudá-lo a resolver todos os problemas de negócios
            </p>
            <button>COMECE AGORA!</button>
          </div>
          <img src="/images/section-five.png" alt="" />
        </div>
      </div>
    </>
  );
}
