import {
    View,
    Text,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Dimensions, StatusBar,
} from "react-native";
import { Redirect, Slot, Stack } from "expo-router";


export default function AuthLayout() {
  return (
      <>
        <StatusBar />
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        className="bg-white h-full"
        keyboardShouldPersistTaps="handled"
      >
        <Slot />
        {/* <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="sign-in" />
          <Stack.Screen name="sign-up" />
        </Stack> */}
      </ScrollView>
    </KeyboardAvoidingView>
      </>
  );
}
