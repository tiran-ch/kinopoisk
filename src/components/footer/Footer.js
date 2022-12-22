import React, {useEffect, useState} from 'react';
import "./Footer.css";
import {connect} from "react-redux";
import {toggleValue, numCreateArray} from "../../all-page-filter/footerFilter";

const Footer = (props) =>  {
  const [next, setNext] = useState(props.onePage);
  const [usePage, setUsePage] = useState([]);
  const [footer, setFooter] = useState("");
  const [footerBlock, setFooterBlock] = useState("footer-block");
  useEffect(()=>{
    toggleValue(props.setToggleValue, setFooter, setFooterBlock);
  },[props.setToggleValue]);

  useEffect(()=>{
    let page = [];
    numCreateArray(page, props.pageCount);
    setUsePage(page)
},[props.pageCount]);


  console.log(props.onePage);

  const createPagination =(e)=>{
      if(e.target.innerHTML === "Prev"){

        setNext( parseFloat(next) - 1);
        props.onePageDispatch(parseFloat(next) + 1)
      }
      if(e.target.innerHTML === "First"){

        setNext(1);
        props.onePageDispatch(1);
      }
  };

  const paginationWorks=(e)=>{
      if(e.target.innerHTML === "Next"){

        setNext( parseFloat(next) + 1);
        props.onePageDispatch(parseFloat(next) + 1);
      }
      if(e.target.innerHTML === "Last"){

        setNext(usePage.length);
        props.onePageDispatch(usePage.length);
      }
  };

  return (
   <footer className={footer}>
     <div className={footerBlock}>
       <ul onClick={e=>createPagination(e)}>
         <li>First</li>
         <li>Prev</li>
       </ul>
       {
         usePage.map(data=>(
           <ul key={data} onClick={(e)=>{
             setNext(e.target.innerHTML);
             props.onePageDispatch(e.target.innerHTML);
           }}>
             {
               data == props.onePage ?
                 <li id="fix">{data}</li>:
                 <li>{data}</li>
             }
           </ul>
         ))
       }
       <ul onClick={(e)=>paginationWorks(e)}>
         <li>Next</li>
         <li>Last</li>
       </ul>
     </div>
   </footer>
  );
};

const mapStateToProps = (state) => {
  return ({
    pageCount: state.filmsPageCount.page,
    onePage: state.filmsPageCount.onePage,
    setToggleValue: state.toggle.toggle
  })
};




const mapDispatchToProps = (dispatch) => {
  return {
    onePageDispatch: (data) => dispatch({type: "onePage", payload: data}),
    setFilms: (data) => dispatch({type: "SET_FILMS", payload: data}),
    films: (data) => dispatch({type: "films", payload: data}),
    setBestFilms: (data) => dispatch({type: "SET_BEST_FILMS", payload: data}),
    pagesCount: (data) => dispatch({type: "pagesCount", payload: data}),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Footer)