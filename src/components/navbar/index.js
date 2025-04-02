import React, { useState, useEffect } from "react";
import {
  Container,
  Logo,
  Menu,
  Content,
  HamburgerMenu,
  MobileMenu,
  FloatingButton,
} from "./style";

import { FaArrowUp } from "react-icons/fa";

import { FaBars } from "react-icons/fa"; // Ícone de hambúrguer
import logo from "./assets/logo.webp"; // Importe a imagem do logo
import { useTabs } from "../../hooks/tabs";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar o menu móvel
  const [showFloatingButton, setShowFloatingButton] = useState(false); // Estado para o botão flutuante

  const { setActiveTab } = useTabs();

  const handleScroll = () => {
    // Mostra a navbar apenas se o scroll estiver no topo
    setIsVisible(window.scrollY === 0);

    // Mostra o botão flutuante se o scroll for maior que 100 pixels
    setShowFloatingButton(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Função para rolar a página para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Rola suavemente
    });
  };

  return (
    <Container
      style={{
        height: isVisible ? "6em" : "4em",
      }}
    >
      <Content>
        <Logo>
          <img src={logo} alt="FH Souza Advogados" className="logo-image" />
        </Logo>
        <Menu>
          <div className="menu-item" onClick={() => setActiveTab("home")}>
            <p>HOME</p>
          </div>
          <div className="menu-item" onClick={() => setActiveTab("news")}>
            <p>NOTÍCIAS E PUBLICAÇÕES</p>
          </div>
          <div className="menu-item" onClick={() => setActiveTab("services")}>
            <p>NOSSOS SERVIÇOS</p>
          </div>
          <div className="menu-item" onClick={() => setActiveTab("who")}>
            <p>QUEM SOMOS</p>
          </div>
          <div
            className="menu-item contact"
            
          >
            <p>ENTRE EM CONTATO</p>
          </div>
        </Menu>
        <HamburgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaBars /> {/* Ícone de hambúrguer */}
        </HamburgerMenu>
      </Content>
      <MobileMenu isOpen={isMenuOpen}>
        <div className="menu-item" onClick={() => setActiveTab("home")}>
          <p>HOME</p>
        </div>
        <div className="menu-item" onClick={() => setActiveTab("news")}>
          <p>NOTÍCIAS E PUBLICAÇÕES</p>
        </div>
        <div className="menu-item" onClick={() => setActiveTab("services")}>
          <p>NOSSOS SERVIÇOS</p>
        </div>
        <div className="menu-item" onClick={() => setActiveTab("who")}>
          <p>QUEM SOMOS</p>
        </div>
        <div className="menu-item">
          <p>ENTRE EM CONTATO</p>
        </div>
      </MobileMenu>

      {/* Botão flutuante */}
      {showFloatingButton && (
        <FloatingButton onClick={scrollToTop}>
          <FaArrowUp />
        </FloatingButton>
      )}
    </Container>
  );
}
