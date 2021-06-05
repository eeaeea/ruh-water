import Image from "next/image";
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
          <Image
            src="/images/Imagem-RuhWater-11.png"
            alt=""
            height={262}
            width={420}
          />
          <div>
            <h2>Integração com nosso Sistema</h2>
            <p>
              Comunicação Via Satélite ideal para locais remotos e sem rede.
              Dados em tempo real, gráficos para análise de chuvas, registro de
              histórico e muito mais.
            </p>
          </div>
        </div>

        <div className={styles.containerCard}>
          <Image
            src="/images/Imagem-RuhWater-3.png"
            alt=""
            height={262}
            width={420}
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
          <Image
            src="/images/Imagem-RuhWater-9.png"
            alt=""
            height={262}
            width={420}
          />
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
