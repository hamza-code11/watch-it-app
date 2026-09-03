// TermsAccordionList.tsx
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getTermsAccordionStyles } from './TermsAccordionList.style';
import { termsData } from '../../data/terms';

export default function TermsAccordionList() {
  const { theme } = useTheme();
  const styles = getTermsAccordionStyles(theme);
  const [expandedSections, setExpandedSections] = useState<number[]>([1]);

  const toggleSection = (id: number) => {
    setExpandedSections((prev) =>
      prev.includes(id) ? prev.filter((sectionId) => sectionId !== id) : [...prev, id]
    );
  };

  return (
    <View style={styles.container}>
      {termsData.sections.map((section) => {
        const isExpanded = expandedSections.includes(section.id);

        return (
          <View key={section.id} style={styles.sectionItem}>
            {/* Section Header */}
            <TouchableOpacity
              style={styles.sectionHeader}
              onPress={() => toggleSection(section.id)}
            >
              <View style={styles.sectionNumber}>
                <Text style={styles.sectionNumberText}>{section.id}</Text>
              </View>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              <Ionicons
                name={isExpanded ? 'chevron-up' : 'chevron-down'}
                size={18}
                color={theme.textMuted}
              />
            </TouchableOpacity>

            {/* Section Content */}
            {isExpanded && (
              <View style={styles.sectionContent}>
                <Text style={styles.sectionBody}>{section.content}</Text>

                {section.bulletPoints && (
                  <View style={styles.bulletPoints}>
                    {section.bulletPoints.map((point, index) => (
                      <View key={index} style={styles.bulletPointItem}>
                        <Ionicons name="checkmark-circle" size={14} color={theme.success} />
                        <Text style={styles.bulletText}>{point}</Text>
                      </View>
                    ))}
                  </View>
                )}
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
}
