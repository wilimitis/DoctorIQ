import React from 'react';
import { List, ListItem } from 'material-ui/List';

export default props => {
  const attachments = props.attachments ? props.attachments.map(attachment =>
    <li key={attachment.path}>
      {`Name: ${attachment.name}`} <br /> {`Size:${attachment.size}`} <br />
      <button onClick={(e) => props.handleClick(e, attachment.path, attachment.name)}>download</button>
      <button onClick={(e) => props.handleDelete(e, attachment.path)}>delete</button>
    </li>
  ) : (
    <li key="none">...</li>
  );
  
  return (
    <ul>
      {attachments}
    </ul>
  );
};