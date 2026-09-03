import { Text, TextInput, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { DealerApplicationFormData } from '../../types/dealer.types';
import { getStepContactStyles } from './StepContactInformation.style';

interface Props {
  formData: DealerApplicationFormData;
  updateField: (field: keyof DealerApplicationFormData, value: any) => void;
}

export default function StepContactInformation({ formData, updateField }: Props) {
  const { theme } = useTheme();
  const styles = getStepContactStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Contact Information</Text>
        <Text style={styles.subtitle}>How can we reach you?</Text>

        {/* Full Name */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            value={formData.fullName}
            onChangeText={(value) => updateField('fullName', value)}
            placeholder="Your full name"
            placeholderTextColor={theme.textMuted}
          />
        </View>

        {/* Phone */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone</Text>
          <TextInput
            style={styles.input}
            value={formData.phone}
            onChangeText={(value) => updateField('phone', value)}
            placeholder="+971 XX XXX XXXX"
            placeholderTextColor={theme.textMuted}
            keyboardType="phone-pad"
          />
        </View>

        {/* Email */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={formData.email}
            onChangeText={(value) => updateField('email', value)}
            placeholder="business@example.com"
            placeholderTextColor={theme.textMuted}
            keyboardType="email-address"
          />
        </View>

        {/* Website (Alag Row) */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Website</Text>
          <TextInput
            style={styles.input}
            value={formData.website}
            onChangeText={(value) => updateField('website', value)}
            placeholder="www.yourbusiness.com"
            placeholderTextColor={theme.textMuted}
          />
        </View>

        {/* Instagram (Alag Row) */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Instagram</Text>
          <TextInput
            style={styles.input}
            value={formData.instagram}
            onChangeText={(value) => updateField('instagram', value)}
            placeholder="@yourbusiness"
            placeholderTextColor={theme.textMuted}
          />
        </View>
      </View>
    </View>
  );
}
