import { Text, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getHowItWorksStyles } from './HowItWorks.style';

const stepsData = [
  {
    id: 1,
    title: 'Book',
    description: 'Pick your service and schedule.',
  },
  {
    id: 2,
    title: 'Expert Review',
    description: 'Our specialists assess your watch.',
  },
  {
    id: 3,
    title: 'Service',
    description: 'We take care of your watch with genuine parts.',
  },
  {
    id: 4,
    title: 'Receive',
    description: 'Get your watch back with warranty.',
  },
];

export default function HowItWorks() {
  const { theme } = useTheme();
  const styles = getHowItWorksStyles(theme);

  return (
    <View style={styles.container}>
      {/* Section Heading */}
      <Text style={styles.sectionTitle}>How It Works</Text>
      <Text style={styles.sectionSubtitle}>A simple and secure process.</Text>

      {/* Steps: circles + dashed connector line + labels */}
      <View style={styles.stepsRow}>
        <View style={styles.connectorLine} />

        {stepsData.map((step) => (
          <View key={step.id} style={styles.stepColumn}>
            <View style={styles.numberBadge}>
              <Text style={styles.numberText}>{step.id}</Text>
            </View>
            <Text style={styles.stepTitle}>{step.title}</Text>
            <Text style={styles.stepDescription}>{step.description}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
