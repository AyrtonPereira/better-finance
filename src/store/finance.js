export default {
  namespaced: true,
  state: {
    quotations: {},
  },
  mutations: {
    addQuotation(state, data) {
      if (state.quotations[data.type]) {
        state.quotations[data.type] = [
          { time: data.time, data: data.data },
          ...state.quotations[data.type],
        ];
      } else
        state.quotations[data.type] = [
          {
            time: data.time,
            data: data.data,
          },
        ];
    },
    setInitialStore(store) {
      const quotations = JSON.parse(localStorage.getItem("quotations")) || {};
      store.quotations = quotations;
    },
  },
  actions: {
    addQuotation({ commit }, data) {
      commit("addQuotation", data);
    },
    initiateStore({ commit }) {
      commit("setInitialStore");
    },
  },
  getters: {
    getQuotations: (state) => state.quotations,
  },
};
