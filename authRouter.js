const controller = require('./authController')
const router = require('express').Router()

const endPoints = {
    me: '/me',
    login: '/login',
    logout: '/logout'
}

router.get(endPoints.me, controller.me)
router.post(endPoints.login, controller.login)
router.delete(endPoints.logout, controller.logout)

module.exports = router