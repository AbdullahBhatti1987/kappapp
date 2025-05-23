import React, { createContext, useContext, useRef } from 'react';
import { Animated, Dimensions } from 'react-native';

const DrawerContext = createContext();
const SCREEN_WIDTH = Dimensions.get('window').width;

export function DrawerProvider({ children }) {
  const slideAnim = useRef(new Animated.Value(-SCREEN_WIDTH)).current;

  const openDrawer = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const closeDrawer = () => {
    Animated.timing(slideAnim, {
      toValue: -SCREEN_WIDTH,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <DrawerContext.Provider value={{ slideAnim, openDrawer, closeDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
}

export function useDrawer() {
  return useContext(DrawerContext);
}
