// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import React, { useState } from 'react';
// // import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
// // // import { loginUser } from '@/api.js';
// // import API from '@/utils/api';
// // import { useRouter } from 'expo-router';

// // export default function LoginScreen() {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');

// //   const router = useRouter();

// //   // const handleLogin = async () => {
// //   //   setError('');
// //   //   try {
// //   //     const data = await loginUser(email, password);
// //   //     await AsyncStorage.setItem('token', data.token);
// //   //     // Optionally save user info as well
// //   //     // await AsyncStorage.setItem('user', JSON.stringify(data.user));
// //   //     alert('Login successful!');
// //   //     // Navigate to your app home/dashboard screen here
// //   //   } catch (err) {
// //   //     setError(err.message || 'Login failed');
// //   //   }
// //   // };

// // // const handleLogin = async () => {
// // //   try {
// // //     const res = await API.post('/auth/login', {
// // //       email: 'test@example.com',
// // //       password: '123456',
// // //     })
// // //     console.log(res.data)
// // //   } catch (error) {
// // //     console.error(error)
// // //   }
// // // }

// // const handleLogin = async () => {
// //   setError(''); // clear previous error

// //   try {
// //     const res = await API.post('/auth/login', {
// //       email,
// //       password,
// //     });

// //     const { token, user } = res.data;

// //     await AsyncStorage.setItem('token', token);
// //     await AsyncStorage.setItem('user', JSON.stringify(user));

// //     alert('Login successful!');
// //     // navigation.navigate('Home'); // if you use navigation
// //     router.replace('(tabs)');

// //   } catch (err) {
// //     console.error('Login error:', err);
// //     setError(err?.response?.data?.message || 'Login failed');
// //   }
// // };

// //   return (
// //     <View style={styles.container}>
// //       <TextInput
// //         placeholder="Email"
// //         value={email}
// //         onChangeText={setEmail}
// //         autoCapitalize="none"
// //         keyboardType="email-address"
// //         style={styles.input}
// //       />
// //       <TextInput
// //         placeholder="Password"
// //         value={password}
// //         onChangeText={setPassword}
// //         secureTextEntry
// //         style={styles.input}
// //       />
// //       {!!error && <Text style={styles.error}>{error}</Text>}
// //       <Button title="Login" onPress={handleLogin} />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: { flex:1, justifyContent:'center', padding: 20 },
// //   input: { borderWidth:1, borderColor:'#ccc', marginBottom:15, padding:10, borderRadius:5 },
// //   error: { color:'red', marginBottom: 10 }
// // });

// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet, Text, Alert, Platform } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useRouter } from 'expo-router';
// import API from '@/utils/api';

// export default function LoginScreen() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const router = useRouter();

//   const handleLogin = async () => {
//     setError('');

//     try {
//       const res = await API.post('/auth/login', {
//         email,
//         password,
//       });

//       const { token, user } = res.data;

//       await AsyncStorage.setItem('token', token);
//       await AsyncStorage.setItem('user', JSON.stringify(user));

//       Alert.alert('Success', 'Login successful!');
//       router.replace('(tabs)'); // 👈 Replace with your app’s home route
//     } catch (err) {
//       console.error('Login error:', err?.message);
//       const message =
//         err?.response?.data?.message ||
//         err?.message ||
//         'Login failed. Check your internet or credentials.';
//       setError(message);
//     }
//   };

//   return (
//     <View style={styles.container}>
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
//       <Button title="Login" onPress={handleLogin} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', padding: 20 },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     marginBottom: 15,
//     padding: 10,
//     borderRadius: 5,
//   },
//   error: {
//     color: 'red',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
// });

// import React, { useState } from "react";
// import {
//   View,
//   TextInput,
//   Button,
//   StyleSheet,
//   Text,
//   Alert,
//   TouchableOpacity,
//   Dimensions,
//   Image,
// } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useRouter, Link } from "expo-router";
// import API from "@/utils/api";

// const { width, height } = Dimensions.get("window");

// export default function LoginScreen() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const router = useRouter();

//   const handleLogin = async () => {
//     setError("");
//     try {
//       const res = await API.post("/auth/login", { email, password });
//       const { token, user } = res.data;

//       await AsyncStorage.setItem("token", token);
//       await AsyncStorage.setItem("user", JSON.stringify(user));

//       Alert.alert("Success", "Login successful!");
//       router.replace("(tabs)");
//     } catch (err) {
//       const message =
//         err?.response?.data?.message || err?.message || "Login failed.";
//       setError(message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//      <View
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
//       <Text style={styles.heading}>Login</Text>
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
//       <Button title="Login" onPress={handleLogin} />
//       <View style={styles.linkRow}>
//         <Text>Don't have an account? </Text>
//         <Link href="/auth/register" style={styles.link}>
//           Register
//         </Link>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
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
//   StyleSheet,
//   Text,
//   TextInput,
//   View
// } from "react-native";

