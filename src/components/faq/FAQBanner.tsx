import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../../context/ThemeContext';
import { getFAQBannerStyles } from './FAQBanner.style';
import { faqData } from '../../data/faq';

export default function FAQBanner() {
  const { theme } = useTheme();
  const styles = getFAQBannerStyles(theme);

  return (
    <LinearGradient
      colors={['#1B2B4B', '#121C33', '#0D1322']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.banner}
    >
      <Text style={styles.title}>{faqData.title}</Text>
      <Text style={styles.intro}>{faqData.intro}</Text>
    </LinearGradient>
  );
}
