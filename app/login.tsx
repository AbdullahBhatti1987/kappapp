import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { loginUser } from '@/api.js';
import API from '../api'
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  // const handleLogin = async () => {
  //   setError('');
  //   try {
  //     const data = await loginUser(email, password);
  //     await AsyncStorage.setItem('token', data.token);
  //     // Optionally save user info as well
  //     // await AsyncStorage.setItem('user', JSON.stringify(data.user));
  //     alert('Login successful!');
  //     // Navigate to your app home/dashboard screen here
  //   } catch (err) {
  //     setError(err.message || 'Login failed');
  //   }
  // };


// const handleLogin = async () => {
//   try {
//     const res = await API.post('/auth/login', {
//       email: 'test@example.com',
//       password: '123456',
//     })
//     console.log(res.data)
//   } catch (error) {
//     console.error(error)
//   }
// }

const handleLogin = async () => {
  setError(''); // clear previous error

  try {
    const res = await API.post('/auth/login', {
      email,
      password,
    });

    const { token, user } = res.data;

    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('user', JSON.stringify(user));

    alert('Login successful!');
    // navigation.navigate('Home'); // if you use navigation
    router.replace('(tabs)');


  } catch (err) {
    console.error('Login error:', err);
    setError(err?.response?.data?.message || 'Login failed');
  }
};


  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      {!!error && <Text style={styles.error}>{error}</Text>}
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', padding: 20 },
  input: { borderWidth:1, borderColor:'#ccc', marginBottom:15, padding:10, borderRadius:5 },
  error: { color:'red', marginBottom: 10 }
});
