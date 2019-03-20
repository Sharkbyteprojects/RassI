const Router = require('express').Router;
const { listAction, onoff } = require('./controller')
router = Router();
router.get('/', listAction)
router.get('/onoff/:id', onoff)
module.exports = router;