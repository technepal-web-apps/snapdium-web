import { Link, useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import LoginScreen from "./login";

export default function Page() {
  return (
    <View className="flex flex-1">
      <LoginScreen />
    </View>
  )
}