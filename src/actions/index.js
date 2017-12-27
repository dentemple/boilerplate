import { ACTIONS } from '../types'

export function testDispatch(payload) {
  return {
    type: ACTIONS.TEST_DISPATCH,
    payload: payload || {}
  }
}
