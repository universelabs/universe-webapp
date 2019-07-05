import React, { useState } from 'react';

const styles = {
  list: {
    margin: 0
  },
  item: {
    cursor: 'pointer',
    marginBottom: '5px',
    padding: '27px 40px',
    borderRadius: '10px',
    border: 'none'
  },
  itemTitle: {
    userSelect: 'none',
    margin: '-0.75rem 0',
    padding: '9.25px 0'
  },
  itemContent: {
    backgroundColor: 'transparent'
  }
};

export const AccordionItem = ({ title, children }) => {
  const [expanded, setExpanded] = useState();

  return (
    <li className="list-group-item list-group-item-action" style={styles.item}>
      <h6 style={styles.itemTitle} onClick={() => setExpanded(!expanded)}>
        {title}
      </h6>
      {expanded && <div style={styles.itemContent}>{children}</div>}
    </li>
  );
};

const Accordion = ({ children }) => (
  <ul className="list-group position-relative" style={styles.list}>
    {children}
  </ul>
);

export default Accordion;
