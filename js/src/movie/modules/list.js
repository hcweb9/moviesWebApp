import deleteOfList from "./delete.js";
import edit from "./edit.js";

export default class List {
  constructor() {
    //Selecting DOM elements to use
    this.content = document.querySelector("#content");
  }

  movieTemplate(movie) {
    return ` <article class="movie-item" id="movie-${movie.id}">
    <h3 class="title">${movie.title}</h3>
    <p class="description">
     ${movie.description}
    </p>

    <button class="edit" data-id="${movie.id}">Edit</button>
    <button class="delete" data-id="${movie.id}">Delete</button>
  </article>`;
  }

  show(movies) {
    //Empty DOM from the movie's container

    this.content.innerHTML = "";

    //Loop through and display all objects/movies of the localStorage
    movies.forEach((movie) => {
      this.content.innerHTML += this.movieTemplate(movie);
    });

    //Delete button functionality
    deleteOfList();

    //Edit button functionality
    edit();
  }
}
