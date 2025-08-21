import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";
import { Redirect, Slot } from "expo-router";
import { images } from "@/constants";

export default function AuthLayout() {
  const isAuthenticated: boolean = false;

  if (isAuthenticated) return <Redirect href="/" />;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        className="bg-white h-full"
        keyboardShouldPersistTaps="handled"
      >
        <View
          className="w-full relative"
          style={{ height: Dimensions.get("screen").height / 2.25 }}
        >
          <ImageBackground
            source={images.saoshawa}
            className="size-full rounded-b-lg"
            resizeMode="contain"
          />
          <Image
            source={images.salogo}
            className="self-center size-48 absolute -bottom-5 z-10 rounded-lg"
          />
        </View>
        <Slot />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
