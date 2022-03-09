const Router = require('express').Router()
const validator = require('../config/validator')
const validatorViajes = require('../config/validatorViaje')
const passport = require('../config/passport')

const userControllers = require('../controllers/usersControllers')
const viajesControllers = require('../controllers/viajesController')

const {newUser,signIn,signInWithToken} = userControllers
const {agregarViaje,obtenerTodosViajes,modificarViaje,borrarViaje} = viajesControllers
// Users


Router.route('/signup')
.post(validator, newUser)

Router.route('/signin')
.post(signIn)

Router.route('/signin/token')
.post(passport.authenticate('jwt',{session:false}),signInWithToken)


Router.route('/viajes')
.get(passport.authenticate('jwt',{session:false}),obtenerTodosViajes)
.post(passport.authenticate('jwt',{session:false}),validatorViajes,agregarViaje)

Router.route('/viajes/:id')
.put(passport.authenticate('jwt',{session:false}),modificarViaje)
.delete(passport.authenticate('jwt',{session:false}),borrarViaje)



module.exports = Router