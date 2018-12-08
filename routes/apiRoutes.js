// API-Routes 
const axios = require('axios')
const cheerio = require('cheerio')

module.exports = (app) => {

  // search for artilces
  app.get("/scrapArtilces", (req, res) => {

    console.log("scrapeNews")
    getNews()
      .then(r => {
        // console.log(r)
      })

  })

  app.delete('/clearArticles', (req, res) => {

    console.log("clear-Articles")

  })

}


// KEY: Async forEach function
// async function asyncForEach(array, callback) {
//   for (let index = 0; index < array.length; index++) {
//     await callback(array[index], index, array)
//   }
// }

async function getArtilceHeads() {
  // build the target URL
  let url = `https://www.cnn.com/`
  // let url = `https://www.reddit.com/r/mechanical_gifs`
  let result = await axios.get(url)
  return result;
}

async function getArticles() {
  articlesArr = [];
  let result = await getArtilceHeads()
  const $ = cheerio.load(result.data)
  console.log(result.data)
  
  console.log($('.cd__headline-text').html())

  // $('h3.cd__headline').each((i, elem) => {
  //    console.log(elem)

  // })

  // $('h2.imors3-0.iuScIP').each((i, elem) => {
  //   if (i <= 4) {
  //     articlesArr.push({
  //       article: `${$(elem).html()}`
  //     })
  //   }
  // })

  // console.log("[Articles]")
  // console.log(articlesArr)
  return articlesArr
}

function getNews() {
  return new Promise(function (resolve, reject) {
    resolve(getArticles())
  })
}