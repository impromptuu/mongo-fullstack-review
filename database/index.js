const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todos', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
  console.log('Mongo connected')
});

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  name: String,
  priority: Number,
});

const Todo = mongoose.model('Todo', todoSchema);

mongoose.Promise = global.Promise;

module.exports = Todo