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

  request(options, (err, response, body) => {
    if (err) {
      res.redirect('/signup-error');
    } else {
      if (response.statusCode === 200) {
        res.redirect('/signup-success');
      } else {
        res.redirect('/signup-error');
      }
    }
  });
});

module.exports = signup;
