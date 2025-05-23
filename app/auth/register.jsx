// import API from '@/utils/api'; // make sure the path is correct
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import React, { useState } from 'react';
// import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

// export default function RegisterScreen() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleRegister = async () => {
//     setError('');
//     try {
//       const res = await API.post('/auth/register', {
//         name,
//         email,
//         password,
//       });

//       const { token, user } = res.data;

//       await AsyncStorage.setItem('token', token);
//       await AsyncStorage.setItem('user', JSON.stringify(user));

//       alert('Registration successful!');
//       // Optionally navigate to home/dashboard
//     } catch (err) {
//       console.error(err);
//       setError(err?.response?.data?.message || 'Registration failed');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         autoCapitalize="none"
//         keyboardType="email-address"
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//         style={styles.input}
//       />
//       {!!error && <Text style={styles.error}>{error}</Text>}
//       <Button title="Register" onPress={handleRegister} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', padding: 20 },
//   input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 15, padding: 10, borderRadius: 5 },
//   error: { color: 'red', marginBottom: 10 },
// });

// import React, { useState } from 'react';
// import {
//   View,
//   TextInput,
//   Button,
//   StyleSheet,
//   Text,
//   Alert,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useRouter, Link } from 'expo-router';
// import API from '@/utils/api';

// export default function RegisterScreen() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [error, setError] = useState('');
//   const router = useRouter();

//   const handleRegister = async () => {
//     setError('');
//     try {
//       const res = await API.post('/auth/register', { name, email, password });
//       const { token, user } = res.data;

//       await AsyncStorage.setItem('token', token);
//       await AsyncStorage.setItem('user', JSON.stringify(user));

//       Alert.alert('Success', 'Registration successful!');
//       router.replace('(tabs)');
//     } catch (err) {
//       const message =
//         err?.response?.data?.message || err?.message || 'Registration failed.';
//       setError(message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Register</Text>
//       <TextInput
//         placeholder="Full Name"
//         value={name}
//         onChangeText={setName}
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         style={styles.input}
//         autoCapitalize="none"
//       />
//       <TextInput
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//         style={styles.input}
//       />
//       {!!error && <Text style={styles.error}>{error}</Text>}
//       <Button title="Register" onPress={handleRegister} />
//       <View style={styles.linkRow}>
//         <Text>Already have an account? </Text>
//         <Link href="/auth/login" style={styles.link}>Login</Link>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', padding: 20 },
//   heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     marginBottom: 15,
//     padding: 10,
//     borderRadius: 5,
//   },
//   error: { color: 'red', marginBottom: 10, textAlign: 'center' },
//   linkRow: { flexDirection: 'row', marginTop: 10, justifyContent: 'center' },
//   link: { color: 'blue' },
// });

// import React, { useState } from 'react';
// import {
//   View,
//   TextInput,
//   Button,
//   StyleSheet,
//   Text,
//   Alert,
//   Dimensions,
//   Image,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useRouter, Link } from 'expo-router';
// import API from '@/utils/api';

// const { width, height } = Dimensions.get("window");

// export default function RegisterScreen() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [error, setError] = useState('');
//   const router = useRouter();

//   const handleRegister = async () => {
//     setError('');
//     try {
//       const res = await API.post('/auth/register', { name, email, password });
//       const { token, user } = res.data;

//       await AsyncStorage.setItem('token', token);
//       await AsyncStorage.setItem('user', JSON.stringify(user));

//       Alert.alert('Success', 'Registration successful!');
//       router.replace('(tabs)');
//     } catch (err) {
//       const message =
//         err?.response?.data?.message || err?.message || 'Registration failed.';
//       setError(message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View
//   style={{
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 40,
//   }}
// >
//   <Image
//     source={require("@/assets/images/kure.png")}
//     style={{
//       width: width / 3,
//       height: height / 6,
//       resizeMode: "contain",
//     }}
//   />
// </View>
//       <Text style={styles.heading}>Register</Text>
//       <TextInput
//         placeholder="Full Name"
//         value={name}
//         onChangeText={setName}
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         style={styles.input}
//         autoCapitalize="none"
//       />
//       <TextInput
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//         style={styles.input}
//       />
//       {!!error && <Text style={styles.error}>{error}</Text>}
//       <Button title="Register" onPress={handleRegister} />
//       <View style={styles.linkRow}>
//         <Text>Already have an account? </Text>
//         <Link href="/auth/login" style={styles.link}>Login</Link>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', padding: 20 },
//   heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     marginBottom: 15,
//     padding: 10,
//     borderRadius: 5,
//   },
//   error: { color: 'red', marginBottom: 10, textAlign: 'center' },
//   linkRow: { flexDirection: 'row', marginTop: 10, justifyContent: 'center' },
//   link: { color: 'blue' },
// });

// import Button from "@/components/Button";
// import API from "@/utils/api";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { Link, useRouter } from "expo-router";
// import React, { useState } from "react";
// import {
//   ActivityIndicator,
//   Alert,
//   Dimensions,
//   Image,
//   Modal,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } from "react-native";

// const { width, height } = Dimensions.get("window");

// export default function RegisterScreen() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const handleRegister = async () => {
//     setError("");
//     setLoading(true);
//     try {
//       const res = await API.post("/auth/register", { name, email, password });
//       const { token, user } = res.data;

//       await AsyncStorage.setItem("token", token);
//       await AsyncStorage.setItem("user", JSON.stringify(user));

