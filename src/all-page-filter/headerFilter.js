import React from "react";
import {useDispatch} from "react-redux";
import logo from "../images/logo.jpg"

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
