import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { config } from "../config/Config";
import { theme } from "../config/Theme";

import HomeNavigator from "./HomeNavigator";
import Header from "../components/ui/Header";
import StoreNavigator from "./StoreNavigator";
import ExploreNavigator from "./ExploreNavigator";
import CartButton from "../components/ui/CartButton";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ navigation }) => ({
          activeTintColor: theme.colors.primary,
          activeBackgroundColor: theme.colors.primary,
          inactiveTintColor: theme.colors.inActive,
          tabStyle: {
            backgroundColor: "#FFFFFF",
          },
          tabBarStyle: {
            position: "absolute",
            justifyContent: "center",
            height: config.hp("10%"),
          },
          labelStyle: {
            fontSize: config.hp("1.75%"),
          },
          keyboardHidesTabBar: true,
          headerShown: true,
          headerRight: () => {
            return <CartButton navigation={navigation} />;
          },
        })}
      >
        <Tab.Screen
          name="homeTab"
          component={HomeNavigator}
          options={{
            headerTitle: (props) => <Header {...props} />,
            headerTitleAlign: "center",
            headerShown: true,
            headerBackVisible: false,
            tabBarLabel: ({ focused, color }) => (
              <Text
                style={{
                  color: focused ? theme.colors.primary : theme.colors.inActive,
                  fontSize: 14,
                }}
              >
                Home
              </Text>
            ),
            tabBarColor: theme.colors.primary,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="home-outline"
                size={focused ? 24 : 22}
                color={focused ? theme.colors.primary : theme.colors.inActive}
                backgroundColor={focused ? theme.colors.primary : "none"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreNavigator}
          options={({ navigation }) => ({
            headerTitle: (props) => <Header {...props} />,
            headerTitleAlign: "center",
            headerShown: true,
            headerBackVisible: false,
            tabBarLabel: ({ focused, color }) => (
              <Text
                style={{
                  color: focused ? theme.colors.primary : theme.colors.inActive,
                  fontSize: 14,
                }}
              >
                Search
              </Text>
            ),
            tabBarColor: theme.colors.primary,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="search"
                size={24}
                color={focused ? theme.colors.primary : theme.colors.inActive}
              />
            ),
          })}
        />
        <Tab.Screen
          name="cart"
          component={StoreNavigator}
          options={{
            headerTitle: (props) => <Header {...props} />,
            headerTitleAlign: "center",
            headerShown: true,
            headerBackVisible: false,
            tabBarLabel: ({ focused, color }) => (
              <Text
                style={{
                  color: focused ? theme.colors.primary : theme.colors.inActive,
                  fontSize: 14,
                }}
              >
                Cart
              </Text>
            ),
            tabBarColor: theme.colors.primary,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="cart"
                size={28}
                color={focused ? theme.colors.primary : theme.colors.inActive}
              />
            ),
          }}
        />
        {/*<Tab.Screen
          name="Beats"
          component={BeatScreen}
          options={{
            headerShown: false,
            tabBarLabel: ({ focused, color }) => (
              <Text
                style={{
                  color: focused ? theme.colors.primary : theme.colors.inActive,
                  fontSize: 14,
                }}
              >
                Beats
              </Text>
            ),
            tabBarColor: theme.colors.primary,
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="piano"
                size={24}
                color={focused ? theme.colors.primary : theme.colors.inActive}
              />
            ),
          }}
        /> */}

        <Tab.Screen
          name="blank"
          component={HomeNavigator}
          options={{
            tabBarLabel: "Menu",
            tabBarColor: "black",
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  color: focused ? theme.colors.primary : theme.colors.inActive,
                  fontSize: 14,
                }}
              >
                Menu
              </Text>
            ),
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="menu-outline"
                size={focused ? 24 : 22}
                color={focused ? theme.colors.primary : theme.colors.inActive}
                backgroundColor={focused ? theme.colors.primary : "none"}
              />
            ),
          }}
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              e.preventDefault();
              navigation.openDrawer();
            },
          })}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomTabNavigator;
