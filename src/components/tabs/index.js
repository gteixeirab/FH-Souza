import React from "react";
import { Container } from "./style";

import { toast } from "react-toastify";

import { useTabs } from "../../hooks/tabs";

export default function Tab() {
  const { stages, activeTab } = useTabs();

  const currentStage = stages.find((obj) => obj.tipo === activeTab);

  return (
    <Container>
      {currentStage
        ? currentStage.comp
        : toast.error("Erro ao carregar a página")}
    </Container>
  );
}
