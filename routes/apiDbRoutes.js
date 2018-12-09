// API-DB-Routes 

module.exports = (app, db) => {
  
  // Get all documents 
  app.get("/article", (req, res) => {
    db.Article.find({})
      .then(r =>  {
        res.json(r)
      })
      .catch(e => console.error(e))
  })

  // Create document
  app.post('/article', (req, res) => {
    
    // body has an article
    let article = req.body

    //create article into the database
    db.Article.findOne({ pubId: { $eq: article.pubId } })
      .then((r) => {
        // console.log('article.pubId(2):',r)
        if (r === null) {
          // create 
          db.Article.create(article)
            .then(() => res.sendStatus(200))
            .catch(e => console.error(e))
        } else {
          // Update 
          db.Article.updateOne( { pubId : { $eq: article.pubId} } , { $set: article } )
            .then(() => res.sendStatus(200))
            .catch(e => console.error(e))
        }
      })
      .catch(e => console.error(e))

  })

  // delete one document
  app.delete('/artilce/:id', (req, res) => {
      // article published id
      let pubid = req.params.id
      // delete article
      db.Article.deleteOne({ pubId: { $eq: pubid }})
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // delete all documents
  app.delete('/deleteallartilces', (req, res) => {
    
    // Delete all documents
    db.Article.deleteMany({})
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))

  })

}