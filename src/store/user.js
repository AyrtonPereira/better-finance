export default {
  namespaced: true,
  state: {
    users: [{}],
    userLogged: {},
  },
  mutations: {
    setUser(state, user) {
      const userIndex = state.users.findIndex(
        (stateUser) => stateUser.email === user.email
      );
      if (userIndex === -1) state.users = [...state.users, user];
      else state.users[userIndex] = user;
    },
    setUserLogged(state, userLogged) {
      state.userLogged = userLogged;
    },
  },
  actions: {
    updateUser({ commit }, user) {
      commit("setUser", user);
    },
    userLogged({ commit }, user) {
      commit("setUserLogged", user);
    },
  },
  getters: {
    getUsers: (state) => state.users,
    getUserLogged: (state) => state.userLogged,
  },
};
