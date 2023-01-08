import axios from "axios";

class API {
  constructor() {
    const headers = {
      "Content-Type": "application/json",
    };
    this.api = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      headers,
      timeout: 3000,
      withCredentials: false,
    });
  }

  async get(url) {
    return await this.api
      .get(url)
      .then((response) => response.data)
      .catch((err) => err);
  }
}

export default new API();
