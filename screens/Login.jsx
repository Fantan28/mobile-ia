import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Lock, User } from "react-native-feather";
import Button from "../components/Button";
import TextField from "../components/TextField";
// hook  TextField from "../components/TextField";
// write all screens ui. test with up navigation
// add reactness
// animations?
export default function Login() {
  return (
    <SafeAreaView>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "700",
          color: "black",
          marginBottom: 28,
        }}
      >
        Sign in to start shopping
      </Text>

      <View>
        <TextField placeholder="Username or Email" Icon={User} />
        <TextField placeholder="Password" isPassword Icon={Lock} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            marginBottom: 28,
          }}
        >
          <Text>Forgot password</Text>
        </View>
        <Button text="Login" handlePress={() => {}} />
      </View>
    </SafeAreaView>
  );
}
