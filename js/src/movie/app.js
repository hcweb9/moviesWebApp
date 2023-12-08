import Add from "./modules/add.js";
import List from "./modules/list.js";
import Storage from "./modules/storage.js";
import Search from "./modules/search.js";

export default class App {
  constructor() {
    //Initialize properties

    this.add = new Add();
    this.list = new List();
    this.storage = new Storage();
  }

  load() {
    // Add movie
    this.add.save_movie();

    //Get objects array from localStorage
    const movies = this.storage.getData();

    // List movie
    this.list.show(movies); //To show elements/movies from localStorage by getData() when the app loads/start

    // Search movie
    Search();
    console.log("The movie application has been initialized...");
  }
}
