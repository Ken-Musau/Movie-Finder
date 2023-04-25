"use strict";

const movieTitle = document.getElementById("movie-title");
const moviePoster = document.getElementById("movie-poster");
const searchBtn = document.getElementById("search-btn");
const movieYear = document.getElementById("year");
const resultError = document.getElementsByClassName("search-result-container");
const movieName = "avatar";

const url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

const fetchMovie = function () {
  if (movieSearchQueryName <= 0) {
    resultError.innerHTML =
      '<h3 class="error-msg">Please enter the correct Movie Name</h3>';
  } else {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }
};
 .