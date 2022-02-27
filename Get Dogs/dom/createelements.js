 
const createImage = (src) => {
  const image = document.createElement("img");
  image.src = src;
  image.width = 250;
  image.height = 250;
  return image;
};





export {createImage};