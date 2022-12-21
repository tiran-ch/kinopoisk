import {createStore, combineReducers } from "redux";
import {films} from "../films";
import {initialFilmsCount} from "../pages-count/pagesCount";
import {searchData} from "../search-data/searchData";
import {filmData} from "../films-video/filmsVideo";
import {filter} from "../filter";
import {toggle} from "../toggle-with-color/Toggle";
import {filmItem} from "../film-item/filmItem";

export const store = createStore(combineReducers({
  toggle: toggle,
  films: films,
  filmsPageCount: initialFilmsCount,
  searchFilmData: searchData,
  getFilmData: filmData,
  filter: filter,
  filmItem: filmItem,
}));