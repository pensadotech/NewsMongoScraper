// Routes Index
module.exports = (app,db) => {
  require('./htmlRoutes')(app)
  require('./apiNewsRoutes')(app) 
  require('./apiDbRoutes')(app,db) 
}