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
