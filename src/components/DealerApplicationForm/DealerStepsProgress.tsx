import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getDealerStepsProgressStyles } from './DealerStepsProgress.style';

interface Props {
  currentStep: number;
  stepLabels: string[];
}

export default function DealerStepsProgress({ currentStep, stepLabels }: Props) {
  const { theme } = useTheme();
  const styles = getDealerStepsProgressStyles(theme);

  return (
    <View style={styles.container}>
      {/* Step Counter */}
      {/* <Text style={styles.stepTitle}>
        Step <Text style={styles.stepTitleHighlight}>{currentStep}</Text> of {stepLabels.length}
      </Text> */}

      <View style={styles.progressRow}>
        {stepLabels.map((label, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isActive = stepNumber === currentStep;
          const isInactive = stepNumber > currentStep;

          return (
            <View key={label} style={styles.stepItem}>
              {/* Connector Line */}
              {index > 0 && (
                <View
                  style={[
                    styles.connectorLine,
                    { left: '-50%', right: '50%' },
                    (isCompleted || isActive) && styles.connectorActive,
                    isInactive && styles.connectorInactive,
                  ]}
                />
              )}

              {index < stepLabels.length - 1 && (
                <View
                  style={[
                    styles.connectorLine,
                    { left: '50%', right: '-50%' },
                    isCompleted && styles.connectorActive,
                    (isActive || isInactive) && styles.connectorInactive,
                  ]}
                />
              )}

              {/* Circle with Gradient */}
              <View
                style={[
                  styles.circleWrapper,
                  isActive && styles.circleActive,
                  isCompleted && styles.circleCompleted,
                  isInactive && styles.circleInactive,
                ]}
              >
                <LinearGradient
                  colors={
                    isActive
                      ? ['#FFFFFF', '#F0F0F0'] // White Gradient
                      : isCompleted
                      ? ['#32D583', '#1F9B5E'] // Green Gradient
                      : ['#3A3A3A', '#2A2A2A'] // Dark Grey (Inactive)
                  }
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.circleContent}
                >
                  {isCompleted ? (
                    <Ionicons name="checkmark" size={20} color="#FFFFFF" style={styles.completedCheck} />
                  ) : isActive ? (
                    <Text style={styles.activeStepNumber}>{stepNumber}</Text>
                  ) : (
                    <Text style={styles.inactiveStepNumber}>{stepNumber}</Text>
                  )}
                </LinearGradient>
              </View>

              {/* Step Label */}
              <Text
                style={[
                  styles.stepLabel,
                  isActive && styles.stepLabelActive,
                  isCompleted && styles.stepLabelCompleted,
                  isInactive && styles.stepLabelInactive,
                ]}
              >
                {label}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

