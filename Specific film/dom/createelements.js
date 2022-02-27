

const creatFavoriteMovieUi = (arr) => {
  const rootDiv = document.getElementById("wrapper-favorit-m")
  const divForList = document.createElement("div")
  divForList.setAttribute("class", "div-for-list")
  let ul = document.createElement("ul");
  ul.setAttribute("class", "m-list")
  const liTitle = document.createElement("li");
  const liDescription = document.createElement("li")
  const liDirector  = document.createElement("li");
  const liProducer  = document.createElement("li");
  const liReleaseDate  = document.createElement("li");
  liTitle.textContent = "Title: " + arr.title
  liDescription.textContent ="Description: " +  arr.description
  liDirector.textContent = "Director: " + arr.director
  liProducer.textContent = "Producer: " + arr.producer
  liReleaseDate.textContent = "ReleaseDate: " + arr.release_date
  ul.appendChild(liTitle)
  ul.appendChild(liDescription)
  ul.appendChild(liDirector)
  ul.appendChild(liProducer)
  ul.appendChild(liReleaseDate)
  
  divForList.appendChild(ul)
  rootDiv.appendChild(divForList)

  return {rootDiv, ul, liTitle, liDescription, liDirector, liProducer,liReleaseDate} 
}


 
const createImage = (src) => {
  const rootDiv = document.getElementById("wrapper-favorit-m")
  const divForImg = document.createElement("div")
  divForImg.setAttribute("class", "div-for-img")
  const image = document.createElement("img");
  image.setAttribute("class", "film-img")
  image.src = src;
  divForImg.appendChild(image)
  rootDiv.appendChild(divForImg)

};



export {creatFavoriteMovieUi,createImage};