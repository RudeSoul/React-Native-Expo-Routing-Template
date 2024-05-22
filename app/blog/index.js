import React from "react";
import { View, Text, Button } from "react-native";
import { Link, useRouter } from "expo-router";

export default function Page() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>Blog Page</Text>
      <Button
        onPress={() => router.push("/blog/1")}
        title="Go to Blog 1"
      ></Button>
      <Button
        onPress={() => router.push("/blog/2?author=jane")}
        title="Go to Blog 2"
      ></Button>
      <Button
        onPress={() => router.push("/blog/3")}
        title="Go to Blog 3"
      ></Button>
      <Link
        href={{
          pathname: "blog/4",
          params: { author: "pra" },
        }}
      >
        <Text>Go to Blog 4</Text>
      </Link>
      <Button onPress={() => router.back()} title="Go Back"></Button>
    </View>
  );
}
