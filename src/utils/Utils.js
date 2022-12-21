import React from "react";

export const HeaderColor = (e, setHeader, setHeaderBlock)=>{
  if (e){
    setHeader("light");
    setHeaderBlock("lightBlock")
  }else{
    setHeader("black");
    setHeaderBlock("header-block")
  }
};

