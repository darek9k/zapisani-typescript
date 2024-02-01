export const acceptCokies = () => {
    cy.get('.modal-content').should('be.visible');
    cy.get('button[test-id="ok"]').click();
    cy.get('.modal-content').should('not.exist');
  };