import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  hello: require('./HelloRedux').reducer,
});

// TODO: hydrate state by adding second parameter
export default createStore(rootReducer, devToolsEnhancer());