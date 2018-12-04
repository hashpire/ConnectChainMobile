/* ------------- Action Types ------------- */
const PLUS_ONE = 'PLUS_ONE';

/* ------------- Action Creators ------------- */

function plusOne() {
  return {
    type: PLUS_ONE
  }
}

export const PLUS_ONE;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = 0;

/* ------------- Reducer ------------- */

export const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case PLUS_ONE:
      return state + 1;
    default: 
      return state;
  }
}