import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <>
      <Header />
      <Meals />
    </>
  );
}

export default App;
