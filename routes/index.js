const routes = require('express').Router();

const subscribe = require('./subscribe');
const sendEmail = require('./sendEmail');
const signUp = require('./signUp');
const logIn = require('./logIn');

routes.use('/subscribe', subscribe);
routes.use('/send-email', sendEmail);
routes.use('/signup', signUp);
routes.use('/login', logIn);

module.exports = routes;
