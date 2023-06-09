"use strict";

const resultContainer = document.getElementById("search-content-container");
const form = document.querySelector("#search-box");
const searchBtn = document.getElementById("search-btn");
const commentForm = document.getElementById("comment");
const userReviewList = document.getElementById("user-review-list");
const topPickslist = document.getElementById("2023-list");
const recentSearch = document.getElementById("recent-search");
const watchList = document.getElementById("watch-list");

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

// const recentSearchList = [];

const fetchMovie = function (movieSearchQueryName) {
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
      if (movie.Error) {
        resultContainer.innerHTML =
          '<h3 class="error-msg">The Movie you are searching for is not available.</h3>';
      }
      displayMovie(movie);
      // recentSearchUpdate(movie);
    })
    .catch((error) => {
      resultContainer.innerHTML =
        '<h3 class="error-msg">Failed to fetch movie data. Please try again later.</h3>';
    });
};

//Fetches the movie details uppon search by user
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

// LIstens for event when user clicks on the search button
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let movieSearchQueryName = e.target.movie_search_box.value.trim();
  if (movieSearchQueryName.length === 0) {
    resultContainer.innerHTML =
      '<h3 class="error-msg">Enter any Movie Title to search</h3>';
  } else {
    fetchMovie(movieSearchQueryName);
    form.reset();
  }
});

function appendContentToParent(submitValue) {
  const li = document.createElement("li");
  li.innerText = submitValue;
  userReviewList.appendChild(li);
}

// Listens for events on the comment form
commentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  appendContentToParent(e.target.comments.value);
});

topPickslist.addEventListener("click", function (e) {
  const movieTitle = e.target.innerText;
  fetchMovie(movieTitle);
});

// function recentSearchUpdate() {
//   let html = "";
//   if (recentSearchList.length > 0) {
//     html = recentSearchList.map((movie) => `<p>${movie}</p>`).join("");
//   }
//   recentSearch.innerHTML = html;
// }
