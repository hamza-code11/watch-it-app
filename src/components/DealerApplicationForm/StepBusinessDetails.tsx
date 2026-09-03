import { Ionicons } from '@expo/vector-icons';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { inventorySizes } from '../../data/dealer';
import { DealerApplicationFormData } from '../../types/dealer.types';
import { getStepBusinessDetailsStyles } from './StepBusinessDetails.style';

interface Props {
  formData: DealerApplicationFormData;
  updateField: (field: keyof DealerApplicationFormData, value: any) => void;
}

export default function StepBusinessDetails({ formData, updateField }: Props) {
  const { theme } = useTheme();
  const styles = getStepBusinessDetailsStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Business Details</Text>
        <Text style={styles.subtitle}>Tell us about your dealership business.</Text>

        {/* Business Name */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Business Name</Text>
          <TextInput
            style={styles.input}
            value={formData.businessName}
            onChangeText={(value) => updateField('businessName', value)}
            placeholder="e.g. Al Manara Watches"
            placeholderTextColor={theme.textMuted}
          />
        </View>

        {/* City (Alag Row) */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>City</Text>
          <View style={styles.selectInput}>
            <Text style={{ color: theme.textMuted, fontSize: 14 }}>Select city</Text>
            <Ionicons name="chevron-down" size={16} color={theme.textMuted} />
          </View>
        </View>

        {/* Year in Business (Alag Row) */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Year in Business</Text>
          <TextInput
            style={styles.input}
            value={formData.yearInBusiness}
            onChangeText={(value) => updateField('yearInBusiness', value)}
            placeholder="e.g. 5"
            placeholderTextColor={theme.textMuted}
            keyboardType="numeric"
          />
        </View>

        {/* Address (Alag Row) */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            value={formData.address}
            onChangeText={(value) => updateField('address', value)}
            placeholder="Shop / Mall / Street address"
            placeholderTextColor={theme.textMuted}
          />
        </View>

        {/* Inventory Size - Radio Button Cards */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Inventory Size</Text>
          <View style={styles.inventoryRow}>
            {inventorySizes.map((size) => {
              const isSelected = formData.inventorySize === size.id;
              return (
                <TouchableOpacity
                  key={size.id}
                  style={[
                    styles.inventoryOption,
                    isSelected && styles.inventorySelected,
                  ]}
                  onPress={() => updateField('inventorySize', size.id)}
                >
                  <View
                    style={[
                      styles.inventoryRadio,
                      isSelected && styles.inventoryRadioSelected,
                    ]}
                  >
                    {isSelected && <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: '#FFFFFF' }} />}
                  </View>
                  <Text style={styles.inventoryText}>{size.label}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
}
