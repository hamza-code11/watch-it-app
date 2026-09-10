import { Text, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getMissionVisionStyles } from './MissionVision.style';
import { missionVisionData } from '../../data/about';

export default function MissionVision() {
  const { theme } = useTheme();
  const styles = getMissionVisionStyles(theme);

  return (
    <View style={styles.container}>
      {/* Heading */}
      <Text style={styles.title}>{missionVisionData.title}</Text>
      <Text style={styles.subtitle}>{missionVisionData.subtitle}</Text>

      {/* Our Mission */}
      <Text style={styles.sectionTitle}>Our Mission</Text>
      <Text style={styles.sectionText}>{missionVisionData.mission}</Text>

      {/* Our Vision */}
      <Text style={styles.sectionTitle}>Our Vision</Text>
      <Text style={styles.sectionText}>{missionVisionData.vision}</Text>
    </View>
  );
}
