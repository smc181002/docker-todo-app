const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/todoApp',
{useNewUrlParser:true}).then(() => {
  console.log('Connection to mongoDB is established.')
}).catch((e) => {
  console.log('Connection Error while trying to connect mongoDB');
  console.log(e)
});

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = { mongoose };