import React, {useEffect, useState} from "react";
import "./Header.css";
import search from "../../images/search.png";
import moon from "../../images/moon.png";
import sun from "../../images/sun.png";
import {getFilmFilter, keywordSearch} from "../../api/films";
import {connect} from "react-redux";
import {Switch} from "antd";
import {HeaderColor} from "../../util/Util";
import {Logo} from "../../util/Util";

const Header = (props) => {
  const [searchText, setSearchText] = useState("");
  const [searching, setSearching] = useState("");
  const [countries, setCountries] = useState([]);
  const [genres, setGenres] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [header, setHeader] = useState("");
  const [headerBlock, setHeaderBlock] = useState("header-block");

  useEffect(() => {
    getFilmFilter().then(res => {
      setGenres(res.data.genres);
      setCountries(res.data.countries)
    });
  }, []);

  useEffect(()=>{
    props.toggleValue(toggle);
  },[toggle]);

  useEffect(() => {
    keywordSearch(searching).then(res => {
      props.searchData(res.data.films);
    });
  }, [searching]);

  return (
    <header className={header}>
      <div className={headerBlock}>
        <Logo/>
        <form action="" className="searching" onSubmit={e => {
          e.preventDefault();
          setSearching(searchText);
          setSearchText("")
        }}>
          <input type="text" value={searchText} onChange={e => setSearchText(e.target.value)}/>
          <img onClick={() => {
            setSearching(searchText);
            setSearchText("")
          }} src={search} alt=""/>
        </form>

        <div className="films-country-genres">
          <div className="genres">
            <select name="" id="" onChange={(e)=>{
              props.genre( e.target.value);
            }}>
              <option value="Genres">Genres</option>
              {genres.length !== 0 && genres.map((data) => <option key={data.id} value={data.id}>{data.genre}</option>)}
            </select>
          </div>
          <div className="countries">
            <select name="" id="" onChange={(e)=>{
              props.country( e.target.value);
            }}>
              <option value="Country">Country</option>
              {countries.length !== 0 && countries.map((data) =>
                <option key={data.id} value={data.id}>{data.country}</option>)}
            </select>
          </div>
        </div>
          <div className="Page-color">
            <Switch onClick={(e)=>{
              setToggle(e);
              HeaderColor(e, setHeader, setHeaderBlock);
            }}/>
            {
              toggle?
                <img src={sun} alt=""/>:
                <img src={moon} alt=""/>
            }
          </div>
      </div>
    </header>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleValue: (toggle) => dispatch({type: "SET_TOGGLE_VALUE", payload: toggle}),
    searchData: (data) => dispatch({type: "search_data", payload: data}),
    genre: (data) => dispatch({type: "genre", payload: data}),
    country: (data) => dispatch({type: "country", payload: data}),

  }
};
export default connect("",mapDispatchToProps)(Header)