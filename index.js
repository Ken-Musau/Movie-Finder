"use strict";

const resultContainer = document.getElementById("search-result-container");
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
    resultContainer.innerHTML =
      '<h3 class="error-msg">Please enter the correct Movie Name</h3>';
  } else {
    fetch(
      `http://www.omdbapi.com/?t=${encodeURIComponent(
        movieSearchQueryName
      )}&apikey=${key}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch movie data");
        }
        return response.json();
      })
      .then((movie) => {
        console.log(movie);
        displayMovie(movie);
      })
      .catch((error) => {
        resultContainer.innerHTML =
          '<h3 class="error-msg">Failed to fetch movie data. Please try again later.</h3>';
      });
  }
};

function displayMovie(movie) {
  moviePoster.src = movie.Poster;
  movieTitle.innerText = movie.Title;
  movieYear.innerText = `Year: ${movie.Year}`;
  movieRate.innerText = `Ratings: ${movie.Rated}`;
  movieReleaseDate.innerText = `Released: ${movie.Released}`;
  movieGenre.innerText = `Genre: ${movie.Genre}`;
  movieWriter.innerText = `Writers: ${movie.Writer}`;
  movieActors.innerText = `Actors: ${movie.Actors}`;
  moviePlot.textContent = `Plot: ${movie.Plot}`;
  movieLanguage.innerText = `Language: ${movie.Language}`;
  movieAwards.innerHTML = `<i class="fas fa-award"></i>${movie.Awards}`;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let movieSearchQueryName = e.target.movie_search_box.value.trim();
  if (movieSearchQueryName.length === 0) {
    resultContainer.innerHTML =
      '<h3 class="error-msg">Please enter a Movie Name</h3>';
  } else {
    fetchMovie(movieSearchQueryName);
    //   form.reset();
  }
});
