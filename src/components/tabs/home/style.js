import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
`;

export const Section1 = styled.section`
  width: 100%;
  height: 100vh; /* Usando viewport height para cobrir a tela */
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  @media (max-width: 768px) {
    height: 50vh; /* Ajuste para telas menores */
  }
`;

export const Section2 = styled.section`
  width: 100%;
  padding: 4em 2em;
  background-color: #334155;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  .content {
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3em;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    .infos {
      width: 80%;

      @media (min-width: 768px) {
        width: 50%;
      }

      h1 {
        font-size: 2.5em;
        margin-bottom: 0.5em;

        @media (max-width: 768px) {
          font-size: 2em;
        }
      }

      p {
        font-size: 1.2em;
        line-height: 1.5;
        margin-bottom: 1.5em;
        opacity: 0.8;
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
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (min-width: 768px) {
        width: 50%;
      }

      .image {
        width: 60%;
        height: auto;
        border-radius: 1em;
      }
    }
  }
`;

export const Section3 = styled.section`
  width: 100%;
  padding: 4em 2em;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;

  .title {
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }

    .FHNEWS {
      font-size: 3em;
      font-weight: 500;
      color: #334155;

      @media (max-width: 768px) {
        font-size: 2.5em;
      }
    }

    .button {
      border: 1px solid #5b8e3f;
      padding: 0.5em 1.5em;
      border-radius: 2em;
      display: flex;
      align-items: center;
      gap: 0.5em;
      cursor: pointer;
      transition: all 0.3s ease;
      background-color: transparent;

      &:hover {
        background-color: #5b8e3f;
        color: white;

        .icon {
          background-color: white;
          color: #5b8e3f;
        }
      }

      p {
        color: #334155;
        font-weight: 500;
      }

      .icon {
        width: 2em;
        height: 2em;
        background-color: #5b8e3f;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        transition: all 0.3s ease;
      }
    }
  }

  .carousel {
    width: 100%;
    max-width: 1200px;
    padding: 0 2em;

    .swiper {
      width: 100%;
      height: 100%;
      padding-bottom: 3em;

      .swiper-slide {
        img {
          width: 100%;
          height: auto;
          object-fit: cover;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
      }

      /* Navigation arrows */
      .swiper-button-next,
      .swiper-button-prev {
        color: #5b8e3f;
        background-color: rgba(255, 255, 255, 0.8);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;

        &::after {
          font-size: 1.2rem;
          font-weight: bold;
        }

        &:hover {
          background-color: #5b8e3f;
          color: white;
          transform: scale(1.1);
        }
      }

      /* Pagination bullets */
      .swiper-pagination-bullet {
        background-color: #ccc;
        opacity: 1;
        width: 12px;
        height: 12px;
        transition: all 0.3s ease;

        &-active {
          background-color: #5b8e3f;
          transform: scale(1.2);
        }
      }
    }
  }
`;

export const Section4 = styled.section`
  width: 100%;
  height: auto; /* Altura automática para se ajustar ao conteúdo */
  min-height: 30em; /* Altura mínima para manter o visual */
  background-color: #334155;
  display: flex;
  flex-direction: column; /* Coluna em telas menores */
  justify-content: center;
  align-items: center;
  color: white;
  padding: 4em 2em; /* Padding ajustado para responsividade */
  gap: 4em; /* Espaçamento reduzido para telas menores */

  @media (min-width: 768px) {
    flex-direction: row; /* Linha em telas maiores */
    padding: 0 5em; /* Padding original para telas maiores */
    gap: 6em; /* Espaçamento original para telas maiores */
  }

  .text {
    width: 100%; /* Largura total em telas menores */
    max-width: 20em; /* Largura máxima para o texto */
    font-size: 1.5em;
    font-weight: 300;
    line-height: 1.5;
    text-align: center; /* Centralizado em telas menores */

    @media (min-width: 768px) {
      text-align: left; /* Alinhado à esquerda em telas maiores */
    }
  }

  .circles {
    display: flex;
    justify-content: center; /* Centralizado em telas menores */
    align-items: center;
    flex-wrap: wrap; /* Permite que os círculos se reorganizem em telas menores */
    gap: 1.5em; /* Espaçamento entre os círculos */

    @media (min-width: 768px) {
      justify-content: flex-end; /* Alinhado à direita em telas maiores */
      flex-wrap: nowrap; /* Mantém os círculos em linha */
      gap: 0; /* Remove o espaçamento entre os círculos */
    }

    .circle {
      width: 8em; /* Tamanho reduzido para telas menores */
      height: 8em;
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
      margin-left: -2em; /* Remove a margem negativa em telas menores */

      @media (min-width: 768px) {
        width: 10em; /* Tamanho original em telas maiores */
        height: 10em;
        margin-left: -1.5em; /* Sobreposição dos círculos em telas maiores */

        &:first-child {
          margin-left: 0; /* Remove a margem do primeiro círculo */
        }
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.05); /* Efeito hover */
      }
    }
  }
