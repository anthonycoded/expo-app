import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import AppWrapper from "./AppWrapper";
import { store } from "./src/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <AppWrapper></AppWrapper>
    </Provider>
  );
}
