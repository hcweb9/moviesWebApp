import Storage from "./storage.js";
import List from "./list.js";

export default function () {
  //Create objects

  const storage = new Storage();
  const list = new List();

  //Get movies data from localStorage and screen
  let movies_stored = storage.getData();
  let movies_viewed = document.querySelectorAll(".movie-item");

  //Loop through viewed movies
  movies_viewed.forEach((movie) => {
    //Select edit button
    let edit_btn = movie.querySelector(".edit");
    //Apply a click event
    edit_btn.onclick = function () {
      //Get the ID of the movie to edit
      const movie_id = parseInt(this.getAttribute("data-id"));

      //Remove active buttons (edit, delete)
      edit_btn.remove();
      movie.querySelector(".delete").remove();

      //Add a piece of html under the buttons

      let movie_edit_html = `

        <div class="edit_form">
        
        <h3 class="title">Edit Movie</h3>
        <form>
            <input type="text" class="edited_title" value="${
              movie.querySelector(".title").innerHTML
            }"/>
            <textarea class="edited_description">${
              movie.querySelector(".description").innerHTML
            } </textarea>
            <input type="submit" class="update" value= "Update"/>
        </form>
        </div>
`;

      movie.innerHTML += movie_edit_html;

      //Select update button
      let update_btn = movie.querySelector(".update");
      //Apply a click event
      update_btn.onclick = function (e) {
        e.preventDefault();
        //Search index of the movie to update
        let index = movies_stored.findIndex((movie) => movie.id === movie_id);

        //Save object in that index(updated object)
        movies_stored[index] = {
          id: movie_id,
          title: movie.querySelector(".edited_title").value,
          description: movie.querySelector(".edited_description").value,
        };

        //Update localStorage with the new Object
        storage.save(movies_stored);
        //Show updated list again

        list.show(movies_stored);
        return false;
      };
    };
  });
}
