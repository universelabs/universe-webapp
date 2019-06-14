import React, { useState, useEffect } from 'react';
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
  const [data, setData] = useState([]);
  const [clipboard, copyToClipboard] = useClipboard();

  useEffect(() => {
    fetch(`${REACT_APP_DATA_SERVER}/data`)
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
        ))}
    </Accordion>
  );
}

export default KeyList;
