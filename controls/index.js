const Router = require('express').Router;
const { listAction } = require('./controller')
router = Router();
router.get('/', listAction)
module.exports = router;