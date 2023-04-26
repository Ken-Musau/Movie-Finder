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
const movieWriter = document.getElementById("writer");
const movieActors = document.getElementById("actors");
const moviePlot = document.getElementById("plot");
const movieLanguage = document.getElementById("language");
const movieAwards = document.getElementById("awards");

// const movieSearchQueryName = "avatar";

const fetchMovie = function (movieSearchQueryName) {
  if (movieSearchQueryName.length === 0) {
    resultError.innerHTML =
      '<h3 class="error-msg">Please enter the correct Movie Name</h3>';
  } else {
    fetch(`http://www.omdbapi.com/?t=${movieSearchQueryName}&apikey=${key}`)
      .then((response) => response.json())
      .then((movie) => {
        console.log(movie);
        moviePoster.src = movie.Poster;
        movieTitle.innerText = movie.Title;
        movieYear.innerText = movie.Year;
        movieRate.innerText = movie.Rated;
        movieReleaseDate.innerText = movie.Released;
        movieGenre.innerText = movie.Genre;
        movieWriter.innerText = movie.Writer;
        movieActors.innerText = movie.Actors;
        moviePlot.innerText = movie.Plot;
        movieLanguage.innerText = movie.Language;
        movieAwards.innerText = movie.Awards;
      });
  }
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let movieSearchQueryName = e.target.movie_search_box.value;
  fetchMovie(movieSearchQueryName);
  //   form.reset();
});
