import React, { createContext, useState, useContext } from "react";

import Home from "../components/tabs/home";
import News from "../components/tabs/news";
import Services from "../components/tabs/services";
import Who from "../components/tabs/who";

const TabsContext = createContext();

export default function TabsProvider({ children }) {
  const [activeTab, setActiveTab] = useState("home");
  const stages = [
    { tipo: "home", comp: <Home /> },
    { tipo: "news", comp: <News /> },
    { tipo: "services", comp: <Services /> },
    { tipo: "who", comp: <Who /> },
  ];
  return (
    <TabsContext.Provider value={{ stages, activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
}

export function useTabs() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("useTabs must be used within a TabsProvider");
  }
  const { stages, activeTab, setActiveTab } = context;
  return {
    stages,
    activeTab,
    setActiveTab,
  };
}
