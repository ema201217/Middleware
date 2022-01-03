const {Router} = require('express')
const router = Router()

/* Middleware */
const adminCheck = require('../middlewares/adminCheck')

/* Controllers */
const {index,admin} = require('../controllers/indexController')

router.get("/",index)
router.get("/admin",adminCheck,admin)

module.exports = router