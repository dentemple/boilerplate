import { ACTIONS } from '../types'

const initialState = {
  value: 'Hello, world'
}

function testReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.TEST_DISPATCH:
      return { ...state, payload: action.payload }

    default:
      return state
  }
}

export default testReducer
