// StepPayment.tsx
import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getStepPaymentStyles } from './StepPayment.style';
import { DealerApplicationFormData } from '../../types/dealer.types';

interface Props {
  formData: DealerApplicationFormData;
  updateField: (field: keyof DealerApplicationFormData, value: any) => void;
}

export default function StepPayment({ formData, updateField }: Props) {
  const { theme } = useTheme();
  const styles = getStepPaymentStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Payment</Text>
        <Text style={styles.subtitle}>Complete your payment to submit the dealer application.</Text>

        {/* Application Fee */}
        <View style={styles.feeBox}>
          <Text style={styles.feeLabel}>Application Fee</Text>
          <Text style={styles.feeAmount}>AED 99</Text>
        </View>

        {/* Payment Methods */}
        <TouchableOpacity
          style={[
            styles.paymentMethodRow,
            formData.paymentMethod === 'card' && styles.paymentMethodSelected,
          ]}
          onPress={() => updateField('paymentMethod', 'card')}
        >
          <Ionicons name="card-outline" size={20} color={theme.accentPrimary} />
          <Text style={styles.paymentText}>Card Payment</Text>
          <Ionicons
            name={formData.paymentMethod === 'card' ? 'radio-button-on' : 'radio-button-off'}
            size={20}
            color={theme.accentPrimary}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.paymentMethodRow,
            formData.paymentMethod === 'balance' && styles.paymentMethodSelected,
          ]}
          onPress={() => updateField('paymentMethod', 'balance')}
        >
          <Ionicons name="wallet-outline" size={20} color={theme.accentPrimary} />
          <Text style={styles.paymentText}>Pay with Balance</Text>
          <Ionicons
            name={formData.paymentMethod === 'balance' ? 'radio-button-on' : 'radio-button-off'}
            size={20}
            color={theme.accentPrimary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

