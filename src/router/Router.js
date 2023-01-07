import React from "react";
import {Routes, Route} from "react-router-dom";
import Film from "../pages/film/Film";
import Header from "../components/header/Header";
import Main from "../pages/main/Main";
import Footer from "../components/footer/footer";
import Pagination from "../components/pagination/Pagination"
export default function Router() {
  return(
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/film/:id" element={<Film/>}/>
      </Routes>
      <Footer/>
      <Pagination/>
    </div>
  )
}