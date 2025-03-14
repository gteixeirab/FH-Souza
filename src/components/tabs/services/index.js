import React from "react";
import { Container, Section1, Section2 } from "./style";
import background from "./assets/background.jpeg";

import { FaBalanceScale } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { MdGavel } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";

export default function Services() {
  return (
    <Container>
      <Section1 background={background}>{/* Conteúdo da Section1 */}</Section1>
      <Section2>
        <div className="skils">
          <div className="card">
            <div className="header">
              <MdGavel className="icon" />
              <p className="title">Judiciais – Ações Tributárias</p>
            </div>
            <div className="description">
              <p>
                Atuamos na defesa dos interesses de nossos clientes em demandas
                judiciais, incluindo:
              </p>
            </div>
            <div className="content">
              <ul>
                <li>
                  Mandado de Segurança: Garantia de direitos frente a atos
                  ilegais ou abusivos da administração pública.
                </li>
                <li>
                  Ações Declaratórias: Esclarecimento de questões tributárias
                  para prevenir litígios futuros.
                </li>
                <li>
                  Embargos à Execução: Contestação de cobranças indevidas ou
                  excessivas por parte do Fisco.
                </li>
                <li>
                  Acompanhamento Processual: Monitoramento e atuação estratégica
                  em todas as instâncias, incluindo os Tribunais Superiores (STF
                  e STJ).
                </li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="header">
              <GoGraph className="icon" />
              <p className="title">Administrativos – Defesa e Benefícios</p>
            </div>
            <div className="description">
              <p>
                Prestamos suporte completo em processos administrativos,
                garantindo a melhor condução de demandas fiscais, tais como:
              </p>
            </div>
            <div className="content">
              <ul>
                <li>
                  Defesas Administrativas: Contestação de Autos de Infração e
                  outras penalidades impostas pelo Fisco.
                </li>
                <li>
                  Regimes Especiais: Obtenção de autorizações específicas que
                  flexibilizam o cumprimento de obrigações tributárias.
                </li>
                <li>
                  Habilitação para Benefícios Fiscais: Solicitação e
                  regularização de incentivos fiscais concedidos pelo governo.
                </li>
                <li>
                  Ressarcimento de Tributos e Compensações: Recuperação de
                  créditos tributários e compensação de valores pagos
                  indevidamente
                </li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="header">
              <FaBalanceScale className="icon" />
              <p className="title">
                Consultoria – Estratégias e Compliance Tributário
              </p>
            </div>
            <div className="description">
              <p>
                Oferecemos consultoria especializada para garantir segurança e
                eficiência na gestão tributária, incluindo:
              </p>
            </div>
            <div className="content">
              <ul>
                <li>
                  Revisão Fiscal: Análise detalhada da tributação para
                  identificar inconsistências e oportunidades de economia.
                </li>
                <li>
                  Planejamento Tributário: Estruturação de estratégias para
                  otimizar a carga tributária dentro da legalidade.
                </li>
                <li>
                  Pareceres e Consultas: Elaboração de análises técnicas para
                  orientar decisões empresariais.
                </li>
                <li>
                  Geração e Retificação de Arquivos Fiscais: Suporte na
                  conformidade com obrigações acessórias, incluindo SPED,
                  Portarias CAT, ICMS-ST e Crédito Acumulado.
                </li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="header">
              <FaRegFileAlt className="icon" />
              <p className="title">
                Soluções Fiscais – Tecnologia e Gestão de Documentos
              </p>
            </div>
            <div className="description">
              <p>
                Desenvolvemos soluções tecnológicas para aprimorar a gestão
                tributária, proporcionando mais controle e transparência, como:
              </p>
            </div>
            <div className="content">
              <ul>
                <li>
                  Captura Automatizada de XMLs: Coleta e organização de
                  documentos fiscais eletrônicos.
                </li>
                <li>
                  Formação de Acervo Fiscal: Armazenamento seguro e organizado
                  de informações tributárias.
                </li>
                <li>
                  Geração de Relatórios em Tempo Real: Dados estratégicos para
                  tomada de decisões assertivas.
                </li>
                <li>
                  Dashboard Interativo: Painel dinâmico para facilitar a análise
                  e gestão tributária da empresa.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section2>
    </Container>
  );
}
