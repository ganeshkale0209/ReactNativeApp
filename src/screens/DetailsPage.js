import React from "react";
import { View, Text, Image } from "react-native";

const DetailsPage = ({ route }) => {
  const { item } = route.params;
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Image source={{ uri: item.thumbnailUrl }} style={{ width: "100%", height: 200 }} />
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.title}</Text>
      <Text>{item.body}</Text>
    </View>
  );
};

export default DetailsPage;
