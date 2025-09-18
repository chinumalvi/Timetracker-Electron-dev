import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes } from "react-router-dom";
import { Provider } from "./components/ui/provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>

     <BrowserRouter>   
      
     </BrowserRouter>   
  </React.StrictMode>
);
