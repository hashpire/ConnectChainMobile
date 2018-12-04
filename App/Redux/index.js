import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import Config from 'react-native-config';

const rootReducer = combineReducers({
  hello: require('./HelloRedux').reducer,
});

// TODO: hydrate state by adding second parameter
let store;
if(Config.ENABLE_REDUX_DEVTOOLS == 1){
  store =  createStore(rootReducer, devToolsEnhancer());
} else {
  store = createStore(rootReducer);
}

export default store;