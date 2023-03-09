export default {
  namespaced: true,
  state: jest.fn().mockReturnValue(() => ({
    data: {},
  })),
  actions: {
    fetchTitles: jest.fn().mockResolvedValue(Promise.resolve()),
  },
  getters: {
    titles: jest.fn().mockReturnValue([]),
    getTitle: jest.fn().mockReturnValue({}),
  },
  mutations: {
    SET_TITLES: jest.fn(),
  },
}
