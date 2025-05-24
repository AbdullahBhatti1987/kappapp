import basicColors from '@/content/globalcss';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

function Button({ title, onPress, disabled, loading, style }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.button,
        (disabled || loading) && styles.disabled,
        style,
      ]}
    >
      <Text style={styles.text}>
        {loading ? `${title}...` : title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    height: 45,
    backgroundColor: basicColors.themeColor,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  disabled: {
    opacity: 0.6,
    backgroundColor: '#aaa',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Button;
