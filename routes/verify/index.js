const verify = require('express').Router();
const request = require('request');
const config = require('../../config');

verify.post('/', (req, res) => {
  const { token } = req.body;

  const options = {
    url: `${config.authServer}/`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    method: 'GET'
  };

  request(options, (error, response, body) => {
    switch (response.statusCode) {
      case 200:
        res.send(body);
        break;
      default:
        res.send({
          error: true
        });
    }
  });
});

module.exports = verify;
