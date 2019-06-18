import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import queryString from 'query-string';
import Accordion, { AccordionItem } from './Accordion';

const { REACT_APP_DATA_SERVER } = process.env;

const styles = {
  itemsList: {
    marginTop: 0
  },
  item: {
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  itemWrapper: {
    margin: 0
  },
  itemText: {
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }
};

function KeyList() {
  const [data, setData] = useState();
  const [email, setEmail] = useState();

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
  };

  return (
    <Accordion>
      {data ? (
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
                      {project.title.includes('Blockstack') && `${email}\n`}
                      {Object.values(contentItem).map((value, i) => (
                        <div style={styles.itemText} key={i}>
                          <span
                            onClick={e => handleClick(e)}
                            onMouseEnter={e => handleMouseEnter(e)}
                            onMouseOut={handleMouseOut}
                          >
                            {value}
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
      ) : (
        <FontAwesomeIcon icon="spinner" spin />
      )}
    </Accordion>
  );
}

export default KeyList;
