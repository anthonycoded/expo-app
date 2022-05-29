import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import { config } from "../../config/Config";
import { theme } from "../../config/Theme";
import { setStatusBarStyle, StatusBar } from "expo-status-bar";
import GoBack from "./GoBack";

const logoUri = require("../../../assets/icon.png");

const Header = () => {
  setStatusBarStyle("dark");
  return (
    <View styles={styles.container}>
      <StatusBar color="black"></StatusBar>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            width: config.wp("35%"),
            fontWeight: "bold",
            fontSize: 22,
            color: theme.colors.primary,
          }}
        >
          Bumbaawt!
        </Text>
        {/* <Image
          style={{
            width: 10,
            height: config.wp("10%"),
            padding: 21,
          }}
          source={logoUri}
          resizeMode={"contain"}
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Header;
