import Vue from 'vue'
import Vuex from 'vuex'

import MockComponents from './mockVueComponents'

MockComponents.forEach((MockComponent) =>
  Vue.component(MockComponent.name, MockComponent)
)

Vue.use(Vuex)
