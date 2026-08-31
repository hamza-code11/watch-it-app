import { Ionicons } from '@expo/vector-icons';
import { Image, Text, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getMyRequestsStyles } from './MyRequests.style';

// Mock Data (Aap isay data file se bhi fetch kar sakte hain)
const requestsData = [
  {
    id: 'AUTH-9F8A3C20D0EF',
    title: 'Rolex Datejust',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop',
    submittedAt: 'Aug 28, 2025 at 07:10 PM',
    status: 'Pending Review',
    statusColor: '#F59E0B',
    details: {
      brand: 'Rolex',
      model: 'Datejust',
      reference: '126334',
      serial: '1A2B3C4D',
      year: '2022',
      condition: 'Like New',
    },
  },
  {
    id: 'AUTH-7F86C20E09FA',
    title: 'Omega Seamaster',
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=800&auto=format&fit=crop',
    submittedAt: 'Aug 20, 2025 at 05:30 PM',
    status: 'Completed',
    statusColor: '#10B981',
    details: {
      brand: 'Omega',
      model: 'Seamaster',
      reference: '1598.83',
      serial: '89123576',
      year: '2021',
      condition: 'Excellent',
    },
  },
];

export default function MyRequests() {
  const { theme } = useTheme();
  const styles = getMyRequestsStyles(theme);

  return (
    <View>
      {/* Section Heading */}
      <Text style={styles.sectionTitle}>My Requests</Text>

      {/* Request Cards */}
      {requestsData.map((request) => (
        <View key={request.id} style={styles.requestCard}>
          {/* Card Header (ID + Status) */}
          <View style={styles.cardHeader}>
            <Text style={styles.requestId}>#{request.id}</Text>
            <View style={[styles.statusBadge, { backgroundColor: request.statusColor }]}>
              <Text style={styles.statusText}>{request.status}</Text>
            </View>
          </View>

          {/* Main Row (Image + Info) */}
          <View style={styles.mainRow}>
            <Image source={{ uri: request.image }} style={styles.watchImage} resizeMode="cover" />
            <View style={styles.watchInfo}>
              <Text style={styles.watchName}>{request.title}</Text>
              <Text style={styles.dateSubmitted}>
                Submitted on {request.submittedAt}
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={theme.textMuted} />
          </View>

          {/* Details Grid */}
          <View style={styles.detailsGrid}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Brand</Text>
              <Text style={styles.detailValue}>{request.details.brand}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Model</Text>
              <Text style={styles.detailValue}>{request.details.model}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Reference Number</Text>
              <Text style={styles.detailValue}>{request.details.reference}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Serial Number</Text>
              <Text style={styles.detailValue}>{request.details.serial}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Year</Text>
              <Text style={styles.detailValue}>{request.details.year}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Condition</Text>
              <Text style={styles.detailValue}>{request.details.condition}</Text>
            </View>
          </View>

        </View>
      ))}
    </View>
  );
}

