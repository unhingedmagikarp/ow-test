const getters = {
  titles(state) {
    return Object.values(state.data)
  },

  getTitle(state) {
    return (id) => {
      return state.data[id] || null
    }
  },
}

export default getters