// const { width, height } = Dimensions.get("window");

// export default function LoginScreen() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const handleLogin = async () => {
//     setError("");
//     setLoading(true);
//     try {
//       const res = await API.post("/auth/login", { email, password });
//       const { token, user } = res.data;

//       await AsyncStorage.setItem("token", token);
//       await AsyncStorage.setItem("user", JSON.stringify(user));

//       Alert.alert("Success", "Login successful!");
//       router.replace("(tabs)");
//     } catch (err) {
//       const message =
//         err?.response?.data?.message || err?.message || "Login failed.";
//       setError(message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Logo */}
//       <View style={styles.logoContainer}>
//         <Image
//           source={require("@/assets/images/kure.png")}
//           style={styles.logo}
//         />
//       </View>

//       <Text style={styles.heading}>Login</Text>

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

//       {/* Login Button
//       <TouchableOpacity
//         onPress={handleLogin}
//         disabled={loading}
//         style={[styles.button, loading && { backgroundColor: "#aaa" }]}
//       >
//         <Text style={styles.buttonText}>{loading ? "Login..." : "Login"}</Text>
//       </TouchableOpacity> */}

//       <Button
//         title="Login"
//         onPress={handleLogin}
//         disabled={false} // optional
//         loading={loading}
//       />
//       {/* Register Link */}
//       <View style={styles.linkRow}>
//         <Text>Don't have an account? </Text>
//         <Link href="/auth/register" style={styles.link}>
//           Register
//         </Link>
//       </View>

//       {/* Loading Modal */}
//       <Modal visible={loading} transparent animationType="fade">
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <ActivityIndicator size="large" color="#000" />
//             <Text style={{ marginTop: 10 }}>Loading...</Text>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
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
//   button: {
//     backgroundColor: "black",
//     padding: 15,
//     borderRadius: 8,
//     alignItems: "center",
//     marginTop: 10,
//   },
//   buttonText: { color: "white", fontWeight: "bold" },
//   error: { color: "red", marginBottom: 10, textAlign: "center" },
//   linkRow: { flexDirection: "row", marginTop: 10, justifyContent: "center" },
//   link: { color: "blue" },

//   logoContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 40,
//   },
//   logo: {
//     width: width / 3,
//     height: height / 6,
//     resizeMode: "contain",
//   },

//   modalOverlay: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(0,0,0,0.4)",
//   },
//   modalContent: {
//     backgroundColor: "#fff",
//     padding: 25,
//     borderRadius: 10,
//     alignItems: "center",
//   },
// });

import Button from "@/components/Button";
import LoadingModal from "@/components/LoadingModal";
import API from "@/utils/api";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link, useRouter } from "expo-router";
import React, { useContext, useRef, useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View
} from "react-native";
import basicColors from "@/content/globalcss";
import { AuthContext } from "@/context/AuthContext";


const { width, height } = Dimensions.get("window");

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();

    const {setUser, setToken, loading, setLoading} = useContext(AuthContext)
  
  const handleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      const res = await API.post("/auth/login", { email, password });
      const { token, user } = res.data;

      if (!token || !user) {
        throw new Error("User not found or invalid login.");
      }
      await setToken(token, user); // ✅ recommended
      Alert.alert("Success", "Login successful!");
      router.replace("(tabs)");
    } catch (err) {
      const message =
        err?.response?.data?.message || err?.message || "Login failed.";
      setError(message);

      await clearAuthData(); // ✅ remove anything possibly stored
    } finally {
      setLoading(false);
    }
  };

const handleBack = () => {
    router.replace('/welcome'); 
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
            <Text style={styles.heading}>Login</Text>

            {/* Form Inputs */}
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
            <TextInput
              ref={passwordRef}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={[styles.input, passwordFocused && styles.inputFocused]}
              returnKeyType="done"
              onSubmitEditing={handleLogin}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
            />

            {!!error && <Text style={styles.error}>{error}</Text>}

            <Button
              title="Login"
              onPress={handleLogin}
              disabled={false}
              loading={loading}
            />

            {/* Register Link */}
            <View style={styles.linkRow}>
              <Text>Don't have an account? </Text>
              <Link href="/auth/register" style={styles.link}>
                Register
              </Link>
            </View>

            {/* Loading Modal */}
            <LoadingModal visible={loading} message="Logging in..." />
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
  backButton:{
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
  logo: {
    width: width / 3,
    height: height / 6,
    resizeMode: "contain",
  },
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

export default LoginScreen;
