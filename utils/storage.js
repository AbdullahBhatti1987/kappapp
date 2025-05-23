// utils/storage.js
import AsyncStorage from "@react-native-async-storage/async-storage";

export const setAuthData = async (token, user) => {
  try {
    await AsyncStorage.multiSet([
      ["token", token],
      ["user", JSON.stringify(user)],
    ]);
  } catch (err) {
    console.error("Failed to store auth data", err);
  }
};

export const getAuthData = async () => {
  try {
    const values = await AsyncStorage.multiGet(["token", "user"]);
    const token = values[0][1];
    const user = JSON.parse(values[1][1]);
    return { token, user };
  } catch (err) {
    return { token: null, user: null };
  }
};

export const clearAuthData = async () => {
  try {
    await AsyncStorage.multiRemove(["token", "user"]);
  } catch (err) {
    console.error("Failed to clear auth data", err);
  }
};
