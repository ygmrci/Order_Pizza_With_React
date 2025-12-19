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

    // radio input görünmez olabileceği için force daha stabil
    cy.get('[data-cy="size-M"]').check({ force: true });

    // 3 topping seç
    cy.get('[data-cy="topping-0"]').check({ force: true });
    cy.get('[data-cy="topping-1"]').check({ force: true });
    cy.get('[data-cy="topping-2"]').check({ force: true });

    cy.get('[data-cy="submit-button"]').should("be.disabled");
  });

  it("breadcrumb Anasayfa tıklanınca home'a gider", () => {
    cy.get('[data-cy="breadcrumb-home"]').click();
    cy.url().should("include", "/home");
  });

  it("home'dan pizza kartına tıklanınca order sayfasına gider", () => {
    cy.visit("/");
    cy.get('[data-cy="product-terminal-pizza"]').click();
    cy.url().should("include", "/order");
    cy.contains("Terminal Pizza");
  });

  it("doğru doldurunca success'e gider", () => {
    cy.intercept("POST", "https://reqres.in/api/pizza", {
      statusCode: 201,
      body: { ok: true },
    }).as("pizzaPost");

    cy.get('[data-cy="name-input"]').type("Yağmur");
    cy.get('[data-cy="size-M"]').check({ force: true });
    cy.get('[data-cy="dough-select"]').select("Orta");

    cy.get('[data-cy="topping-0"]').check({ force: true });
    cy.get('[data-cy="topping-1"]').check({ force: true });
    cy.get('[data-cy="topping-2"]').check({ force: true });
    cy.get('[data-cy="topping-3"]').check({ force: true });

    cy.get('[data-cy="submit-button"]').should("not.be.disabled").click();

    cy.wait("@pizzaPost");
    cy.url().should("include", "/success");
    cy.contains("SİPARİŞ ALINDI");
  });
});
