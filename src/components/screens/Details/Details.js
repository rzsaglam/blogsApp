import React from "react";
import { View, Text } from "react-native";

import styles from "./Details.style";

const Details = ({ route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{route.params.title}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.text}>{route.params.blogText}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.author}>{route.params.author}</Text>
      </View>
    </View>
  );
};

export default Details;
