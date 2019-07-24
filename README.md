<div align="center">
  <h3>Universe key management web client</h3>
  <p>
    Universe is a key management software solution for decentralized platforms.
    <br/>
    <a href="https://universe.engineering">
      <strong>universe.engineering</strong>
    </a>
  </p>
  <p>
    <a href="https://github.com/universelabs/universe-webapp/issues/new?labels=&template=bug_report.md" alt="Report a Bug (universe.engineering)">
      Report bug
    </a>
    &middot;
    <a href="https://github.com/universelabs/universe-webapp/issues/new?labels=&template=feature_request.md" alt="Request feature (universe.engineering)">
      Request feature
    </a>
    &middot;
    <a href="https://medium.com/universelabs" alt="UniverseLabs – Medium">
      Medium
    </a>
    &middot;
    <a href="https://join.slack.com/t/universelabs/shared_invite/enQtNDQ0MjY3NDI5MTkwLTIzMWQ4M2U3MGQ3ZDY5MzM5MGQ5ZDM1MDZjNTgwNGI5NDdiNDY4ZDQyNWI2NjEzZmU3NzVmOTYwYzEzYzc1ZDE">
      Slack
    </a>
    <br/>
    <br/>
    <a href="https://twitter.com/intent/follow?screen_name=universelabs">
      <img src="https://img.shields.io/twitter/url/https/twitter.com/universelabs.svg?style=social&label=Follow%20%40universelabs&logo=twitter" alt="follow on Twitter" />
    </a>
    &middot;
    <a href="https://github.com/universelabs/universe-webapp/stargazers">
      <img src="https://img.shields.io/github/stars/universelabs/universe-webapp.svg?style=social&label=Star&maxAge=2592000" alt="Star Repo" />
    </a>
  </p>
</div>

<br/>

## Table of contents

