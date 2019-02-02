// API-News-Routes 

// news soruce
const nasa = require('./news/nasanews')()

module.exports = (app) => {

  // search for artilces
  app.get("/scrapArtilces", (req, res) => {
    // Get hedalines from new ssource
    nasa.getNews()
      .then(r => {
        res.json(r)
      })
      .catch(e => console.error(e))
  })

}