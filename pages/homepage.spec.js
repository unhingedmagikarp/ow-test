import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import { shallowMount } from '@vue/test-utils'

import Homepage from './index'
import titlesStore from '@/store/titles'
import { MOCK_RESPONSE } from '~/store/titles/__mocks__/mockData'

jest.mock('@/store/titles')

Vue.use(Vuex)

describe('Page: HomePage', () => {
  let store

  titlesStore.getters.titles.mockReturnValue(MOCK_RESPONSE.data)

  beforeEach(() => {
    store = new Store({
      modules: {
        titles: {
          ...titlesStore,
        },
      },
    })
  })

  const defaultOpts = {
    mocks: {
      $route: { params: {}, query: {} },
    },
  }

  const factory = (opts = {}) =>
    shallowMount(Homepage, {
      store,
      ...defaultOpts,
      ...opts,
    })

  describe('matches snapshot', () => {
    it('when data is present', () => {
      const wrapper = factory()
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  // TODO: test table functionality, missing data, data fetching
})
