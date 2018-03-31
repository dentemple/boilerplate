import { TYPES } from "state/types"

export function testDispatch() {
  console.log("Action:", TYPES.TEST_DISPATCH)
  return {
    type: TYPES.TEST_DISPATCH
  }
}
