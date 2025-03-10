import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import TabsProvider from "./hooks/tabs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TabsProvider>
      <App />
    </TabsProvider>
  </React.StrictMode>
);

reportWebVitals();
