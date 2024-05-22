import { router, useRouter } from "expo-router";
import React from "react";
import { View, Text, Button } from "react-native";

export default function Page() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>New Page</Text>
      <Button onPress={() => router.back()} title="Go Back"></Button>
    </View>
  );
}