- [Quick start](#quick-start)
- [Status](#status)
- [Getting started](#getting-started)
- [Contributing](#contributing)
- [Roadmap](#roadmap)
- [Community](#community)
- [Maintainers](#maintainers)
- [License](#license)

## Quick start

1. Quickly start by cloning the repository to your local machine `git clone git@github.com:universelabs/universe-webapp.git`.
2. Ensure you have [`npm`](https://www.npmjs.com/get-npm) installed. `npm` comes bundled with [Node.js](https://nodejs.org/en/download/package-manager/). `brew install node`.
3. Add dependencies for both the back-end and client servers `npm install`.
4. Start the local back-end and client side server and run the app. The app will automatically open your web browser and navigate to http://localhost:3000/ for you `npm run dev`.

## Status

[![Slack](https://img.shields.io/badge/Community-Join_the_Slack!-purple.svg?colorA=212121&colorB=3f46ad)](https://join.slack.com/t/universelabs/shared_invite/enQtNDQ0MjY3NDI5MTkwLTIzMWQ4M2U3MGQ3ZDY5MzM5MGQ5ZDM1MDZjNTgwNGI5NDdiNDY4ZDQyNWI2NjEzZmU3NzVmOTYwYzEzYzc1ZDE)

[![universe-webapp version](https://img.shields.io/badge/dynamic/json.svg?label=Version&url=https%3A%2F%2Fraw.githubusercontent.com%2Funiverselabs%2Funiverse-webapp%2Fmaster%2Fclient%2Fpackage.json&query=%24.version&colorA=%23212121&colorB=%2300BB00)](https://github.com/universelabs/universe-webapp/blob/master/client/package.json)
[![Build status](https://img.shields.io/circleci/project/github/universelabs/universe-webapp.svg?label=Build+status&colorA=%23212121)](https://circleci.com/gh/universelabs/universe-webapp)
[![dependencies status](https://img.shields.io/david/universelabs/universe-webapp.svg?label=dependencies&colorA=%23212121)](https://david-dm.org/universelabs/universe-webapp)
[![devDependencies status](https://img.shields.io/david/dev/universelabs/universe-webapp.svg?label=devDependencies&colorA=%23212121)](https://david-dm.org/universelabs/universe-webapp?type=dev)
[![Repository Size](https://img.shields.io/github/repo-size/universelabs/universe-webapp.svg?label=Repository+Size&colorA=%23212121&colorB=%23007BFF)](https://github.com/universelabs/universe-webapp)

## Getting started

Quickly start by cloning the repository to your local machine

```
$ git clone git@github.com:universelabs/universe-webapp.git
```

Install [`npm`](https://www.npmjs.com/get-npm). `npm` is installed and comes bundled with [Node.js](https://nodejs.org/en/download/package-manager/)

```
$ brew install node
```

Add dependencies for the [Express.js](https://expressjs.com/) server

```
$ cd universe-webapp
$ npm install
```

Add dependencies for the [React.js](https://reactjs.org/)/[create-react-app](https://github.com/facebook/create-react-app) client

```
$ cd client
$ npm install
```

Go back to the server

```
$ cd ..
```

For local development, you also need either a) a local, or b) a deployed instance of the [auth-server](https://github.com/universelabs/universe-auth)(visit its repo for setup instructions).

In either case, you need a `config/dev.js` file which will hold the environment variable for `auth-server`. First create the file by running
```
$ touch config/dev.js
```
Then,

a) If you are running the `auth-server` locally, you should edit `config/dev.js` to contain its local address and port, eg.:
```
module.exports = {
  authServer: 'https://localhost:5001'
};
```
b) If you want to use a deployed `auth-server`, you should edit `config/dev.js` to contain its domain, eg.:
```
module.exports = {
  authServer: 'https://auth.example.com'
};
```

Start the server by running

```
$ npm run server
```

Open a new terminal tab and start the client by running

```
$ npm run client
```

The above will automatically open a browser window with the client app on http://localhost:3000/dashboard. There’s also the Node/Express server app running on port 5000. The app will also listen for changes and update automatically.

## Contributing

Please read through our [contributing guidelines](https://github.com/universelabs/universe/blob/master/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Moreover, if your pull request contains JavaScript patches or features, you
must include relevant unit tests. All code should conform to the [Code Guidelines](https://github.com/universelabs/universe/blob/master/CONTRIBUTING.md#code-guidelines).

## Roadmap

Universe Labs' mission is to become the largest open source node and key management network.

[› Universe Roadmap](https://github.com/universelabs/universe/blob/master/ROADMAP.md)

View the Universe Roadmap to learn more about project overview, goals, execution to date, milestones, current tech stack, and more...

## Community

Get updates on Universe's development and chat with the project maintainers and community members.

- Subscribe to the [Universe Newsletter](http://universe.engineering/subscribe)
- [Star the repo](https://github.com/universelabs/universe/stargazers)
- Follow [@universelabs](https://twitter.com/universelabs) on Twitter.
- Join the official Universe [Slack](https://join.slack.com/t/universelabs/shared_invite/enQtNDQ0MjY3NDI5MTkwLTIzMWQ4M2U3MGQ3ZDY5MzM5MGQ5ZDM1MDZjNTgwNGI5NDdiNDY4ZDQyNWI2NjEzZmU3NzVmOTYwYzEzYzc1ZDE).

## Maintainers

**Guy Lepage**

- <https://twitter.com/guylepage3>
- <https://github.com/guylepage3>

**Dan Trevino**

- <https://twitter.com/dantrevino>
- <https://github.com/dantrevino>

**Modestos Kaffes**

- <https://twitter.com/modkaffes>
- <https://github.com/modkaffes>

**Jacob Gadakian**

- <https://twitter.com/gadikian>
- <https://github.com/faddat>

## License

By contributing your code, you agree to license your contribution under the [
MIT License](LICENSE).

This project was bootstrapped with [Create React App `v2`](https://github.com/facebookincubator/create-react-app).

<div align="right">
  <a href="https://opensource.guide/how-to-contribute/#why-contribute-to-open-source">
    <img src="https://badges.frapsoft.com/os/v3/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/" alt="Open Source">
  </a>
</div>
