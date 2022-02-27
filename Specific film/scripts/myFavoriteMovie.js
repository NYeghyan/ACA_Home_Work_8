import {getFavoriteMovie} from "../services/dom.services.js";
import {creatFavoriteMovieUi,createImage} from "../dom/createelements.js";








async function favoriteMovie () { 

    getFavoriteMovie().then( value => {
        console.log(value)
        createImage(value.image)
        creatFavoriteMovieUi(value)
        
    })

}



favoriteMovie()