import React from "react";
import './App.css';
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import Footer from "./components/footer/Footer";
import Router from "./router/Router"

function App() {
  return (
   <div className="App">
        <Router/>
   </div>
  );
}

export default App;
