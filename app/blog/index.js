import React from "react";
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Page() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>Blog Page</Text>
      <Button onPress={() => router.back()} title="Go Back"></Button>
    </View>
  );
}
