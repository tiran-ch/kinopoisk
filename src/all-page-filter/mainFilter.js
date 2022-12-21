import {getMainFilms, getMainFilmsElse} from "../api/films";
import React from "react";
import OwlCarousel from 'react-owl-carousel';

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


// export const SetOwlCarousel = (bestFilms, FilmsVideo)=>{
//   // console.log(bestFilms);
//
//   return(
//     <OwlCarousel className='owl-carousel owl-theme' autoWidth={true} loop nav margin={10}>
//       {
//         bestFilms.length > 0 && bestFilms.map(data => {
//           return (
//             <div className='item' key={data.filmId}>
//               <div className="top-film">
//                 <img onClick={(e) => {
//                   window.open(FilmsVideo);
//                 }} src={data.posterUrlPreview} alt="" style={{width: 200}}/>
//               </div>
//             </div>
//           )
//         })
//       }
//     </OwlCarousel>
//   )
// };