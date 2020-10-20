import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";

import Home from "./screens/Home";

import Navigator from "./routes/Drawer";

const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

export default function App() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setLoaded(true)}
      />
    );
  }

  return (
    <Navigator />
  );
}
