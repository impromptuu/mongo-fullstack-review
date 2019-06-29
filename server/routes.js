const router = require('express').Router();
const controllers = require('./controller');

router
    .route('/todos/')
    .get(controllers.get)
    .post(controllers.post)

router 
    .route('/todos/:id')
    .delete(controllers.destroy)
    .put(controllers.put)

module.exports = router;
