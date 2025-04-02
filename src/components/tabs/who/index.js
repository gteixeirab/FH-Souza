import React, { useState, useEffect, useRef } from "react";
import { Container, Section1, Section2 } from "./style";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import whoImage from "./assets/who.jpeg";
import animation1 from "./assets/animation1.jpeg";
import animation2 from "./assets/animation2.jpeg";
import animation3 from "./assets/animation3.jpeg";
import animation4 from "./assets/animation4.jpeg";

const images = [animation1, animation2, animation3, animation4];

export default function Who() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const nodeRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      clearInterval(interval);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Container ref={sectionRef}>
      <Section1>
        <TransitionGroup>
          <CSSTransition
            key={currentImageIndex}
            timeout={1000}
            classNames="fade"
            nodeRef={nodeRef}
          >
            <div className="image-container" ref={nodeRef}>
              <img
                src={images[currentImageIndex]}
                alt={`Animation ${currentImageIndex + 1}`}
                className="animated-image"
              />
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Section1>

      <Section2 isVisible={isVisible}>
        <div className="title">
          <p>Não se trata apenas de um escritório de advocacia.</p>
        </div>
        <div className="content">
          <div className="image-wrapper">
            <img src={whoImage} alt="Equipe FH Souza" className="image" />
          </div>
          <div className="text">
            <p>
              Na FH Souza, entendemos que a advocacia tributária moderna vai
              muito além da simples interpretação das leis. Hoje, o profissional
              precisa ser capaz de converter a teoria em números e transformar o
              direito em recursos financeiros efetivos para os nossos clientes.
            </p>
            <p>
              Nosso compromisso vai além de oferecer soluções jurídicas
              pontuais. Acreditamos que um trabalho bem-sucedido exige a
              integração de profissionais especializados que acompanham todo o
              processo, desde a análise inicial até a entrega final dos
              resultados.
            </p>
            <p>
              Na FH Souza, somos mais do que um escritório de advocacia. Somos
              parceiros estratégicos que unem o conhecimento jurídico, fiscal e
              contábil para transformar desafios tributários em oportunidades
              financeiras para nossos clientes.
            </p>
          </div>
        </div>

        <button className="cta-button">Entre em Contato</button>
      </Section2>
    </Container>
  );
}
