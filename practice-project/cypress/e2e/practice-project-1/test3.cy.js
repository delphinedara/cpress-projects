///<reference types ="Cypress"/>

describe("Test3", function () {
  it("Test3", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //Checkboxes- check() and uncheck()
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
    cy.get('input[type="checkbox"]').check().should("be.checked");
    cy.get('input[type="checkbox"]')
      .check(["option2", "option3"])
      .should("be.checked");

    //Static dropdown
    cy.get("select").select("option2").should("have.value", "option2");

    //Dynamic dropdown
    cy.get("#autocomplete").type("ind");
    cy.get(".ui-menu-item div").each(($e1, index, $list) => {
      if ($e1.text() === "India") {
        $e1.click();
      }
    });

    //Autocomplete
    cy.get("#autocomplete").should("have.value", "India");

    //Visibility & Invisibility of elements
    cy.get("#displayed-text").should("be.visible");
    cy.get("#hide-textbox").click();
    cy.get("#displayed-textbox").should("not.exist");
    cy.get("#show-textbox").click();
    //cy.get("#displayed-textbox").should("be.visible");

    //Radio buttons
    cy.get('[value="radio2"').check().should("be.checked");
  });
});
