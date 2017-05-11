import axios from "axios";
import moment from "moment";
import {
  FETCH_MOVIES_NOW,
  FETCH_MOVIES_YEAR,
  FETCH_MOVIES_HIGHEST_RATED,
  FETCH_MOVIES_MOST_POPULAR,
  FETCH_MOVIES_MOST_POPULAR_KIDS
} from "./types";

const URL = `https://api.themoviedb.org/3/discover/movie?api_key=05a351bf0376d87716b63396925c3b68&`;

export function fetchMovieNow() {
  const dateNow = moment(new Date()).format("YYYY-MM-DD");
  const fiveWeeksAgo = moment().subtract(5, "w").format("YYYY-MM-DD");
  return function(dispatch) {
    axios
      .get(
        URL +
          `primary_release_date.gte=${fiveWeeksAgo}&primary_release_date.lte=${dateNow}`
      )
      .then(res => {
        dispatch({
          type: FETCH_MOVIES_NOW,
          payload: res.data.results
        });
      })
      .catch(err => console.log(err));
  };
}

export function fetchMovieYear() {
  const dateNow = moment(new Date()).format("YYYY-MM-DD");
  const oneYearAgo = moment().subtract(52, "w").format("YYYY-MM-DD");
  return function(dispatch) {
    axios
      .get(
        URL +
          `primary_release_date.gte=${oneYearAgo}&primary_release_date.lte=${dateNow}&sort_by=vote_average.desc&vote_count.gte=1000`
      )
      .then(res => {
        dispatch({
          type: FETCH_MOVIES_YEAR,
          payload: res.data.results
        });
      })
      .catch(err => console.log(err));
  };
}

export function fetchMovieHighestRated() {
  return function(dispatch) {
    axios
      .get(URL + `sort_by=vote_average.desc&vote_count.gte=1000`)
      .then(res => {
        dispatch({
          type: FETCH_MOVIES_HIGHEST_RATED,
          payload: res.data.results
        });
      })
      .catch(err => console.log(err));
  };
}

export function fetchMovieMostPopular() {
  return function(dispatch) {
    axios
      .get(URL + `sort_by=popularity.desc`)
      .then(res => {
        dispatch({
          type: FETCH_MOVIES_MOST_POPULAR,
          payload: res.data.results
        });
      })
      .catch(err => console.log(err));
  };
}

export function fetchMovieMostPopularKids() {
  return function(dispatch) {
    axios
      .get(
        URL +
          `certification_country=US&certification.lte=G&sort_by=popularity.desc`
      )
      .then(res => {
        dispatch({
          type: FETCH_MOVIES_MOST_POPULAR_KIDS,
          payload: res.data.results
        });
      })
      .catch(err => console.log(err));
  };
}
