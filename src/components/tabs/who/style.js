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
  height: 58em; /* Ajuste a altura conforme necessário */
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const Section2 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    width: auto;
    height: auto;
    margin: 4em 0;

    p {
      font-size: 2em;
      font-weight: 600;
      opacity: 0.7;
    }
  }

  .content {
    width: 60%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: stretch; /* Faz com que a imagem e o texto tenham a mesma altura */

    .image {
      width: 47%; /* Ajuste a largura conforme necessário */
      height: 50em; /* A altura será definida pelo contêiner pai */
      object-fit: cover; /* Garante que a imagem cubra o espaço sem distorcer */
      border-radius: 4em;
    }

    .text {
      width: 47%; /* Ajuste a largura conforme necessário */
      height: 50em; /* A altura será definida pelo contêiner pai */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      p {
        font-size: 1.2em;
        font-weight: 400;
        margin-bottom: 1.2em;
        opacity: 0.6;
        line-height: 1.6em;
      }
    }
  }

  .button {
    width: 10em;
    height: 3em;
    background-color: #79ad59;
    border-radius: 5px;
    font-weight: 600;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 6em 0;
    cursor: pointer;
    opacity: 0.9;

    &:hover {
      opacity: 1;
    }
  }
`;
