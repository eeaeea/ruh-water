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
          <img
            src="/images/Imagem-RuhWater-6.png"
            alt="fluviometro"
            width="50"
            height="50"
          />

          <div>
            <h2>Fluviômetro</h2>
            <p>
              Solução inteligente para medição e monitoramento de parâmetros
              fluviométricos, gerenciamento do fluxo e vazão para auxílio em
              decisões.
            </p>
          </div>
        </div>

        <div className={styles.containerCard}>
          <img
            src="/images/Imagem-RuhWater-3.png"
            alt="horimetro"
            width="50"
            height="50"
          />

          <div>
            <h2>Horímetro</h2>
            <p>
              Solução inteligente para contabilização de tempo de funcionamento
              de dispositivos, gerenciamento de vazão volumétrica e relatórios.
            </p>
          </div>
        </div>

        <div className={styles.containerCard}>
          <img
            src="/images/Imagem-RuhWater-9.png"
            alt="pluviometro"
            width="50"
            height="50"
          />

          <div>
            <h2>Pluviometro</h2>
            <p>
              Solução inteligente para medição automática do volume de chuvas,
              gerenciamento da quantidade de chuva com relatórios e gráficos.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
