import { View, Text, Alert } from "react-native";
import { useState } from "react";
import React from "react";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = () => {
    const { email, password } = form;
    if (!email || !password)
      return Alert.alert(
        "Invalid Credentials",
        "Please enter valid email address and password."
      );
    setIsSubmitting(true);
    router.replace("/");
  };

  return (
    <View className="m-4">
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
        title="Sign In"
        isLoading={isSubmitting}
        onPress={submitForm}
        textStyle="justify-center items-center"
      />
      <View className="flex justify-center mt-1 flex-row gap-2">
        <Text className="text-lg text-gray-500">Don't have an account?</Text>
        <Link
          className="text-lg font-bold"
          href={"/(auth)/sign-up"}
        >
          Sign Up
        </Link>
      </View>
    </View>
  );
};
export default SignIn;
