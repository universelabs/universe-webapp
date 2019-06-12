const login = require('express').Router();
const request = require('request');
const config = require('../../config');

login.post('/', (req, res) => {
  const { email, password } = req.body;

  // Validation
  if (!email) {
    res.redirect('/login-error');
    return;
  }

  // Construct req data
  const data = {
    email,
    password
  };

  const postData = JSON.stringify(data);

  const options = {
    url: `${config.authServer}/signin`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: postData
  };

  request(options, (err, response, body) => {
    if (err) {
      res.redirect('/login-error');
    } else {
      if (response.statusCode === 200) {
        res.redirect('/login-success');
      } else {
        res.redirect('/login-error');
      }
    }
  });
});

module.exports = login;
