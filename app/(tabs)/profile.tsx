import { View, TextInput, Text, Alert } from "react-native";
import CustomButton from "@/components/CustomButton";
import { supabase } from "@/services/supabase";
import React, { useState, useEffect } from "react";
import { useAuth } from "@/utils/authState";

import { Redirect, router } from "expo-router";

const Profile = () => {
  const { session } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  console.log("Profile screen - SESSION", session);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!session?.user) return router.push("/(auth)/sign-in");

      const { data, error } = await supabase
        .from("users")
        .select("first_name, last_name, email")
        .eq("id", session.user.id)
        .single();
      if (error) {
        Alert.alert("Error fetching profile", error.message);
      } else if (data) {
        setFirstName(data.first_name);
        setLastName(data.last_name);
        setEmail(data.email);
      }
      setLoading(false);
    };
    fetchProfile();
  }, [session]);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      console.log("signout");
      return router.replace("/sign-in");
    } catch (error) {
      console.log(error);
    }
    return router.push("/");
  };
  return (
    <>
      <View className="p-3 flex-col align-items-center bg-white rounded-xl mx-4 my-2">
        <View className="justify-center items-center ">
          <Text className="justify-center  items-center text-black border-2 border-gray-800 p-1 rounded-xl text-md font-semibold">
            Personal Info
          </Text>
        </View>
        <View className="flex-col my-5 align-items-center justify-around">
          <Text className="align-items-center justify-center text-md py-2">
            First Name
          </Text>
          <TextInput
            className="text-md border-2 border-gray-200 rounded-xl"
            value={firstName}
          />
        </View>
        <View className="flex-col align-items-center justify-around">
          <Text className="align-items-center text-md py-2">Last Name</Text>
          <TextInput
            className="text-md border-2 p-2 border-gray-200 rounded-xl"
            value={lastName}
          />
        </View>
      </View>
      <View className="p-3 flex-col align-items-center bg-white rounded-xl mx-4 my-2">
        <View className="justify-center items-center rounded-xl">
          <Text className="justify-center items-center p-1 rounded-xl border-gray-800 border-2 text-black text-md font-semibold ">
            Contact Info
          </Text>
        </View>
        <View className="flex-col my-5 align-items-center justify-around">
          <Text className="align-items-center justify-center text-md py-2">
            Email Id
          </Text>
          <TextInput
            className="text-md border-2 p-2 border-gray-200 rounded-xl"
            value={email}
          />
        </View>
        <CustomButton
          title="Sign Out"
          onPress={handleSignOut}
          textStyle="justify-center items-center"
        />
      </View>
    </>
  );
};

export default Profile;
