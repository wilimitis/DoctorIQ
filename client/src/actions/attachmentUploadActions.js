import axios from 'axios';

export const UPLOAD_DOCUMENT_SUCCESS = 'UPLOAD_DOCUMENT_SUCCESS';
export const UPLOAD_DOCUMENT_FAIL = 'UPLOAD_DOCUMENT_FAIL';

export function uploadSuccess(res) {
  return {
    type: UPLOAD_DOCUMENT_SUCCESS,
    res
  };
};

export function uploadFail(err) {
  return {
    type: UPLOAD_DOCUMENT_FAIL,
    err
  };
};

export function uploadDocumentRequest(file, userId) {
  let data = new FormData();
  data.append('file', file);
  data.append('userId', userId)

  return (dispatch) => {
    axios.post('/attachments', data)
      .then(res => dispatch(uploadSuccess(res)))
      .catch(err => dispatch(uploadFail(err)));
  };
};
