import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 6em;
  padding: 2em 0; /* Adiciona um espaçamento interno */
`;

export const Section1 = styled.section`
  width: 100%;
  height: 58em; /* Ajuste a altura conforme necessário */
  background-image: url(${(props) => props.background});
  background-size: cover; /* Faz a imagem cobrir toda a seção */
  background-position: center; /* Centraliza a imagem */
  background-repeat: no-repeat; /* Evita a repetição da imagem */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white; /* Cor do texto (ajuste conforme necessário) */
`;

export const Section2 = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em 0; /* Adiciona espaçamento interno */
  margin: 3em 0; /* Adiciona espaçamento externo */

  .skils {
    width: 60%; /* Aumenta a largura para melhor aproveitamento do espaço */
    max-width: 1200px; /* Define uma largura máxima para o conteúdo */

    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(350px, 1fr)
    ); /* Cria colunas responsivas */
    gap: 3em; /* Espaçamento entre os cards */
    justify-content: center;

    .card {
      max-height: auto; /* Altura fixa para os cards */
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      margin-bottom: 4em;

      .header {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1em;

        svg {
          font-size: 3.5em;
          opacity: 0.6;
        }

        p {
          font-size: 1.6em;
          font-weight: 500;
          text-align: center;
          opacity: 0.8;
        }
      }

      .description {
        width: 100%;
        height: 6em;
        display: flex;
        align-items: center;

        p {
          font-size: 1em;
          font-weight: 700;
          opacity: 0.6;
        }
      }

      .content {
        width: 95%;
        padding-left: 2em;

        ul {
          li {
            font-weight: 500;
            margin-bottom: 0.5em;
            opacity: 0.6;
          }
        }
      }
    }
  }
`;
