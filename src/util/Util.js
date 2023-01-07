import React from "react";
import {useDispatch} from "react-redux";
import logo from "../images/logo.jpg"
import {getMainFilms, getMainFilmsElse} from "../api/films";

export const Logo =()=>{
  let dispatch = useDispatch();
  return(
    <div className="logo" onClick={() => {
      dispatch({type: "search-data", payload: []})
    }}>
      <img src={logo} alt=""/>
    </div>
  )
};

export const HeaderColor = (e, setHeader, setHeaderBlock)=>{
  if (e){
    setHeader("light");
    setHeaderBlock("lightBlock")
  }else{
    setHeader("black");
    setHeaderBlock("header-block")
  }
};


export const toggleValue =(setToggleValue, setFooter, setFooterBlock)=>{
  if (setToggleValue === true){
    setFooter("footerLight");
    setFooterBlock("footerBlockLight");
  }else {
    setFooter("black");
    setFooterBlock("footer-block")
  }
};

export const numCreateArray =(page, pageCount)=>{
  if (pageCount !== ""){
    for (let i = 0; i < pageCount; i++){
      page.push(i + 1)
    }
  }
};

export const toggle =(setToggleValue, setMain, setFilmsLight)=>{
  if (setToggleValue === true) {
    setMain("light");
    setFilmsLight("titleFilmData")
  } else {
    setMain("black");
    setFilmsLight("film-data")
  }
};

export const getAllMainFilms=(genres, countries, pageCount, setFilm)=>{
  if (genres == null && countries == null) {
    getMainFilms(pageCount).then(res => {
      setFilm(res.data.items);
    });
  } else {
    getMainFilmsElse(countries, genres, pageCount).then(res => {
      setFilm(res.data.items);
    });
  }
};
