import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { timerStyles } from './TimerRow.style';

// Convert ISO datetime to remaining seconds
const getRemainingSeconds = (endsAt: string) => {
  const endTime = new Date(endsAt).getTime();
  const now = Date.now();
  const diff = Math.max(0, Math.floor((endTime - now) / 1000));
  return diff;
};

// Convert seconds to timer display format
const formatSecondsToTimerData = (totalSeconds: number) => {
  const days = Math.floor(totalSeconds / (24 * 60 * 60));
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
  const mins = Math.floor((totalSeconds % (60 * 60)) / 60);
  const secs = totalSeconds % 60;

  const pad = (num: number) => num.toString().padStart(2, '0');

  return [
    { num: pad(days), label: 'DAYS' },
    { num: pad(hours), label: 'HRS' },
    { num: pad(mins), label: 'MIN' },
    { num: pad(secs), label: 'SEC' },
  ];
};

export default function TimerRow({ endsAt }: { endsAt?: string }) {
  // Agar endsAt nahi hai, toh future date use karein
  const [remainingSeconds, setRemainingSeconds] = useState(() =>
    getRemainingSeconds(endsAt || '2027-01-01T00:00:00')
  );

  useEffect(() => {
    // Agar endsAt change ho, toh timer reset karein
    if (endsAt) {
      setRemainingSeconds(getRemainingSeconds(endsAt));
    }

    // Har second countdown
    const interval = setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [endsAt]); // endsAt change hone par effect dobara chale

  const timerData = formatSecondsToTimerData(remainingSeconds);

  return (
    <View style={timerStyles.timerRowContainer}>
      {timerData.map((item, index) => (
        <React.Fragment key={index}>
          <View style={timerStyles.timerBox}>
            <Text style={timerStyles.timerNum}>{item.num}</Text>
            <Text style={timerStyles.timerLabel}>{item.label}</Text>
          </View>
          {index < timerData.length - 1 && (
            <Text style={timerStyles.timerColon}>:</Text>
          )}
        </React.Fragment>
      ))}
    </View>
  );
}

