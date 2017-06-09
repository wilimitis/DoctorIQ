import React from 'react';
import { List, ListItem } from 'material-ui/List';

export default props => {
  const attachments = props.attachments ? props.attachments.map(attachment =>
    <ListItem key={attachment.id} primaryText={`Name: ${attachment.name}`} secondaryText={`Size:${attachment.size}`} />
  ) : (
    <ListItem key="none" primaryText="loading..." />
  );

  return (
    <List>
      {attachments}
    </List>
  );
};