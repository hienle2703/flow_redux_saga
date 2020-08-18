import {GET_DATA_SUCCESS, GET_DATA_FAIL} from '../actions/actionTypes';

const initialState = {
  data: null,
  error: null,
};
const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_SUCCESS: {
      return action.data;
    }
    case GET_DATA_FAIL: {
      return null;
    }
    default:{
        return state;
    }
  }
};

export default musicReducer;
