export type Appointment = {
  facility?:
    | 'Tokyo CURA Healthcare Center'
    | 'Hongkong CURA Healthcare Center'
    | 'Seoul CURA Healthcare Center';
  applyForHospitalReadmission?: boolean;
  healthcareProgram?: 'Medicare' | 'Medicaid' | 'None';
  visitDate: string;
  comment?: string;
};
