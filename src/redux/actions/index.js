import * as actions from './actionTypes';

//Action do user gọi
const getDataAction = () => {
  return {
    type: actions.GET_DATA,
  };
};

//Action do Saga gọi
const getDataSuccess = (data) =>{
    return {
        type: actions.GET_DATA_SUCCESS,
        data,
    }
}

const getDataFail = (error) =>{
    return {
        type: actions.GET_DATA_FAIL,
        error,
    }
}

export {getDataAction,getDataSuccess,getDataFail}