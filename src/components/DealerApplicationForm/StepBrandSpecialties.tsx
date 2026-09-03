// StepBrandSpecialties.tsx
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getStepBrandStyles } from './StepBrandSpecialties.style';
import { dealerBrands } from '../../data/dealer';
import { DealerApplicationFormData } from '../../types/dealer.types';

interface Props {
  formData: DealerApplicationFormData;
  updateField: (field: keyof DealerApplicationFormData, value: any) => void;
}

export default function StepBrandSpecialties({ formData, updateField }: Props) {
  const { theme } = useTheme();
  const styles = getStepBrandStyles(theme);

  const toggleBrand = (brandId: string) => {
    const currentBrands = formData.selectedBrands;
    if (currentBrands.includes(brandId)) {
      updateField('selectedBrands', currentBrands.filter((id) => id !== brandId));
    } else {
      updateField('selectedBrands', [...currentBrands, brandId]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Brand Specialties & Message</Text>
        <Text style={styles.subtitle}>Select the brands you specialize in</Text>

        {/* Brand Chips */}
        <View style={styles.brandRow}>
          {dealerBrands.map((brand) => (
            <TouchableOpacity
              key={brand.id}
              style={[
                styles.brandChip,
                formData.selectedBrands.includes(brand.id) && styles.brandChipSelected,
              ]}
              onPress={() => toggleBrand(brand.id)}
            >
              <Text style={styles.brandText}>{brand.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Additional Message */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Additional Message (Optional)</Text>
          <TextInput
            style={styles.textArea}
            value={formData.additionalMessage}
            onChangeText={(value) => updateField('additionalMessage', value)}
            placeholder="Tell us about your business, any questions, or why you'd like to partner with Watch It."
            placeholderTextColor={theme.textMuted}
            multiline
          />
        </View>
      </View>
    </View>
  );
}

