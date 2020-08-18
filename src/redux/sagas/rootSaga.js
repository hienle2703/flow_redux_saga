import {call,all} from "redux-saga/effects";
import {watchGetData} from "./musicSagas"

export default function* rootSaga(){
    yield all([
        call(watchGetData)
    ])
}