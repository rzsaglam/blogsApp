import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

import styles from "./Blogs.style";

const Blogs = ({ item, handleDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDelete(item.id)}
        >
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text style={styles.text}>{item.blogText}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.author}>{item.author}</Text>
      </View>
    </View>
  );
};

export default Blogs;
