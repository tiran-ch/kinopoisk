import api from "../api/index";

export const keywordSearch = (searching) => api.get(`/v2.1/films/search-by-keyword?keyword=${searching}`);
export const getTopFilms = () => api.get('/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1');
export const getFilmFilter = () => api.get('/v2.2/films/filters');
export const filmVideos = (filmId) => api.get(`/v2.2/films/${filmId}/videos`);
export const getFilmVideo = (video) => api.get(`/v2.2/films/${video}/videos`);
export const getFilms = (country, genre) => api.get(`/v2.2/films`, {
  params: {
    countries: country,
    genres: genre,
  }
});

export  const getMainFilms = (pageCount) => api.get(`/v2.2/films?countries=1&genres=1&order=
RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=${pageCount}`);
export  const getMainFilmsElse = (countries, genres, pageCount) => api.get(`/v2.2/films?countries=
${countries}&genres=${genres}&order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=${pageCount}`);