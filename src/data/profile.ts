import { PersonalDetails, PasswordStep } from '../types/profile.types';

export const personalDetailsData: PersonalDetails = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phone: '+1 (555) 123-4567',
};

export const passwordSteps: PasswordStep[] = [
  { step: 1, title: 'Verify Current', description: 'Verify your current password' },
  { step: 2, title: 'Verify OTP', description: 'Verify the OTP sent to your email' },
  { step: 3, title: 'New Password', description: 'Set your new password' },
];
