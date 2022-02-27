
const createBookListView = () => {
    const  div = document.createElement("div")
    div.setAttribute("class", "book-content")
    const ul = document.createElement("ul");
    const liTitle = document.createElement("li");
    const liSubject = document.createElement("li")
    const liAuthorName  = document.createElement("li");
    const liFirstPublishYear  = document.createElement("li");
  
    return {div, ul, liTitle, liSubject, liAuthorName, liFirstPublishYear} 
}


const  appendBookListView = (arrID, arrResult) => {
  let list = document.getElementById("book-result")
  arrID.forEach((item) => {
      const BookView =  createBookListView()
      BookView.liTitle.textContent  = "Title is: " + arrResult[item].title;
      BookView.liAuthorName.textContent = "Author name is: " + arrResult[item].author_name;
      BookView.liFirstPublishYear.textContent = "First publish year is: " + arrResult[item].first_publish_year;

      if( arrResult[item].subject === undefined) {
        arrResult[item].subject = "Subject is Missing"
          BookView.liSubject.textContent = "Subject is: " + arrResult[item].subject;
      }
      if (typeof(arrResult[item].subject) === 'object') {
          BookView.liSubject.textContent = "Subject is: " + arrResult[item].subject.slice(0,5);
      } else {
          BookView.liSubject.textContent = "Subject is: " + arrResult[item].subject
      }
  BookView.ul.appendChild(BookView.liTitle);
  BookView.ul.appendChild(BookView.liAuthorName);
  BookView.ul.appendChild(BookView.liFirstPublishYear);
  BookView.ul.appendChild(BookView.liSubject);

  BookView.div.append(BookView.ul);
  list.append(BookView.div);
  })
}


const appendBtnForBookList = (num) => {
  let buttonList = document.getElementById("list-button")
  let myFunc = num => Number(num)
  const intArr = Array.from(String(num), myFunc);
  const pageCount = intArr[0] + 1
  for (let i = 1; i <= pageCount; i++ ) {
      let button =  document.createElement("button")
      button.classList.add("button-list-item")
      button.setAttribute("value", i)
      button.textContent = i
      buttonList.appendChild(button)
  }
}



export {createBookListView,appendBookListView,appendBtnForBookList};