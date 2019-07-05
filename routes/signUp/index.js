const signup = require('express').Router();
const request = require('request');
const config = require('../../config');

signup.post('/', (req, res) => {
  const { email, password } = req.body;

  // Validation
  if (!email) {
    res.redirect('/signup-error');
    return;
  }

  // Construct req data
  const data = {
    email,
    password
  };

  const postData = JSON.stringify(data);

  const options = {
    url: `${config.authServer}/signup`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: postData
  };

  request(options, (error, response, body) => {
    if (response.statusCode === 200) {
      res.send(body)
    } else {
      res.redirect('/signup-error');
    }
  });
});

module.exports = signup;
