Cypress.Commands.add('assertAppointment', (expectedAppointment) => {
  cy.get('.panel.panel-info>div.panel-heading').should(
    'contain.text',
    expectedAppointment.visitDate
  );

  cy.get('.panel.panel-info p#facility').should(
    'contain.text',
    expectedAppointment.facility
  );

  cy.get('.panel.panel-info p#hospital_readmission').should(
    'contain.text',
    expectedAppointment.applyForHospitalReadmission ? 'Yes' : 'No'
  );

  cy.get('.panel.panel-info p#program').should(
    'contain.text',
    expectedAppointment.healthcareProgram
  );

  cy.get('.panel.panel-info p#comment').should(
    'contain.text',
    expectedAppointment.comment
  );
});

Cypress.Commands.add('assertAppointments', (expectedAppointment) => {
  cy.get('.panel.panel-info').each((panelInfo, i) => {
    cy.wrap(panelInfo)
      .get('.panel.panel-info>div.panel-heading')
      .should('contain.text', expectedAppointment[i].visitDate);

    cy.wrap(panelInfo)
      .get('.panel.panel-info p#facility')
      .should('contain.text', expectedAppointment[i].facility);

    cy.wrap(panelInfo)
      .get('.panel.panel-info p#hospital_readmission')
      .should(
        'contain.text',
        expectedAppointment[i].applyForHospitalReadmission ? 'Yes' : 'No'
      );

    cy.wrap(panelInfo)
      .get('.panel.panel-info p#program')
      .should('contain.text', expectedAppointment[i].healthcareProgram);

    cy.wrap(panelInfo)
      .get('.panel.panel-info p#comment')
      .should('contain.text', expectedAppointment[i].comment);
  });
});

Cypress.Commands.add('assertNoAppointments', () =>
  cy.get('p').contains('No appointment.').should('exist')
);
