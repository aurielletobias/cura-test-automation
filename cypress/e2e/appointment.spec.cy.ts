import { Page } from '../enums/Page.enum';
import { Appointment } from '../types/Appointment.type';
import { Credentials } from '../types/Credentials.type';

describe('Appointment Creation', () => {
  beforeEach(() => {
    cy.goToPage(Page.LOGIN);

    cy.fixture<Credentials>('credentials.json').then(({ username, password }) =>
      cy.login(username.correct, password.correct)
    );
  });

  it('should create one appointment', () => {
    const appointment: Appointment = {
      facility: 'Seoul CURA Healthcare Center',
      applyForHospitalReadmission: true,
      healthcareProgram: 'None',
      visitDate: '14/09/2022',
      comment: 'This is a comment.',
    };

    cy.clickMakeAppointmentButton();
    cy.makeAppointment(appointment);
    cy.clickBookAppointmentButton();
    cy.goToPage(Page.HISTORY);
    cy.assertAppointment(appointment);
  });

  it('should create two appointments', () => {
    const appointments: Array<Appointment> = [
      {
        facility: 'Seoul CURA Healthcare Center',
        applyForHospitalReadmission: true,
        healthcareProgram: 'None',
        visitDate: '01/01/2023',
        comment: 'This is a comment.',
      },
      {
        facility: 'Hongkong CURA Healthcare Center',
        applyForHospitalReadmission: false,
        healthcareProgram: 'Medicare',
        visitDate: '02/02/2023',
        comment: 'This is a 2nd comment.',
      },
    ];

    appointments.forEach((appointment) => {
      cy.clickMakeAppointmentButton();
      cy.makeAppointment(appointment);
      cy.clickBookAppointmentButton();
    });

    cy.goToPage(Page.HISTORY);
    cy.assertAppointments(appointments);
  });

  it('should not create any appointments', () => {
    cy.clickMakeAppointmentButton();
    cy.clickBookAppointmentButton();
    cy.goToPage(Page.HISTORY);
    cy.assertNoAppointments();
  });
});
