import { Text, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getHowItWorksStyles } from './HowItWorks.style';

const steps = [
  {
    number: '01',
    title: 'Submit Your Watch',
    description: 'Upload photos and details of your watch for review by our certified experts.',
  },
  {
    number: '02',
    title: 'Expert Verification',
    description: 'Our UAE-certified watchmakers examine your watch for authenticity and condition.',
  },
  {
    number: '03',
    title: 'Get Certificate',
    description: 'Receive your digital authentication certificate with all verification details.',
  },
  {
    number: '04',
    title: 'Display Badge',
    description: 'Show the Authenticated badge on your listing to build buyer trust.',
  },
];

export default function HowItWorks() {
  const { theme } = useTheme();
  const styles = getHowItWorksStyles(theme);

  return (
    <View style={styles.container}>
      {/* Label */}
      <Text style={styles.sectionLabel}>Simple Process</Text>

      {/* Heading */}
      <Text style={styles.sectionTitle}>How It Works</Text>

      {/* Subtitle */}
      <Text style={styles.sectionSubtitle}>
        Get your watch authenticated in 4 simple steps
      </Text>

      {/* Timeline */}
      <View style={styles.timelineContainer}>
        {/* Vertical Dotted Line */}
        <View style={styles.timelineLine} />

        {/* Steps */}
        {steps.map((step) => (
          <View key={step.number} style={styles.stepItem}>
            {/* Number Circle */}
            <View style={styles.stepNumberCircle}>
              <Text style={styles.stepNumber}>{step.number}</Text>
            </View>

            {/* Step Content */}
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>{step.title}</Text>
              <Text style={styles.stepDescription}>{step.description}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
