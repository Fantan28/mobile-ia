import React from "react";
import { StatusBar, Text, View } from "react-native";
import { Lock, User } from "react-native-feather";
import Button from "../components/Button";
import TextField from "../components/TextField";
import { SafeAreaView } from "react-native-safe-area-context";
import fonts from "../constants/fonts";
import colors from "../constants/colors";
import * as SecureStore from "expo-secure-store";
import UserContext from "../UserContext";

export default function LoginScreen() {
  const [usernameOrEmail, setUsernameOrEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { setUser } = React.useContext(UserContext);

  const submitLogin = async () => {
    await SecureStore.setItemAsync("USER", usernameOrEmail);
    setUser(usernameOrEmail);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        backgroundColor: colors.background,
      }}
    >
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <Text
        style={{
          fontSize: 24,
          marginBottom: 28,
          fontFamily: fonts.inter_900,
        }}
      >
        Log in to start shopping
      </Text>

      <View>
        <TextField
          placeholder="Username or Email"
          value={usernameOrEmail}
          onChangeText={setUsernameOrEmail}
          Icon={User}
        />
        <TextField
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          Icon={Lock}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            marginBottom: 28,
          }}
        >
          <Text
            style={{
              fontFamily: fonts.inter_500,
              color: colors.grey,
              textDecorationLine: "underline",
            }}
          >
            Forgot password?
          </Text>
        </View>
        <Button text="Log in" handlePress={submitLogin} />
      </View>
    </SafeAreaView>
  );
}
