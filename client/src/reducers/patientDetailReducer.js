import {
  PATIENT_DETAIL_SUCCESS
} from '../actions/patientDetailActions';
import {
  UPLOAD_DOCUMENT_SUCCESS
} from '../actions/attachmentUploadActions';

const initialState = {
  patient: {
    attachments: null
  }
};

function patientDetailReducer(state = initialState, action) {
  switch(action.type) {
    case PATIENT_DETAIL_SUCCESS:
      return Object.assign({}, state, {
        patient: action.patient
      });
    case UPLOAD_DOCUMENT_SUCCESS:
      const data = action.res.data;
      const attachment = {
        id: data.filename,
        name: data.originalname,
        size: data.size,
        path: data.path
      };
      state.patient.attachments.push(attachment);
      return Object.assign({}, state);
    default:
      return state;
  }
}

export default patientDetailReducer;
