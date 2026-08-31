import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getFormStyles } from './AuthenticationForm.style';

const WATCH_CONDITIONS = ['Brand New', 'Like New', 'Excellent', 'Good', 'Fair', 'Used'];
const INSPECTION_TYPES = [
  { id: 'remote', label: 'Remote Verification', time: '24 hours' },
  { id: 'physical', label: 'Physical Inspection', time: 'Same day' },
  { id: 'pickup', label: 'Pickup Service', time: '48 hours' },
];

export default function AuthenticationForm() {
  const { theme } = useTheme();
  const styles = getFormStyles(theme);

  const [watchName, setWatchName] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [referenceNumber, setReferenceNumber] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [year, setYear] = useState('');
  const [condition, setCondition] = useState('');
  const [inspectionType, setInspectionType] = useState('remote');
  const [description, setDescription] = useState('');
  const [photos, setPhotos] = useState<string[]>([]);

  const [conditionOpen, setConditionOpen] = useState(false);

  const handleUploadPhotos = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsMultipleSelection: true,
      quality: 0.8,
      selectionLimit: 10 - photos.length,
    });

    if (!result.canceled) {
      const uris = result.assets.map((asset) => asset.uri);
      setPhotos((prev) => [...prev, ...uris].slice(0, 10));
    }
  };

  const handleRemovePhoto = (uri: string) => {
    setPhotos((prev) => prev.filter((photo) => photo !== uri));
  };

  const handleSubmit = () => {
    if (!watchName || !brand || !serialNumber || !condition) {
      alert('Please fill in all required fields!');
      return;
    }
    console.log('Authentication Form Data:', {
      watchName,
      brand,
      model,
      referenceNumber,
      serialNumber,
      year,
      condition,
      inspectionType,
      description,
      photos,
    });
    alert('Submitted successfully!');
  };

  return (
    <View style={styles.formContainer}>
      {/* Form Title */}
      <Text style={styles.formTitle}>Submit Your Watch for Authentication</Text>
      <Text style={styles.formSubtitle}>
        Fill in the details below to get your watch verified by our certified UAE experts
      </Text>

      {/* Required Fields */}
      <View style={styles.inputContainer}>
        <View style={styles.labelRow}>
          <Text style={styles.fieldLabel}>Watch Name</Text>
          <Text style={styles.requiredStar}>*</Text>
        </View>
        <TextInput
          style={styles.input}
          value={watchName}
          onChangeText={setWatchName}
          placeholder="e.g., Rolex"
          placeholderTextColor={theme.textMuted}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.labelRow}>
          <Text style={styles.fieldLabel}>Brand</Text>
          <Text style={styles.requiredStar}>*</Text>
        </View>
        <TextInput
          style={styles.input}
          value={brand}
          onChangeText={setBrand}
          placeholder="e.g., Rolex"
          placeholderTextColor={theme.textMuted}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.labelRow}>
          <Text style={styles.fieldLabel}>Model</Text>
          <Text style={styles.optionalText}>(optional)</Text>
        </View>
        <TextInput
          style={styles.input}
          value={model}
          onChangeText={setModel}
          placeholder="e.g., Submariner"
          placeholderTextColor={theme.textMuted}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.labelRow}>
          <Text style={styles.fieldLabel}>Reference Number</Text>
          <Text style={styles.optionalText}>(optional)</Text>
        </View>
        <TextInput
          style={styles.input}
          value={referenceNumber}
          onChangeText={setReferenceNumber}
          placeholder="e.g., 126610LN"
          placeholderTextColor={theme.textMuted}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.labelRow}>
          <Text style={styles.fieldLabel}>Serial Number</Text>
          <Text style={styles.requiredStar}>*</Text>
        </View>
        <TextInput
          style={styles.input}
          value={serialNumber}
          onChangeText={setSerialNumber}
          placeholder="e.g., 132163"
          placeholderTextColor={theme.textMuted}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.labelRow}>
          <Text style={styles.fieldLabel}>Year</Text>
          <Text style={styles.optionalText}>(optional)</Text>
        </View>
        <TextInput
          style={styles.input}
          value={year}
          onChangeText={setYear}
          placeholder="e.g., 2020"
          placeholderTextColor={theme.textMuted}
          keyboardType="numeric"
        />
      </View>

      {/* Watch Condition (Dropdown) */}
      <View style={styles.inputContainer}>
        <View style={styles.labelRow}>
          <Text style={styles.fieldLabel}>Watch Condition</Text>
          <Text style={styles.requiredStar}>*</Text>
        </View>
        <View style={styles.selectWrapper}>
          <TouchableOpacity
            style={styles.selectButton}
            onPress={() => setConditionOpen((prev) => !prev)}
          >
            <Text style={condition ? styles.selectText : styles.selectPlaceholder}>
              {condition || 'Select Condition'}
            </Text>
            <Ionicons name={conditionOpen ? 'chevron-up' : 'chevron-down'} size={16} color={theme.textMuted} />
          </TouchableOpacity>
          {conditionOpen && (
            <View style={styles.optionsDropdown}>
              {WATCH_CONDITIONS.map((opt, idx) => (
                <TouchableOpacity
                  key={opt}
                  style={[styles.optionRow, idx === WATCH_CONDITIONS.length - 1 && styles.optionRowLast]}
                  onPress={() => {
                    setCondition(opt);
                    setConditionOpen(false);
                  }}
                >
                  <Text style={[styles.optionText, condition === opt && styles.optionSelected]}>
                    {opt}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </View>

      {/* Inspection Type */}
      <View style={styles.inspectionTypeContainer}>
        <Text style={styles.inspectionTypeLabel}>Inspection Type *</Text>
        {INSPECTION_TYPES.map((type) => (
          <TouchableOpacity
            key={type.id}
            style={[styles.inspectionTypeOption, inspectionType === type.id && styles.inspectionTypeSelected]}
            onPress={() => setInspectionType(type.id)}
          >
            <View>
              <Text style={styles.inspectionTypeText}>{type.label}</Text>
              <Text style={styles.inspectionTypeTime}>⏱ {type.time}</Text>
            </View>
            <Ionicons
              name={inspectionType === type.id ? 'radio-button-on' : 'radio-button-off'}
              size={20}
              color={inspectionType === type.id ? theme.accentPrimary : theme.textMuted}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Description */}
      <View style={styles.inputContainer}>
        <View style={styles.labelRow}>
          <Text style={styles.fieldLabel}>Description</Text>
          <Text style={styles.optionalText}>(optional)</Text>
        </View>
        <TextInput
          style={styles.textArea}
          value={description}
          onChangeText={setDescription}
          placeholder="Describe your watch"
          placeholderTextColor={theme.textMuted}
          multiline
        />
      </View>

      {/* Photos */}
      <View style={styles.photosSection}>
        <View style={styles.labelRow}>
          <Text style={styles.fieldLabel}>Photos</Text>
          <Text style={styles.requiredStar}>*</Text>
          <Text style={styles.photosLimitText}>(Up to 10)</Text>
        </View>

        <TouchableOpacity style={styles.photoUploadBox} onPress={handleUploadPhotos}>
          <Ionicons name="images-outline" size={32} color={theme.textMuted} />
          <Text style={styles.photoUploadText}>Upload Photos</Text>
          <Text style={styles.photoCounter}>{photos.length}/10</Text>
        </TouchableOpacity>

        {photos.length > 0 && (
          <View style={styles.photoPreviewRow}>
            {photos.map((uri) => (
              <View key={uri} style={styles.photoThumbWrapper}>
                <Image source={{ uri }} style={styles.photoThumb} resizeMode="cover" />
                <TouchableOpacity
                  style={styles.photoRemoveBtn}
                  onPress={() => handleRemovePhoto(uri)}
                >
                  <Ionicons name="close" size={12} color="#FFFFFF" />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
        <Text style={styles.submitBtnText}>Submit for Authentication</Text>
      </TouchableOpacity>

      {/* Terms */}
      <Text style={styles.termsText}>
        By submitting, you agree to our authentication terms and conditions. Your watch will be reviewed by certified UAE experts.
      </Text>
    </View>
  );
}

