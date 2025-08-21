import { View, Text, Alert } from "react-native";
import { useState } from "react";
import React from "react";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";

const SignUp = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = () => {
    const { firstname, lastname, email, password } = form;
    if (!firstname || !lastname || !email || !password)
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
        onPress={submitForm}
        textStyle="justify-center items-center"
      />
      <View className="flex justify-center mt-1 flex-row gap-2">
        <Text className="text-lg text-gray-500">Already have an account?</Text>
        <Link
          className="text-lg font-bold"
          href={"/(auth)/sign-in"}
        >
          Sign In
        </Link>
      </View>
    </View>
  );
};
export default SignUp;
