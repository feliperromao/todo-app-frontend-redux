const INITIAL_VALUE = {
  description: '',
  list: []
}

export default function(state = INITIAL_VALUE, action){
  switch(action.type){
    case 'DESCRIPTION_CHANGED':
      return { ...state, description: action.payload }; break;
    case 'TODO_SEARCHED':
      return{...state, list: action.payload.data }
    default: return state
  }
}