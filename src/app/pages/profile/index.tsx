// app/profile.tsx
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../../context/ThemeContext";
import { getStyles } from "../../../screens/Profile/Profile.styles";

const Profile = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);
  const router = useRouter();

  const menuSections = [
    {
      title: "Listings",
      items: [
        { icon: "add-circle-outline", label: "Create Listings" },
        { icon: "list-outline", label: "My Listings" },
        { icon: "storefront-outline", label: "Become a Dealer" },
      ]
    },
    {
      title: "Features",
      items: [
        { icon: "hammer-outline", label: "Auctions" },
        { icon: "people-outline", label: "Community" },
        { icon: "time-outline", label: "Watch Care" },
        { icon: "time-outline", label: "Watch Authnticate" },
        { icon: "cash-outline", label: "Earn AED 100" },
        { icon: "diamond-outline", label: "Watch It Gold" },
      ]
    },
    {
      title: "Support",
      items: [
        { icon: "help-circle-outline", label: "FAQ" },
        { icon: "document-text-outline", label: "Terms of service" },
        { icon: "shield-outline", label: "User policy" },
      ]
    }
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Profile Header Card */}
      <View style={styles.profileCard}>
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <LinearGradient
              colors={["#FFFFFF", "#E9EEF6"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.avatarGradient}
            >
              <Text style={styles.avatarText}>JD</Text>
            </LinearGradient>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.userName}>Your Name</Text>
            <Text style={styles.userHandle}>@yourname</Text>
          </View>
          <TouchableOpacity style={styles.settingsIcon} onPress={() => router.push("/settings")}>
            <Ionicons name="settings-outline" size={24} color={theme.textSecondary} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Stats Section */}
      <View style={styles.statsCard}>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Listings</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Total Views</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>—</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
        </View>
      </View>

      {/* Menu Sections */}
      {menuSections.map((section) => (
        <View key={section.title} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          {section.items.map((item, itemIndex) => (
            <View key={item.label}>
              <TouchableOpacity 
                style={styles.menuItem} 
                activeOpacity={0.7}
                onPress={() => {
                  if (item.label === "Create Listings") {
                    router.push("/pages/createListing");
                  } 
                  else if (item.label === "My Listings") {
                    router.push("/pages/myListings");
                  } 
                  // else if (item.label === "Become a Dealer") {
                  //   router.push("/become-dealer");
                  // } 
                  else if (item.label === "Auctions") {
                    router.push("/pages/auction");
                  } 
                  // else if (item.label === "Community") {
                  //   router.push("/community");
                  // } 
                  else if (item.label === "Watch Care") {
                    router.push("/pages/watchCare");
                  } 
                  else if (item.label === "Watch Authnticate") {
                      router.push("/pages/watchAuthentication");
                  } 
                  else if (item.label === "Earn AED 100") {
                    router.push("/pages/referral");
                  } 
                  else if (item.label === "Watch It Gold") {
                    router.push("/pages/subscription");
                  } 
                  // else if (item.label === "FAQ") {
                  //   router.push("/faq");
                  // } else if (item.label === "Terms of service") {
                  //   router.push("/terms");
                  // } 
                  else if (item.label === "User policy") {
                    router.push("/pages/privacyPolicy");
                  }
                }}
              >
                <View style={styles.menuItemLeft}>
                  <Ionicons name={item.icon as any} size={20} color={theme.textSecondary} style={styles.menuIcon} />
                  <Text style={styles.menuText}>{item.label}</Text>
                </View>
                <Ionicons name="chevron-forward" size={18} color={theme.textMuted} />
              </TouchableOpacity>
              {itemIndex < section.items.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </View>
      ))}


    {/* Watch It Gold Section */}
    <View style={styles.goldCard}>
      <View style={styles.goldRow}>
        <View style={styles.goldContent}>
          <View style={styles.goldHeader}>
            <Ionicons name="diamond" size={20} color="#D4AF37" />
            <Text style={styles.goldTitle}>Watch It Gold</Text>
          </View>
          <Text style={styles.goldPrice}>· AED 50/month</Text>
          <Text style={styles.goldDescription}>
            Unlimited swipes, priority listings, VIP events & more
          </Text>
        </View>
        <TouchableOpacity style={styles.upgradeButton} activeOpacity={0.7}>
          <LinearGradient
            colors={["#D4AF37", "#F7E7B4", "#D4AF37"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.upgradeGradient}
          >
            <Text style={styles.upgradeText}>Upgrade</Text>
            <Ionicons name="arrow-forward" size={16} color="#0B0E14" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>

      {/* Log Out */}
      <TouchableOpacity style={styles.logoutButton} activeOpacity={0.7}>
        <Ionicons name="log-out-outline" size={20} color="#F04438" />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Profile;


////
////
///