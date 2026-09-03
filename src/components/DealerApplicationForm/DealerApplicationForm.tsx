import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { useDealerApplication } from '../../hooks/useDealerApplication';
import { getDealerApplicationFormStyles } from './DealerApplicationForm.style';
import DealerStepsProgress from './DealerStepsProgress';
import StepBrandSpecialties from './StepBrandSpecialties';
import StepBusinessDetails from './StepBusinessDetails';
import StepContactInformation from './StepContactInformation';
import StepPayment from './StepPayment';

const STEP_LABELS = ['Business', 'Contact', 'Brands', 'Payment'];

export default function DealerApplicationForm() {
  const { theme } = useTheme();
  const styles = getDealerApplicationFormStyles(theme);
  const { currentStep, formData, updateField, nextStep, prevStep, resetForm } = useDealerApplication();

  const handleNext = () => {
    nextStep();
  };

  const handleSubmit = () => {
    console.log('Dealer Application Submitted:', formData);
    resetForm();
  };

  return (
    <View style={styles.container}>
      {/* Step Progress */}
      <DealerStepsProgress currentStep={currentStep} stepLabels={STEP_LABELS} />

      {/* Step Content */}
      <View style={styles.formWrapper}>
        {currentStep === 1 && <StepBusinessDetails formData={formData} updateField={updateField} />}
        {currentStep === 2 && <StepContactInformation formData={formData} updateField={updateField} />}
        {currentStep === 3 && <StepBrandSpecialties formData={formData} updateField={updateField} />}
        {currentStep === 4 && <StepPayment formData={formData} updateField={updateField} />}
      </View>

      {/* Navigation Buttons */}
      <View style={styles.navButtons}>
        {currentStep > 1 && (
          <TouchableOpacity style={styles.backBtn} onPress={prevStep}>
            <Ionicons name="arrow-back" size={18} color={theme.textPrimary} />
            <Text style={styles.backBtnText}>Back</Text>
          </TouchableOpacity>
        )}

        {currentStep < 4 ? (
          <View style={styles.nextBtnWrapper}>
            <LinearGradient
              colors={['#FFFFFF', '#E5E7EB', '#D1D5DB']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.nextBtn}
            >
              <TouchableOpacity onPress={handleNext} style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <Text style={styles.nextBtnText}>Next Step</Text>
                <Ionicons name="chevron-forward" size={18} color="#000000" />
              </TouchableOpacity>
            </LinearGradient>
          </View>
        ) : (
          <View style={styles.nextBtnWrapper}>
            <LinearGradient
              colors={['#FFFFFF', '#E5E7EB', '#D1D5DB']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.nextBtn}
            >
              <TouchableOpacity onPress={handleSubmit} style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <Text style={styles.nextBtnText}>Pay AED 99</Text>
                <Ionicons name="lock-closed" size={18} color="#000000" />
              </TouchableOpacity>
            </LinearGradient>
          </View>
        )}
      </View>
    </View>
  );
}
