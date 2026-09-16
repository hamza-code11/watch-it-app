import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getCheckStyles } from './WhatWeCheck.style';

const ITEMS = [
  { icon: 'watch-outline',    title: 'Case',                desc: 'Shape, material, engraving, finish' },
  { icon: 'ellipse-outline',  title: 'Dial',                desc: 'Print, markers, logo, details' },
  { icon: 'cog-outline',      title: 'Movement',            desc: 'Calibre, function, performance' },
  { icon: 'water-outline',    title: 'Water Resistance',    desc: 'Tested for waterproof integrity' },
  { icon: 'time-outline',     title: 'Timing Accuracy',     desc: 'Checked for rate and consistency' },
  { icon: 'document-outline', title: 'Papers & Accessories',desc: 'Boxes, cards, documents' },
  { icon: 'diamond-outline',  title: 'Crystal',             desc: 'Scratch resistance, clarity' },
  { icon: 'settings-outline', title: 'Crown & Pushers',     desc: 'Function, thread, seal' },
] as const;

export default function WhatWeCheck() {
  const { theme } = useTheme();
  const styles = getCheckStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>What We Check</Text>
      <Text style={styles.subheading}>
        Every detail matters. We inspect all key components to ensure your watch is 100% genuine.
      </Text>

      <View style={styles.grid}>
        {ITEMS.map((item, i) => (
          <View key={i} style={styles.gridItem}>
            <Ionicons name={item.icon} size={16} color="#D4AF37" />
            <Text style={styles.itemTitle} numberOfLines={1}>
              {item.title}
            </Text>
            <Text style={styles.itemDesc} numberOfLines={3}>
              {item.desc}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
