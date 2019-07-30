import React from "react";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";

import { StateProvider } from "./providers/Context";

import "./App.css";

const App = () => (
  <StateProvider>
    <Navigation />
    <Home />
  </StateProvider>
);

export default App;
