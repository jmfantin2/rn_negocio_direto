import React, { useEffect } from "react";

import { View, AsyncStorage, ActivityIndicator } from "react-native";

import { general } from "../../assets/general";

export default function AuthLoadingScreen(props) {
  useEffect(() => {
    async function handleUserNextScreen() {
      const userToken = await AsyncStorage.getItem("@ListApp:userToken");

      props.navigation.navigate(userToken ? "App" : "Auth");
    }

    handleUserNextScreen();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator
        size="large"
        color={general.styles.colors.businessGreen}
      />
    </View>
  );
}

AuthLoadingScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
