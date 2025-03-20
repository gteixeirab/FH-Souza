import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Section1 = styled.div`
  width: 100%;
  height: 50em;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Section2 = styled.div`
  width: 60%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6em;

  .form {
    width: 45%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5em;

    .top {
      width: 100%;
      height: 3em;
      display: flex;
      justify-content: space-between;

      div {
        border: 1px solid;
        width: calc(100% / 3 - 0.5em);
        border-radius: 15px;
      }
    }

    .bottom {
      border: 1px solid;
      width: 100%;
      height: 10em;
      border-radius: 15px;
    }

    .button {
      width: auto;
      height: auto;
      background-color: #5b8e3f;
      padding: 0.5em 1em;
      border-radius: 5px;
      opacity: 0.9;
      cursor: pointer;
      user-select: none;

      &:hover {
        opacity: 1;
      }

      p {
        color: white;
        font-weight: 500;
      }
    }
  }

  .social {
    width: 45%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 1em;

    .links {
      display: flex;
      justify-content: center;
      gap: 0.5em;

      div {
        width: 5em;
        height: 5em;
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
          font-size: 2em;
        }
      }
    }

    .contact {
      width: auto;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #5b8e3f;
      cursor: pointer;
      gap: 1em;

      svg {
        font-size: 2em;
      }

      p {
        font-size: 1.5em;
        font-weight: 600;
      }
    }
  }
`;

export const Maps = styled.div`
  width: 60%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4em 0;

  iframe {
    width: 100%;
    height: 450px;
    border: 0;
    border-radius: 15px; /* Adicione bordas arredondadas se desejar */
  }

  @media (max-width: 768px) {
    width: 90%; /* Ajuste a largura para dispositivos móveis */
    iframe {
      height: 300px; /* Reduza a altura para dispositivos móveis */
    }
  }
`;