`;

export const Section5 = styled.section`
  width: 100%;
  padding: 4em 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
  background: linear-gradient(to bottom, #f8f9fa, #e9ecef);

  .title {
    font-size: 2em;
    font-weight: 400;
    color: #2c3e50;
    text-align: center;
    position: relative;
    padding-bottom: 0.5em;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 3px;
      background: #5b8e3f;
    }

    @media (min-width: 768px) {
      font-size: 2.5em;
    }
  }

  .services {
    width: 100%;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5em;
    padding: 1em;

    > div {
      background: white;
      border-radius: 12px;
      height: 180px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1em;
      padding: 1.5em;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      cursor: pointer;
      border: 1px solid rgba(0, 0, 0, 0.05);

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        opacity: 1;

        svg {
          transform: scale(1.1);
          opacity: 1;
        }
      }

      .description {
        p {
          font-size: 1.2em;
          font-weight: 500;
          color: #34495e;
          text-align: center;
          margin: 0;

          @media (min-width: 768px) {
            font-size: 1.3em;
          }
        }
      }

      svg {
        font-size: 2.5em;
        color: #5b8e3f;
        opacity: 0.9;
        transition: all 0.3s ease;

        @media (min-width: 768px) {
          font-size: 3em;
        }
      }
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr 1fr;
      gap: 1em;

      > div {
        height: 150px;
        padding: 1em;
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
  gap: 3em;

  @media (min-width: 992px) {
    gap: 6em;
  }

  .fhhub {
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 2em;

    @media (min-width: 992px) {
      width: 75%;
      height: 25em;
      flex-direction: row;
      gap: 0;
    }

    .diagram {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2em;
      order: 1;

      @media (min-width: 992px) {
        width: 50%;
        height: 100%;
        justify-content: space-around;
        gap: 0;
        order: 0;
      }

      .title {
        width: 80%;
        height: 3em;
        border: 1px solid white;
        border-radius: 2em;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0.8;
        text-align: center;
        font-size: 0.9em;

        @media (min-width: 768px) {
          width: 60%;
          font-size: 1em;
        }

        @media (min-width: 992px) {
          width: 50%;
        }
      }

      .image-container {
        width: 100%;
        height: 18em;
        display: flex;
        justify-content: center;
        align-items: center;

        @media (min-width: 768px) {
          height: 22em;
        }

        @media (min-width: 992px) {
          width: 50%;
          height: 70%;
        }

        .diagram-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }

    .fhhub-image {
      width: 100%;
      height: 18em;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 1.5em;
      overflow: hidden;
      position: relative;
      order: 0;

      @media (min-width: 768px) {
        height: 22em;
        border-radius: 2em;
      }

      @media (min-width: 992px) {
        width: 50%;
        height: 25em;
        border-radius: 1em 2em 2em 1em;
        order: 1;
      }

      .fhhub-image-content {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.02);
        }

        @media (min-width: 992px) {
          width: 90%;
          height: 90%;
          object-fit: contain;
          border-radius: 0.5em;
        }
      }
    }
  }

  .infos {
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 2em;
    margin-top: 0;

    @media (min-width: 992px) {
      width: 75%;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 2em;
      gap: 0;
    }

    .text {
      width: 100%;
      opacity: 0.8;
      display: flex;
      flex-direction: column;
      gap: 1.5em;

      @media (min-width: 992px) {
        width: 45%;
        padding-right: 3em;
      }

      h1 {
        font-size: 1.6em;
        font-weight: 400;
        line-height: 1.2;

        @media (min-width: 768px) {
          font-size: 1.8em;
        }

        @media (min-width: 992px) {
          font-size: 2em;
        }
      }

      p {
        font-size: 0.95em;
        font-weight: 300;
        line-height: 1.5;

        @media (min-width: 768px) {
          font-size: 1em;
        }
      }
    }

    .infos-image {
      width: 100%;
      height: 18em;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 1.5em;
      overflow: hidden;
      position: relative;

      @media (min-width: 768px) {
        height: 22em;
        border-radius: 2em;
      }

      @media (min-width: 992px) {
        width: 50%;
        height: 25em;
        border-radius: 2em 1em 1em 2em;
      }

      .infos-image-content {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.02);
        }

        @media (min-width: 992px) {
          width: 90%;
          height: 90%;
          object-fit: contain;
          border-radius: 0.5em;
        }
      }
    }
  }

  .newsletter {
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column-reverse;
    margin: 0;
    gap: 2em;

    @media (min-width: 992px) {
      width: 75%;
      height: 35em;
      flex-direction: row;
      margin: 2em 0;
      gap: 0;
    }

    .newsletter-content {
      width: 90%;
      border-radius: 1.5em;
      background-color: rgba(0, 0, 0, 0.3);
      padding: 1.5em;
      display: flex;
      flex-direction: column;
      gap: 1.5em;

      @media (min-width: 992px) {
        max-width: 50%;
        max-height: 100%;
        padding: 2em;
        gap: 0;
      }

      h1 {
        font-size: 1.6em;
        opacity: 0.8;

        @media (min-width: 768px) {
          font-size: 1.8em;
        }

        @media (min-width: 992px) {
          font-size: 2em;
        }
      }

      p {
        font-size: 0.95em;
        line-height: 1.5;
        opacity: 0.6;

        @media (min-width: 768px) {
          font-size: 1.1em;
        }

        @media (min-width: 992px) {
          font-size: 1.2em;
          margin: 1em 0;
        }
      }

      .btn-content {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        gap: 1.5em;

        @media (min-width: 992px) {
          height: 10em;
          justify-content: space-around;
          gap: 0;
        }

        .inputs {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1em;

          @media (min-width: 992px) {
            width: 90%;
            flex-direction: row;
            justify-content: space-between;
            gap: 0;
          }

          input {
            width: 90%;
            height: 2.8em;
            background-color: rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.5);
            color: white;
            border-radius: 10px;
            outline: none;
            padding: 0 1em;
            font-size: 0.9em;

            @media (min-width: 992px) {
              width: 43%;
              font-size: 1em;
            }
          }
        }

        .send {
          width: 100%;
          height: 2.8em;
          background-color: #5b8e3f;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          cursor: pointer;
          opacity: 0.8;
          transition: opacity 0.3s ease;

          @media (min-width: 992px) {
            width: 8em;
          }

          &:hover {
            opacity: 1;
          }
        }
      }
    }

    .newsletter-image {
      width: 100%;
      height: 18em;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 1em;
      overflow: hidden;

      @media (min-width: 768px) {
        height: 22em;
      }

      @media (min-width: 992px) {
        width: 50%;
        height: 100%;
      }

      .newsletter-image-content {
        width: 100%;
        height: 100%;
        object-fit: cover;

        @media (min-width: 992px) {
          width: 70%;
          height: 60%;
        }
      }
    }
  }
