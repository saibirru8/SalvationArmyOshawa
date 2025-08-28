import {
  View,
  Text,
  Alert,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import { useState, useEffect, ReactNode } from "react";
import React from "react";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import { Link, Redirect, router } from "expo-router";
import { supabase } from "@/services/supabase";
import { images } from "@/constants";
import { useAuth } from "@/utils/authState";
import { AuthError } from "@supabase/supabase-js";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

    async function handleSignIn() {
        const { email, password } = form;
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (error) setError(error.message);
        console.log(data.session);
        if (data.session) {
            return router.push("/");
        }
    }

  return (
    <>
      <View>
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
              { error && <Text className={"text-red-600 font-normal pl-2"}>{error}</Text>}
          <CustomButton
            title="Sign In"
            isLoading={isSubmitting}
            onPress={handleSignIn}
            textStyle="justify-center items-center"
          />
          <View className="flex justify-center mt-1 flex-row gap-2">
            <Text className="text-lg text-gray-500">
              Don't have an account?
            </Text>
            <Link
              className="text-lg font-bold"
              href={"/sign-up"}
            >
              Sign Up
            </Link>
          </View>
        </View>
      </View>
    </>
  );
};
export default SignIn;
