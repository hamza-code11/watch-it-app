import { Text, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getProcessStyles } from './AuthProcess.style';

const STEPS = [
  { num: '01', title: 'Schedule', desc: 'Choose your preferred authentication method.' },
  { num: '02', title: 'Inspect',  desc: 'Our experts physically inspect your watch in detail.' },
  { num: '03', title: 'Verify',   desc: 'We confirm authenticity and document the details.' },
  { num: '04', title: 'Receive',  desc: 'Get your digital and/or physical certificate.' },
];

export default function AuthProcess() {
  const { theme } = useTheme();
  const styles = getProcessStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Our Authentication Process</Text>

      <View style={styles.stepsRow}>
        {STEPS.map((step, i) => (
          <View key={i} style={styles.step}>
            <Text style={styles.stepNum}>{step.num}</Text>
            <Text style={styles.stepTitle}>{step.title}</Text>
            <Text style={styles.stepDesc}>{step.desc}</Text>
          </View>
        ))}
      </View>

      {/* Have Questions? */}
      <View style={styles.questionsBox}>
        <Text style={styles.questionsTitle}>Have Questions?</Text>
        <Text style={styles.questionsText}>Our team is here to help.</Text>
      </View>
    </View>
  );
}
