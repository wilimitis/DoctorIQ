import {
  PATIENT_DETAIL_SUCCESS
} from '../actions/patientDetailActions';
import {
  UPLOAD_DOCUMENT_SUCCESS
} from '../actions/attachmentUploadActions';

const initialState = {
  patient: null,
  attachments: null
};

function patientDetailReducer(state = initialState, action) {
  switch(action.type) {
    case PATIENT_DETAIL_SUCCESS:
      return Object.assign({}, state, {
        patient: action.patient,
        attachments: action.patient.attachments
          .filter(a => a !== null)
          .map(a => {
            return {
              id: a.filename,
              name: a.originalname,
              size: a.size,
              path: a.path
            };
          })
      });
    case UPLOAD_DOCUMENT_SUCCESS:
      const data = action.res.data;
      const attachment = {
        id: data.filename,
        name: data.originalname,
        size: data.size,
        path: data.path
      };

      const attachments = [...state.attachments, attachment]
      return Object.assign({}, state, {
        attachments
      });
    default:
      return state;
  }
}

export default patientDetailReducer;
