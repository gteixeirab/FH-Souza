import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 7em;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: white;
  color: black;
  z-index: 1000;
  transition: height 0.3s ease;

  @media (max-width: 768px) {
    height: 5em;
  }
`;

export const Content = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const Logo = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;

  .logo-image {
    height: 4em; /* Aumente a altura conforme necessário */
    width: auto; /* Mantém a proporção da imagem */
    object-fit: contain; /* Garante que a imagem não seja distorcida */

    @media (max-width: 768px) {
      height: 3em; /* Ajuste para dispositivos móveis */
    }
  }
`;

export const Menu = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 30em;
  gap: 2em;

  @media (max-width: 1024px) {
    margin-left: 15em;
    gap: 2em;
  }

  @media (max-width: 768px) {
    display: none; /* Oculta o menu tradicional em dispositivos móveis */
  }

  .menu-item {
    width: auto;
    height: 40%;
    display: flex;
    align-items: center;
    cursor: pointer;
    opacity: 0.8;
    border-bottom: rgba(255, 255, 255, 0) 1px solid;

    &:hover {
      opacity: 1;
      border-bottom: 1px solid #5b8e3f;
    }

    p {
      font-size: 1em;
      font-weight: 500;

      @media (max-width: 1024px) {
        font-size: 1.1em;
      }
    }
  }

  .contact {
    background-color: #334155;
    padding: 0 1em;
    color: white;
    border-radius: 5px;
    margin-left: 4em;

    p {
      font-size: 0.8em;
      font-weight: 600;
    }
  }
`;

export const HamburgerMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    font-size: 1.5em;
    color: #7eb922;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  position: absolute;
  top: 4em;
  right: 0;
  width: 100%;
  background-color: rgba(10, 15, 26, 0.95);
  flex-direction: column;
  align-items: center;
  padding: 1em 0;
  border-bottom: 1px solid #5b8e3f;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }

  .menu-item {
    width: 100%;
    text-align: center;
    padding: 1em 0;
    cursor: pointer;
    opacity: 0.9;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    &:hover {
      opacity: 1;
      background-color: rgba(255, 255, 255, 0.1);
    }

    p {
      font-size: 1.2em;
      font-weight: 400;
      color: white;
    }
  }
`;

// Estilo do botão flutuante
export const FloatingButton = styled.div`
  width: 3em;
  height: 3em;
  border-radius: 50%;
  background-color:rgb(36, 50, 70);
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 2em;
  bottom: 2em;
  cursor: pointer;
  z-index: 1000;
  transition: opacity 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #555;
    transform: scale(1.1);
  }

  svg {
    font-size: 1.3em;
  }
`;
