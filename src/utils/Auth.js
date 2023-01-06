import * as jose from "jose";

class Auth {
  secret = new TextEncoder().encode(
    "cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2"
  );
  async createToken() {
    const alg = "HS256";
    const jwt = await new jose.SignJWT({ "urn:example:claim": true })
      .setProtectedHeader({ alg })
      .setIssuedAt()
      .setExpirationTime("2h")
      .sign(this.secret);

    return jwt;
  }

  async decodeToken(jwt) {
    console.log("OLhaaaaaaa", this.secret);
    const { payload, protectedHeader } = await jose.jwtDecrypt(
      jwt,
      this.secret
    );

    console.log(protectedHeader);
    console.log(payload);
  }
}

export default new Auth();
