import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../context/ThemeContext';
import { passwordSteps, personalDetailsData } from '../../../data/profile';
import { getStyles } from '../../../screens/profileEdit/profileEdit.style';

export default function ProfileEdit() {
  const router = useRouter();
  const { theme } = useTheme();
  const styles = getStyles(theme);

  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState(personalDetailsData.firstName);
  const [lastName, setLastName] = useState(personalDetailsData.lastName);
  const [email, setEmail] = useState(personalDetailsData.email);
  const [phone, setPhone] = useState(personalDetailsData.phone);

  const [currentStep, setCurrentStep] = useState(1);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSavePersonal = () => {
    setIsEditing(false);
    console.log('Personal Info Saved:', { firstName, lastName, email, phone });
  };

  const handleUpdatePassword = () => {
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    setCurrentStep(1);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    console.log('Password Updated Successfully');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color={theme.textPrimary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Personal Details</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Personal Information */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Personal Information</Text>
            {!isEditing && (
              <TouchableOpacity style={styles.editBtn} onPress={() => setIsEditing(true)}>
                <Text style={styles.editBtnText}>Edit</Text>
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>First Name</Text>
            <TextInput
              style={[styles.input, !isEditing && styles.inputDisabled]}
              value={firstName}
              onChangeText={setFirstName}
              editable={isEditing}
              placeholder="First Name"
              placeholderTextColor={theme.textMuted}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Last Name</Text>
            <TextInput
              style={[styles.input, !isEditing && styles.inputDisabled]}
              value={lastName}
              onChangeText={setLastName}
              editable={isEditing}
              placeholder="Last Name"
              placeholderTextColor={theme.textMuted}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <View style={styles.inputRow}>
              <TextInput
                style={[styles.input, { flex: 1 }, !isEditing && styles.inputDisabled]}
                value={email}
                onChangeText={setEmail}
                editable={isEditing}
                placeholder="Email Address"
                placeholderTextColor={theme.textMuted}
              />
              {isEditing && (
                <TouchableOpacity style={styles.verifyBtn} onPress={() => console.log('Verify Email')}>
                  <Text style={styles.verifyBtnText}>Verify</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Phone Number</Text>
            <View style={styles.inputRow}>
              <TextInput
                style={[styles.input, { flex: 1 }, !isEditing && styles.inputDisabled]}
                value={phone}
                onChangeText={setPhone}
                editable={isEditing}
                placeholder="Phone Number"
                placeholderTextColor={theme.textMuted}
              />
              {isEditing && (
                <TouchableOpacity style={styles.verifyBtn} onPress={() => console.log('Verify Phone')}>
                  <Text style={styles.verifyBtnText}>Verify</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>

          {isEditing && (
            <View style={styles.buttonsRow}>
              <TouchableOpacity style={styles.cancelBtn} onPress={() => setIsEditing(false)}>
                <Text style={styles.cancelBtnText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveBtn} onPress={handleSavePersonal}>
                <Text style={styles.saveBtnText}>Save Changes</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* Change Password */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Change Password</Text>
          </View>

          {/* Steps */}
          <View style={styles.passwordStepsRow}>
            {passwordSteps.map((step) => (
              <View
                key={step.step}
                style={[
                  styles.stepCircle,
                  currentStep === step.step ? styles.stepCircleActive : styles.stepCircleInactive,
                ]}
              >
                <Text style={currentStep === step.step ? styles.stepCircleText : styles.stepCircleTextInactive}>
                  {step.step}
                </Text>
              </View>
            ))}
          </View>

          {/* Step 1: Verify Current */}
          {currentStep === 1 && (
            <>
              <Text style={styles.sectionTitle}>Verify Current</Text>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Current Password</Text>
                <TextInput
                  style={styles.input}
                  value={currentPassword}
                  onChangeText={setCurrentPassword}
                  placeholder="Enter your current password"
                  placeholderTextColor={theme.textMuted}
                  secureTextEntry
                />
              </View>
              <TouchableOpacity style={styles.verifyBtn} onPress={() => setCurrentStep(2)}>
                <Text style={styles.verifyBtnText}>Send Verification Code</Text>
              </TouchableOpacity>
            </>
          )}

          {/* Step 2: Verify OTP */}
          {currentStep === 2 && (
            <>
              <Text style={styles.sectionTitle}>Verify OTP</Text>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Enter OTP</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter the OTP sent to your email"
                  placeholderTextColor={theme.textMuted}
                  keyboardType="numeric"
                />
              </View>
              <TouchableOpacity style={styles.verifyBtn} onPress={() => setCurrentStep(3)}>
                <Text style={styles.verifyBtnText}>Verify OTP</Text>
              </TouchableOpacity>
            </>
          )}

          {/* Step 3: New Password */}
          {currentStep === 3 && (
            <>
              <Text style={styles.sectionTitle}>New Password</Text>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>New Password</Text>
                <TextInput
                  style={styles.input}
                  value={newPassword}
                  onChangeText={setNewPassword}
                  placeholder="Enter your new password"
                  placeholderTextColor={theme.textMuted}
                  secureTextEntry
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Confirm New Password</Text>
                <TextInput
                  style={styles.input}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  placeholder="Confirm your new password"
                  placeholderTextColor={theme.textMuted}
                  secureTextEntry
                />
              </View>

              {/* Final Update Password Button */}
              <TouchableOpacity style={styles.saveBtn} onPress={handleUpdatePassword}>
                <Text style={styles.saveBtnText}>Update Password</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
