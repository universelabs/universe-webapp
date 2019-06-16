import React, { useState } from 'react';

const styles = {
  list: {
    margin: 0
  },
  item: {
    cursor: 'pointer'
  },
  itemTitle: {
    userSelect: 'none',
    margin: '-0.75rem -0.125rem',
    padding: '0.75rem 0.125rem'
  },
  itemContent: {
    margin: '0.75rem -1.25rem -0.75rem',
    padding: '0 1.25rem',
    borderTop: '1px solid #eee',
    backgroundColor: 'white'
  }
};

export const AccordionItem = ({ title, children }) => {
  const [expanded, setExpanded] = useState(title.includes('Blockstack'));

  return (
    <li className="list-group-item list-group-item-action" style={styles.item}>
      <div style={styles.itemTitle} onClick={() => setExpanded(!expanded)}>
        {title}
      </div>
      {expanded && <div style={styles.itemContent}>{children}</div>}
    </li>
  );
};

const Accordion = ({ children }) => (
  <ul className="list-group" style={styles.list}>
    {children}
  </ul>
);

export default Accordion;
