import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import "./Main.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {getTopFilms, filmVideos, getFilms} from "../../api/films";
import {useNavigate} from "react-router-dom";
import {toggle ,getAllMainFilms} from "../../util/Util";

const Main = (props) => {
  let navigate = useNavigate();
  const [film, setFilm] = useState([]);
  const [genres, setGenres] = useState();
  const [countries, setCountries] = useState();
  const [filmId, setFilmId] = useState("689");
  const [main, setMain] = useState("");
  const [filmsLight, setFilmsLight] = useState("film-data");

  useEffect(() => {
    toggle(props.setToggleValue, setMain, setFilmsLight);
  }, [props.setToggleValue]);

  useEffect(() => {
    setGenres(props.genre);
    setCountries(props.country)
  }, [props.genre, props.country]);

  useEffect(() => {
    getAllMainFilms(genres, countries, props.pageCount, setFilm);
    if (film.length !== 0) {
      props.pagesCount(film.length);
    }
  }, [props.bestFilms, props.pageCount, countries, genres]);

  useEffect(() => {
    getTopFilms().then(res => {
      props.setBestFilms(res.data.films);
    });
    console.log( props.pagesCount())
  }, []);



  useEffect(() => {
    filmVideos(filmId).then(res => {
      props.films(res.data.items[0].url);
    });

  }, [filmId]);


  useEffect(() => {
    if (props.country || props.genre) {
      getFilms(props.country, props.genre).then(res => {
        props.setFilms(res.data.items);
      })
    }

  }, [props.genre, props.country]);

  const openFilm = (kinopoiskId) => {
    navigate(`film/${kinopoiskId}`)
  };

  return (
    <main className={main}>
      <div className="films">
        <OwlCarousel className='owl-carousel owl-theme' autoWidth={true} loop nav margin={10}>
          {
            props.bestFilms.length > 0 && props.bestFilms.map(data => {
              return (
                <div className='item' key={data.filmId}>
                  <div className="top-film">
                    <img onClick={() => {
                      window.open( props.getFilmsVideo);
                    }} src={data.posterUrlPreview} alt="" style={{width: 200}}/>
                  </div>
                </div>
              )
            })
          }
        </OwlCarousel>
        {
          props.searchData.length === 0 &&
          film.map(data => {
            return (
              <div key={data.kinopoiskId} className="film" onClick={() => openFilm(data.kinopoiskId)}>
                  <img src={data.posterUrlPreview} alt=""/>
                  <div className={filmsLight}>
                    <p id='titleEn'>{data.nameEn}</p>
                    <p id="titleRu">{data.nameRu}</p>
                    <p id="filmYear">{data.year}</p>
                  </div>
              </div>
            )
          })
        }
        {
          props.searchData.length > 0 &&
          props.searchData.map(data => {
            return (
              <div className="film" key={data.filmId} onClick={() => openFilm(data.kinopoiskId)}>
                  <img src={data.posterUrlPreview} alt=""/>
                  <div className="film-data">
                    <p id='titleEn'>{data.nameEn}</p>
                    <p id="titleRu">{data.nameRu}</p>
                    <p id="filmYear">{data.year}</p>
                  </div>
              </div>
            )
          })
        }
      </div>
    </main>
  )
};

const mapStateToProps = (state) => {
  return ({
    bestFilms: state.films.bestFilms,
    setToggleValue: state.toggle.toggle,
    pageCount: state.filmsPageCount.onePage,
    searchData: state.searchFilmData.search,
    getFilmsVideo: state.getFilmData.films,
    genre: state.filter.genre,
    country: state.filter.country,
})
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilms: (data) => dispatch({type: "SET_FILMS", payload: data}),
    films: (data) => dispatch({type: "films", payload: data}),
    setBestFilms: (data) => dispatch({type: "SET_BEST_FILMS", payload: data}),
    pagesCount: (data) => dispatch({type: "pagesCount", payload: data}),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Main)