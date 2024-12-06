import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Main() {
  return (
    <View className="flex-1 align-center bg-black">
      <Text className="flex-1 align-center text-white">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}