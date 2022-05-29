import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Header from "../components/ui/Header";

import GoBack from "../components/ui/GoBack";
import CartButton from "../components/ui/CartButton";
import CartScreen from "../screens/cart/CartScreen";
//import CheckoutScreen from "../screens/checkout/CheckoutScreen";
//import CheckoutSuccess from "../screens/checkout/CheckoutSuccess";

const Stack = createNativeStackNavigator();

const StoreNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={({ navigation }) => ({
          headerTitle: (props) => <Header {...props} />,
          headerTitleAlign: "center",
          headerShown: false,
          headerBackVisible: false,
        })}
      ></Stack.Screen>

      {/* <Stack.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={({ navigation }) => ({
          headerTitle: (props) => <Header {...props} />,
          headerTitleAlign: "center",
          headerShown: true,
          headerBackVisible: false,
          headerLeft: () => {
            return <GoBack navigation={navigation} />;
          },
        })}
      ></Stack.Screen>
      <Stack.Screen
        name="CheckoutSuccess"
        component={CheckoutSuccess}
        options={({ navigation }) => ({
          headerTitle: (props) => <Header {...props} />,
          headerTitleAlign: "center",
          headerShown: true,
          headerBackVisible: false,
        })}
      ></Stack.Screen> */}
    </Stack.Navigator>
  );
};

export default StoreNavigator;
