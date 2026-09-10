import { Text, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getOurStoryStyles } from './OurStory.style';
import { storyData } from '../../data/about';

export default function OurStory() {
  const { theme } = useTheme();
  const styles = getOurStoryStyles(theme);

  return (
    <View style={styles.container}>
      {/* Heading */}
      <Text style={styles.title}>{storyData.title}</Text>
      <Text style={styles.subtitle}>{storyData.subtitle}</Text>

      {/* Story Text */}
      {storyData.paragraphs.map((text, index) => (
        <Text key={index} style={styles.storyText}>
          {text}
        </Text>
      ))}

      {/* Timeline */}
      <View style={styles.timelineContainer}>
        {storyData.timeline.map((item) => (
          <View key={item.year} style={styles.timelineItem}>
            <View style={styles.timelineDot} />
            <View style={styles.timelineContent}>
              <Text style={styles.timelineYear}>{item.year}</Text>
              <Text style={styles.timelineText}>{item.text}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}