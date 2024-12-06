import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";


export default function Main() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-white">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
