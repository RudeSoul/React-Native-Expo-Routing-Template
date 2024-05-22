import { View, Text, Button } from "react-native";
import React from "react";
import { Tabs, router } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="feed"
        options={{
          tabBarIcon: () => <Feather name="home" size={24} color="black" />,
          tabBarLabel: "feed",
          headerTitle: "feed",
          headerRight: () => (
            <Button onPress={() => router.push("feed/new")} title="Add New" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: () => <AntDesign name="user" size={24} color="black" />,
          tabBarLabel: "Profile",
          headerTitle: "Profile",
        }}
      />
    </Tabs>
  );
}
