import React from "react";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "@/constants/Colors";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "grey",
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Appointments",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "calendar-clear" : "calendar-clear-outline"}
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "bookmark" : "bookmark-outline"}
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "calendar-clear" : "calendar-clear-outline"}
              size={24}
              color="black"
            />
          ),
        }}
      />
    </Tabs>
  );
}
