import Image from "next/image";
import styles from "./styles.module.scss";

export default function Section1() {
  return (
    <>
      <div id="section1" className={styles.container}>
        <header>
          <a href="#section3">
            <img src="/images/logo-nova.png" alt="Logo Empresa" />
          </a>
          <nav>
            <a href="http://">Home</a>
            <a href="http://">Seus benefícios</a>
            <a href="http://">Nosso processo</a>
            <a href="http://">Nossos trabalhos</a>
            <a href="http://">Testemunhos</a>
          </nav>
          {/* <button>COMECE AGORA!</button> */}
        </header>

        <div className={styles.containerContent}>
          <h1>
            Aprimore sua experiência com
            <br /> a melhor tecnologia em medições hídricas
          </h1>
          {/* <h2>Comunicação Via Satélite. Dados em Tempo Real.</h2> */}
          <button>COMECE AGORA!</button>
          <Image src="/images/hero.png" alt="" height={650} width={880} />
        </div>
      </div>
    </>
  );
}
