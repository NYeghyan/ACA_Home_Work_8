import {getBook,removeAllChildNodes} from "../services/dom.services.js";
import {appendBookListView,appendBtnForBookList} from "../dom/createelements.js";






async function searchBooks () {
    let submitBookName = document.getElementById("search-book")
    let bookNameFromInput = document.getElementById("book-name")
    let list = document.getElementById("book-result")
    let buttonList = document.getElementById("list-button")
  
    submitBookName.addEventListener ('click', (e) => {
        if(buttonList.hasChildNodes) {
            removeAllChildNodes(buttonList)
        }
        if(list.hasChildNodes) {
            removeAllChildNodes(list)
            let searchBookName = bookNameFromInput.value.split(" ").join('+')
                getBook(searchBookName).then( value => {
                    const searchResult =  value.docs;
                    const pageNumber = value.numFound;
                    const searchResultByID = Object.keys(searchResult);
                    appendBookListView(searchResultByID,searchResult);
                    appendBtnForBookList(pageNumber);
                    let pageShow = document.querySelectorAll(".button-list-item");
                    for (let i = 0; i < pageShow.length; i++) {
                        pageShow[i].addEventListener("click",  (e) =>  {
                                console.log(e.target.value)
                            if(list.hasChildNodes) {
                                removeAllChildNodes(list)
                                getBook(searchBookName, e.target.value).then( value => { 
                                    const searchResultPage =  value.docs
                                    const searchResultByPageID = Object.keys(searchResultPage);
                                    appendBookListView(searchResultByPageID,searchResultPage)
                                })
                            }
                        })
                    }
                })
        }
        e.preventDefault()
    })
}




searchBooks()

