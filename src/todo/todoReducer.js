const INITIAL_VALUE = {
  description: '',
  list: [{
    _id: 1,
    description: 'Pagar fatura cartão',
    done: false,
  },{
    _id: 2,
    description: 'Reunião com equipe',
    done: true,
  },{
    _id: 3,
    description: 'Ir no banco segunda apos o almoço',
    done: false,
  }]
}

export default function(state = INITIAL_VALUE, action){
  switch(action.type){
    case 'DESCRIPTION_CHANGED':
      return { ...state, description: action.payload }; break;
    default: return state
  }
}