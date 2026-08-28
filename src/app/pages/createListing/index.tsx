import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../context/ThemeContext';
import { getStyles } from '../../../screens/createListing/createListing.style';
import { ListingFormData } from '../../../types/listing.types';

const CONDITION_OPTIONS = ['Brand New', 'Like New', 'Used']; 
const EMIRATE_OPTIONS = [
  'Dubai',
  'Abu Dhabi',
  'Sharjah',
  'Ajman',
  'Ras Al Khaimah',
  'Fujairah',
  'Umm Al Quwain',
];

// Sirf instruction ke liye (clickable nahi)
const PHOTO_TIPS = ['Front', 'Back', 'Dial', 'Case/Buckle', 'Box', 'Papers', 'Accessories'];

export default function CreateListing() {
  const router = useRouter();
  const { theme } = useTheme();
  const styles = getStyles(theme);

  const [formData, setFormData] = useState<ListingFormData>({
    brand: '',
    title: '',
    startingPrice: '',
    endsAt: '',
    image: null,
    gallery: [],
    description: '',
  });

  const [movement, setMovement] = useState('');
  const [strapMaterial, setStrapMaterial] = useState('');
  const [waterResistance, setWaterResistance] = useState('');
  const [year, setYear] = useState('');

  const [acceptTradeIn, setAcceptTradeIn] = useState(false);
  const [authenticateWatch, setAuthenticateWatch] = useState(false);
  const [includeBoxPapers, setIncludeBoxPapers] = useState(false);

  const [condition, setCondition] = useState('');
  const [emirate, setEmirate] = useState('');
  const [conditionOpen, setConditionOpen] = useState(false);
  const [emirateOpen, setEmirateOpen] = useState(false);

  // Cover image ka index (default 0 = pehli image cover)
  const [coverIndex, setCoverIndex] = useState(0);

  const handleChange = (field: keyof ListingFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (
      !formData.brand ||
      !formData.title ||
      !formData.startingPrice ||
      !condition ||
      !emirate ||
      formData.gallery.length < 2
    ) {
      alert('Please fill in all required fields and upload at least 2 photos!');
      return;
    }

    // Note: Tags/PhotoTips ab backend ke liye nahi hain, sirf UI instruction hain
    console.log('Listing Data:', {
      ...formData,
      movement,
      strapMaterial,
      waterResistance,
      year,
      condition,
      emirate,
      includeBoxPapers,
      acceptTradeIn,
      authenticateWatch,
      coverIndex,
    });
    alert('Listing created successfully!');
    router.back();
  };

  const toggles = [
    {
      value: acceptTradeIn,
      setValue: setAcceptTradeIn,
      title: 'Accepting Trade-ins',
      description: 'Trade in your watch and upgrade to your next timepiece.',
    },
    {
      value: authenticateWatch,
      setValue: setAuthenticateWatch,
      title: 'Authenticate with WatchIT',
      description: 'Get certified by our expert authenticators.',
    },
  ];

  // Updated Image Picker (New MediaType API)
  const handlePickImages = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'], // ✅ Naya API (MediaTypeOptions deprecated)
      allowsMultipleSelection: true,
      quality: 0.8,
      selectionLimit: 10 - formData.gallery.length,
    });

    if (!result.canceled) {
      const uris = result.assets.map((asset) => asset.uri);
      setFormData((prev) => {
        const merged = [...prev.gallery, ...uris].slice(0, 10);
        return { ...prev, gallery: merged, image: prev.image || merged[0] || null };
      });
    }
  };

  const handleRemovePhoto = (uri: string) => {
    setFormData((prev) => {
      const gallery = prev.gallery.filter((g) => g !== uri);
      // Agar cover wali image remove ho jaye, toh nayi pehli image cover ban jaye
      const newCoverIndex = Math.min(coverIndex, gallery.length - 1);
      setCoverIndex(newCoverIndex);
      return { ...prev, gallery, image: gallery[0] || null };
    });
  };

  // Cover image select karo (sirf selected par cover label dikhega)
  const setCoverPhoto = (index: number) => {
    setCoverIndex(index);
    setFormData((prev) => ({ ...prev, image: prev.gallery[index] || null }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* FIXED HEADER (Top Par, Full Width) */}
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={22} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Create Listing</Text>
          <View style={{ width: 22 }} />
        </View>
      </View>

      {/* Scrollable Form */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* Form Box */}
        <View style={styles.formBox}>
          <Text style={styles.pageTitle}>Create Your Listing</Text>
          <Text style={styles.pageSubtitle}>List your luxury watch for sale</Text>

          {/* BASIC INFORMATION */}
          <Text style={styles.sectionHeader}>Basic Information</Text>

          <View style={styles.inputContainer}>
            <View style={styles.labelRow}>
              <Text style={styles.inputLabel}>BRAND</Text>
              <Text style={styles.requiredStar}>*</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="e.g. Rolex, Omega, Patek Philippe"
              placeholderTextColor={theme.textMuted}
              value={formData.brand}
              onChangeText={(value) => handleChange('brand', value)}
            />
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.labelRow}>
              <Text style={styles.inputLabel}>MODEL</Text>
              <Text style={styles.requiredStar}>*</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="e.g. Submariner Date"
              placeholderTextColor={theme.textMuted}
              value={formData.title}
              onChangeText={(value) => handleChange('title', value)}
            />
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.labelRow}>
              <Text style={styles.inputLabel}>REFERENCE NUMBER</Text>
              <Text style={styles.inputLabelOptional}>(optional)</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="e.g. 126610LN"
              placeholderTextColor={theme.textMuted}
              value={formData.endsAt}
              onChangeText={(value) => handleChange('endsAt', value)}
            />
          </View>

          {/* SPECIFICATIONS */}
          <Text style={styles.sectionHeader}>Specifications</Text>

          <View style={styles.inputContainer}>
            <View style={styles.labelRow}>
              <Text style={styles.inputLabel}>MOVEMENT</Text>
              <Text style={styles.inputLabelOptional}>(optional)</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="e.g. Automatic, Manual, Quartz"
              placeholderTextColor={theme.textMuted}
              value={movement}
              onChangeText={setMovement}
            />
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.labelRow}>
              <Text style={styles.inputLabel}>STRAP MATERIAL</Text>
              <Text style={styles.inputLabelOptional}>(optional)</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="e.g. Stainless Steel, Leather, Rubber"
              placeholderTextColor={theme.textMuted}
              value={strapMaterial}
              onChangeText={setStrapMaterial}
            />
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.labelRow}>
              <Text style={styles.inputLabel}>WATER RESISTANCE</Text>
              <Text style={styles.inputLabelOptional}>(optional)</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="e.g. 300m"
              placeholderTextColor={theme.textMuted}
              value={waterResistance}
              onChangeText={setWaterResistance}
            />
          </View>

          {/* CONDITION & DETAILS */}
          <Text style={styles.sectionHeader}>Condition & Details</Text>

          <View style={styles.inputContainer}>
            <View style={styles.labelRow}>
              <Text style={styles.inputLabel}>CONDITION</Text>
              <Text style={styles.requiredStar}>*</Text>
            </View>
            <TouchableOpacity
              style={[styles.selectInput, conditionOpen && styles.selectInputOpen]}
              onPress={() => {
                setConditionOpen((prev) => !prev);
                setEmirateOpen(false);
              }}
            >
              <Text style={condition ? styles.selectText : styles.selectPlaceholder}>
                {condition || 'Select Condition'}
              </Text>
              <Ionicons
                name={conditionOpen ? 'chevron-up' : 'chevron-down'}
                size={16}
                color={theme.textMuted}
              />
            </TouchableOpacity>
            {conditionOpen && (
              <View style={styles.optionsDropdown}>
                {CONDITION_OPTIONS.map((opt, idx) => (
                  <TouchableOpacity
                    key={opt}
                    style={[
                      styles.optionRow,
                      idx === CONDITION_OPTIONS.length - 1 && styles.optionRowLast,
                      condition === opt && styles.optionRowSelected,
                    ]}
                    onPress={() => {
                      setCondition(opt);
                      setConditionOpen(false);
                    }}
                  >
                    <Text
                      style={[styles.optionText, condition === opt && styles.optionTextSelected]}
                    >
                      {opt}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.labelRow}>
              <Text style={styles.inputLabel}>YEAR</Text>
              <Text style={styles.inputLabelOptional}>(optional)</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="e.g. 2020"
              placeholderTextColor={theme.textMuted}
              keyboardType="numeric"
              value={year}
              onChangeText={setYear}
            />
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.labelRow}>
              <Text style={styles.inputLabel}>EMIRATE</Text>
              <Text style={styles.requiredStar}>*</Text>
            </View>
            <TouchableOpacity
              style={[styles.selectInput, emirateOpen && styles.selectInputOpen]}
              onPress={() => {
                setEmirateOpen((prev) => !prev);
                setConditionOpen(false);
              }}
            >
              <Text style={emirate ? styles.selectText : styles.selectPlaceholder}>
                {emirate || 'Select Emirate'}
              </Text>
              <Ionicons
                name={emirateOpen ? 'chevron-up' : 'chevron-down'}
                size={16}
                color={theme.textMuted}
              />
            </TouchableOpacity>
            {emirateOpen && (
              <View style={styles.optionsDropdown}>
                {EMIRATE_OPTIONS.map((opt, idx) => (
                  <TouchableOpacity
                    key={opt}
                    style={[
                      styles.optionRow,
                      idx === EMIRATE_OPTIONS.length - 1 && styles.optionRowLast,
                      emirate === opt && styles.optionRowSelected,
                    ]}
                    onPress={() => {
                      setEmirate(opt);
                      setEmirateOpen(false);
                    }}
                  >
                    <Text style={[styles.optionText, emirate === opt && styles.optionTextSelected]}>
                      {opt}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          <TouchableOpacity
            style={styles.checkboxRow}
            onPress={() => setIncludeBoxPapers(!includeBoxPapers)}
            activeOpacity={0.7}
          >
            <View style={[styles.checkbox, !includeBoxPapers && styles.checkboxUnchecked]}>
              {includeBoxPapers && <Ionicons name="checkmark" size={13} color="#000" />}
            </View>
            <Text style={styles.checkboxLabel}>Includes original box and papers</Text>
          </TouchableOpacity>

          <View style={styles.inputContainer}>
            <View style={styles.labelRow}>
              <Text style={styles.inputLabel}>DESCRIPTION</Text>
              <Text style={styles.inputLabelOptional}>(optional)</Text>
            </View>
            <TextInput
              style={styles.textArea}
              placeholder="Describe your watch's condition, any special features, service history, etc."
              placeholderTextColor={theme.textMuted}
              multiline
              value={formData.description}
              onChangeText={(value) => handleChange('description', value)}
            />
          </View>

          {/* PHOTOS */}
          <View style={styles.labelRow}>
            <Text style={styles.sectionHeader}>Photos</Text>
            <Text style={[styles.requiredStar, { marginTop: 16 }]}>*</Text>
          </View>

          <View style={styles.photosRow}>
            <Text style={styles.photosCount}>{formData.gallery.length}/10 photos uploaded</Text>
            <Text style={styles.photosLimit}>Upload 2-10 photos</Text>
          </View>

          <TouchableOpacity style={styles.photoUploadBox} onPress={handlePickImages}>
            <Ionicons name="images-outline" size={24} color={theme.textMuted} />
            <Text style={styles.photoUploadTitle}>Click to upload photos</Text>
            <Text style={styles.photoUploadNote}>PNG, JPG, WEBP up to 10MB</Text>
          </TouchableOpacity>

          {/* Photo Tips - Sirf instructions, clickable NAHI hain */}
          <View style={styles.photoTipsContainer}>
            <Text style={styles.photoTipsText}>We recommend uploading photos in these angles:</Text>
            <View style={styles.tagsRow}>
              {PHOTO_TIPS.map((tip) => (
                <View key={tip} style={styles.photoTipChip}>
                  <Text style={styles.photoTipChipText}>{tip}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Photo Previews with Cover Selection (Default First Image Cover) */}
          {formData.gallery.length > 0 && (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.photoPreviewRow}
            >
              {formData.gallery.map((uri, index) => (
                <View key={uri} style={styles.photoThumbWrapper}>
                  <Image source={{ uri }} style={styles.photoThumb} />
                  
                  {/* Remove Button (Top Right) */}
                  <TouchableOpacity
                    style={styles.photoRemoveBtn}
                    onPress={() => handleRemovePhoto(uri)}
                  >
                    <Ionicons name="close" size={12} color="#fff" />
                  </TouchableOpacity>

                  {/* Set as Cover Button (Bottom Left - Star Icon) */}
                  <TouchableOpacity
                    style={styles.setCoverBtn}
                    onPress={() => setCoverPhoto(index)}
                  >
                    <Ionicons
                      name={coverIndex === index ? 'star' : 'star-outline'}
                      size={14}
                      color={coverIndex === index ? '#FFD700' : '#fff'}
                    />
                  </TouchableOpacity>

                  {/* Cover Label (Sirf Selected Image Par) */}
                  {coverIndex === index && (
                    <View style={styles.coverBadge}>
                      <Text style={styles.coverBadgeText}>Cover</Text>
                    </View>
                  )}
                </View>
              ))}
              {formData.gallery.length < 10 && (
                <TouchableOpacity style={styles.photoAddMoreTile} onPress={handlePickImages}>
                  <Ionicons name="add" size={22} color={theme.textMuted} />
                </TouchableOpacity>
              )}
            </ScrollView>
          )}

          {/* PRICING & TRADE-IN */}
          <Text style={styles.sectionHeader}>Pricing & Trade-In</Text>

          <View style={styles.inputContainer}>
            <View style={styles.labelRow}>
              <Text style={styles.inputLabel}>ASKING PRICE (AED)</Text>
              <Text style={styles.requiredStar}>*</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Enter your asking price"
              placeholderTextColor={theme.textMuted}
              keyboardType="numeric"
              value={formData.startingPrice}
              onChangeText={(value) => handleChange('startingPrice', value)}
            />
            <Text style={styles.toggleDescription}>
              Set a competitive price to attract more buyers.
            </Text>
          </View>

          {toggles.map((toggle) => (
            <View key={toggle.title} style={styles.toggleRow}>
              <View style={styles.toggleInfo}>
                <Text style={styles.toggleTitle}>{toggle.title}</Text>
                <Text style={styles.toggleDescription}>{toggle.description}</Text>
              </View>
              <TouchableOpacity
                style={[styles.toggleSwitch, toggle.value && styles.toggleSwitchOn]}
                onPress={() => toggle.setValue(!toggle.value)}
              >
                <View style={[styles.toggleKnob, toggle.value && styles.toggleKnobOn]} />
              </TouchableOpacity>
            </View>
          ))}

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit} activeOpacity={0.85}>
            <LinearGradient
              colors={['#FFFFFF', '#E5E7EB', '#D1D5DB']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.submitBtnGradient}
            >
              <Ionicons name="arrow-forward" size={18} color="#000" />
              <Text style={styles.submitText}>Proceed to Payment</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
