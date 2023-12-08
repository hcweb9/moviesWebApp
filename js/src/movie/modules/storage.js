export default class Storage {
  constructor() {
    this.id = 1;
  }

  getData() {
    //Initialize what is inside the local storage by default
    let movies = JSON.parse(localStorage.getItem("movies"));

    //If movies is not defined or empty, initialize it
    if (!movies || movies.length < 1) {
      movies = [
        {
          id: 0,
          title: "Movie Title",
          description: "Movie Summary",
        },
      ];

      this.id = 1; // Set the id to 1 since there are no existing movies
    } else {
      // Get the id of the last movie
      let lastMovieId = movies[movies.length - 1].id;

      // Set the id to the id of the last movie + 1
      this.id = lastMovieId + 1;
    }

    // Return the movies array
    return movies;
  }

  getLastId() {
    return this.id;
  }

  save(data) {
    localStorage.setItem("movies", JSON.stringify(data)); //Must convert JS object into JSON string!
  }
}
