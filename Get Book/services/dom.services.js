
const getBook = async (name,page) => {
  const response = await fetch(
   `http://openlibrary.org/search.json?q=${name}&page=${page}&limit=100`
  ); 
    const json = await response.json();
    
    return json
};




function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

    

export {getBook, removeAllChildNodes};