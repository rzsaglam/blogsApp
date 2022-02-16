import React from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "./Button.style";

const Button = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  title: "Button Title",
  onPress: () => console.log("Button Pressed"),
};

export default Button;
