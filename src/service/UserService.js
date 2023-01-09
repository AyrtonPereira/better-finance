import store from "@/store";
import router from "@/router";
import Auth from "@/utils/Auth";

class UserService {
  #userExists(email) {
    const users = store.getters["user/getUsers"];
    const userExists = users.find((user) => user.email === email);
    if (userExists) return { data: true, user: userExists };
    else return { data: false };
  }
  async login(email, password) {
    const userExists = this.#userExists(email);
    if (!userExists.data)
      return { data: false, message: "Usuário não localizado" };
    if (userExists.user.password === password) {
      const { password, ...userData } = userExists.user;
      const token = await Auth.createToken(userData);
      userData.token = token;
      store.dispatch("user/userLogged", userData);
      return { data: true };
    } else return { data: false, message: "Senha incorreta" };
  }

  logout() {
    store.dispatch("user/userLogged", {});
    router.push({ name: "initiate.login" });
  }

  async verifyToken() {
    const userLogged = store.getters["user/getUserLogged"];
    if (!userLogged.token) return false;
    const tokenValid = await Auth.verifyTokenExpiration(userLogged.token);
    return tokenValid;
  }

  async createUser(user) {
    const userExists = await this.#userExists(user.email);
    if (userExists.data)
      return { data: false, message: "E-mail já existe no banco de dados" };
    else {
      store.dispatch("user/updateUser", user);
      return { data: true };
    }
  }
}

export default new UserService();
