import { combineReducers } from 'redux';

export default combineReducers({
  hello: require('./HelloRedux').reducer,
});