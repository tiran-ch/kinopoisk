import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {
  useParams
} from "react-router-dom";
import Header from "../../components/header/Header";
import "./Film.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap";
import {getFilmVideo} from "../../api/films";

export default function Film() {
  const film = useSelector(state => state.filmItem.filmItem);
  const getFilmsVideo = useSelector((state => state.getFilmData.films));
  let { id } = useParams();

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
      <Header/>
      <div className="film-item-data">
        <div className="film-item">
          <div key={id} className="film-data">
            <div className="film-img">
              <div>
                <h4>{film.nameOriginal}</h4>
                <h4>{film.year}</h4>
              </div>
              <img src={film.posterUrl} alt=""/>
            </div>
            <div className="film-news">
              <h6>nameRu - {film.nameRu}</h6>
              <h6>Reeting - {film.ratingImdb}</h6>
              {
                film.genres.map((genre, id)=>(
                  <h6 key={id}>Genre - {genre.genre}</h6>
                ))
              }
              {
                film.countries.map((country, id)=>(
                  <h6 key={id}>country - {country.country}</h6>
                ))
              }
            </div>
          </div>
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
}