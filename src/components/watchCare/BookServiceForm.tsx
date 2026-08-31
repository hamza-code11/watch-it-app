import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getBookServiceStyles } from './BookServiceForm.style';

const SERVICES = [
  'PPF Protection',
  'Expert Polish',
  'Servicing',
  'Luxury Concierge',
];

const COLLECTION_METHODS = [
  { id: 'dropoff', label: 'Drop Off - Dubai Workshop' },
  { id: 'pickup', label: 'Pickup - We Collect' },
  { id: 'courier', label: 'Courier - Insured Delivery' },
];

export default function BookServiceForm() {
  const { theme } = useTheme();
  const styles = getBookServiceStyles(theme);

  const [selectedService, setSelectedService] = useState('');
  const [serviceOpen, setServiceOpen] = useState(false);
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [material, setMaterial] = useState('');
  const [size, setSize] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [collectionMethod, setCollectionMethod] = useState('dropoff');
  const [conditionNotes, setConditionNotes] = useState('');
  const [photos, setPhotos] = useState<string[]>([]);

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
    if (!selectedService || !brand || !phoneNumber) {
      alert('Please fill in all required fields!');
      return;
    }
    console.log('Book Service Data:', {
      selectedService,
      brand,
      model,
      material,
      size,
      phoneNumber,
      collectionMethod,
      conditionNotes,
      photos,
    });
    alert('Service request submitted successfully!');
  };

  return (
    <View style={styles.formContainer}>
      {/* Form Title */}
      <Text style={styles.formTitle}>Book a Service</Text>
      <Text style={styles.formSubtitle}>
        Fill in the details below to book your watch care service
      </Text>

      {/* Select Service (Dropdown) */}
      <View style={styles.inputContainer}>
        <View style={styles.labelRow}>
          <Text style={styles.fieldLabel}>Select Service</Text>
          <Text style={styles.requiredStar}>*</Text>
        </View>
        <View style={styles.selectWrapper}>
          <TouchableOpacity
            style={styles.selectButton}
            onPress={() => setServiceOpen((prev) => !prev)}
          >
            <Text style={selectedService ? styles.selectText : styles.selectPlaceholder}>
              {selectedService || 'Select a service'}
            </Text>
            <Ionicons
              name={serviceOpen ? 'chevron-up' : 'chevron-down'}
              size={16}
              color={theme.textMuted}
            />
          </TouchableOpacity>
          {serviceOpen && (
            <View style={styles.optionsDropdown}>
              {SERVICES.map((service, idx) => (
                <TouchableOpacity
                  key={service}
                  style={[styles.optionRow, idx === SERVICES.length - 1 && styles.optionRowLast]}
                  onPress={() => {
                    setSelectedService(service);
                    setServiceOpen(false);
                  }}
                >
                  <Text
                    style={[styles.optionText, selectedService === service && styles.optionSelected]}
                  >
                    {service}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </View>

      {/* Brand */}
      <View style={styles.inputContainer}>
        <View style={styles.labelRow}>
          <Text style={styles.fieldLabel}>Brand</Text>
          <Text style={styles.requiredStar}>*</Text>
        </View>
        <TextInput
          style={styles.input}
          value={brand}
          onChangeText={setBrand}
          placeholder="e.g. Rolex, Omega, Patek Philippe"
          placeholderTextColor={theme.textMuted}
        />
      </View>

      {/* Model */}
      <View style={styles.inputContainer}>
        <View style={styles.labelRow}>
          <Text style={styles.fieldLabel}>Model</Text>
          <Text style={styles.optionalText}>(optional)</Text>
        </View>
        <TextInput
          style={styles.input}
          value={model}
          onChangeText={setModel}
          placeholder="e.g. Submariner Date"
          placeholderTextColor={theme.textMuted}
        />
      </View>

      {/* Material */}
      <View style={styles.inputContainer}>
        <View style={styles.labelRow}>
          <Text style={styles.fieldLabel}>Material</Text>
          <Text style={styles.optionalText}>(optional)</Text>
        </View>
        <TextInput
          style={styles.input}
          value={material}
          onChangeText={setMaterial}
          placeholder="e.g. Stainless Steel, Gold, Titanium"
          placeholderTextColor={theme.textMuted}
        />
      </View>

      {/* Size */}
      <View style={styles.inputContainer}>
        <View style={styles.labelRow}>
          <Text style={styles.fieldLabel}>Size (mm)</Text>
          <Text style={styles.optionalText}>(optional)</Text>
        </View>
        <TextInput
          style={styles.input}
          value={size}
          onChangeText={setSize}
          placeholder="e.g. 41, 44, 36"
          placeholderTextColor={theme.textMuted}
          keyboardType="numeric"
        />
      </View>

      {/* Phone Number */}
      <View style={styles.inputContainer}>
        <View style={styles.labelRow}>
          <Text style={styles.fieldLabel}>Phone Number</Text>
          <Text style={styles.requiredStar}>*</Text>
        </View>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Enter your phone number"
          placeholderTextColor={theme.textMuted}
          keyboardType="phone-pad"
        />
      </View>

      {/* Collection Method */}
      <View style={styles.collectionMethodContainer}>
        <Text style={styles.collectionMethodLabel}>Collection Method *</Text>
        {COLLECTION_METHODS.map((method) => (
          <TouchableOpacity
            key={method.id}
            style={[
              styles.collectionOption,
              collectionMethod === method.id && styles.collectionSelected,
            ]}
            onPress={() => setCollectionMethod(method.id)}
          >
            <Text style={styles.collectionOptionText}>{method.label}</Text>
            <Ionicons
              name={collectionMethod === method.id ? 'radio-button-on' : 'radio-button-off'}
              size={20}
              color={collectionMethod === method.id ? theme.accentPrimary : theme.textMuted}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Photos */}
      <View style={styles.photosSection}>
        <View style={styles.labelRow}>
          <Text style={styles.fieldLabel}>Upload Images</Text>
          <Text style={styles.requiredStar}>*</Text>
          <Text style={styles.optionalText}>(Up to 10)</Text>
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

      {/* Condition Notes */}
      <View style={styles.inputContainer}>
        <View style={styles.labelRow}>
          <Text style={styles.fieldLabel}>Condition Notes</Text>
          <Text style={styles.optionalText}>(optional)</Text>
        </View>
        <TextInput
          style={styles.textArea}
          value={conditionNotes}
          onChangeText={setConditionNotes}
          placeholder="Describe the condition, any damages, or specific requests"
          placeholderTextColor={theme.textMuted}
          multiline
        />
      </View>

      {/* Submit Button (White Gradient) */}
      <View style={styles.submitBtnWrapper}>
        <LinearGradient
          colors={['#FFFFFF', '#E5E7EB', '#D1D5DB']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.submitBtn}
        >
          <TouchableOpacity onPress={handleSubmit} activeOpacity={0.8}>
            <Text style={styles.submitBtnText}>Request Service Quote</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      {/* Terms */}
      <Text style={styles.termsText}>
        By submitting, you agree to our terms of service and privacy policy. Our team will contact you within 24 hours.
      </Text>
    </View>
  );
}
