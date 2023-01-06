import store from "@/store";
import Auth from "@/utils/Auth";

class UserService {
  async login(email, password) {
    const users = store.getters["user/getUsers"];
    const userExists = users.find((user) => user.email === email);
    if (!userExists) return { data: false, message: "Usuário não localizado" };
    if (userExists.password === password) {
      const token = await Auth.createToken(userExists);
      userExists.token = token;
      store.dispatch("user/updateUser", userExists);
      return { data: true };
    } else return { data: false, message: "Senha incorreta" };
  }
}

export default new UserService();
