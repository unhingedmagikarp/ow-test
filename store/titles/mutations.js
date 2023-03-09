import { set } from 'vue'

const mutations = {
  SET_TITLES(state, { titles }) {
    if (!titles || !titles.length) {
      return
    }

    titles.forEach((title) => set(state.data, title['Title Number'], title))
  },
}

export default mutations
