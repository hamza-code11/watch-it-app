import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getTimerInfoStyles } from './TimerInfo.style';

interface Props {
    brand: string;
    name: string;
    reference: string;
    currentBid: number;
    startingBid: number;
    bidders: number;
    endsAt: string;
    onOpenDetails: () => void;
}

const pad = (n: number) => String(n).padStart(2, '0');

export default function TimerInfo({
    brand, name, reference, currentBid, startingBid, bidders, endsAt, onOpenDetails,
}: Props) {
    const { theme } = useTheme();
    const styles = getTimerInfoStyles(theme);

    const [timeLeft, setTimeLeft] = useState(getTimeLeft(endsAt));

    useEffect(() => {
        const t = setInterval(() => setTimeLeft(getTimeLeft(endsAt)), 1000);
        return () => clearInterval(t);
    }, [endsAt]);

    // 👇 Khali string se start — user khud enter karega
    const [bid, setBid] = useState<string>('');

    const adjust = (delta: number) => {
        const current = Number(bid || 0);
        // Agar user ne kuch nahi likha, to currentBid + delta se shuru karo
        const base = current > 0 ? current : currentBid;
        const next = Math.max(currentBid + 1000, base + delta);
        setBid(String(next));
    };

    const handleBidChange = (text: string) => {
        // Sirf numbers allow karo
        const numeric = text.replace(/[^0-9]/g, '');
        setBid(numeric);
    };

    const handlePlaceBid = () => {
        const amount = Number(bid || 0);
        if (amount <= currentBid) {
            // Yahan aap Alert dikha sakte ho: "Bid must be higher than current bid"
            return;
        }
        // TODO: API call to place bid
        console.log('Placing bid:', amount);
    };

    return (
        <View style={styles.container}>
            {/* Brand + Product name + Info icon */}
            <View style={styles.titleRow}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.brand}>{brand}</Text>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.ref}>{reference}</Text>
                </View>
                <TouchableOpacity style={styles.infoBtn} onPress={onOpenDetails}>
                    <Ionicons name="pricetag-outline" size={22} color="#8bbdd9" />
                </TouchableOpacity>
            </View>

            {/* Price row */}
            <View style={styles.priceRow}>
                <View style={styles.priceBlock}>
                    <Text style={styles.priceLabel}>Current Bid</Text>
                    <Text style={styles.priceValue}>AED {currentBid.toLocaleString()}</Text>
                </View>
                <View style={styles.priceBlock}>
                    <Text style={styles.priceLabel}>Starting Bid</Text>
                    <Text style={styles.priceSub}>AED {startingBid.toLocaleString()}</Text>
                </View>
                <View style={styles.priceBlock}>
                    <Text style={styles.priceLabel}>Bidders</Text>
                    <Text style={styles.priceSub}>{bidders}</Text>
                </View>
            </View>

            {/* Countdown */}
            <Text style={styles.endsLabel}>Auction ends in</Text>
            <View style={styles.timerRow}>
                <TimeCell value={pad(timeLeft.days)} label="Days" styles={styles} />
                <TimeCell value={pad(timeLeft.hours)} label="Hours" styles={styles} />
                <TimeCell value={pad(timeLeft.minutes)} label="Minutes" styles={styles} />
                <TimeCell value={pad(timeLeft.seconds)} label="Seconds" styles={styles} />
            </View>

            {/* Your bid */}
            <Text style={styles.yourBidLabel}>Your Bid (AED)</Text>
            <View style={styles.bidRow}>
                <View style={styles.bidInputWrap}>
                    <TextInput
                        style={styles.bidInput}
                        value={bid}
                        onChangeText={handleBidChange}
                        placeholder="Enter amount"
                        placeholderTextColor={theme.textMuted}
                        keyboardType="number-pad"
                        returnKeyType="done"
                    />
                </View>
                <TouchableOpacity style={styles.chip} onPress={() => adjust(1000)}>
                    <Text style={styles.chipText}>+1K</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.chip} onPress={() => adjust(5000)}>
                    <Text style={styles.chipText}>+5K</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.chip} onPress={() => adjust(10000)}>
                    <Text style={styles.chipText}>+10K</Text>
                </TouchableOpacity>
            </View>

            <LinearGradient
                colors={['#FFFFFF', '#F3F4F6', '#E5E7EB']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.placeBidBtn}
            >
                <TouchableOpacity
                    style={styles.placeBidBtnInner}
                    onPress={handlePlaceBid}
                    activeOpacity={0.8}
                >
                    <Text style={styles.placeBidText}>Place Bid</Text>
                </TouchableOpacity>
            </LinearGradient>

            <Text style={styles.trustLine}>
                Secure bidding  •  Verified sellers  •  Authenticity guaranteed
            </Text>
        </View>
    );
}

function TimeCell({ value, label, styles }: any) {
    return (
        <View style={styles.timeCell}>
            <Text style={styles.timeValue}>{value}</Text>
            <Text style={styles.timeLabel}>{label}</Text>
        </View>
    );
}

function getTimeLeft(endsAt: string) {
    const diff = Math.max(0, new Date(endsAt).getTime() - Date.now());
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
}
