import React from "react";
import { Container, Section1, Section2 } from "./style";

import whoImage from "./assets/who.jpeg";

export default function Who() {
  return (
    <Container>
      <Section1>photo</Section1>
      <Section2>
        <div className="title">
          <p>Não se trata apenas de um escritório de advocacia.</p>
        </div>
        <div className="content">
          <img src={whoImage} alt="Descrição da imagem" className="image" />

          <div className="text">
            <p>
              Na FH Souza, entendemos que a advocacia tributária moderna vai
              muito além da simples interpretação das leis. Hoje, o profissional
              precisa ser capaz de converter a teoria em números e transformar o
              direito em recursos financeiros efetivos para os nossos clientes.
              Para isso, não basta contar apenas com a expertise jurídica. A
              colaboração entre advogados, contadores e analistas é essencial
              para desvendar o emaranhado de informações fiscais e extrair os
              dados necessários para gerar disponibilidade econômica real.
            </p>
            <p>
              Nosso compromisso vai além de oferecer soluções jurídicas
              pontuais. Acreditamos que um trabalho bem-sucedido exige a
              integração de profissionais especializados que acompanham todo o
              processo, desde a análise inicial até a entrega final dos
              resultados. Cada etapa é acompanhada de perto por uma equipe
              multidisciplinar, que trabalha em conjunto para garantir a
              eficácia e a eficiência das soluções oferecidas.
            </p>
            <p>
              Na FH Souza, somos mais do que um escritório de advocacia. Somos
              parceiros estratégicos que unem o conhecimento jurídico, fiscal e
              contábil para transformar desafios tributários em oportunidades
              financeiras para nossos clientes.
            </p>
          </div>
        </div>

        <div className="button">Entre em Contato</div>
      </Section2>
    </Container>
  );
}
