import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import DrawerNavigation from "./DrawerNavigation";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Drawer"
          screenOptions={{
            headerStyle: {
              backgroundColor: "white",
            },
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigation}
            options={{
              headerBackVisible: false,
            }}
          ></Stack.Screen>

          <Stack.Screen name="Auth" component={AuthNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigation;
