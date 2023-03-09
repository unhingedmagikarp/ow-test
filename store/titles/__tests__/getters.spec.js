import Vue from 'vue'
import Vuex, { Store } from 'vuex'

import * as titlesStore from '../index'
import { MOCK_RESPONSE, MOCK_STATE } from '../__mocks__/mockData'

Vue.use(Vuex)

describe('Titles store - Getters', () => {
  const store = new Store({ ...titlesStore, state: () => MOCK_STATE })

  describe('titles', () => {
    it('returns titles when they exist', () => {
      expect(store.getters.titles).toEqual(
        expect.arrayContaining(MOCK_RESPONSE.data)
      )
      expect(store.getters.titles).toHaveLength(2)
    })

    it('returns an empty array if no titles are present', () => {
      store.state.data = {}

      expect(store.getters.titles).toEqual([])
      expect(store.getters.titles).toHaveLength(0)
    })
  })

  describe('getTitle', () => {
    it('returns title by ID if exists', () => {
      store.state.data = MOCK_STATE

      expect(store.getters.getTitle(Object.keys(MOCK_STATE.data)[0])).toEqual(
        Object.values(MOCK_STATE.data)[0]
      )
    })

    it('returns `null` if title is not found by ID', () => {
      expect(store.getters.getTitle('randomid')).toBeNull()
    })
  })
})
