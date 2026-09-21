import { LinearGradient } from 'expo-linear-gradient';
import { Text } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { faqData } from '../../data/faq';
import { getFAQBannerStyles } from './FAQBanner.style';

export default function FAQBanner() {
  const { theme } = useTheme();
  const styles = getFAQBannerStyles(theme);

  return (
    <LinearGradient
      colors={['#0a1628', '#0f4c81']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
      style={styles.banner}
    >
      <Text style={styles.title}>{faqData.title}</Text>
      <Text style={styles.intro}>{faqData.intro}</Text>
    </LinearGradient>
  );
}
