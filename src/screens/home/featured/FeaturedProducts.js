import { View, Text } from "react-native";
import React from "react";
import { config } from "../../../config/Config";

const FeaturedProducts = () => {
  return (
    <View
      style={{
        paddingBottom: 20,
        height: 300,
        backgroundColor: "red",
        width: "100%",
        paddingHorizontal: 10,
      }}
    >
      <Text>FeaturedProducts</Text>
    </View>
  );
};

export default FeaturedProducts;
