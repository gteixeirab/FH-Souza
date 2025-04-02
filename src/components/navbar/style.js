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
    height: 4em;
    width: auto;
    object-fit: contain;

    @media (max-width: 768px) {
      height: 3em;
    }
  }
`;

export const Menu = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 30em;
  gap: 1.5em;

  @media (max-width: 1440px) {
    margin-left: 20em;
  }

  @media (max-width: 1200px) {
    margin-left: 15em;
    gap: 1.2em;
  }

  @media (max-width: 1024px) {
    margin-left: 10em;
    gap: 1em;
  }

  @media (max-width: 768px) {
    display: none;
  }

  .menu-item {
    width: auto;
    height: 40%;
    display: flex;
    align-items: center;
    cursor: pointer;
    opacity: 0.8;
    border-bottom: rgba(255, 255, 255, 0) 1px solid;
    white-space: nowrap; /* Prevents text wrapping */

    &:hover {
      opacity: 1;
      border-bottom: 1px solid #5b8e3f;
    }

    p {
      font-size: 0.9em;
      font-weight: 500;
      white-space: nowrap; /* Ensures text stays on one line */

      @media (max-width: 1440px) {
        font-size: 0.85em;
      }

      @media (max-width: 1200px) {
        font-size: 0.8em;
      }

      @media (max-width: 1024px) {
        font-size: 0.75em;
      }
    }
  }

  .contact {
    background-color: #334155;
    padding: 0 1em;
    color: white;
    border-radius: 5px;
    margin-left: 3em;
    white-space: nowrap; /* Prevents text wrapping */

    @media (max-width: 1200px) {
      margin-left: 2em;
      padding: 0 0.8em;
    }

    @media (max-width: 1024px) {
      margin-left: 1em;
      padding: 0 0.6em;
    }

    p {
      font-size: 0.8em;
      font-weight: 600;
      white-space: nowrap; /* Ensures text stays on one line */

      @media (max-width: 1200px) {
        font-size: 0.75em;
      }

      @media (max-width: 1024px) {
        font-size: 0.7em;
      }
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
    white-space: nowrap; /* Prevents text wrapping */

    &:hover {
      opacity: 1;
      background-color: rgba(255, 255, 255, 0.1);
    }

    p {
      font-size: 1em;
      font-weight: 400;
      color: white;
      white-space: nowrap; /* Ensures text stays on one line */

      @media (max-width: 480px) {
        font-size: 0.9em;
      }
    }
  }
`;

export const FloatingButton = styled.div`
  width: 3em;
  height: 3em;
  border-radius: 50%;
  background-color: rgb(36, 50, 70);
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

  @media (max-width: 768px) {
    width: 2.5em;
    height: 2.5em;
    right: 1em;
    bottom: 1em;
  }
`;
