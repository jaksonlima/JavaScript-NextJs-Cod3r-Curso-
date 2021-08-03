import { createStore, combineReducers } from 'redux'

const INITIAL_STATE = {
  max: 0,
  min: 0
}

const reducers = combineReducers({
  numeros: (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'ADD_MAX':
        return {
          ...state,
          ...action.payload
        }
      case 'ADD_MIN':
        return {
           ...state,
           ...action.payload
        }  
      default:
        return state
    }
  }
})

export function createMyStore () {
  return createStore(reducers)
}