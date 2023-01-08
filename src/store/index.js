import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";
import finance from "./finance";
import user from "./user";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ["user", "finance"],
});

export default createStore({
  modules: {
    finance,
    user,
  },
  plugins: [vuexLocal.plugin],
});
