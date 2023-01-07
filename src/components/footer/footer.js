import React, {useEffect, useState} from "react";
import "./footer.css";
import {connect} from "react-redux";

const Footer = (props) => {
  const [allPages, setAllPages] = useState([]);
  const [onePage, setOnePage] = useState(1);
  const [activeBtn, setActiveBtn] = useState("active-off");

  useEffect(() => {
    let pages = [];
    for (let i = 0; i < props.pageCount; i++) {
      pages.push(i + 1)
    }
    setAllPages(pages);
  }, [props.pageCount]);

  const getNumber = (data) => setOnePage(data);
  const firstPage = ()=> setOnePage(1);
  const prevPage = ()=>{if (onePage !== 1)setOnePage(onePage - 1)};
  const nextPage = ()=>{if (onePage !== allPages.length) setOnePage(onePage + 1)};
  const LastPage = ()=>setOnePage(allPages.length);
  useEffect(()=>{props.onePageDispatch(onePage)},[onePage]);

  return (
    <div className="footers">
      <div className="pages">
        <button onClick={() => firstPage()}>First</button>
        <button onClick={() => prevPage()}>Prev</button>
        {
          allPages.map(data =>
            <button className={activeBtn}
              onClick={() =>{
                getNumber(data);
                // console.log(data)
                console.log(props.onePageDispatch())
              }}>
              {data}</button>
          )
        }
        <button onClick={() => nextPage()}>Next</button>
        <button onClick={() => LastPage()}>Last</button>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {return ({pageCount: state.filmsPageCount.page})};
const mapDispatchToProps = (dispatch) => {return ({onePageDispatch: (data) => dispatch({type: "onePage", payload: data})})};
export default connect(mapStateToProps, mapDispatchToProps)(Footer)