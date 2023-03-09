const actions = {
  async fetchTitles({ commit }) {
    // TODO: Set up API layer
    const response = await this.$axios.get('/titledata/testdata.json')

    commit('SET_TITLES', { titles: response?.data })
  },
}

export default actions
