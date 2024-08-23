describe('template spec', () => {
    // change date here
    const DATE = '23';
    // change to your own name and email
    const FIRST_NAME = 'Random';
    const LAST_NAME = 'Random';
    const EMAIL = 'random@gmail.com';
  
    // const FIRST_NAME = 'Another1';
    // const LAST_NAME = 'Another1';
    // const EMAIL = 'xxxxx@gmail.com';
  
    // const FIRST_NAME = 'Another2';
    // const LAST_NAME = 'Another2';
    // const EMAIL = 'xxxxx@gmail.com';
  
    it('load page', () => {
      cy.viewport(2000, 1750);
      cy.visit('https://reserve.bcparks.ca/dayuse', {
        headers: {
            'user-agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
        }
    });
      cy.get(`[aria-label="Book a pass for Garibaldi Provincial Park"]`).click();
      cy.get(`[title="Select a Date"]`).click();
      cy.get('.btn-light').contains(new RegExp("^" + DATE + "$", "g")).click();
      cy.get('#passType').select('Rubble Creek - Parking');
      cy.get('.card-input').scrollIntoView().trigger('mousemove').click();
      cy.get('.btn').contains('Next').click();
      cy.get('#firstName').type(FIRST_NAME);
      cy.get('#lastName').type(LAST_NAME);
      cy.get('#email').type(EMAIL);
      cy.get('#emailCheck').type(EMAIL);
      cy.get('[type="checkbox"]').check();
    })
  })
  