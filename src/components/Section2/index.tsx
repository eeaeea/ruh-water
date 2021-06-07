import styles from "./styles.module.scss";

export default function Section2() {
  return (
    <>
      <div id="section2" className={styles.container}>
        <span>RECURSOS</span>
        <h1>Veja o que temos para você:</h1>

        <div className={styles.containerCards}>
          <div>
            <h2>Tecnologia de ponta:</h2>
            <p>
              Utilizamos produtos de medição com tecnologia embarcada
              certificados e equipamentos de comunicação homologados pela
              Anatel. Produzimos as interfaces de comunicação e softwares de
              gestão em ambiente web formando um conjunto de soluções que traz a
              melhor experiência ao usuário.
            </p>
          </div>
          <div>
            <h2>Reduzindo despesas aumentando a confiabilidade:</h2>
            <p>
              A coleta automática dos dados gera confiança e possibilita
              economia em deslocamentos do leiturista, tempo de execução da
              tarefa, desgaste do veículo para deslocamento, combustível
              utilizado e segurança no trabalho. Soma-se a isto as imperfeições
              dos registros manuais, seja de confiabilidade de quem faz as
              leituras ou de interpretações erradas dos valores vistos, lidos e
              anotados.
            </p>
          </div>
          <div>
            <h2>Entrega da informação em tempo real:</h2>
            <p>
              Acesse a plataforma web e veja em vários formatos aquela
              informação que faz toda a diferença na tomada de decisão. Seja por
              visualização em mapa, gráficos ou relatórios, os dados capturados
              são disponibilizados em até 10 minutos após o seu registro na
              central de comunicação do equipamento.
            </p>
          </div>
          <div>
            <h2>Infraestrutura de baixo custo:</h2>
            <p>
              Nossas soluções para coleta de dados dispensam investimentos em
              redes de alimentação de energia, comunicação pela internet ou
              sinal de telefonia celular. Utilizamos modernos sistemas de
              comunicação via satélite alimentados por células fotovoltaicas em
              dispositivos compactos, eficientes e dotados de baterias
              auxiliares de longa duração.
            </p>
          </div>
          <div>
            <h2>Central de monitoramento dos dispositivos instalados:</h2>
            <p>
              Cada ponto de coleta é acompanhado pelo suporte que analisa o seu
              desempenho e funcionamento regular. Os dados são enviados
              independentemente das condições climáticas do momento, seja
              apagões no sistema elétrico ou de transmissão de dados, nas
              localidades onde estão instalados, faça chuva ou faça sol.
            </p>
          </div>
          <div>
            <h2>Rastreamento de dados</h2>
            <p>
              O hardware e software, que quando usados juntos permitem que você
              saiba onde algo está a qualquer momento
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
