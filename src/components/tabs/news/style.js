import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  padding: 2em 0; /* Adiciona um espaçamento interno */
`;

export const Content = styled.div`
  width: 95%; /* Aumenta a largura para melhor aproveitamento do espaço */
  max-width: 1200px; /* Define uma largura máxima para o conteúdo */
  margin-top: 10em; /* Reduz a margem superior */

  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(270px, 1fr)
  ); /* Cria colunas responsivas */
  gap: 1.5em; /* Espaçamento entre os cards */
  justify-content: center;

  .card {
    border: 1px solid rgba(0, 0, 0, 0.1);
    max-height: 25em;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-5px); /* Efeito de hover */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra ao passar o mouse */
    }

    .image {
      width: 100%;
      height: 10em;
      background-size: cover;
      background-position: center;
    }

    .title {
      max-width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.1em 1em;

      p {
        font-size: 1.1em;
        font-weight: 600;
      }
    }

    .introduce {
      padding: 1em;
      font-size: 0.9em;
      line-height: 1.5;
      color: #555;
    }
  }
`;
