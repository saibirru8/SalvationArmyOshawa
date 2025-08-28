import { View, TextInput, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { supabase } from "@/services/supabase";

import { Redirect, router } from "expo-router";

const Profile = () => {
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
      <View className="p-3 flex-col align-items-center bg-white rounded-xl">
        <View className="justify-center items-center bg-gray-200 rounded-xl">
          <Text className="justify-center items-center p-2 rounded-xl text-xl font-semibold">
            Personal Info
          </Text>
        </View>
        <View className="flex-col my-5 align-items-center justify-around">
          <Text className="align-items-center justify-center text-xl ">
            First Name
          </Text>
          <TextInput
            className="text-xl border-2 p-2 border-gray-200 rounded-xl"
            value="James"
          />
        </View>
        <View className="flex-col align-items-center justify-around">
          <Text className="align-items-center text-xl">Last Name</Text>
          <TextInput
            className="text-xl border-2 p-2 border-gray-200 rounded-xl"
            value="Bond"
          />
        </View>
      </View>
      <View className="p-3 flex-col align-items-center bg-white rounded-xl">
        <View className="justify-center items-center bg-gray-200 rounded-xl">
          <Text className="justify-center items-center p-2 rounded-xl text-xl font-semibold">
            Contact Info
          </Text>
        </View>
        <View className="flex-col my-5 align-items-center justify-around">
          <Text className="align-items-center justify-center text-xl">
            Email Id
          </Text>
          <TextInput
            className="text-xl border-2 p-2 border-gray-200 rounded-xl"
            value="test@gmail.com"
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
