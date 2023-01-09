import * as jose from "jose";
class Auth {
  secret = jose.base64url.decode("zH4NRP1HMALxxCFnRZABFA7GOJtzU_gIj02alfL1lvI");
  alg = "HS256";
  async createToken(user) {
    const jwt = await new jose.EncryptJWT(user)
      .setProtectedHeader({ alg: "dir", enc: "A128CBC-HS256" })
      .setIssuedAt()
      .setExpirationTime("2h")
      .encrypt(this.secret);

    return jwt;
  }

  async decodeToken(jwt) {
    const { payload } = await jose.jwtDecrypt(jwt, this.secret);
    console.log(payload);
    return payload || {};
  }
}

export default new Auth();
