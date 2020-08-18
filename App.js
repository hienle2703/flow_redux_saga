import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Navigation from './src/ultils/Navigation';
import HomeScreen from './screens/Home';
import Test from './screens/Test';

//Redux:
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './src/redux/reducers/index';
//Saga:
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/redux/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        {/* <Navigation/> */}
        <Test />
        {/* <HomeScreen/> */}
      </View>
    </Provider>
  );
};

export default App;

sagaMiddleware.run(rootSaga);
