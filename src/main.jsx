import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';

const serverBaseUrl = import.meta.env.VITE_APP_URI;
axios.defaults.baseURL = serverBaseUrl;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <ColorModeProvider>
          <App />
        </ColorModeProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
