import React from "react";
import { TextInput, View } from "react-native";
import colors from "../constants/colors";
import fonts from "../constants/fonts";

const TextField = ({ Icon, ...props }) => {
  return (
    <View
      style={{
        borderWidth: 1,
        padding: 16,
        borderRadius: 8,
        borderColor: colors.grey,
        marginBottom: 28,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.white,
      }}
    >
      {Icon && (
        <Icon
          stroke={colors.grey}
          height={16}
          width={16}
          style={{ marginRight: 8 }}
        />
      )}
      <TextInput
        style={{
          fontFamily: fonts.inter_500,
          fontSize: 16,
          flexGrow: 1,
        }}
        placeholderTextColor={colors.grey}
        selectionColor={colors.primary}
        {...props}
      />
    </View>
  );
};

export default TextField;
