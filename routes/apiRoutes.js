// API-Routes 
const nasa = require('./news/nasanews')()

module.exports = (app) => {

  // search for artilces
  app.get("/scrapArtilces", (req, res) => {

    console.log("scrapeNews")

    nasa.getNews()
      .then(r => {
        res.json(r)
      })
      .catch(e => console.error(e))
  })

  app.delete('/clearArticles', (req, res) => {

    console.log("clear-Articles")

    // todo: delete articles from DB
    res.sendStatus(200)

  })

}
