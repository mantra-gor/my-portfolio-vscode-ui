import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/layout/App";
import { BrowserRouter } from "react-router-dom";
import detectLanguage from "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));

detectLanguage().then(() => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
});
