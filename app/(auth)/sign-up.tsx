import {
  View,
  Text,
  Alert,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import { useState } from "react";
import React from "react";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { images } from "@/constants";
import { supabase } from "@/services/supabase";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthError } from "@supabase/supabase-js";

const SignUp = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [signUpError, setSignUpError] = useState<AuthError | null>(null);
  const [insertError, setInsertError] = useState<AuthError | null>(null);

  const handleSignUp = async () => {
    const { firstname, lastname, email, password } = form;
    if (!firstname || !lastname || !email || !password) {
      return Alert.alert(
        "Invalid Information",
        "Please provide the information for all fields to sign up."
      );
    }
    setIsSubmitting(true);
    console.log(firstname, lastname, email, password);
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    console.log("SIGN UP DATA USER ID DETAILS: ", data.user?.id);
    if (error) {
      setSignUpError(error);
      Alert.alert("Sign Up Failed", error.message, [
        { text: "OK", style: "default" },
      ]);
      console.log(signUpError);
      return router.push("/(auth)/sign-in");
    }
    const user = data.user;
    const { error: errorInsert } = await supabase.from("users").insert([
      {
        id: user?.id,
        first_name: firstname,
        last_name: lastname,
        email: email,
        created_at: new Date(),
      },
    ]);
    if (errorInsert) {
      setInsertError(errorInsert);
      Alert.alert("Account Creation Failed", errorInsert.message, [
        { text: "OK", style: "default" },
      ]);
      console.log(insertError);
      return router.push("/(auth)/sign-in");
    }
    Alert.alert("Success", "Check your inbox to complete email verification");
    return router.push("/(auth)/sign-in");
  };

  return (
    <SafeAreaView>
      <View
        className="w-full relative h-2/5"
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
      <View className="m-4">
        <CustomInput
          label={"First Name"}
          value={form.firstname}
          placeholder={"Enter First Name"}
          onChangeText={(text) => setForm({ ...form, firstname: text })}
        />
        <CustomInput
          label={"Last Name"}
          value={form.lastname}
          placeholder={"Enter Last Name"}
          onChangeText={(text) => setForm({ ...form, lastname: text })}
        />
        <CustomInput
          label={"Email"}
          value={form.email}
          placeholder={"Enter email"}
          onChangeText={(text) => setForm({ ...form, email: text })}
          keyboardType={"email-address"}
        />
        <CustomInput
          label={"Password"}
          value={form.password}
          placeholder={"Enter password"}
          onChangeText={(text) => setForm({ ...form, password: text })}
          secureTextEntry={true}
        />
        <CustomButton
          title="Sign Up"
          isLoading={isSubmitting}
          onPress={handleSignUp}
          textStyle="justify-center items-center"
        />
        <View className="flex justify-center mt-1 flex-row gap-2">
          <Text className="text-lg text-gray-500">
            Already have an account?
          </Text>
          <Link
            className="text-lg font-bold"
            href="/(auth)/sign-in"
            asChild
          >
            <Text>Sign In</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SignUp;
