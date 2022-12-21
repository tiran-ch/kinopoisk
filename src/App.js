import React from "react";
import './App.css';
import Header from "./main_page/header/Header";
import Main from "./main_page/main/Main";
import Footer from "./main_page/footer/Footer";
import Router from "./router/Router"

function App() {
  return (
   <div className="App">
        <Router/>
   </div>
  );
}

export default App;
