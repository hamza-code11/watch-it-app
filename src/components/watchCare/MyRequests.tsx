import { Ionicons } from '@expo/vector-icons';
import { Image, Text, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getMyRequestsStyles } from './MyRequests.style';

// Mock Data (Aap isay data file se bhi fetch kar sakte hain)
const requestsData = [
  {
    id: 'SVC-9F8A3C20D0EF',
    title: 'Rolex Datejust',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop',
    submittedAt: 'Aug 28, 2025 at 07:10 PM',
    status: 'Pending Review',
    statusColor: '#F59E0B',
    details: {
      service: 'PPF Protection',
      brand: 'Rolex',
      model: 'Datejust',
      material: 'Stainless Steel',
      size: '41 mm',
      phone: '+971 50 123 4567',
      pickup: 'Drop Off - Dubai Workshop',
    },
  },
  {
    id: 'SVC-7F86C20E09FA',
    title: 'Omega Seamaster',
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=800&auto=format&fit=crop',
    submittedAt: 'Aug 20, 2025 at 05:30 PM',
    status: 'Completed',
    statusColor: '#10B981',
    details: {
      service: 'Expert Polish',
      brand: 'Omega',
      model: 'Seamaster',
      material: 'Stainless Steel',
      size: '42 mm',
      phone: '+971 50 987 6543',
      pickup: 'Pickup - We Collect',
    },
  },
];

export default function MyRequests() {
  const { theme } = useTheme();
  const styles = getMyRequestsStyles(theme);

  return (
    <View style={styles.container}>
      {/* Section Heading */}
      <Text style={styles.sectionTitle}>My Requests</Text>
      <Text style={styles.sectionSubtitle}>Your service requests history</Text>

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
            <Image source={{ uri: request.image }} style={styles.serviceImage} resizeMode="cover" />
            <View style={styles.serviceInfo}>
              <Text style={styles.serviceName}>{request.title}</Text>
              <Text style={styles.dateSubmitted}>
                Submitted on {request.submittedAt}
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={theme.textMuted} />
          </View>

          {/* Details Grid */}
          <View style={styles.detailsGrid}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Service</Text>
              <Text style={styles.detailValue}>{request.details.service}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Brand</Text>
              <Text style={styles.detailValue}>{request.details.brand}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Model</Text>
              <Text style={styles.detailValue}>{request.details.model}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Material</Text>
              <Text style={styles.detailValue}>{request.details.material}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Size</Text>
              <Text style={styles.detailValue}>{request.details.size}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Phone</Text>
              <Text style={styles.detailValue}>{request.details.phone}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Collection Method</Text>
              <Text style={styles.detailValue}>{request.details.pickup}</Text>
            </View>
          </View>

        </View>
      ))}
    </View>
  );
}
