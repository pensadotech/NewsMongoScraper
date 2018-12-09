var articlesArr = []

function findArticleById(artPubId) {
  let tgtArticle = null
  for (let i = 0; i < articlesArr.length; i++) {
    let article = articlesArr[i]
    if (article.pubId === artPubId) {
      // found
      tgtArticle = article
      break;
    }
  }

  return tgtArticle;
}

function btnScrapeClick() {
  // prevent form default behavior for submit
  event.preventDefault();
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
                         <a href="${article.url}" target="_blank" class="btn btn-primary">Read more</a>
                         <button id="btnSave" class="btn btn-primary" value=${article.pubId}>Save Article</button>
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

function btnClearClick() {
  // prevent form default behavior for submit
  event.preventDefault();

  // Cealer all artciles from DB
  fetch(`/clearArticles`, {
      method: 'DELETE'
    })
    .then(r => {

      // console.log(r)

      // clear memory array and html
      articlesArr = []
      document.querySelector('#articlesList').innerHTML = ''

      // redirect
      // window.location = './'

    })
    .catch(e => console.error(e))

}