import * as jose from "jose";
class Auth {
  #secret = jose.base64url.decode(import.meta.env.VITE_API_SECRET_KEY);

  async #decodeToken(jwt) {
    try {
      const { payload } = await jose.jwtDecrypt(jwt, this.#secret);
      return payload;
    } catch (e) {
      return false;
    }
  }

  async createToken(user) {
    const jwt = await new jose.EncryptJWT(user)
      .setProtectedHeader({ alg: "dir", enc: "A128CBC-HS256" })
      .setIssuedAt()
      .setExpirationTime("5m")
      .encrypt(this.#secret);
    return jwt;
  }

  async verifyTokenExpiration(token) {
    const payload = await this.#decodeToken(token);
    if (!payload || payload.exp * 1000 < Date.now()) return false;
    else return true;
  }
}

export default new Auth();
