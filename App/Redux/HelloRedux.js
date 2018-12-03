/* ------------- Action Types ------------- */
export const ADD_TEXT = 'ADD_TEXT';

/* ------------- Action Creators ------------- */

export function addText(text) {
  return {
    type: ADD_TEXT,
    text
  }
}

/* ------------- Initial State ------------- */

export const INITIAL_STATE = []

/* ------------- Reducer ------------- */

export const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case ADD_TEXT:
      return [ ...state, action.text ];
    default: 
      return state;
  }
}