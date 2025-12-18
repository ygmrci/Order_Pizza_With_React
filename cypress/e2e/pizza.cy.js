/// <reference types="cypress" />

describe("Pizza Order Form", () => {
  beforeEach(() => {
    cy.visit("/order");
  });

  it("isim 3 karakterden küçükken submit disabled", () => {
    cy.get('[data-cy="name-input"]').type("ab");
    cy.get('[data-cy="submit-button"]').should("be.disabled");
  });

  it("4 malzeme seçmeden submit disabled", () => {
    cy.get('[data-cy="name-input"]').type("Sinem");
    cy.get('[data-cy="size-M"]').check();

    cy.get('[data-cy^="topping-"]').eq(0).check();
    cy.get('[data-cy^="topping-"]').eq(1).check();
    cy.get('[data-cy^="topping-"]').eq(2).check();

    cy.get('[data-cy="submit-button"]').should("be.disabled");
  });
  it("breadcrumb Anasayfa  tıklanınca home'a gider", () => {
    cy.get('[data-cy="breadcrumb-home"]').click();
    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });
  it("home'dan pizza kartına tıklanınca order sayfasında ürün adı görünür", () => {
  cy.visit("/");
  cy.contains("Terminal Pizza").click();
  cy.url().should("include", "/order");
  cy.contains("Terminal Pizza"); 
});


  it("doğru doldurunca success'e gider", () => {
    cy.get('[data-cy="name-input"]').type("Sinem");
    cy.get('[data-cy="size-M"]').check();

    cy.get('[data-cy^="topping-"]').eq(0).check();
    cy.get('[data-cy^="topping-"]').eq(1).check();
    cy.get('[data-cy^="topping-"]').eq(2).check();
    cy.get('[data-cy^="topping-"]').eq(3).check();

    cy.get('[data-cy="submit-button"]').should("not.be.disabled").click();

    cy.url().should("include", "/success");
    cy.contains("Sipariş Alındı");
  });
});
