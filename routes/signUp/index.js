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
    // TODO: Check what are all the possible responses from the auth server
    // and restrict res to only those, manually returning only needed data
    // eg. on 200 {"token": "…"}, on 422 {"error": "Email in use"} etc
    switch (response.statusCode) {
      case 200:
        res.send(body);
        break;
      case 422:
        res.send(body);
        break;
      default:
        // Catchall error so the client redir to /signup-error
        res.send({
          error: true
        });
    }
  });
});

module.exports = signup;
