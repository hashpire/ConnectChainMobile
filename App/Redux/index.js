import { createStore, combineReducers } from 'redux';
// ​import { reducer } from './HelloRedux';

const rootReducer = combineReducers({
  hello: require('./HelloRedux').reducer,
});

// TODO: hydrate state by adding second parameter
export default createStore(rootReducer);