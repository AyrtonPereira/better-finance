import * as jose from "jose";

export default {
  namespaced: true,
  state: {
    users: [
      {
        name: "Ayrton",
        email: "ayrton_pereira@live.com",
        password: "1234",
        token: null,
      },
    ],
  },
  mutations: {
    setUser(state, user) {
      const userIndex = state.users.findIndex(
        (stateUser) => stateUser.email === user.email
      );
      if (userIndex === -1) state.users = [...state.users, user];
      else state.users[userIndex] = user;
    },
  },
  actions: {
    updateUser({ commit, state }, user) {
      commit("setUser", user);
      console.log(state);
    },
  },
  getters: {
    getUsers: (state) => state.users,
  },
};
