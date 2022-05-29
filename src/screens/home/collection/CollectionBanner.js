import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { config } from "../../../config/Config";

const CollectionBanner = () => {
  return (
    <LinearGradient
      start={0.8}
      end={0.9}
      // Background Linear Gradient
      colors={["#0a84ff", "white"]}
      style={{
        width: "100%",
        height: config.hp("85%"),
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Summer Collection</Text>
    </LinearGradient>
  );
};

export default CollectionBanner;
