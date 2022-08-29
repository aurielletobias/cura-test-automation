Cypress.Commands.add('clickMakeAppointmentButton', () =>
  cy.get('#btn-make-appointment').click()
);

Cypress.Commands.add('clickBookAppointmentButton', () =>
  cy.get('#btn-book-appointment').click()
);

Cypress.Commands.add(
  'makeAppointment',
  ({
    facility,
    applyForHospitalReadmission = false,
    healthcareProgram = 'Medicare',
    visitDate,
    comment,
  }) => {
    if (facility) cy.get('#combo_facility').select(facility);
    if (applyForHospitalReadmission)
      cy.get('#chk_hospotal_readmission').check();
    cy.get("input[name='programs']").check(healthcareProgram);
    cy.get('#txt_visit_date').type(`${visitDate}{esc}`);
    if (comment) cy.get('#txt_comment').type(comment);
  }
);
