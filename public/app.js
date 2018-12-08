// Materialize side bar 
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var options = document.querySelector('li');
  var instances = M.Sidenav.init(elems, options);
});

function btnScrapeClick() {
  // prevent form default behavior for submit
  event.preventDefault();

  console.log("btnScrapeClick")

  fetch(`/scrapArtilces`)
  .then(r => r.json())
  .then(r => {
       // render articles
       console.log(r)
  })
  .catch(e => console.error(e))

}

function btnClearClick() {
  // prevent form default behavior for submit
  event.preventDefault();

  console.log("btnClearClick")

  fetch(`/clearArticles`,{ method: 'DELETE'})
  .then( r => {

    console.log(r)
    // redirect
    // window.location = './'

  })
  .catch(e => console.error(e))

}