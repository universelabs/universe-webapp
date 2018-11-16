import React, { Component } from 'react';
import logoCluster from './../img/universe-mite-icon-rounded.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends Component {
  render() {
    return (
      <footer className="container-fluid mx-auto text-center mb-2">
        <div className="text-white-50 text-footer font-weight-bold">
          <img src={logoCluster}
            alt="Universe logo cluster"
            width="45"
            style={{
              opacity: '0.35'
            }}
          />
        </div>
        <div>
          <ul className="list-inline my-2">
            <li className="list-inline-item mx-2">
              <a href="https://github.com/universelabs/" 
                alt="GitHub UniverseLabs (Universe Labs)"
                className="text-white">
                <FontAwesomeIcon className="mr-1" icon={['fab', 'github']} /> GitHub
              </a>
            </li>
            <li className="list-inline-item mx-2">
              <a href="https://twitter.com/UniverseLabs" 
                alt="Twitter Universe Labs (@UniverseLabs)"
                className="text-white">
                <FontAwesomeIcon className="mr-1" icon={['fab', 'twitter']} /> Twitter
              </a>
            </li>
            <li className="list-inline-item mx-2">
              <a href="https://medium.com/@universelabs" 
                alt="Universe Labs – Medium"
                className="text-white">
                <FontAwesomeIcon className="mr-1" icon={['fab', 'linkedin']} /> Medium
              </a>
            </li>
            <li className="list-inline-item mx-2">
              <a href="https://join.slack.com/t/universelabs/shared_invite/enQtNDQ0MjY3NDI5MTkwLTIzMWQ4M2U3MGQ3ZDY5MzM5MGQ5ZDM1MDZjNTgwNGI5NDdiNDY4ZDQyNWI2NjEzZmU3NzVmOTYwYzEzYzc1ZDE" 
                alt="Universe Labs – Slack"
                className="text-white">
                <FontAwesomeIcon className="mr-1" icon={['fab', 'medium']} /> Slack
              </a>
            </li>
          </ul>
        </div>
        <div className="text-footer text-white-50 font-weight-normal">
          Universe Labs &copy; 2018.
        </div>
      </footer>
    );
  }
}

export default Footer;
