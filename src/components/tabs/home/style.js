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
    width: 80%;
    height: 25em;

    .swiper {
      width: 90%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        width: 40em;
        height: 20em;
        object-fit: cover; /* Garante que a imagem cubra o slide */
      }
    }

    .swiper-button-next,
    .swiper-button-prev {
      color: #5b8e3f; /* Cor dos botões de navegação */
      display: none;
    }

    .swiper-pagination-bullet {
      background-color: #5b8e3f; /* Cor dos pontos de paginação */
    }
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
  gap: 6em;

  .text {
    width: 20em; /* Largura fixa para o texto */
    font-size: 1.5em;
    font-weight: 300;
    line-height: 1.5;
    text-align: left; /* Alinha o texto à esquerda */
    opacity: 0.8;
  }

  .circles {
    display: flex;
    justify-content: flex-end; /* Alinha os círculos à direita */
    align-items: center; /* Centraliza verticalmente os círculos */

    .circle {
      width: 10em;
      height: 10em;
      border: 2px solid rgb(108, 200, 60);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 1.2em;
      font-weight: 900;
      color: rgb(108, 200, 60);
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
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4em 0;
  gap: 2em;

  .title {
    width: auto;
    height: auto;
    font-size: 2.5em;
    font-weight: 300;
  }

  .services {
    width: 65%;
    height: 15em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow-x: auto; /* Adiciona a barra de rolagem horizontal */
    gap: 1em; /* Espaçamento entre os itens */
    padding: 0 1em; /* Espaçamento interno */

    div {
      width: 16em; /* Largura mínima de cada item */
      height: 8em; /* Altura fixa para os itens */
      display: flex;
      flex-direction: column; /* Alinha os itens verticalmente */
      justify-content: space-between;
      align-items: center;
      gap: 0.5em; /* Espaçamento entre a descrição e o ícone */
      opacity: 0.8;

      .description {
        width: 100%;
        height: auto;

        p {
          font-size: 2em; /* Tamanho da fonte da descrição */
          text-align: center; /* Centraliza o texto */
        }
      }

      svg {
        font-size: 4em; /* Tamanho do ícone */
        color: black;
        opacity: 0.7;
      }
    }
  }
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
  gap: 6em;

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
        opacity: 0.8;
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
      height: 25em;
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
    height: auto;
    display: flex;
    justify-content: space-between;
    margin-top: 2em;

    .text {
      width: 45%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 1em;
      padding-right: 3em; /* Recuo para a esquerda */
      opacity: 0.8;

      h1 {
        font-size: 2em;
        font-weight: 400;
      }

      p {
        font-size: 1em;
        font-weight: 300;
        line-height: 1em;

        line-height: 1.4em;
      }
    }

    .infos-image {
      width: 50%;
      height: 25em;
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
    margin: 2em 0;

    .newsletter-content {
      max-width: 50%;
      max-height: 100%;
      border-radius: 1.5em;
      background-color: rgba(0, 0, 0, 0.3);
      padding: 2em;

      h1 {
        font-size: 2em;
        opacity: 0.8;
      }
      p {
        font-size: 1.2em;
        line-height: 1.5em;
        margin: 1em 0;
        opacity: 0.8;
      }

      .btn-content {
        width: 100%;
        height: 10em;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        .inputs {
          width: 90%;
          display: flex;
          justify-content: space-between;

          input {
            width: 43%;
            height: 2.5em;
            background-color: rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.5);
            color: white;
            border-radius: 10px;
            outline: none;
            padding: 0 1em;
          }
        }

        .send {
          width: 8em;
          height: 2.5em;
          background-color: #5b8e3f;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          cursor: pointer;
          opacity: 0.8;

          &:hover {
            opacity: 1;
          }
        }
      }
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

  .about {
    width: 35%;
    height: 60%;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 1em;
    display: flex;
    justify-content: center;
    align-items: center;

    .photo {
      min-width: 10em;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .circle {
        border: 1px solid black;
        width: 8em;
        height: 8em;
        border-radius: 50%;
        overflow: hidden; /* Garante que a imagem não ultrapasse o círculo */

        .about-image-content {
          width: 100%;
          height: 100%;
          object-fit: cover; /* Faz a imagem cobrir o círculo sem distorcer */
        }
      }
    }

    .text {
      width: calc(100% - 10em);
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1em;
      opacity: 0.7;
      line-height: 1.5em;
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
        background-color: rgba(0, 0, 0, 1);
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0.7;
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }

        svg {
          font-size: 1.7em;
        }
      }
    }

    .local {
      width: 10em;
      height: 2em;
      border: 1px solid black;
      border-radius: 1em;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.3em;
      opacity: 0.8;
      cursor: pointer;

      p {
        font-size: 0.8em;
        font-weight: 700;
      }
    }

    .cep {
      width: 30em;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      opacity: 0.8;
    }
  }
`;
