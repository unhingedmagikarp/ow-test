import Vue from 'vue'
import Vuex, { Store } from 'vuex'

import actions from '../actions'
import { MOCK_RESPONSE } from '../__mocks__/mockData'

Vue.use(Vuex)

describe('Titles store - actions', () => {
  let store

  const state = {
    data: {},
  }

  const mutations = {
    SET_TITLES: jest.fn(),
  }

  beforeEach(() => {
    store = new Store({
      modules: {
        titles: {
          namespaced: true,
          state,
          mutations,
          actions,
        },
      },
    })

    store.$axios = {
      get: jest.fn().mockResolvedValue(MOCK_RESPONSE),
    }
  })

  describe('actions', () => {
    it('fetchTitles', async () => {
      await store.dispatch('titles/fetchTitles')

      expect(store.$axios.get).toHaveBeenCalledWith('/titledata/testdata.json')
      expect(mutations.SET_TITLES).toHaveBeenCalledWith(state, {
        titles: MOCK_RESPONSE.data,
      })
    })
  })
})
