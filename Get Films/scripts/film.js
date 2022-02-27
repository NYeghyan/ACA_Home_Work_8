import {getFilms} from "../services/dom.services.js";
import {createFilmListView} from "../dom/createelements.js";



////////////////////////    TASK 1  START ////////////////////////////

async function films() {
 
  const filmList = await getFilms()
  const films = Object.keys(filmList);

  films.forEach((item) => {
    const list = document.getElementById("wrapper-film"); 
    const filmView =  createFilmListView()
    filmView.liTitle.textContent = "Title is: " + filmList[item].title;
    filmView.liReleaseDate.textContent = "Release Date is: " + filmList[item].release_date;
    filmView.liDirector.textContent = "Director is: " + filmList[item].director;
    filmView.liDescription.textContent = "Description is: " + filmList[item].description;

    filmView.ul.appendChild(filmView.liTitle);
    filmView.ul.appendChild(filmView.liReleaseDate);
    filmView.ul.appendChild(filmView.liDirector);
    filmView.ul.appendChild(filmView.liDescription);


    filmView.div.append(filmView.ul);
    list.append(filmView.div);

  });
  
}


films()

/*

const filmList = getFilms()
filmList.then((res) => {
  for(let i = 0; i < res.length; i ++) {
    let title = res[i].title
    let releaseDate = res[i].release_date
    let director = res[i].director 
    let description = res[i].description 
    console.log( title, releaseDate, director,description)
  }
})

*/


////////////////////////    TASK 1  END ////////////////////////////




