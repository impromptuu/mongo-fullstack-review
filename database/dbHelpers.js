const Todo = require('../database/index');

// getAll should send all todos in database sorted by priority
const getAll = () => (
  Todo.find({}).sort({priority : -1})       
);

// addTodo should add to your database using req.body
const addTodo = () => {
  Todo.create()
};

// Repo.create(repo, (err) => {
//   if (err) {
//     console.log('duplicate protection error saving')
//   } else {
//     console.log(`repo : ${repo.reponame} created!`)
//   }
// })

// deleteTodo should delete from database if _id matches
const deleteTodo = () => {

};

// updateTodo should update todo at _id using req.body
const updateTodo = () => {

}

module.exports = {
    getAll,
    addTodo,
    deleteTodo,
    updateTodo
}