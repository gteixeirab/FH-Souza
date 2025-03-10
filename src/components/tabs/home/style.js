import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
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
  height: 40em;
  background-color: #334155;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  .content {
    width: 60%;
    height: 75%;
    display: flex;
    gap: 2em;

    .infos {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
        font-size: 3em;
        margin-bottom: 0.5em;
      }

      p {
        font-size: 1.2em;
        line-height: 1.5;
        margin-bottom: 1.5em;
      }

      h2 {
        font-size: 1.8em;
        margin-bottom: 1em;
      }

      .team {
        display: flex;
        gap: 1em;
        flex-wrap: wrap;

        span {
          background-color: #475569;
          padding: 0.5em 1em;
          border-radius: 0.5em;
          font-size: 1em;
        }
      }
    }

    .image-container {
      width: 50%;
      border-radius: 1em; /* Bordas arredondadas */
      height: 100%; /* Garante que a div ocupe toda a altura */
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden; /* Evita que a imagem ultrapasse as bordas arredondadas */

      .image {
        width: 20em; /* Faz a imagem ocupar toda a largura da div */
        height: 90%; /* Faz a imagem ocupar toda a altura da div */
        object-fit: cover; /* Mantém as proporções da imagem e cobre a div */
        border-radius: 2em; /* Bordas arredondadas */
      }
    }
  }
`;

export const Section3 = styled.section`
  width: 100%;
  height: 40em;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;

  .title {
    width: 80%;
    height: 5em;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .FHNEWS {
      font-size: 4em;
      font-weight: 500;
    }

    .button {
      border: 1px solid black;
      width: 20em;
      height: 3em;
      border-radius: 2em;
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        padding-left: 1em;
      }

      .icon {
        width: 2em;
        height: 2em;
        background-color: black;
        border-radius: 50%;
        margin-right: 0.5em;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #5b8e3f;
        user-select: none;
        cursor: pointer;
      }
    }
  }

  .carousel {
    border: 1px solid black;
    width: 80%;
    height: 25em;
  }
`;

export const Section4 = styled.section`
  width: 100%;
  height: 30em;
  background-color: #334155;
  display: flex;
  justify-content: center; /* Espaço entre texto e círculos */
  align-items: center; /* Centraliza verticalmente */
  color: white;
  padding: 0 5em; /* Adiciona um pouco de espaçamento nas laterais */

  .text {
    width: 20em; /* Largura fixa para o texto */
    font-size: 1.5em;
    font-weight: 300;
    line-height: 1.5;
    text-align: left; /* Alinha o texto à esquerda */
  }

  .circles {
    display: flex;
    justify-content: flex-end; /* Alinha os círculos à direita */
    align-items: center; /* Centraliza verticalmente os círculos */

    .circle {
      width: 10em;
      height: 10em;
      border: 2px solid #5b8e3f;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 1.2em;
      font-weight: 900;
      color: #5b8e3f;
      transition: background-color 0.3s ease;
      margin-left: -1.5em; /* Sobreposição dos círculos */

      &:first-child {
        margin-left: 0; /* Remove a margem do primeiro círculo */
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.05); /* Efeito hover */
      }
    }
  }
`;

export const Section5 = styled.section`
  width: 100%;
  height: 25em;
`;

export const Section6 = styled.section`
  width: 100%;
  height: auto;
  background-color: #334155;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 2em 0;

  .fhhub {
    width: 75%;
    height: 25em;
    display: flex;

    .diagram {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      .title {
        width: 50%;
        height: 3em;
        border: 1px solid white;
        border-radius: 2em;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .image-container {
        width: 50%;
        height: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;

        .diagram-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }

    .fhhub-image {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;

      .fhhub-image-content {
        width: 100%;
        height: 80%;
        object-fit: cover;
        border-radius: 1em;
      }
    }
  }

  .infos {
    width: 75%;
    height: 25em;
    display: flex;
    margin-top: 2em;

    .text {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 1em;
      padding-right: 3em; /* Recuo para a esquerda */

      h1 {
        font-size: 2em;
        font-weight: 400;
      }

      p {
        font-size: 1.2em;
        font-weight: 300;
        line-height: 1em;
      }
    }

    .infos-image {
      min-width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;

      .infos-image-content {
        width: 100%;
        height: 80%;
        object-fit: cover;
        border-radius: 1em;
      }
    }
  }

  .newsletter {
    width: 75%;
    height: 35em;
    display: flex;
    margin-top: 2em;

    .newsletter-content {
      border: 1px solid white;
      width: 50%;
      height: 100%;
      border-radius: 1.5em;
      background-color: rgba(255, 255, 255, 0.1);
    }

    .newsletter-image {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;

      .newsletter-image-content {
        width: 70%;
        height: 60%;
        object-fit: cover; /* Mantém as proporções da imagem e cobre o espaço */
      }
    }
  }
`;

export const Section7 = styled.section`
  width: 100%;
  height: 35em;
  display: flex;
  justify-content: center;
  align-items: center;

  .infos {
    width: 35%;
    height: 60%;
    background-color: lightgray;
    border-radius: 1em;
    display: flex;
    justify-content: center;
    align-items: center;

    .photo {
      border: 1px solid black;

      min-width: 10em;
      height: 100%;
    }

    .text {
      width: calc(100% - 10em);
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2em;
    }
  }

  .adresses {
    width: 35%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2em;

    .social {
      width: auto;
      height: auto;
      display: flex;
      justify-content: space-between;
      gap: 0.5em;

      div {
        width: 3em;
        height: 3em;
        border-radius: 5px;
        background-color: darkgray;
      }
    }

    .local {
      width: 10em;
      height: 2em;
      border: 1px solid black;
      border-radius: 1em;
    }

    .cep {
      width: 30em;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
`;
