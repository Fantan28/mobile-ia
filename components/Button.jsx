import React from "react";
import {
  Platform,
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import colors from "../constants/colors";
import fonts from "../constants/fonts";

const Button = ({ text, handlePress }) => {
  const BtnComponent =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <BtnComponent onPress={handlePress}>
      <View
        style={{
          backgroundColor: colors.primary,
          borderRadius: 8,
          alignItems: "center",
          padding: 16,
        }}
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
      </View>
    </BtnComponent>
  );
};

export default Button;
