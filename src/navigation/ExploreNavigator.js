import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SearchScren from "../screens/search/SearchScreen";
import GoBack from "../components/ui/GoBack";
import CartButton from "../components/ui/CartButton";

const Stack = createNativeStackNavigator();

const ExploreNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerShown: false,
        headerRight: () => {
          return <CartButton navigation={navigation} />;
        },
      })}
      initialRouteName="Search"
    >
      <Stack.Screen
        name="Search"
        component={SearchScren}
        options={({ navigation }) => ({
          headerShown: false,
          headerBackVisible: false,
        })}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default ExploreNavigator;
