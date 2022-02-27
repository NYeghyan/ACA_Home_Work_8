import {getDog, removeAllChildNodes} from "../services/dom.services.js";
import {createImage} from "../dom/createelements.js";





async function doogs() {
    const imgViwe = document.getElementById('img-wrap')
    const  getDogName = document.getElementById('dogDomList')
    getDogName.addEventListener("change", async  (e) => {
        let dog_name = e.target.value
        if (imgViwe.hasChildNodes()) {
            removeAllChildNodes(imgViwe)
            const imageSrc = await getDog(dog_name);
            const image = createImage(imageSrc);
            imgViwe.append(image);
        } 
    })
}


doogs();