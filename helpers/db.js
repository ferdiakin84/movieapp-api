const mongoose = require("mongoose");
module.exports = () =>
{
    mongoose.connect(
        "mongodb+srv://akin84:akin84@fullstack.qq3jv.mongodb.net/movieApp?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
      );
      
      
      const db = mongoose.connection;
      db.on('error', console.error.bind(console, 'connection error:'));
      db.on('open', function() {  console.log("we're connected!");});
}