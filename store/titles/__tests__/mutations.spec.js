import * as titlesStore from '../index'
import { MOCK_RESPONSE } from '../__mocks__/mockData'

describe('Titles store - Mutations', () => {
  describe('SET_TITLES', () => {
    it('sets titles in the state', () => {
      const mockTitle = MOCK_RESPONSE.data[0]
      const state = titlesStore.state()

      titlesStore.mutations.SET_TITLES(state, { titles: [mockTitle] })

      expect(state.data[mockTitle['Title Number']]).toEqual(mockTitle)
    })

    it('returns if no titles passed in', () => {
      const state = titlesStore.state()

      expect(state.data).toEqual({})
      titlesStore.mutations.SET_TITLES(state, { titles: [] })
      expect(state.data).toEqual({})
    })
  })
})
