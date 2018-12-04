import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Config from 'react-native-config';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from '../Sagas';
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// TODO: hydrate state by adding second parameter
let store;
if(Config.ENABLE_REDUX_DEVTOOLS == 1){
  store =  createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
} else {
  store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
}
sagaMiddleware.run(rootSaga)

export default store;