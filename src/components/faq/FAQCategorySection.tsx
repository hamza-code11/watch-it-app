// FAQCategorySection.tsx
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getFAQCategoryStyles } from './FAQCategorySection.style';
import { faqData } from '../../data/faq';

export default function FAQCategorySection() {
  const { theme } = useTheme();
  const styles = getFAQCategoryStyles(theme);
  const [expandedQuestionIds, setExpandedQuestionIds] = useState<number[]>([]);

  const toggleQuestion = (id: number) => {
    setExpandedQuestionIds((prev) =>
      prev.includes(id) ? prev.filter((qId) => qId !== id) : [...prev, id]
    );
  };

  return (
    <View>
      {faqData.categories.map((category) => (
        <View key={category.id} style={styles.categoryContainer}>
          {/* Category Title */}
          <Text style={styles.categoryTitle}>{category.title}</Text>

          {/* FAQ Items */}
          {category.items.map((item) => {
            const isExpanded = expandedQuestionIds.includes(item.id);

            return (
              <View key={item.id} style={styles.faqItem}>
                <TouchableOpacity
                  style={styles.faqHeader}
                  onPress={() => toggleQuestion(item.id)}
                >
                  <Text style={styles.faqQuestion}>{item.question}</Text>
                  <Ionicons
                    name={isExpanded ? 'chevron-up' : 'chevron-down'}
                    size={18}
                    color={theme.textMuted}
                    style={styles.faqChevron}
                  />
                </TouchableOpacity>

                {isExpanded && (
                  <Text style={styles.faqAnswer}>{item.answer}</Text>
                )}
              </View>
            );
          })}
        </View>
      ))}

      {/* Support Section */}
      <View style={styles.supportSection}>
        <View style={styles.supportIcon}>
          <Ionicons name="chatbubble-ellipses-outline" size={20} color={theme.accentPrimary} />
        </View>
        <View style={styles.supportInfo}>
          <Text style={styles.supportTitle}>Can't find what you're looking for?</Text>
          <Text style={styles.supportSubtitle}>{faqData.supportText}</Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color={theme.textMuted} />
      </View>
    </View>
  );
}
