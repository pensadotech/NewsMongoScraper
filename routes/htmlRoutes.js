// HTML-Routes 
const path = require('path')

module.exports = (app) => {

  app.get('/savedarticles', (req, res) => {
    // return corrisponding page
    res.sendFile(path.join(__dirname, '../public/savedArticles.html'))
  })

}