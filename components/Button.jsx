import React from "react";
import { TouchableOpacity, Text } from "react-native";

const Button = ({ text, handlePress }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#fb5151",
        borderRadius: 8,
        alignItems: "center",
        padding: 16,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: 18,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
