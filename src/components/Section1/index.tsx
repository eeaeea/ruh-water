import Image from "next/image";
import styles from "./styles.module.scss";

export default function Section1() {
  return (
    <>
      <div id="section1" className={styles.container}>
        <header>
          <Image
            src="/images/logo.svg"
            alt="Logo Empresa"
            height={61}
            width={259}
          />
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
            Estamos aqui para aprimorar
            <br /> sua lavoura!
          </h1>
          <h2>Comunicação Via Satélite. Dados em Tempo Real.</h2>
          <button>COMECE AGORA!</button>
          <img src="/images/hero.png" alt="" />
        </div>
      </div>
    </>
  );
}
