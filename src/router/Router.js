import React from "react";
import {Routes, Route} from "react-router-dom";
import Film from "../film/Film";
import Component from "../all-main-component/allMainComponent";

export default function Router() {
  return(
    <Routes>
      <Route path="/" element={<Component/>}/>
      <Route path="/film" element={<Film/>}/>
    </Routes>
  )
}