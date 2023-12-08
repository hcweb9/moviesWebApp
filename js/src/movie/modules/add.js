import Storage from "./storage.js";
import List from "./list.js";

export default class Add {
  constructor() {
    //Create objects
    this.storage = new Storage();
    this.list = new List();

    //Get DOM elements to use

    this.title_field = document.querySelector("#title");
    this.description_field = document.querySelector("#description");
    this.save_btn = document.querySelector("#save");
  }

  save_movie() {
    this.save_btn.onclick = (e) => {
      e.preventDefault();

      //Get updated data from local storage
      let movies = this.storage.getData();
      let lastId = this.storage.getLastId();
      //console.log(movies, lastId)

      //Data to save
      let title = this.title_field.value;
      let description = this.description_field.value;

      //Small validation

      if (title != "" || description != "") {
        //Create object to save
        let movie = {
          id: lastId++,
          title,
          description,
        };

        //Add to object array

        movies.push(movie);

        //Save in localStorage

        this.storage.save(movies);

        //Update list
        this.list.show(movies);
        //this.list.addToList(movie, movies) NOT NECESSARY
      } else {
        alert("Fill the form correctly...");
      }

      //console.log("Your form have been submitted! ", title, description);

      //Empty Forms
      document.getElementById("title").value = "";
      document.getElementById("description").value = "";

      return false;
    };
  }
}