//       Alert.alert("Success", "Registration successful!");
//       router.replace("(tabs)");
//     } catch (err) {
//       const message =
//         err?.response?.data?.message || err?.message || "Registration failed.";
//       setError(message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <ScrollView style={styles.mainContainer}>
//       {/* Logo */}
//       <View style={styles.container}>
//         <View
//           style={{
//             justifyContent: "center",
//             alignItems: "center",
//             marginBottom: 40,
//           }}
//         >
//           <Image
//             source={require("@/assets/images/kure.png")}
//             style={{
//               width: width / 3,
//               height: height / 6,
//               resizeMode: "contain",
//             }}
//           />
//         </View>

//         {/* Heading */}
//         <Text style={styles.heading}>Register</Text>

//         {/* Form Inputs */}
//         <TextInput
//           placeholder="Full Name"
//           value={name}
//           onChangeText={setName}
//           style={styles.input}
//         />
//         <TextInput
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           style={styles.input}
//           autoCapitalize="none"
//         />
//         <TextInput
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//           style={styles.input}
//         />
//         {!!error && <Text style={styles.error}>{error}</Text>}

//         <Button
//           title="Register"
//           onPress={handleRegister}
//           disabled={false} // optional
//           loading={loading}
//         />

//         {/* Link */}
//         <View style={styles.linkRow}>
//           <Text>Already have an account? </Text>
//           <Link href="/auth/login" style={styles.link}>
//             Login
//           </Link>
//         </View>

//         {/* Loading Modal */}
//         <Modal visible={loading} transparent animationType="fade">
//           <View style={styles.loadingOverlay}>
//             <View style={styles.loadingBox}>
//               <ActivityIndicator size="large" color="#000" />
//               <Text style={{ marginTop: 10 }}>Loading...</Text>
//             </View>
//           </View>
//         </Modal>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   mainContainer: { flex: 1, justifyContent: "center", padding: 20 },
//   container: { flex: 1, justifyContent: "center", padding: 20 },
//   heading: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     marginBottom: 15,
//     padding: 10,
//     borderRadius: 5,
//   },

//   error: { color: "red", marginBottom: 10, textAlign: "center" },
//   linkRow: { flexDirection: "row", marginTop: 10, justifyContent: "center" },
//   link: { color: "blue" },

//   loadingOverlay: {
//     flex: 1,
//     backgroundColor: "rgba(0,0,0,0.3)",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   loadingBox: {
//     backgroundColor: "white",
//     padding: 20,
//     borderRadius: 10,
//     alignItems: "center",
//   },
// });


import Button from "@/components/Button";
import API from "@/utils/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();


const handleRegister = async () => {
  setError("");
  setLoading(true);
  
  try {
    const res = await API.post("/auth/register", { name, email, password });
    
    if (!res.data) {
      throw new Error("No data received from server");
    }

    const { token, user } = res.data;

    // Validate token and user before storing
    if (!token || !user) {
      throw new Error("Invalid response from server - missing token or user data");
    }

    await AsyncStorage.multiSet([
      ['token', token],
      ['user', JSON.stringify(user)]
    ]);

    Alert.alert("Success", "Registration successful!");
    router.replace("/(tabs)"); // Note the forward slash
  } catch (err) {
    console.error("Registration error:", err); // Log the full error for debugging
    
    // More specific error handling
    let message = "Registration failed.";
    if (err.response) {
      // Server responded with error status
      message = err.response.data?.message || err.response.statusText || message;
    } else if (err.request) {
      // Request was made but no response
      message = "No response from server";
    } else {
      // Something else happened
      message = err.message || message;
    }
    
    setError(message);
    
    // Clear any potentially invalid storage
    try {
      await AsyncStorage.multiRemove(['token', 'user']);
    } catch (storageErr) {
      console.error("Failed to clear storage:", storageErr);
    }
  } finally {
    setLoading(false);
  }
};

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.mainContainer}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          {/* Logo */}
          <View style={styles.container}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 40,
              }}
            >
              <Image
                source={require("@/assets/images/kure.png")}
                style={{
                  width: width / 3,
                  height: height / 6,
                  resizeMode: "contain",
                }}
              />
            </View>

            {/* Heading */}
            <Text style={styles.heading}>Register</Text>

            {/* Form Inputs */}
            <TextInput
              placeholder="Full Name"
              value={name}
              onChangeText={setName}
              style={styles.input}
              returnKeyType="next"
            />
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              style={styles.input}
              autoCapitalize="none"
              returnKeyType="next"
            />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={styles.input}
              returnKeyType="done"
              onSubmitEditing={handleRegister}
            />
            {!!error && <Text style={styles.error}>{error}</Text>}

            <Button
              title="Register"
              onPress={handleRegister}
              disabled={false}
              loading={loading}
            />

            {/* Link */}
            <View style={styles.linkRow}>
              <Text>Already have an account? </Text>
              <Link href="/auth/login" style={styles.link}>
                Login
              </Link>
            </View>

            {/* Loading Modal */}
            <Modal visible={loading} transparent animationType="fade">
              <View style={styles.loadingOverlay}>
                <View style={styles.loadingBox}>
                  <ActivityIndicator size="large" color="#000" />
                  <Text style={{ marginTop: 10 }}>Loading...</Text>
                </View>
              </View>
            </Modal>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
  scrollContainer: { flexGrow: 1, justifyContent: "center" },
  container: { 
    flex: 1,
    justifyContent: "center",
    padding: 20,
    paddingBottom: 40 // Add extra padding at bottom for keyboard
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  error: { color: "red", marginBottom: 10, textAlign: "center" },
  linkRow: { flexDirection: "row", marginTop: 10, justifyContent: "center" },
  link: { color: "blue" },
  loadingOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingBox: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
});