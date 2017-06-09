import React from 'react';
import { connect } from 'react-redux';
import AttachmentList from '../components/AttachmentList';
import AttachmentUpload from '../components/AttachmentUpload';
import { uploadDocumentRequest } from '../actions/attachmentUploadActions';

export default props => {
  const {
    handleFileUpload,
    attachments
  } = props;

  return (
    <div>
      <AttachmentList attachments={attachments}/>
      <AttachmentUpload handleFileUpload={handleFileUpload}/>
    </div>
  );
};