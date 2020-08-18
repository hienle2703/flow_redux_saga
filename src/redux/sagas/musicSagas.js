import {
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_FAIL,
} from '../actions/actionTypes';

//method of Saga
import {put, takeLatest} from 'redux-saga/effects';

import {apiService} from '../../services/apiService';

function* getData() {
    try{
        const data = yield apiService.getAudioApi();
        if (data!==null){
            yield put({
                type:GET_DATA_SUCCESS,
                data: data
            })
        }
        
    }
    catch(error){
        yield put({
            type: GET_DATA_FAIL,
            error,
        })
    }
}

function* watchGetData() {
    yield takeLatest(GET_DATA,getData);

}

export {watchGetData};
