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
import UserContext from "./UserContext";

const Stack = createNativeStackNavigator();

export default function App() {
  const [appReady, setAppReady] = React.useState(false);
  const [user, setUser] = React.useState("");
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
      try {
        // const data = await SecureStore.getItemAsync("USER");
        // if (data) {
        //   setUser(data);
        // }
      } catch (e) {
        console.warn(e);
      } finally {
        setAppReady(fontsLoaded);
      }
    }

    prepare();
  }, []);

  const userContext = React.useMemo(() => ({ user, setUser }), [user, setUser]);

  if (!appReady && !fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <UserContext.Provider value={userContext}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {user ? (
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
      </UserContext.Provider>
    );
  }
}
