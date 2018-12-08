// dependencies
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  // `title` must be of type String
  title: String,
  // `body` must be of type String
  body: String
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Artcile", ArticleSchema);

// Export the Note model
module.exports = Article;