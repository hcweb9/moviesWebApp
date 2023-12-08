import Storage from "./storage.js";
import List from "./list.js";

export default function () {
  //Create Objects

  const storage = new Storage();
  const list = new List();

  //Available movies' data

  let stored_movies = storage.getData();
  let viewed_movies = document.querySelectorAll("#content .movie-item");

  //Loop through viewed movies

  viewed_movies.forEach((movie) => {
    //Capture button
    let delete_btn = movie.querySelector(".delete");
    //Apply a click event
    delete_btn.onclick = function () {
      //Get the id of the movie I want to delete
      const movie_id = this.getAttribute("data-id");
      //Filter the array so that it eliminates the one I don't want
      const new_movie_stored = stored_movies.filter(
        (movie) => movie.id !== parseInt(movie_id)
      );

      //Update data in localStorage
      storage.save(new_movie_stored);
      //Show updated list again
      list.show(new_movie_stored);
    };
  });
}
