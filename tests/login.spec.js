// @ts-check
import { test, expect } from "@playwright/test";
import LoginPage from "../src/LoginPage";

test("Successful login", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  const loginPage = new LoginPage(page);
  await loginPage.sumbitLoginForm(process.env.USERNAME, process.env.PASSWORD);
});
