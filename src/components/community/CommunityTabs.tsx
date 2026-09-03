// CommunityTabs.tsx
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getCommunityTabsStyles } from './CommunityTabs.style';

interface Props {
  activeTab: string;
  onTabChange: (tab: string) => void;
  tabs: string[];
}

export default function CommunityTabs({ activeTab, onTabChange, tabs }: Props) {
  const { theme } = useTheme();
  const styles = getCommunityTabsStyles(theme);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabsRow}
      >
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, activeTab === tab && styles.tabActive]}
            onPress={() => onTabChange(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
