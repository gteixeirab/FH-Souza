import React, { useState, useEffect } from "react";
import {
  Container,
  Logo,
  Menu,
  Content,
  HamburgerMenu,
  MobileMenu,
} from "./style";
import { FaBars } from "react-icons/fa"; // Ícone de hambúrguer
import logo from "./assets/logo.webp"; // Importe a imagem do logo

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar o menu móvel

  const handleScroll = () => {
    // Mostra a navbar apenas se o scroll estiver no topo
    setIsVisible(window.scrollY === 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          <div className="menu-item">
            <p>HOME</p>
          </div>
          <div className="menu-item">
            <p>NOTÍCIAS E PUBLICAÇÕES</p>
          </div>
          <div className="menu-item">
            <p>NOSSOS SERVIÇOS</p>
          </div>
          <div className="menu-item">
            <p>QUEM SOMOS</p>
          </div>
          <div className="menu-item contact">
            <p>ENTRE EM CONTATO</p>
          </div>
        </Menu>
        <HamburgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaBars /> {/* Ícone de hambúrguer */}
        </HamburgerMenu>
      </Content>
      <MobileMenu isOpen={isMenuOpen}>
        <div className="menu-item">
          <p>Sobre nós</p>
        </div>
        <div className="menu-item">
          <p>FH Hub</p>
        </div>
        <div className="menu-item">
          <p>Nosso escritório</p>
        </div>
        <div className="menu-item">
          <p>FH Atualiza</p>
        </div>
        <div className="menu-item">
          <p>Contato</p>
        </div>
      </MobileMenu>
    </Container>
  );
}
