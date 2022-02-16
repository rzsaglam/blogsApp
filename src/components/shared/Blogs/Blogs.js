import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import styles from "./Blogs.style";

const Blogs = ({ item, handleDelete, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(item)}>
      <View style={styles.header}>
        <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity onPress={() => handleDelete(item.id)}>
          <AntDesign name="delete" size={15} color={"red"} />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text style={styles.text} numberOfLines={1}>
          {item.blogText}
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.author}>{item.author}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Blogs;
