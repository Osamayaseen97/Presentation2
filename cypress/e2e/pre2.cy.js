<reference types= "cypress" />

// Assertion 1: Departure Date (Today +1)
it('Should set departure date to today +1', () => {
  // Calculate today's date +1 day
  const today = new Date();
  today.setDate(today.getDate() + 1);

  // Format the date as "YYYY-MM-DD"
  const formattedDate = Cypress.moment(today).format('YYYY-MM-DD');

 
  cy.visit('https://www.almosafer.com/ar');

  cy.get('[data-test=departure-date]').should('have.value', formattedDate);
});


// Assertion 2: Return Date (Today +2)
it('Should set return date to today +2', () => {
  // Calculate today's date +2 days
  const today = new Date();
  today.setDate(today.getDate() + 2);

  // Format the date as "YYYY-MM-DD"
  const formattedDate = Cypress.moment(today).format('YYYY-MM-DD');


  cy.visit('https://www.almosafer.com/ar');


  cy.get('[data-test=return-date]').should('have.value', formattedDate);
});



// Assertion 3: Flight Class (Economy by Default)
it('Should have economy class selected by default', () => {

  cy.visit('https://www.almosafer.com/ar');


  cy.get('[data-test=flight-class]').should('have.value', 'economy');
});


