import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import { CustomButtonProps } from "@/type";

const CustomButton = ({
  onPress,
  title = "Click Me",
  leftIcon,
  textStyle,
  isLoading = false,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className="flex-center flex-row w-full justify-center items-center my-5 bg-blue-500 rounded-lg py-4">
        {isLoading ? (
          <ActivityIndicator
            size={"small"}
            color={"white"}
          />
        ) : (
          <Text className={`text-white font-bold text-xl ${textStyle}`}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
