"use strict";

const resultError = document.getElementsByClassName("search-result-container");
const form = document.querySelector("#search-box");
const searchBtn = document.getElementById("search-btn");

const moviePoster = document.getElementById("movie-poster");
const movieTitle = document.getElementById("movie-title");
const movieYear = document.getElementById("year");
const movieRate = document.getElementById("rated");
const movieReleaseDate = document.getElementById("released");
const movieGenre = document.getElementById("genre");
const movieWrite = document.getElementById("writer");
const movieActors = document.getElementById("actors");
const moviePlot = document.getElementById('plot');
// const movieSearchQueryName = "avatar";

const fetchMovie = function (movieSearchQueryName) {
  if (movieSearchQueryName <= 0) {
    resultError.innerHTML =
      '<h3 class="error-msg">Please enter the correct Movie Name</h3>';
  } else {
    fetch(`http://www.omdbapi.com/?t=${movieSearchQueryName}&apikey=${key}`)
      .then((response) => response.json())
      .then((movie) => {
        console.log(movie);
        moviePoster.src = movie.Poster;
        movieTitle.innerText = movie.Title;
      });
  }
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let movieSearchQueryName = e.target.movie_search_box.value;
  fetchMovie(movieSearchQueryName);
  //   form.reset();
});
