import React from "react";
import { Pressable, Text } from "react-native";
import colors from "../constants/colors";
import fonts from "../constants/fonts";

const Button = ({ text, handlePress }) => {
  return (
    <Pressable
      style={{
        backgroundColor: colors.primary,
        borderRadius: 8,
        alignItems: "center",
        padding: 16,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          color: colors.white,
          fontFamily: fonts.inter_500,
          fontSize: 18,
        }}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default Button;
