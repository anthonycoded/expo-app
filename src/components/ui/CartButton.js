import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { theme } from "../../config/Theme";
import { CartLength } from "../../utils/cart";

const CartButton = ({ navigation }) => {
  const cartLength = CartLength();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Cart")}
      style={{ paddingHorizontal: 8, marginRight: 20 }}
    >
      <Ionicons name="cart" size={32} color={theme.colors.primary} />
      <Text
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          fontSize: 18,
        }}
      >
        {cartLength}
      </Text>
    </TouchableOpacity>
  );
};

export default CartButton;
