import { useState } from "react";
import ReactModal from "react-modal";

import styles from "./styles.module.scss";

export default function Section3() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const Modal2 = ReactModal;

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <div id="section3" className={styles.container}>
        <ReactModal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >
          <h1 style={{ color: "#000" }}>MODAL</h1>
        </ReactModal>

        <span>COMO FUNCIONA</span>
        <h1>Nossos Equipamentos</h1>
        <p>
          Sabemos a melhor solução para todas as suas ideias de negócios e
          podemos ajudá-lo
          <br /> a resolver todos os problemas de negócios
        </p>

        <div className={styles.containerCard}>
          <button onClick={handleOpenModal}>
            <img src="/images/Imagem-RuhWater-6.png" alt="" />
          </button>
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
          <button onClick={handleOpenModal}>
            <img src="/images/Imagem-RuhWater-3.png" alt="" />
          </button>
          <div>
            <h2>Horímetro</h2>
            <p>
              Solução inteligente para contabilização de tempo de funcionamento
              de dispositivos, gerenciamento de vazão volumétrica e relatórios.
            </p>
          </div>
        </div>

        <div className={styles.containerCard}>
          <button onClick={handleOpenModal}>
            <img src="/images/Imagem-RuhWater-9.png" alt="" />
          </button>
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
