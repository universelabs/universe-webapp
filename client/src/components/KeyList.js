import React, { useState, useEffect } from 'react';
import Accordion, { AccordionItem } from './Accordion';

const { REACT_APP_API_URL, REACT_APP_API_PORT } = process.env;
const DATA_URL = `${REACT_APP_API_URL}:${REACT_APP_API_PORT}/data`;

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
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(DATA_URL)
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <Accordion>
      {data &&
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
                      {Object.values(contentItem).map(value => `${value}\n`)}
                    </pre>
                  </li>
                ))}
              </ul>
            )}
          </AccordionItem>
        ))}
    </Accordion>
  );
}

export default KeyList;
