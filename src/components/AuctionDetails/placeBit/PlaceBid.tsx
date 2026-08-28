import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { placeBidStyles } from './PlaceBid.style';

export default function PlaceBid({ watchData }: any) {
  const [bidAmount, setBidAmount] = useState('');
  
  const handleQuickAmount = (amount: number) => {
    const current = parseInt(bidAmount) || 0;
    setBidAmount((current + amount).toString());
  };

  const handlePlaceBid = () => {
    if (!bidAmount) {
      alert('Please enter a bid amount!');
      return;
    }
    
    const amount = parseInt(bidAmount);
    if (amount <= parseInt(watchData.currentPrice.replace(/[^0-9]/g, ''))) {
      alert('Your bid must be higher than the current bid!');
      return;
    }
    
    console.log(`Bid placed for ${bidAmount}`);
    alert(`Bid placed successfully for ${bidAmount}!`);
    setBidAmount('');
  };

  return (
    <View style={placeBidStyles.card}>
      <View style={placeBidStyles.inputHeader}>
        <Text style={placeBidStyles.labelSmall}>Current Price</Text>
        <Text style={placeBidStyles.currentPrice}>{watchData.currentPrice}</Text>
      </View>

      <View style={placeBidStyles.quickAmounts}>
        <TouchableOpacity 
          style={placeBidStyles.amountBtn} 
          onPress={() => handleQuickAmount(500)}
        >
          <Text style={placeBidStyles.amountBtnText}>+500</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={placeBidStyles.amountBtn} 
          onPress={() => handleQuickAmount(1000)}
        >
          <Text style={placeBidStyles.amountBtnText}>+1000</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={placeBidStyles.amountBtn} 
          onPress={() => handleQuickAmount(2000)}
        >
          <Text style={placeBidStyles.amountBtnText}>+2000</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={placeBidStyles.input}
        placeholder="Enter bid amount"
        placeholderTextColor="#666"
        keyboardType="numeric"
        value={bidAmount}
        onChangeText={setBidAmount}
      />

      <View style={placeBidStyles.inputWarningRow}>
        <Ionicons name="alert-circle-outline" size={16} color="#fbbf24" />
        <Text style={placeBidStyles.inputWarningText}>
          Current bid is {watchData.currentPrice}. Place a higher bid to win.
        </Text>
      </View>

      <TouchableOpacity 
        style={placeBidStyles.placeBidSubmitBtn} 
        onPress={handlePlaceBid}
        activeOpacity={0.8}
      >
        <Ionicons name="hammer" size={20} color="#000" style={{ marginRight: 8 }} />
        <Text style={placeBidStyles.placeBidSubmitText}>PLACE BID</Text>
      </TouchableOpacity>
    </View>
  );
}

