import Storage from "./storage.js";
import List from "./list.js";

export default function () {
  //Create objects
  const storage = new Storage();
  const list = new List();
  //Get DOM elements to use
  let content = document.querySelector("#content");
  let search_btn = document.querySelector("#search");
  //Apply a click event
  search_btn.onclick = (e) => {
    e.preventDefault();
    //Get the text entered in the search field
    let wanted = document.querySelector("#search_field").value;
    //Get updated movies data
    let movies_stored = storage.getData();
    //Apply filter to search movies
    const new_movies = movies_stored.filter((movie) => {
      return movie.title.toLowerCase().includes(wanted.toLowerCase());
    });
    //Show match list
    if (new_movies <= 0) {
      content.innerHTML = `<div id="fail"><p><h2>There are no matches!!!:(<h2/></p></div>`;
    } else {
      list.show(new_movies);
    }

    //Empty Form
    document.getElementById("search_field").value = "";
    return false;
  };
}
