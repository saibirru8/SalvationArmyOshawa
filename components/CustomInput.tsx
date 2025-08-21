import { View, Text, TextInput } from "react-native";
import { CustomInputProps } from "@/type";
import { useState } from "react";

const CustomInput = ({
  placeholder = "Enter text",
  value,
  onChangeText,
  label,
  secureTextEntry = false,
}: CustomInputProps) => {
  const [isFocused, setFocused] = useState(false);
  return (
    <View className={"w-full my-2"}>
      <Text className={"text-base text-start w-full text-gray-500 pl-2"}>
        {label}
      </Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
        placeholderTextColor="#888"
        className={`rounded-lg w-full p-3 text-base text-dark-100 border-b leading-5 ${isFocused ? "border-black" : "border-gray-600"}`}
      />
    </View>
  );
};

export default CustomInput;
