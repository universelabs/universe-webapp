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

  request(options, (error, response, body) => {
    // TODO: Check what are all the possible responses from the auth server
    // and restrict res to only those, returning the corresponding data.
    switch (response.statusCode) {
      case 200:
        res.send(body);
        break;
      case 401:
        res.send({
          error: response.statusMessage
        });
      default:
        // Catchall error so the client redir to /login-error
        res.send({
          error: true
        });
    }
  });
});

module.exports = login;
