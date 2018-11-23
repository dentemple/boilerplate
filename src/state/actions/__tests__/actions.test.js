import { testDispatch } from '../../actions'
import actions from '../../types'

describe('actions', () => {
  it('should create an action without a payload', () => {
    const expectedResult = {
      type: actions.TEST_DISPATCH
    }
    expect(testDispatch()).toEqual(expectedResult)
  })
})
