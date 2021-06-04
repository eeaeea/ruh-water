import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <>
      <div className={styles.container}>
        <header>
          <img src="/images/logo.svg" alt="Logo Empresa" />
          <nav>
            <a href="#section1">Home</a>
            <a href="#section2">Seus benefícios</a>
            <a href="#section3">Nosso processo</a>
            <a href="#section4">Nossos trabalhos</a>
            <a href="#section5">Testemunhos</a>
          </nav>
        </header>

        <div></div>
      </div>
    </>
  );
}
