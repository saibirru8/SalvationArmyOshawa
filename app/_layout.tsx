import { Stack } from "expo-router";
import "react-native-reanimated";
import { StatusBar } from "react-native";
import "../globals.css";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
