const createFilmListView = ()  => {
    const  div = document.createElement("div")
    div.setAttribute("class", "film-content")
    const ul = document.createElement("ul");
    const liTitle = document.createElement("li");
    const liReleaseDate = document.createElement("li")
    const liDirector  = document.createElement("li");
    const liDescription  = document.createElement("li");
  
    return {div, ul, liTitle, liReleaseDate, liDirector, liDescription} 
  }
  


export {createFilmListView};