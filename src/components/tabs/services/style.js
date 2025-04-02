import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 6em;
  padding: 2em 0;
`;

export const Section1 = styled.section`
  width: 100%;
  height: 58em;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const Section2 = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em 0;
  margin: 3em 0;

  .skils {
    width: 90%;
    max-width: 1400px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 3em;
    justify-content: center;
    align-items: stretch;

    @media (max-width: 1100px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      width: 85%;
    }

    .card {
      background: white;
      border-radius: 12px;
      padding: 2em;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      height: auto;
      min-height: 500px;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
      }

      .header {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1em;
        margin-bottom: 1.5em;
        padding-bottom: 1.5em;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);

        .icon {
          font-size: 3.5em;
          color: #5b8e3f;
          opacity: 0.8;
        }

        .title {
          font-size: 1.6em;
          font-weight: 600;
          text-align: center;
          color: #2c3e50;
          margin: 0;
        }
      }

      .description {
        width: 100%;
        margin-bottom: 1.5em;

        p {
          font-size: 1.1em;
          font-weight: 500;
          color: #34495e;
          line-height: 1.5;
          text-align: center;
        }
      }

      .content {
        width: 100%;
        flex-grow: 1;

        ul {
          padding-left: 1.2em;
          margin: 0;

          li {
            font-size: 1em;
            font-weight: 400;
            color: #34495e;
            margin-bottom: 0.8em;
            line-height: 1.5;
            position: relative;
            padding-left: 1.2em;

            
          }
        }
      }
    }
  }
`;
