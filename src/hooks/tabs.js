import React, { createContext, useState, useContext } from "react";
import Home from "../components/tabs/home";

const TabsContext = createContext();

export default function TabsProvider({ children }) {
  const [activeTab, setActiveTab] = useState("home");
  const stages = [{ tipo: "home", comp: <Home /> }];
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
