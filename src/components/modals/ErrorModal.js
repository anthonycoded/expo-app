import React, { useState } from "react";
import { View, Text, StyleSheet, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
//import LottieView from "lottie-react-native";
import { theme } from "../../config/Theme";
import { config } from "../../config/Config";
import { TouchableOpacity } from "react-native-gesture-handler";

const ErrorModal = ({ showErrorModal, closeErrorModal, error, error2 }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={showErrorModal}>
      <View
        style={{ width: "100%", height: "100%", backgroundColor: "#00000099" }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* <LottieView
              loop={false}
              autoPlay
              style={{
                width: 100,
                height: 100,
              }}
              source={require("../../../assets/lottieFiles/warning.json")}
            /> */}
            <View style={{ alignItems: "center" }}>
              <Text style={styles.modalText}>{error}</Text>
              <Text
                style={{ paddingVertical: config.hp("1%"), paddingTop: 24 }}
              >
                {error2}
              </Text>
              <View
                style={{
                  height: "30%",
                  flexDirection: "row",
                  alignItems: "flex-end",
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: theme.colors.primary,
                    height: 50,
                    width: 200,
                    borderRadius: 12,
                  }}
                  onPress={closeErrorModal}
                >
                  <Text style={{ color: "white", fontSize: 20 }}>Continue</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "red",
  },
  modalView: {
    marginHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 35,
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: config.hp("45%"),
    width: config.wp("95%"),
  },
});
export default ErrorModal;
