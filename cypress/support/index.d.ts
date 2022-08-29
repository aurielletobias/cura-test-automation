/// <reference types="cypress" />

import { Page } from '../enums/Page.enum';
import { Appointment } from '../types/Appointment.type';

declare global {
  namespace Cypress {
    interface Chainable {
      goToPage(page: Page): Chainable<unknown>;

      login(username: string, password: string): Chainable<unknown>;
      assertLogin(success: boolean): Chainable<unknown>;

      clickMakeAppointmentButton(): Chainable<unknown>;
      clickBookAppointmentButton(): Chainable<unknown>;
      makeAppointment(appointment: Appointment): Chainable<unknown>;

      assertAppointment(expectedAppointment: Appointment): Chainable<unknown>;
      assertAppointments(
        expectedAppointment: Array<Appointment>
      ): Chainable<unknown>;
      assertNoAppointments(): Chainable<unknown>;
    }
  }
}
