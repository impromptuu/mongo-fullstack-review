const connection = require('./index.js');
const dbHelpers = require('../database/dbHelpers.js');

const get = (req, res) => {
  dbHelpers.getAll()
    .then((data) => {
      res.status(200).send(data)
    })
    .catch((err) => {
      res.status(404).send('error gettting')
    })
}

const post = (req,res) => {
  const { name, priority} = req.body
  console.log()
  // dbHelpers.addTodo(payload)
  //   .then(() => {
  //     res.status(201).send('You posted a todo')
  //   })
  //   .catch((err) => {
  //     res.status(404).send('error posting', err)
  //   })
}

const put = (req,res) => {
  // const { updateinfo } = req.params;
  // const { where } = req.body;
  // dbHelpers.updateTodo(WHEREANDWHAT)
  //   .then(() => {
  //     res.status(200).send(`Put id ${id}`)
  //   })
  //   .catch((err) => {
  //     res.status(404).send('error putting', err)
  //   });
}

const destroy = (req,res) => {
  // const { condition } = req.params;
  // dbHelpers.deleteTodo(condition)
  //   .then(() => {
  //     res.status(200).send(`Destroyed id ${id}`)
  //   })
  //   .catch((err) => {
  //     res.status(404).send('error destroying', err)
  //   });
}


module.exports = {
    get,
    post,
    destroy,
    put
}