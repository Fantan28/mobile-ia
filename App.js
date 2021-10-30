import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen, HomeScreen } from "./screens";
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import * as SecureStore from "expo-secure-store";

const Stack = createNativeStackNavigator();

export default function App() {
  const [appReady, setAppReady] = React.useState(false);
  const [hasToken, setHasToken] = React.useState(false);
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  React.useEffect(() => {
    async function prepare() {
      const usernameOrEmail = await SecureStore.getItemAsync("usernameOrEmail");
      if (usernameOrEmail) {
        setHasToken(true);
      }
      setAppReady(fontsLoaded);
    }

    prepare();
  }, []);

  if (!appReady && !fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {hasToken ? (
            <React.Fragment>
              <Stack.Screen name="Home" component={HomeScreen} />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Stack.Screen name="Login" component={LoginScreen} />
            </React.Fragment>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
