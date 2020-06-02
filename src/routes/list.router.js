const listController = require('../controllers/list.controller');

module.exports = (router) => {
  router.get("/", listController.greeting)
  router.get("/list", listController.getList)
}
