var articlesArr = []
var savedArticlesArr = []

function findArticleById(artPubId, articlesArr) {
  let tgtArticle = null
  for (let i = 0; i < articlesArr.length; i++) {
    let article = articlesArr[i]
    if (article.pubId === artPubId) {
      // found
      tgtArticle = article
      break
    }
  }
  return tgtArticle
}

function btnScrapeClick() {
  // prevent form default behavior for submit
  event.preventDefault()
  // get articles
  scrapeArticles()
}

function btnClearScrnClick() {
  // prevent form default behavior for submit
  event.preventDefault()
  // clear memory array and html
  articlesArr = []
  document.querySelector('#articlesList').innerHTML = ''
}

function btnDeleteAllClick() {
  // prevent form default behavior for submit
  event.preventDefault()
  deleteAllArticles()
}

function scrapeArticles() {
  // Let the server get the infromation 
  fetch(`/scrapArtilces`)
    .then(r => r.json())
    .then(r => {
      // render articles
      //  console.log(r)

      // clear memory array and html
      articlesArr = []
      document.querySelector('#articlesList').innerHTML = ''

      r.forEach(article => {
        // Put article in array 
        articlesArr.push(article)
        // object strinified - here it works but 

        // in teh event the string is passed incomplete.
        // Will will retreve the artcile selected using the id
        // let articleStr = JSON.stringify(article)

        // add each article dynamically
        let listItem = document.createElement('div')
        listItem.innerHTML =
          `<div class="row">
       <div class="col-md-12 px-3">                             
         <div class="card">
           <div class="row">
             <div class="col-md-4 px-3">
               <div class="card-image">
                 <img class="card-img-top imageShadow imgRnd10 articleImg" src="${article.image}">
               </div> 
             </div>
             <div class="col-md-8 px-3"> 
                <div class="card-body">
                  <p> pubId: ${article.pubId} / ${article.pubDate}</p>
                  <h5 class="card-title">${article.title}</h5>
                  <p> ${article.description} </p> 
                  
                  <div class="d-flex flex-row-reverse">
                     <a id="btnReadMore" href="${article.url}" target="_blank" class="btn btn-light">Read more</a>
                     <button id="btnSave" class="btn btn-secondary" value=${article.pubId}>Save Article</button>
                  </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
    `
        document.querySelector('#articlesList').appendChild(listItem)
      })
    })
    .catch(e => console.error(e))

}

function getSavedArticles() {
  // Let the server get the infromation 
  fetch(`/article`)
    .then(r => r.json())
    .then(r => {
      // render articles
      //  console.log(r)

      // clear memory array and html
      savedArticlesArr = []
      document.querySelector('#articlesList').innerHTML = ''

      r.forEach(article => {
        // Put article in array 
        savedArticlesArr.push(article)
        // object strinified - here it works but 

        // in teh event the string is passed incomplete.
        // Will will retreve the artcile selected using the id
        // let articleStr = JSON.stringify(article)

        // add each article dynamically
        let listItem = document.createElement('div')
        listItem.innerHTML =
          `<div class="row">
           <div class="col-md-12 px-3">                             
             <div class="card">
               <div class="row">
                 <div class="col-md-4 px-3">
                   <div class="card-image">
                     <img class="card-img-top imageShadow imgRnd10 articleImg" src="${article.image}">
                   </div> 
                 </div>
                 <div class="col-md-8 px-3"> 
                    <div class="card-body">
                      <p> pubId: ${article.pubId} / ${article.pubDate}</p>
                      <h5 class="card-title">${article.title}</h5>
                      <p> ${article.description} </p> 
                      
                      <div class="d-flex flex-row-reverse">
                         <a id="btnReadMore" href="${article.url}" target="_blank" class="btn btn-light">Read more</a>
                         <button id="btnDelete" class="btn btn-secondary" value=${article.pubId}>Delete Article</button>
                      </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
        `
        document.querySelector('#articlesList').appendChild(listItem)
      })
    })
    .catch(e => console.error(e))
}

function saveArticle(article) {
  // add item to cart
  fetch('/article', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json ; charset=utf-8'
      },
      body: JSON.stringify(article)
    })
    .then(r => {
      console.log(r)
    })
    .catch(e => console.error(e))

}

function deleteArticle(article) {

  console.log("delete:", article.pubId)

  // delete book
  fetch(`/artilce/${article.pubId}`, {
      method: 'DELETE'
    })
    .then(r => {
      getSavedArticles()
    })
    .catch(e => console.error(e))

}

function deleteAllArticles() {

  // clear all artciles from DB
  fetch(`/deleteallartilces`, {
      method: 'DELETE'
    })
    .then(r => {
      getSavedArticles()
    })
    .catch(e => console.error(e))
}