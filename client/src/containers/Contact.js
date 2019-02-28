import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Social from '../components/Social';
import ContactForm from '../components/ContactForm';
import '../css/Subscribe.css';

class About extends Component {
  state = {
    socialItems: [
      {
        id: 1,
        href: 'https://github.com/universelabs/',
        alt: 'GitHub UniverseLabs (Universe Labs)',
        icon: 'github',
        text: 'GitHub'
      },
      {
        id: 2,
        href: 'https://twitter.com/UniverseLabs',
        alt: 'Twitter Universe Labs (@UniverseLabs)',
        icon: 'twitter',
        text: 'Twitter'
      },
      {
        id: 3,
        href: 'https://medium.com/universelabs',
        alt: 'Universe Labs – Medium',
        icon: 'medium',
        text: 'Medium'
      },
      {
        id: 4,
        href: 'https://join.slack.com/t/universelabs/shared_invite/enQtNDQ0MjY3NDI5MTkwLTIzMWQ4M2U3MGQ3ZDY5MzM5MGQ5ZDM1MDZjNTgwNGI5NDdiNDY4ZDQyNWI2NjEzZmU3NzVmOTYwYzEzYzc1ZDE',
        alt: 'Universe Labs – Slack',
        icon: 'slack',
        text: 'Slack'
      }
    ]
  }

  render() {
    return (
      <div>
        <Navbar colorScheme="bg-black"/>
        <div style={{ marginLeft: '6px', marginRight: '6px' }}>
          <div 
            className="container text-left mb-8 pb-8"
            style={{
              maxWidth: '550px'
            }}>
            <div></div>
            <h1 className="h1-editorial mb-4b">
              Contact
            </h1>
            <p className="mb-5">
              General inquiries, please fill out the form below.
            </p>
            <ContactForm />
            <div className="text-center pt-6">
              <Social 
                socialItems={this.state.socialItems}
                className="lead"
                listAlign="list-inline-item"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;