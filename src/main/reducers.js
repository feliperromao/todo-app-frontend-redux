import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  todo: () => ({
    description: 'Ler livro',
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
  })
})

export default rootReducer