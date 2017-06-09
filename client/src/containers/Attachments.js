import React from 'react';
import { connect } from 'react-redux';
import AttachmentList from '../components/AttachmentList';
import AttachmentUpload from '../components/AttachmentUpload';
import { uploadDocumentRequest } from '../actions/attachmentUploadActions';

const Attachments = props => {
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

const mapStateToProps = (state, ownProps) => {
  return {
    attachments: state.patientDetail.patient.attachments
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleFileUpload: (file) => {
      dispatch(uploadDocumentRequest(file));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Attachments);