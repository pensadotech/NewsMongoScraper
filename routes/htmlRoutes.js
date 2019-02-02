// HTML-Routes 
const path = require('path')

module.exports = (app) => {

  app.get('/scrapearticles', (req, res) => {
    // return corrisponding page
    res.sendFile(path.join(__dirname, '../public/scrapeArticles.html'))
  })

}