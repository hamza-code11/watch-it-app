import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getCertificateStyles } from './CertificateCard.style';

interface CertificateField {
  label: string;
  value: string;
}

interface CertificateCardProps {
  fields: CertificateField[];
  onViewCertificate?: () => void;
}

export default function CertificateCard({
  fields,
  onViewCertificate,
}: CertificateCardProps) {
  const { theme } = useTheme();
  const styles = getCertificateStyles(theme);

  return (
    <View style={styles.wrapper}>
      {/* Left: Certificate Preview */}
      <View style={styles.certificate}>
        <Ionicons name="shield-checkmark" size={18} color="#8B6F2E" />
        <Text style={styles.certTitle}>WATCH IT</Text>
        <Text style={styles.certSubtitle}>CERTIFICATE OF AUTHENTICITY</Text>

        <View style={styles.certTable}>
          {fields.map((field, index) => (
            <View key={index} style={styles.certRow}>
              <Text style={styles.certLabel}>{field.label}</Text>
              <Text style={styles.certValue}>{field.value}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.certFooter}>TRUSTED EXPERTS. GENUINE VALUE.</Text>
      </View>

      {/* Right: Info + Button */}
      <View style={styles.info}>
        <Text style={styles.infoTitle}>Authenticity Certificate</Text>
        <Text style={styles.infoText}>
          Every watch comes with a 100% genuine certificate to ensure your peace
          of mind.
        </Text>

        <TouchableOpacity
          style={styles.viewButton}
          onPress={onViewCertificate}
          activeOpacity={0.85}
        >
          <Ionicons name="eye-outline" size={16} color="#D4AF37" />
          <Text style={styles.viewButtonText}>View Certificate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
