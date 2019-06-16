import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import queryString from 'query-string';
import Accordion, { AccordionItem } from './Accordion';
import useClipboard from 'react-hook-clipboard';

const { REACT_APP_DATA_SERVER } = process.env;

const styles = {
  itemsList: {
    marginTop: 0
  },
  item: {
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  itemContent: {
    margin: 0
  }
};

function KeyList() {
  const [data, setData] = useState();
  // eslint-disable-next-line no-unused-vars
  const [clipboard, copyToClipboard] = useClipboard();
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
                    <pre style={styles.itemContent}>
                      {project.title.includes('Blockstack') && `${email}\n`}
                      {Object.values(contentItem).map((value, i) => (
                        <div key={i} onClick={() => copyToClipboard(value)}>
                          {value}
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
