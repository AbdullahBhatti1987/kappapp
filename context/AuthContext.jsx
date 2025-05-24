// import AsyncStorage from '@react-native-async-storage/async-storage'
// import axios from 'axios'
// import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'

// type User = {
//   userId: string
//   name: string
//   email: string
// }

// type AuthContextType = {
//   user: User | null
//   token: string | null
//   login: (email: string, password: string) => Promise<void>
//   logout: () => void
//   register: (name: string, email: string, password: string) => Promise<void>
//   loading: boolean
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined)

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<User | null>(null)
//   const [token, setToken] = useState<string | null>(null)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const loadUser = async () => {
//       const savedToken = await AsyncStorage.getItem('token')
//       if (savedToken) {
//         setToken(savedToken)
//         // Optionally, fetch user data with token here
//       }
//       setLoading(false)
//     }
//     loadUser()
//   }, [])

//   const login = async (email: string, password: string) => {
//     const res = await axios.post('http://localhost:5000/api/auth/login', { email, password })
//     setToken(res.data.token)
//     setUser({ userId: res.data.userId, name: res.data.name, email: res.data.email })
//     await AsyncStorage.setItem('token', res.data.token)
//   }

//   const logout = async () => {
//     setUser(null)
//     setToken(null)
//     await AsyncStorage.removeItem('token')
//   }

//   const register = async (name: string, email: string, password: string) => {
//     await axios.post('http://localhost:5000/api/auth/register', { name, email, password })
//   }

//   return (
//     <AuthContext.Provider value={{ user, token, login, logout, register, loading }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export const useAuth = () => {
//   const context = useContext(AuthContext)
//   if (!context) throw new Error('useAuth must be used within AuthProvider')
//   return context
// }


import API from "@/utils/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const savedToken = await AsyncStorage.getItem("token");
      if (savedToken) {
        setToken(savedToken);
        // Optionally fetch user data using the token
        router.replace("/"); // redirect to home or welcome
      } else {
        // router.replace("/auth/login"); // stay on login if not logged in
      }
      setLoading(false);
    };

    loadUser();
  }, []);



  //   const register = async (name, email, password) => {
  //   const res = await API.post("/auth/register", { name, email, password });
  //   try {
  //       const res = await API.post("/auth/register", { name, email, password });
        
  //       if (!res.data) {
  //         throw new Error("No data received from server");
  //       }
    
  //       const { token, user } = res.data;
    
  //       // Validate token and user before storing
  //       if (!token || !user) {
  //         throw new Error("Invalid response from server - missing token or user data");
  //       }
    
  //       await AsyncStorage.multiSet([
  //         ['token', token],
  //         ['user', JSON.stringify(user)]
  //       ]);
    
  //       Alert.alert("Success", "Registration successful!");
  //       router.replace("/(tabs)"); // Note the forward slash
  //     } catch (err) {
  //       console.error("Registration error:", err); // Log the full error for debugging
        
  //       // More specific error handling
  //       let message = "Registration failed.";
  //       if (err.response) {
  //         // Server responded with error status
  //         message = err.response.data?.message || err.response.statusText || message;
  //       } else if (err.request) {
  //         // Request was made but no response
  //         message = "No response from server";
  //       } else {
  //         // Something else happened
  //         message = err.message || message;
  //       }
        
  //       setError(message);
        
  //       // Clear any potentially invalid storage
  //       try {
  //         await AsyncStorage.multiRemove(['token', 'user']);
  //       } catch (storageErr) {
  //         console.error("Failed to clear storage:", storageErr);
  //       }
  //     } finally {
  //       setLoading(false);
  //     }
  // };


  // const login = async (email, password) => {
  //   const res = await API.post("/auth/login", { email, password });
  //   setToken(res.data.token);
  //   setUser({
  //     userId: res.data.userId,
  //     name: res.data.name,
  //     email: res.data.email,
  //   });
  //   await AsyncStorage.setItem("token", res.data.token);
  //   router.replace("/"); // Navigate to home or welcome screen after login
  // };

  // const logout = async () => {
  //   try {
  //     setUser(null);
  //     setToken(null);
  //     await AsyncStorage.removeItem("token");
  //     Alert.alert("Logout successful");
  //     router.replace("/auth/login"); // adjust if needed
  //   } catch (error) {
  //     console.error("Logout failed:", error);
  //   }
  // };



  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        // login,
        // logout,
        // register,
        token,
        setToken,
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
