import { LoginMethods } from "./pages/login/login.methods";

describe('template spec', () => {
  it('passes', () => {
    const usuario = 'leidy1';
    const contrasena = 'leidy1';
    cy.visit('https://www.demoblaze.com/')
    cy.get('a[data-target="#logInModal"]').click();
    LoginMethods.Login(usuario, contrasena)
    cy.wait(10000)
  })
})