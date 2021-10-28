import React from "react";
import { TextInput, View } from "react-native";

const TextField = ({ placeholder, isPassword, Icon }) => {
  return (
    <View
      style={{
        borderWidth: 1,
        padding: 16,
        borderRadius: 8,
        borderColor: "grey",
        marginBottom: 28,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {Icon && (
        <Icon stroke="grey" height={16} width={16} style={{ marginRight: 8 }} />
      )}
      <TextInput
        style={{ color: "grey", fontSize: 16, flexGrow: 1 }}
        placeholder={placeholder}
        secureTextEntry={isPassword}
      />
    </View>
  );
};

export default TextField;
