// import React, { useContext, CartContext } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";
// import { AuthContext, Ca } from "@/context/AuthContext";
// import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

// const UserProfileScreen = () => {
//   const { user } = useContext(AuthContext);
//   const {
//     cartItems,
//     addToCart,
//     removeFromCart,
//     updateQuantity,
//     getCartTotal,
//     loadCart,
//   } = useContext(CartContext);

//   return (
//     <ScrollView style={styles.container}>
//       {/* User Info */}
//       <View style={styles.profileHeader}>
//         <Image
//           source={{ uri: user?.avatar || "https://via.placeholder.com/150" }}
//           style={styles.avatar}
//         />
//         <View style={styles.userInfo}>
//           <Text style={styles.name}>{user?.name}</Text>
//           <Text style={styles.email}>{user?.email}</Text>
//         </View>
//       </View>

//       {/* Account Summary */}
//       <View style={styles.summaryRow}>
//         <SummaryItem
//           icon="wallet"
//           label="Credit"
//           value={`$${user?.balance || 0}`}
//         />
//         <SummaryItem
//           icon="tag"
//           label="Coupons"
//           value={user?.coupons?.length || 0}
//         />
//         <SummaryItem
//           icon="cart"
//           label="Orders"
//           value={user?.orders?.length || 0}
//         />
//       </View>

//       {/* Account Options */}
//       <View style={styles.section}>
//         <SectionItem icon="mail" label="Messages" />
//         <SectionItem icon="star" label="Reviews" />
//         <SectionItem icon="time" label="History" />
//         <SectionItem icon="storefront" label="Farmiand" />
//         <SectionItem icon="location" label="Address" />
//         <SectionItem icon="heart" label="Following" />
//       </View>
//     </ScrollView>
//   );
// };

// const SummaryItem = ({ icon, label, value }) => (
//   <View style={styles.summaryItem}>
//     <Ionicons name={icon} size={24} color="#007AFF" />
//     <Text style={styles.summaryLabel}>{label}</Text>
//     <Text style={styles.summaryValue}>{value}</Text>
//   </View>
// );

// const SectionItem = ({ icon, label }) => (
//   <TouchableOpacity style={styles.sectionItem}>
//     <Ionicons name={icon} size={20} color="#333" style={styles.sectionIcon} />
//     <Text style={styles.sectionLabel}>{label}</Text>
//     <Ionicons name="chevron-forward" size={20} color="#999" />
//   </TouchableOpacity>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   profileHeader: {
//     flexDirection: "row",
//     padding: 20,
//     alignItems: "center",
//     borderBottomColor: "#eee",
//     borderBottomWidth: 1,
//   },
//   avatar: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     marginRight: 15,
//     backgroundColor: "#ccc",
//   },
//   userInfo: {
//     flex: 1,
//   },
//   name: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   email: {
//     color: "#777",
//     marginTop: 5,
//   },
//   summaryRow: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     paddingVertical: 20,
//     backgroundColor: "#f8f8f8",
//   },
//   summaryItem: {
//     alignItems: "center",
//   },
//   summaryLabel: {
//     marginTop: 5,
//     color: "#555",
//     fontSize: 14,
//   },
//   summaryValue: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#000",
//   },
//   section: {
//     paddingVertical: 10,
//   },
//   sectionItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 20,
//     paddingVertical: 15,
//     borderBottomColor: "#eee",
//     borderBottomWidth: 1,
//   },
//   sectionIcon: {
//     width: 30,
//   },
//   sectionLabel: {
//     flex: 1,
//     marginLeft: 10,
//     fontSize: 16,
//   },
// });

// export default UserProfileScreen;

// import React, { useContext } from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
// import { AuthContext } from '../context/AuthContext';
// import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

// const UserProfileScreen = () => {
//   const { user } = useContext(AuthContext);

//   return (
//     <ScrollView style={styles.container}>
//       {/* User Info */}
//       <View style={styles.profileHeader}>
//         <Image
//           source={{ uri: user?.avatar || 'https://via.placeholder.com/150' }}
//           style={styles.avatar}
//         />
//         <View style={styles.userInfo}>
//           <Text style={styles.name}>{user?.name}</Text>
//           <Text style={styles.email}>{user?.email}</Text>
//         </View>
//       </View>

//       {/* Account Summary */}
//       <View style={styles.summaryRow}>
//         <SummaryItem icon="wallet" label="Credit" value={`$${user?.balance || 0}`} />
//         <SummaryItem icon="tag" label="Coupons" value={user?.coupons?.length || 0} />
//         <SummaryItem icon="cart" label="Orders" value={user?.orders?.length || 0} />
//       </View>

