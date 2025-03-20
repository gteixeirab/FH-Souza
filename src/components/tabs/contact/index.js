import React from "react";
import { Container, Maps, Section1, Section2 } from "./style";

import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const whats =
    "https://api.whatsapp.com/send/?phone=5515981198493&text&type=phone_number&app_absent=0";
  const instagram = "https://www.instagram.com/fhsouzaconsultoria/";
  const linkedin = "https://www.linkedin.com/company/fh-souza-advogados/";

  return (
    <Container>
      <Section1>photo</Section1>
      <Section2>
        <div className="form">
          <div className="top">
            <div className="name"></div>
            <div className="email"></div>
            <div className="subject"></div>
          </div>
          <div className="bottom"></div>
          <div className="button">
            <p>Enviar</p>
          </div>
        </div>
        <div className="social">
          <div className="links">
            <div className="whats" onClick={() => window.open(whats, "_blank")}>
              <FaWhatsapp />
            </div>
            <div
              className="instagram"
              onClick={() => window.open(instagram, "_blank")}
            >
              <FaInstagram />
            </div>
            <div
              className="linkedin"
              onClick={() => window.open(linkedin, "_blank")}
            >
              <FaLinkedin />
            </div>
          </div>
          <div className="contact">
            <MdEmail />
            <p>contato@fhsouza.com.br</p>
          </div>
        </div>
      </Section2>
      <Maps>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d457.31141053948903!2d-47.46198875009082!3d-23.514826149034686!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58a8e2514b6a9%3A0xe46741a91536ba83!2sMillenia%20Exclusive%20Offices!5e0!3m2!1spt-BR!2sus!4v1742475331389!5m2!1spt-BR!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
       
      </Maps>
    </Container>
  );
}
