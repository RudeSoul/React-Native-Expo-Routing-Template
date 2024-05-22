import React from "react";
import { View, Text, Button } from "react-native";
import { useLocalSearchParams, router, Stack } from "expo-router";

export default function Page() {
  const { id } = useLocalSearchParams();
  return (
    <>
      <Stack.Screen options={{ headerTitle: `Article ${id}` }} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 20 }}>Blog Details {id} </Text>
        <Button onPress={() => router.back()} title="Go Back"></Button>
      </View>
    </>
  );
}
