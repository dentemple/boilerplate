import { testDispatch } from "state/actions"
import { TYPES } from "state/types"

describe("actions", () => {
  it("should create an action without a payload", () => {
    const expectedAction = {
      type: TYPES.TEST_DISPATCH
    }
    expect(testDispatch()).toEqual(expectedAction)
  })
})
