class Auth {
  public getToken(): string {
    return window.localStorage.getItem("token") || "";
  }

  public setToken(token: string): void {
    window.localStorage.setItem("token", token);
  }

  public isAuthorized(): boolean {
    return this.getToken() !== "";
  }
}

export default new Auth();
