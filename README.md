<div align="center">
  <h3>Universe key management web app</h3>
  <p>
    Universe is a custody network for crypto assets and the decentralized web.
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
<p align="center">
  <a href="https://universe.engineering">
    <img width="700" alt="universe-wevapp-v1.0.1-alpha" src="https://user-images.githubusercontent.com/1711854/62663734-c8d8a000-b946-11e9-8baa-079a46a3406b.png">
  </a>
</p>

<br/>

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
[![universe-webapp version](https://img.shields.io/badge/dynamic/json.svg?label=Version&url=https%3A%2F%2Fraw.githubusercontent.com%2Funiverselabs%2Funiverse-webapp%2Fmaster%2Fclient%2Fpackage.json&query=%24.version&colorA=%23212121&colorB=%23FF0000)](https://github.com/universelabs/universe-webapp/blob/master/client/package.json)
[![Repository Size](https://img.shields.io/github/repo-size/universelabs/universe-webapp.svg?label=Repository+Size&colorA=%23212121&colorB=%23007BFF)](https://github.com/universelabs/universe-webapp)

## Getting started

Quickly start by cloning the repository to your local machine

```
$ git clone git@github.com:universelabs/universe-webapp.git
```

Install dependencies for [Express.js](https://expressjs.com/) server

```
$ cd universe-webapp
$ npm install
```

Install dependencies for [React.js](https://reactjs.org/)/[create-react-app](https://github.com/facebook/create-react-app) client

```
$ cd client
$ npm install
```

Go back to the server

```
$ cd ../
```

The `universe-webapp` requires users to run an instance of the [universe-auth](https://github.com/universelabs/universe-auth) server.
- [To run the app you MUST also run the Authentication Server. Visit the repository for instructions on how to run it](https://github.com/universelabs/universe-auth).

Next, you will need a `config/dev.js` file to hold the environment variable for `universe-auth` server. First create the file by running
```
$ touch config/dev.js
```

Add the localhost address and port to the `config/dev.js`.
```
module.exports = {
  authServer: 'https://localhost:5000'
};
```

Start the authentication server

```
$ npm run server
```

Open a new terminal tab and start the front-end client by running

```
$ npm run client
```

The above will automatically open a browser window with the client app on http://localhost:3000/dashboard. There’s also the Node/Express server app running on port 4000. The app will also listen for changes and update automatically.

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

**Modestos Kaffes**

- <https://twitter.com/modkaffes>
- <https://github.com/modkaffes>

**Dan Trevino**

- <https://twitter.com/dantrevino>
- <https://github.com/dantrevino>

## License

By contributing your code, you agree to license your contribution under the [
MIT License](LICENSE).

This project was bootstrapped with [Create React App `v2`](https://github.com/facebookincubator/create-react-app).

<div align="right">
  <a href="https://opensource.guide/how-to-contribute/#why-contribute-to-open-source">
    <img src="https://badges.frapsoft.com/os/v3/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/" alt="Open Source">
  </a>
</div>
