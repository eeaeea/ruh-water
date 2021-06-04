import styles from "./styles.module.scss";

export default function Section3() {
  return (
    <>
      <div id="section3" className={styles.container}>
        <span>COMO FUNCIONA</span>
        <h1>Nossos Equipamentos</h1>
        <p>
          Sabemos a melhor solução para todas as suas ideias de negócios e
          podemos ajudá-lo
          <br /> a resolver todos os problemas de negócios
        </p>

        <div className={styles.containerCard}>
          <img src="/images/card-02.png" alt="" />
          <div>
            <h2>Auditoria Empresarial</h2>
            <p>
              Uma auditoria examina os registros financeiros da sua empresa para
              verificar se eles são preciso. Isso é feito por meio de uma
              revisão sistemática de suas transações.
            </p>
          </div>
        </div>

        <div className={styles.containerCard}>
          <img src="/images/card-02.png" alt="" />
          <div>
            <h2>Horímetro</h2>
            <p>
              Solução inteligente para contabilização de tempo de funcionamento
              de dispositivos, gerenciamento de vazão volumétrica e relatórios.
            </p>
          </div>
        </div>

        <div className={styles.containerCard}>
          <img src="/images/card-03.png" alt="" />
          <div>
            <h2>Fluviômetro</h2>
            <p>
              Solução inteligente para medição e monitoramento de parâmetros
              Fluviométricos, gerenciamento do fluxo e vazão para auxílio em
              decisões.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
