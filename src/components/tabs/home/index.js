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

import welcome from "./assets/welcome.jpeg";
import hubImage from "./assets/hubImage.jpeg";
import circles from "./assets/circles.webp";
import diafram from "./assets/diagram.webp";
import fhhubImage from "./assets/fhhubImage.webp"; // Importe a imagem do fhhub
import infosImage from "./assets/infosImage.webp"; // Importe a imagem do fhhub
import newsletterImage from "./assets/newsletterImage.webp"; // Importe a imagem do fhhub

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
              <span>Abrigados</span>
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
      <Section5></Section5>
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
          <div className="newsletter-content"></div>
          <div className="newsletter-image">
            <img
              src={newsletterImage} // Adicione a imagem do newsletter
              alt="Imagem do Newsletter"
              className="newsletter-image-content"
            />
          </div>
        </div>
      </Section6>
      <Section7>
        <div className="infos">
          <div className="photo"></div>
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
            <div className="whats"></div>
            <div className="instagram"></div>
            <div className="linkedin"></div>
          </div>
          <div className="local"></div>
          <div className="cep">
            Edifício Millenia Office – R. Eulália Silva, 454 – 1º Andar, Sala 12
            – Jardim Faculdade, Sorocaba – SP, 18030-230
          </div>
        </div>
      </Section7>
    </Container>
  );
}
