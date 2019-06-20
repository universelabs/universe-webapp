import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import queryString from 'query-string';
import Accordion, { AccordionItem } from './Accordion';
import Alert from './Alert';

const { REACT_APP_DATA_SERVER } = process.env;

const styles = {
  itemsList: {
    marginTop: 0
  },
  item: {
    overflow: 'hidden',
    paddingRight: 0,
    paddingLeft: 0
  },
  itemWrapper: {
    margin: 0
  },
  itemText: {
    maxWidth: '100%',
    whiteSpace: 'initial'
  },
  alert: {
    zIndex: 2000,
    top: 0,
    left: 0,
    position: 'fixed'
  }
};

function KeyList() {
  const [data, setData] = useState();
  const [email, setEmail] = useState();
  const [alert, setAlert] = useState();

  useEffect(() => {
    fetch(`${REACT_APP_DATA_SERVER}/data`)
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    setEmail(queryString.parse(location.search).user);
  }, []);

  const handleMouseEnter = e => {
    let selection = window.getSelection();
    let range = document.createRange();
    range.selectNode(e.currentTarget);
    selection.addRange(range);
  };

  const handleMouseOut = () => {
    window.getSelection().removeAllRanges();
  };

  const handleClick = e => {
    document.execCommand('copy');
    displayNotification('Copied to clipboard!');
  };

  const displayNotification = text => {
    setAlert(true);
    window.setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  return (
    <Accordion>
      {alert && (
        <Alert
          className="alert alert-primary w-100 text-center fadein-slow-1300 anima-transitiondown-slow font-weight-bold"
          style={styles.alert}
        >
          Copied to clipboard!
        </Alert>
      )}
      {data && (
        data.map((project, i) => (
          <AccordionItem key={i} title={project.title}>
            {project.content && (
              <ul
                className="list-group list-group-flush"
                style={styles.itemsList}
              >
                {project.content.map((contentItem, i) => (
                  <li className="list-group-item" key={i} style={styles.item}>
                    <pre style={styles.itemWrapper}>
                      {Object.entries(contentItem).map((item, i) => (
                        <div style={styles.itemText} key={i}>
                          <span>{item[0]}: </span>
                          <span
                            onClick={e => handleClick(e)}
                            onMouseEnter={e => handleMouseEnter(e)}
                            onMouseOut={handleMouseOut}
                          >
                            {project.title.includes('Blockstack') && item[0].includes('Email') && email}
                            {item[1]}
                          </span>
                        </div>
                      ))}
                    </pre>
                  </li>
                ))}
              </ul>
            )}
          </AccordionItem>
        ))
      )}
    </Accordion>
  );
}

export default KeyList;
