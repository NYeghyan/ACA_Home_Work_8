const getFilms  = async () => {
    const response = await fetch(
      "https://ghibliapi.herokuapp.com/films"
      )
      const json = await response.json();
  
      return json;
    }




function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

    

export {getFilms, removeAllChildNodes};