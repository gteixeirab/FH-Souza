import React from "react";
import { Container, Content } from "./style";

import atualizacoes from "../home/assets/news/atualizacoes.webp";
import contribuintes from "../home/assets/news/contribuintes.webp";
import exclusao from "../home/assets/news/exclusao.webp";
import inclusao from "../home/assets/news/inclusao.webp";
import resolucao from "../home/assets/news/resolucao.webp";

export default function News() {
  return (
    <Container>
      <Content>
        <div className="card atualizacoes">
          <div
            className="image"
            style={{ backgroundImage: `url(${atualizacoes})` }}
          ></div>
          <div className="title">
            <p>Título da notícia</p>
          </div>
          <div className="introduce">
            <p>
              A sanção da Lei Complementar 214/2025 pelo Presidente Lula marca
              uma verdadeira revolução no sistema tributário nacional,
              representando a […]
            </p>
          </div>
        </div>

        <div className="card contribuintes">
          <div
            className="image"
            style={{ backgroundImage: `url(${contribuintes})` }}
          ></div>
          <div className="title">
            <p>
              Contribuintes Garantem Vitórias Contra Tributação de Benefícios
              Fiscais.
            </p>
          </div>
          <div className="introduce">
            <p>
              Desde que o STJ julgou favorável a questão das subvenções aos
              contribuintes o Governo tentou, através de uma nova
            </p>
          </div>
        </div>

        <div className="card exclusao">
          <div
            className="image"
            style={{ backgroundImage: `url(${exclusao})` }}
          ></div>
          <div className="title">
            <p>
              Oportunidade Tributária: Como a Exclusão do ICMS-DIFAL Impacta sua
              Empresa.
            </p>
          </div>
          <div className="introduce">
            <p>
              A recente publicação do Parecer SEI nº 71/2025/MF pela
              Procuradoria-Geral da Fazenda Nacional (PGFN) trouxe uma excelente
              oportunidade para
            </p>
          </div>
        </div>

        <div className="card inclusao">
          <div
            className="image"
            style={{ backgroundImage: `url(${inclusao})` }}
          ></div>
          <div className="title">
            <p>
              Reforma Tributária: O Impacto da Inclusão de IBS e CBS no ICMS e
              ISS.
            </p>
          </div>
          <div className="introduce">
            <p>
              A reforma tributária trouxe mudanças estruturais ao sistema fiscal
              brasileiro, mas também gerou preocupações sobre possíveis
              distorções na base
            </p>
          </div>
        </div>

        <div className="card resolucao">
          <div
            className="image"
            style={{ backgroundImage: `url(${resolucao})` }}
          ></div>
          <div className="title">
            <p>
              Reforma Tributária: O Impacto da Inclusão de IBS e CBS no ICMS e
              ISS.
            </p>
          </div>
          <div className="introduce">
            <p>
              A recente reconfiguração do cenário tributário global tem exigido
              das empresas brasileiras um nível de adaptação sem precedentes. As
            </p>
          </div>
        </div>
      </Content>
    </Container>
  );
}
