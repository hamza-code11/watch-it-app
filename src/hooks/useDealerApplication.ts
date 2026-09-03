import { useState } from 'react';
import { DealerApplicationFormData } from '../types/dealer.types';
import { initialDealerApplicationData } from '../data/dealer';

export const useDealerApplication = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<DealerApplicationFormData>(initialDealerApplicationData);

  const updateField = (field: keyof DealerApplicationFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const resetForm = () => {
    setFormData(initialDealerApplicationData);
    setCurrentStep(1);
  };

  return {
    currentStep,
    formData,
    updateField,
    nextStep,
    prevStep,
    resetForm,
  };
};
