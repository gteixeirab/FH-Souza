import styled, { keyframes } from "styled-components";

// Animations
const zoom = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const scaleIn = keyframes`
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Section1 = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 800px;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  .image-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .animated-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    top: 0;
    left: 0;
    animation: ${zoom} 20s infinite ease-in-out;
  }

  .fade-enter {
    opacity: 0;
    transform: scale(1.05);
  }

  .fade-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 1000ms ease-in-out, transform 1000ms ease-in-out;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit-active {
    opacity: 0;
    transition: opacity 1000ms ease-in-out;
  }

  @media (max-width: 768px) {
    height: 70vh;
    min-height: 400px;
  }
`;

export const Section2 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4em 2em;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(20px)"};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  .title {
    width: 100%;
    max-width: 1200px;
    text-align: center;
    margin: 2em 0 3em;
    padding: 0 1em;

    p {
      font-size: clamp(1.8rem, 4vw, 2.5rem);
      font-weight: 600;
      color: #334155;
      line-height: 1.3;
      opacity: 0.9;
    }
  }

  .content {
    width: 90%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3em;

    @media (min-width: 992px) {
      flex-direction: row;
      align-items: stretch;
      gap: 4em;
    }

    .image-wrapper {
      width: 100%;
      flex: 1;
      border-radius: 1.5em;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      animation: ${scaleIn} 0.8s ease-out forwards;
      animation-delay: 0.3s;
      opacity: 0;
      max-height: 35em; /* Reduced image height */

      @media (min-width: 992px) {
        max-width: 30%; /* Slightly reduced width */
      }

      .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        transition: transform 0.5s ease;

        &:hover {
          transform: scale(1.03);
        }
      }
    }

    .text {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1.5em;
      animation: ${fadeIn} 0.8s ease-out forwards;
      animation-delay: 0.6s;
      opacity: 0;

      p {
        font-size: clamp(1rem, 1.2vw, 1.2rem);
        line-height: 1.8;
        color: #4a5568;
        margin: 0;
      }
    }
  }

  .cta-button {
    margin: 4em 0;
    padding: 1em 2.5em;
    background-color: #5b8e3f;
    color: white;
    border: none;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(91, 142, 63, 0.3);
    animation: ${fadeIn} 0.8s ease-out forwards;
    animation-delay: 0.9s;
    opacity: 0;

    &:hover {
      background-color: #4a7b32;
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(91, 142, 63, 0.4);
    }

    &:active {
      transform: translateY(1px);
    }
  }

  @media (max-width: 768px) {
    padding: 3em 1em;

    .content {
      gap: 2em;

      .text {
        gap: 1em;
      }
    }

    .cta-button {
      margin: 3em 0;
      padding: 0.8em 2em;
    }
  }
`;
