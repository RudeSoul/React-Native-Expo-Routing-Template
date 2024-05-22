import { Link } from "expo-router";
import React from "react";
import { View, Text, Button } from "react-native";

export default function Page() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>Welcome to Expo Route Template</Text>
      <Link href={"/about"} asChild>
        <Text>Go to About Page</Text>
      </Link>
      <Link href={"/blog"} asChild>
        <Button title="Go to Blog Page" />
      </Link>
      <Link href={"/contact"} asChild>
        <Button title="Go to Contact Page" />
      </Link>
    </View>
  );
}
