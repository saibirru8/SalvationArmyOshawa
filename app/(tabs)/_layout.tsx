import React from "react";
import { Link, Redirect, Tabs } from "expo-router";
import { Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "@/constants/Colors";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "@/utils/authState";

export default function TabLayout() {
  console.log("session data present in tabs");
  return (
      <Tabs
        screenOptions={{
          headerShown: true,
          tabBarActiveTintColor: "grey",
        }}
      >
        <Tabs.Screen
          name="appointments"
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
