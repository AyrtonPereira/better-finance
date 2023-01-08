import store from "@/store";
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
      const token = await Auth.createToken(userExists.user);
      userExists.user.token = token;
      store.dispatch("user/updateUser", userExists.user);
      return { data: true };
    } else return { data: false, message: "Senha incorreta" };
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
