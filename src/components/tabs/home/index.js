import React from "react";
import {
  Container,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7,
} from "./style";

import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiMapPinLine } from "react-icons/ri";

import { FaBalanceScale } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { MdGavel } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";

import welcome from "./assets/welcome.jpeg";
import hubImage from "./assets/hubImage.jpeg";
import circles from "./assets/circles.webp";
import diafram from "./assets/diagram.webp";
import fhhubImage from "./assets/fhhubImage.webp";
import infosImage from "./assets/infosImage.webp";
import newsletterImage from "./assets/newsletterImage.webp";
import aboutImage from "./assets/aboutImage.webp";

export default function Home() {
  return (
    <Container>
      <Section1 background={welcome}>{/* Conteúdo da Section1 */}</Section1>
      <Section2>
        <div className="content">
          <div className="infos">
            <h1>O seu Hub de soluções fiscais</h1>
            <p>
              Somos uma assessoria especializada em gestão fiscal, combinando
              expertise e tecnologia exclusiva para eliminar sua tributação.
              Oferecemos revisão fiscal, planejamento tributário, regimes
              especiais e ratificação de obrigações acessórias. Nessas soluções
              favoráveis processamos métodos e transformamos informações em
              economia real para sua empresa.
            </p>
            <h2>Somos uma equipe multidisciplinar.</h2>
            <div className="team">
              <span>Advogados</span>
              <span>Contadores</span>
              <span>Programadores</span>
              <span>Paralegais</span>
            </div>
          </div>
          <div className="image-container">
            <img
              src={hubImage}
              alt="Hub de soluções fiscais"
              className="image"
            />
          </div>
        </div>
      </Section2>
      <Section3>
        <div className="title">
          <div className="FHNEWS">FH NEWS</div>
          <div className="button">
            <p>Se atualize com a FH Souza</p>
            <div className="icon">FH</div>
          </div>
        </div>
        <div className="carousel"></div>
      </Section3>
      <Section4>
        <div className="text">
          Transformamos desafios fiscais em resultados financeiros. Três décadas
          de experiência a serviço de uma gestão fiscal descomplicada!
        </div>
        <div className="circles">
          <div className="circle">
            <p>TECNOLOGIA</p>
          </div>
          <div className="circle">
            <p>ESTRATÉGIA</p>
          </div>
          <div className="circle">
            <p>EXPERTISE</p>
          </div>
        </div>
      </Section4>
      <Section5>
        <div className="title">
          <p>Conheça Nossos Serviços</p>
        </div>
        <div className="services">
          <div className="solucoes">
            <div className="description">
              <p>Soluções Fiscais</p>
            </div>
            <FaRegFileAlt /> {/* Ícone */}
          </div>
          <div className="administrativos">
            <div className="description">
              <p>Administrativos</p>
            </div>
            <GoGraph /> {/* Ícone */}
          </div>
          <div className="acoes">
            <div className="description">
              <p>Ações Judiciais</p>
            </div>
            <MdGavel /> {/* Ícone */}
          </div>
          <div className="consultoria">
            <div className="description">
              <p>Consultoria</p>
            </div>
            <FaBalanceScale /> {/* Ícone */}
          </div>
        </div>
      </Section5>
      <Section6>
        <div className="fhhub">
          <div className="diagram">
            <div className="title">Conheça nosso HUB de Soluções</div>
            <div className="image-container">
              <img
                src={diafram}
                alt="Diagrama do HUB de Soluções"
                className="diagram-image"
              />
            </div>
          </div>
          <div className="fhhub-image">
            <img
              src={fhhubImage}
              alt="Imagem do FH Hub"
              className="fhhub-image-content"
            />
          </div>
        </div>
        <div className="infos">
          <div className="text">
            <h1>Não se trata apenas de um escritório de advocacia.</h1>
            <p>
              A advocacia tributária moderna requer que o profissional consiga
              converter a teoria em números e o direito em recursos financeiros.
              Para isso, somente o advogado não é suficiente; é essencial contar
              com a colaboração de contadores e analistas que ajudem a
              desvendar, entre o emaranhado de informações fiscais, os dados
              necessários para, em conjunto, transformar o direito em
              disponibilidade econômica. Essa é a proposta que a FH Souza
              apresenta a seus clientes.
            </p>
            <p>
              Aquele advogado que disputava na justiça por uma decisão favorável
              e, em seguida, a repassava ao contador da empresa para que ele a
              utilizasse, já não atende mais às demandas do mercado.
            </p>
            <p>
              É essencial que uma equipe acompanhe todo o processo desde o
              início da análise, com cada profissional envolvido na jornada da
              entrega.
            </p>
          </div>
          <div className="infos-image">
            <img
              src={infosImage}
              alt="Informações adicionais"
              className="infos-image-content"
            />
          </div>
        </div>
        <div className="newsletter">
          <div className="newsletter-content">
            <h1>Inscreva-se na Nossa Newsletter</h1>
            <p>
              Mantenha-se à frente das mudanças fiscais e descubra insights
              exclusivos em nossa newsletter. Na FH SOUZA, acreditamos que
              informação é poder, e queremos compartilhar nosso conhecimento
              para ajudá-lo a simplificar a gestão fiscal de sua empresa.
            </p>
            <p>
              Ao se inscrever, você receberá atualizações regulares sobre as
              últimas tendências tributárias, mudanças legislativas e dicas
              práticas para melhorar suas rotinas fiscais. Combinamos nossa
              expertise jurídica e tecnológica para oferecer conteúdo relevante
              que vai facilitar seu dia a dia e ajudar sua empresa a crescer com
              segurança.
            </p>
            <div className="btn-content">
              <div className="inputs">
                <input type="text" placeholder="Digite seu Nome" />
                <input type="email" placeholder="Digite seu E-mail" />
              </div>
              <div className="send">Enviar</div>
            </div>
          </div>
          <div className="newsletter-image">
            <img
              src={newsletterImage}
              alt="Imagem do Newsletter"
              className="newsletter-image-content"
            />
          </div>
        </div>
      </Section6>
      <Section7>
        <div className="about">
          <div className="photo">
            <div className="circle">
              <img
                src={aboutImage} // Adicione a imagem do newsletter
                alt="Imagem do About"
                className="about-image-content"
              />
            </div>
          </div>
          <div className="text">
            "Nos meus 30 anos de advocacia tributária, nunca vivemos um ambiente
            tão desafiador como o atual, com excesso de obrigações acessórias
            extremamente complexas, às vésperas de uma reforma tributária, onde
            iremos conviver com dois sistemas simultaneamente. É imprescindível
            uma equipe multidisciplinar de contadores, analistas, advogados e
            programadores extremamente especializados. Na FH Souza, nosso HUB de
            Soluções fiscais oferece tudo isso em um local só. Transformando
            toda essa complexidade em oportunidades assertivas de uma gestão
            fiscal e tributária eficiente."
          </div>
        </div>

        <div className="adresses">
          <div className="social">
            <div className="whats">
              <FaWhatsapp />
            </div>
            <div className="instagram">
              <FaInstagram />
            </div>
            <div className="linkedin">
              <FaLinkedin />
            </div>
          </div>
          <div className="local">
            <RiMapPinLine />
            <p>ONDE ESTAMOS</p>
          </div>
          <div className="cep">
            Edifício Millenia Office – R. Eulália Silva, 454 – 1º Andar, Sala 12
            – Jardim Faculdade, Sorocaba – SP, 18030-230
          </div>
        </div>
      </Section7>
    </Container>
  );
}
