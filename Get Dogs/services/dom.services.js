const getDog = async (name) => {
  const response = await fetch(
   `https://dog.ceo/api/breed/${name}/images/random`
  );
    const json = await response.json();
    
    return json.message;
};



function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

    

export {getDog, removeAllChildNodes};