`;

export const Section7 = styled.section`
  width: 90%;
  min-height: 35em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 2em 1em;
  background-color: #f8f9fa;

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
    padding: 4em 20em;
  }

  .about {
    width: 100%;
    height: auto;
    min-height: 20em;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 1.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em 1em;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

    @media (min-width: 768px) {
      flex-direction: row;
      padding: 2em;
    }

    @media (min-width: 992px) {
      width: 45%;
      height: 25em;
      padding: 2em;
    }

    .photo {
      min-width: 10em;
      height: 10em;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 1.5em;

      @media (min-width: 768px) {
        margin-bottom: 0;
        margin-right: 2em;
        height: 100%;
      }

      .circle {
        border: 2px solid #5b8e3f;
        width: 10em;
        height: 10em;
        border-radius: 50%;
        overflow: hidden;
        transition: transform 0.3s ease;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

        &:hover {
          transform: scale(1.05);
        }

        .about-image-content {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      }
    }

    .text {
      width: 100%;
      height: auto;
      display: flex;
      align-items: center;
      padding: 0 0.5em;
      opacity: 0.85;
      line-height: 1.8;
      font-size: 1.1em;
      color: #334155;
      text-align: center;
      position: relative;

      @media (min-width: 768px) {
        text-align: left;
        padding: 0 1em;
        font-size: 1.15em;
      }

      @media (min-width: 992px) {
        width: calc(100% - 12em);
        height: 100%;
      }

      &::before {
        content: '"';
        font-size: 5em;
        color: rgba(91, 142, 63, 0.15);
        position: absolute;
        top: -0.3em;
        left: -0.2em;
        line-height: 1;
        z-index: 0;

        @media (min-width: 768px) {
          left: -0.3em;
        }
      }
    }
  }

  .adresses {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5em;
    padding: 2em 1em;
    border-radius: 1.5em;
    background-color: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

    @media (min-width: 992px) {
      width: 45%;
      height: 25em;
      padding: 2em;
    }

    .social {
      width: 100%;
      max-width: 20em;
      display: flex;
      justify-content: center;
      gap: 1.5em;

      div {
        width: 3.5em;
        height: 3.5em;
        border-radius: 50%;
        background-color: #334155;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

        &:hover {
          background-color: #5b8e3f;
          transform: translateY(-3px);
        }

        svg {
          font-size: 1.5em;
        }
      }
    }

    .local {
      display: flex;
      align-items: center;
      gap: 0.5em;
      padding: 0.8em 1.8em;
      border-radius: 2em;
      background-color: #334155;
      color: white;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

      &:hover {
        background-color: #5b8e3f;
      }

      svg {
        font-size: 1.2em;
      }

      p {
        font-size: 0.9em;
        font-weight: 600;
        margin: 0;
        white-space: nowrap;
      }
    }

    .cep {
      max-width: 25em;
      text-align: center;
      opacity: 0.85;
      font-size: 1em;
      line-height: 1.6;
      color: #334155;

      @media (min-width: 768px) {
        font-size: 1.1em;
      }
    }
  }
`;
