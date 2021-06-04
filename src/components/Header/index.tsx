import Image from "next/image";
import styles from "./styles.module.scss";
export default function Header() {
  return (
    <>
      <div className={styles.container}>
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
            {/* <a href="http://">Inicie um projeto</a> */}
          </nav>
        </header>

        <div></div>
      </div>
    </>
  );
}
