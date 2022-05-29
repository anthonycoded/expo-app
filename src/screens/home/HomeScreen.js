import { View, Text, ScrollView } from "react-native";
import React from "react";
import CollectionBanner from "./collection/CollectionBanner";
import { config } from "../../config/Config";
import FeaturedProducts from "./featured/FeaturedProducts";

const HomeScreen = () => {
  return (
    <ScrollView>
      <View
        style={{ width: "100%", paddingBottom: 20, flexDirection: "column" }}
      >
        <CollectionBanner></CollectionBanner>
        <FeaturedProducts></FeaturedProducts>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
