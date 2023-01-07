import React, {useEffect, useState} from "react";
import api from "../../api";
import {connect} from "react-redux";

import {
  useParams
} from "react-router-dom";
import "./Film.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap";
import {getFilmVideo} from "../../api/films";

const Film = (props)=> {
  const [filmItem, setFilmItem] = useState();
  let { id } = useParams();


  useEffect(()=>{
    if (props.film.countries !== undefined || filmItem !== undefined){
      setFilmItem(props.film);
    }
  },[props.film]);


  useEffect(()=>{
    api.get(`v2.2/films/${id}`).then(data=>{
      if (data !== undefined){
        props.FILM_ITEM(data.data)
      }
    });
  },[]);



  const youtubeUrl = [];
  let url =[];
  let youtube = "https://www.youtube.com/embed/";
  const [mainUrl, setMainUrl] = useState();

  useEffect(()=>{
    getFilmVideo(id).then(video=>{

       for (let i = 0; i < video.data.items[0].url.length; i++){
        url.push(video.data.items[0].url[i]);
         youtubeUrl.push(video.data.items[0].url)
       }
     });

 },[]);




  useEffect(()=>{
    setTimeout(()=>{
      let a = youtubeUrl[0];
      let result = a.slice(26, 50);
      let l =  youtube.concat(result);
      setMainUrl(l);
    },1000)
  }, [mainUrl]);


  return (
    <div className="Film">
      <div className="film-item-data">
        <div className="film-item">
          {

            filmItem !== undefined &&
            <div key={id} className="film-data">
              <div className="film-img">
                <div>
                  <h4>{props.film.nameOriginal}</h4>
                  <h4>{props.film.year}</h4>
                </div>
                <img src={props.film.posterUrl} alt=""/>
              </div>
              <div className="film-news">
                <h6>nameRu - {props.film.nameRu}</h6>
                <h6>Reeting - {props.film.ratingImdb}</h6>
                {
                  filmItem.genres.map(genre=>(
                    <h6>Genre {genre.genre}</h6>
                  ))
                }
                {
                  filmItem.countries.map(country=>(
                    <h6>Country {country.country}</h6>
                  ))
                }
              </div>
            </div>
          }
          <Container>
            <div className="ratio ratio-16x9">
              <iframe width="560" height="315" src={mainUrl}
                      title="YouTube video player" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen></iframe>
            </div>
          </Container>
        </div>

      </div>

    </div>
  )
};



const mapStateToProps = (state) => {
  return ({
    film: state.filmItem.filmItem,
  })
};




const mapDispatchToProps = (dispatch) => {return {FILM_ITEM: (data) => dispatch({type: "FILM_ITEM", payload: data})}};
export default connect(mapStateToProps, mapDispatchToProps)(Film)