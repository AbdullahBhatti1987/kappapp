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

// =====================================================================================

import Button from "@/components/Button";
import { Link, useRouter } from "expo-router";
import React, { useContext, useRef, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import API from "@/utils/api";
import { AuthContext } from "@/context/AuthContext";
import basicColors from "@/content/globalcss";
import { setAuthData } from "@/utils/storage";

const { width, height } = Dimensions.get("window");

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const router = useRouter();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  //   const handleRegister = async () => {
  //     setError("");
  //     setNameError("");
  //     setEmailError("");
  //     setPasswordError("");

  //     let valid = true;

  //     if (!name.trim()) {
  //       setNameError("Full name is required");
  //       valid = false;
  //     }

  //     if (!email.trim()) {
  //       setEmailError("Email is required");
  //       valid = false;
  //     } else if (!/\S+@\S+\.\S+/.test(email)) {
  //       setEmailError("Enter a valid email");
  //       valid = false;
  //     }

  //     if (!password.trim()) {
  //       setPasswordError("Password is required");
  //       valid = false;
  //     } else if (password.length < 6) {
  //       setPasswordError("Password must be at least 6 characters");
  //       valid = false;
  //     }

  //     if (!valid) return;

  //     setLoading(true);

  //    try {
  //   const res = await API.post("/auth/register", { name, email, password });

  //   const { token, user } = res.data;
  //   await AsyncStorage.multiSet([
  //     ["token", token],
  //     ["user", JSON.stringify(user)],
  //   ]);

  //   Alert.alert("Success", "Registration successful!");
  //   router.replace("/(tabs)");
  // } catch (err) {
  //   console.error("Registration error:", err);

  //   // Check if backend sent a specific error message
  //   if (err.response && err.response.status === 400) {
  //     setError(err.response.data.message); // This will be "Email already exists"
  //   } else {
  //     setError("Registration failed. Please try again.");
  //   }
  // } finally {
  //   setLoading(false);
  // }

  //   };

  const { setUser, setToken, setIsLogin } = useContext(AuthContext);

  const handleRegister = async () => {
    setError("");
    setNameError("");
    setEmailError("");
    setPasswordError("");

    let valid = true;

    if (!name.trim()) {
      setNameError("Full name is required");
      valid = false;
    }

    if (!email.trim()) {
      setEmailError("Email is required");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Enter a valid email");
      valid = false;
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      valid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      valid = false;
    }

    if (!valid) return;

    setLoading(true);

    try {
      const res = await API.post("/auth/register", { name, email, password });

      const { token, user } = res.data;
      if (!token || !user) throw new Error("Invalid response");

      await setAuthData(token, user);
      setUser(user);
      setToken(token);
      setIsLogin(true);

      Alert.alert("Success", "Registration successful!");
      router.replace("/(tabs)");
    } catch (err) {
      if (err.response?.status === 400 && err.response.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };
  const handleBack = () => {
    router.replace("/welcome");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.mainContainer}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
      <View>
        <MaterialIcons
          name="arrow-back"
          onPress={handleBack}
          style={styles.backButton}
          size={28}
          color="black"
        />
      </View>
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
              style={[styles.input, nameFocused && styles.inputFocused]}
              returnKeyType="next"
              onSubmitEditing={() => emailRef.current.focus()}
              blurOnSubmit={false}
              onFocus={() => setNameFocused(true)}
              onBlur={() => setNameFocused(false)}
            />
            {nameError ? <Text style={styles.error}>{nameError}</Text> : null}

            <TextInput
              ref={emailRef}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              style={[styles.input, emailFocused && styles.inputFocused]}
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              blurOnSubmit={false}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
            />
            {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

            <TextInput
              ref={passwordRef}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={[styles.input, passwordFocused && styles.inputFocused]}
              returnKeyType="done"
              onSubmitEditing={handleRegister}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
            />
            {passwordError ? (
              <Text style={styles.error}>{passwordError}</Text>
            ) : null}

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
              {/* {router.replace('/auth/login')} */}
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
  mainContainer: { flex: 1, backgroundColor: "white" },
  scrollContainer: { flexGrow: 1, justifyContent: "center" },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    paddingBottom: 40, // Add extra padding at bottom for keyboard
  },
  backButton: {
    top: 20,
    left: 10,
    padding: 10,
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
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 12, // instead of padding & paddingLeft
    borderRadius: 5,
    backgroundColor: "white",
  },
  inputFocused: {
    borderColor: basicColors.themeColor,
    backgroundColor: "#fff",
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
