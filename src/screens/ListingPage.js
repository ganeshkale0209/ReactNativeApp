import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  StyleSheet,
  Alert,
} from "react-native";
import { getAuth, signOut } from "firebase/auth";
import { Ionicons } from "@expo/vector-icons";

const auth = getAuth();

const ListingPage = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    if (loading) return; // Prevent multiple fetch calls
    setLoading(true);

    try {
      const postRes = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      const postData = await postRes.json();

      const photoRes = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${page}`
      );
      const photoData = await photoRes.json();

      const combinedData = postData.map((post, index) => ({
        ...post,
        thumbnailUrl: photoData[index]?.thumbnailUrl || "",
      }));

      setPosts((prevPosts) => [...prevPosts, ...combinedData]); // Append new posts
      setPage(page + 1); // Update page number for next fetch
    } catch (error) {
      console.error("Error fetching posts:", error);
    }

    setLoading(false);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.replace("Login");
    } catch (error) {
      Alert.alert("Error", "Failed to log out. Please try again.");
    }
  };

  const renderFooter = () =>
    loading ? (
      <ActivityIndicator size="large" color="#0DD3C5" style={{ marginVertical: 20 }} />
    ) : null;

  return (
    <View style={styles.container}>
      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={24} color="white" />
      </TouchableOpacity>

      {/* Post List */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("DetailsPage", { item })}
          >
            <Image source={{ uri: item.thumbnailUrl }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description} numberOfLines={2}>
                {item.body}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        onEndReached={fetchPosts} // Load more data when reaching bottom
        onEndReachedThreshold={0.5} // Trigger fetching earlier
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 10,
  },
  logoutButton: {
    position: "absolute",
    top: 40,
    right: 20,
    backgroundColor: "#FF5733",
    padding: 10,
    borderRadius: 10,
    zIndex: 1,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  textContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 12,
    color: "#777",
    marginTop: 5,
  },
});

export default ListingPage;