//       {/* Account Options */}
//       <View style={styles.section}>
//         <SectionItem icon="mail" label="Messages" />
//         <SectionItem icon="star" label="Reviews" />
//         <SectionItem icon="time" label="History" />
//         <SectionItem icon="storefront" label="Farmiand" />
//         <SectionItem icon="location" label="Address" />
//         <SectionItem icon="heart" label="Following" />
//       </View>
//     </ScrollView>
//   );
// };

// const SummaryItem = ({ icon, label, value }) => (
//   <View style={styles.summaryItem}>
//     <Ionicons name={icon} size={24} color="#007AFF" />
//     <Text style={styles.summaryLabel}>{label}</Text>
//     <Text style={styles.summaryValue}>{value}</Text>
//   </View>
// );

// const SectionItem = ({ icon, label }) => (
//   <TouchableOpacity style={styles.sectionItem}>
//     <Ionicons name={icon} size={20} color="#333" style={styles.sectionIcon} />
//     <Text style={styles.sectionLabel}>{label}</Text>
//     <Ionicons name="chevron-forward" size={20} color="#999" />
//   </TouchableOpacity>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   profileHeader: {
//     flexDirection: 'row',
//     padding: 20,
//     alignItems: 'center',
//     borderBottomColor: '#eee',
//     borderBottomWidth: 1,
//   },
//   avatar: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     marginRight: 15,
//     backgroundColor: '#ccc',
//   },
//   userInfo: {
//     flex: 1,
//   },
//   name: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   email: {
//     color: '#777',
//     marginTop: 5,
//   },
//   summaryRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingVertical: 20,
//     backgroundColor: '#f8f8f8',
//   },
//   summaryItem: {
//     alignItems: 'center',
//   },
//   summaryLabel: {
//     marginTop: 5,
//     color: '#555',
//     fontSize: 14,
//   },
//   summaryValue: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   section: {
//     paddingVertical: 10,
//   },
//   sectionItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingVertical: 15,
//     borderBottomColor: '#eee',
//     borderBottomWidth: 1,
//   },
//   sectionIcon: {
//     width: 30,
//   },
//   sectionLabel: {
//     flex: 1,
//     marginLeft: 10,
//     fontSize: 16,
//   },
// });

// export default UserProfileScreen;


import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from "@/context/AuthContext";


const Account = () => {
  const { user } = useContext( AuthContext );

  return (
    <ScrollView style={styles.container}>
      {/* User Info */}
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: user?.avatar || 'https://via.placeholder.com/150' }}
          style={styles.avatar}
        />
        <View style={styles.userInfo}>
          <Text style={styles.name}>{user?.name || 'Guest User'}</Text>
          <Text style={styles.email}>{user?.email || 'guest@example.com'}</Text>
        </View>
      </View>

      {/* Account Summary */}
      <View style={styles.summaryRow}>
        <SummaryItem icon="wallet" label="Credit" value={`$${user?.balance || 0}`} />
        <SummaryItem icon="pricetag" label="Coupons" value={user?.coupons?.length || 0} />
        <SummaryItem icon="cart" label="Orders" value={user?.orders?.length || 0} />
      </View>

      {/* Account Options */}
      <View style={styles.section}>
        <SectionItem icon="mail" label="Messages" />
        <SectionItem icon="star" label="Reviews" />
        <SectionItem icon="time" label="History" />
        <SectionItem icon="storefront" label="Farmiand" />
        <SectionItem icon="location" label="Address" />
        <SectionItem icon="heart" label="Following" />
      </View>
    </ScrollView>
  );
};

const SummaryItem = ({ icon, label, value }) => (
  <View style={styles.summaryItem}>
    <Ionicons name={icon} size={24} color="#007AFF" />
    <Text style={styles.summaryLabel}>{label}</Text>
    <Text style={styles.summaryValue}>{value}</Text>
  </View>
);

const SectionItem = ({ icon, label }) => (
  <TouchableOpacity style={styles.sectionItem}>
    <Ionicons name={icon} size={20} color="#333" style={styles.sectionIcon} />
    <Text style={styles.sectionLabel}>{label}</Text>
    <Ionicons name="chevron-forward" size={20} color="#999" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileHeader: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
    backgroundColor: '#ccc',
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  email: {
    color: '#777',
    marginTop: 5,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: '#f8f8f8',
  },
  summaryItem: {
    alignItems: 'center',
  },
  summaryLabel: {
    marginTop: 5,
    color: '#555',
    fontSize: 14,
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  section: {
    paddingVertical: 10,
  },
  sectionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  sectionIcon: {
    width: 30,
  },
  sectionLabel: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
});

export default Account;