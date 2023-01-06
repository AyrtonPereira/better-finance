import { createStore } from "vuex";
import createdPersistedState from "vuex-persistedstate";
import finance from "./finance";
import user from "./user";

export default createStore({
  modules: {
    finance,
    user,
  },
  plugins: [createdPersistedState()],
});
