class LoginPage {
  constructor(page) {
    this.Username = page.getByTestId("username");
    this.Password = page.getByTestId("password");
    this.LoginSubmitButton = page.getByTestId("login-button");
  }

  async sumbitLoginForm(username, password) {
    await this.Username.fill(username);
    await this.Password.fill(password);
    await this.LoginSubmitButton.click();
  }
}
export default LoginPage;
