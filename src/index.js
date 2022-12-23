import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

// Wrapping the entire app in ChatProvider,
// ChakraProvider,
// and BrowserRouter so that these imports are accessible throughout the entire application

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
  <BrowserRouter>
    <ChakraProvider>
        <App />
    </ChakraProvider>
  </BrowserRouter>
 
);
